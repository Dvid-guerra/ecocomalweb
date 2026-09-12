/**
 * Contrato compartido entre el formulario (cliente) y la Server Action.
 * Se mantiene fuera del módulo "use server" porque ese archivo solo puede
 * exportar funciones asíncronas.
 */

export const MOTIVOS = [
  "Cotización residencial",
  "Proyecto institucional o licitación",
] as const;

export type Motivo = (typeof MOTIVOS)[number];

export interface ContactoFormValues {
  nombre: string;
  organizacion: string;
  correo: string;
  telefono: string;
  motivo: Motivo | "";
  mensaje: string;
  /**
   * Trampa anti-spam: el campo va oculto en el formulario, así que una persona
   * nunca lo rellena y un bot que completa todo el formulario sí. Se comprueba
   * en el servidor. No se valida como los demás campos —un valor aquí no es un
   * error que corregir— y nunca se muestra ni se envía por correo.
   */
  sitioWeb: string;
}

export type ContactoErrores = Partial<
  Record<keyof ContactoFormValues, string>
>;

export interface ContactoResult {
  ok: boolean;
  mensaje: string;
  errores?: ContactoErrores;
}

export const VALORES_INICIALES: ContactoFormValues = {
  nombre: "",
  organizacion: "",
  correo: "",
  telefono: "",
  motivo: "",
  mensaje: "",
  sitioWeb: "",
};

const CORREO_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Validación única, ejecutada también en el servidor: la validación de
 * react-hook-form es una comodidad de UX, no un límite de confianza.
 */
export function validarContacto(valores: ContactoFormValues): ContactoErrores {
  const errores: ContactoErrores = {};

  if (valores.nombre.trim().length < 2) {
    errores.nombre = "Indica tu nombre completo.";
  }
  if (!CORREO_RE.test(valores.correo.trim())) {
    errores.correo = "Escribe un correo electrónico válido.";
  }
  if (valores.telefono.trim() && valores.telefono.trim().length < 8) {
    errores.telefono = "El teléfono debe tener al menos 8 dígitos.";
  }
  if (!MOTIVOS.includes(valores.motivo as Motivo)) {
    errores.motivo = "Selecciona el motivo de tu consulta.";
  }
  if (valores.mensaje.trim().length < 10) {
    errores.mensaje = "Cuéntanos brevemente qué necesitas (mínimo 10 caracteres).";
  }

  return errores;
}
