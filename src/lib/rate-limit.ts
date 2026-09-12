import "server-only";

/**
 * Límite de envíos por IP para el formulario público.
 *
 * El estado vive en memoria del proceso: es suficiente para frenar el envío
 * repetido de un bot, pero se reinicia con cada despliegue y no se comparte si
 * algún día la app corre en varias instancias. Para el volumen de un formulario
 * de contacto compensa no añadir Redis solo por esto; si el sitio escala a
 * varias instancias, sustituir esta implementación por un almacén compartido.
 */

const VENTANA_MS = 10 * 60 * 1000; // 10 minutos
const MAX_ENVIOS = 3;

/** Marcas de tiempo de los envíos recientes de cada IP. */
const registros = new Map<string, number[]>();

/**
 * Evita que el Map crezca sin control: al pasar de este número de IPs se purgan
 * las entradas ya caducadas.
 */
const LIMITE_ENTRADAS = 5_000;

function purgar(ahora: number): void {
  for (const [ip, marcas] of registros) {
    const vigentes = marcas.filter((marca) => ahora - marca < VENTANA_MS);
    if (vigentes.length === 0) {
      registros.delete(ip);
    } else {
      registros.set(ip, vigentes);
    }
  }
}

export interface ResultadoLimite {
  permitido: boolean;
  /** Segundos que faltan para poder reintentar. Solo si `permitido` es false. */
  esperaSegundos?: number;
}

/**
 * Registra un intento y dice si se permite. Consumir el intento aquí mismo hace
 * que cada llamada cuente, aunque el envío falle después.
 */
export function registrarIntento(ip: string): ResultadoLimite {
  const ahora = Date.now();

  if (registros.size > LIMITE_ENTRADAS) purgar(ahora);

  const previos = registros.get(ip) ?? [];
  const vigentes = previos.filter((marca) => ahora - marca < VENTANA_MS);

  if (vigentes.length >= MAX_ENVIOS) {
    const masAntiguo = Math.min(...vigentes);
    const esperaSegundos = Math.ceil((VENTANA_MS - (ahora - masAntiguo)) / 1000);
    registros.set(ip, vigentes);
    return { permitido: false, esperaSegundos };
  }

  vigentes.push(ahora);
  registros.set(ip, vigentes);
  return { permitido: true };
}
