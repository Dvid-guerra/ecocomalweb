import "server-only";

import nodemailer, { type Transporter } from "nodemailer";
import type { ContactoFormValues } from "@/lib/contacto";

/**
 * Envío de las consultas del formulario por SMTP.
 *
 * Se usa el correo del propio dominio alojado en Hostinger: el remitente debe
 * ser exactamente la cuenta autenticada (SMTP_USER), porque el servidor rechaza
 * cualquier intento de enviar en nombre de otra dirección. El correo de quien
 * escribe viaja en `replyTo`, así responder desde la bandeja le contesta a esa
 * persona y no a la cuenta del sitio.
 */

const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.hostinger.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const CONTACTO_DESTINO = process.env.CONTACTO_DESTINO;

export interface ConfiguracionCorreo {
  host: string;
  port: number;
  user: string;
  password: string;
  destino: string;
}

/**
 * Devuelve la configuración solo si está completa. Si falta una variable no se
 * lanza una excepción: la Server Action necesita distinguir "mal configurado"
 * (culpa nuestra, no del visitante) de "el envío falló".
 */
export function leerConfiguracion(): ConfiguracionCorreo | null {
  if (!SMTP_USER || !SMTP_PASSWORD || !CONTACTO_DESTINO) return null;

  return {
    host: SMTP_HOST,
    port: SMTP_PORT,
    user: SMTP_USER,
    password: SMTP_PASSWORD,
    destino: CONTACTO_DESTINO,
  };
}

// El transporte mantiene un pool de conexiones abiertas; crearlo por cada envío
// obligaría a rehacer el handshake TLS cada vez.
let transporteCache: Transporter | null = null;

function obtenerTransporte(config: ConfiguracionCorreo): Transporter {
  if (!transporteCache) {
    transporteCache = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      // El 465 es TLS implícito; los demás puertos negocian STARTTLS.
      secure: config.port === 465,
      auth: { user: config.user, pass: config.password },
    });
  }
  return transporteCache;
}

/** Los valores llegan de un formulario público y acaban dentro de un HTML. */
function escaparHtml(valor: string): string {
  return valor
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Un salto de línea en la cabecera permitiría inyectar cabeceras arbitrarias
 * (CC, BCC…), así que se eliminan de todo lo que acabe en el asunto.
 */
function limpiarCabecera(valor: string): string {
  return valor.replace(/[\r\n]+/g, " ").trim();
}

function construirCuerpo(valores: ContactoFormValues) {
  const filas: Array<[string, string]> = [
    ["Nombre", valores.nombre.trim()],
    ["Empresa / Institución", valores.organizacion.trim() || "—"],
    ["Correo", valores.correo.trim()],
    ["Teléfono", valores.telefono.trim() || "—"],
    ["Motivo", valores.motivo],
  ];

  const texto = [
    ...filas.map(([etiqueta, valor]) => `${etiqueta}: ${valor}`),
    "",
    "Mensaje:",
    valores.mensaje.trim(),
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#16191c;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:18px">Nueva consulta desde el sitio web</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
        ${filas
          .map(
            ([etiqueta, valor]) => `<tr>
          <td style="padding:4px 16px 4px 0;color:#6b747c;vertical-align:top">${escaparHtml(etiqueta)}</td>
          <td style="padding:4px 0"><strong>${escaparHtml(valor)}</strong></td>
        </tr>`
          )
          .join("")}
      </table>
      <p style="margin:0 0 6px;color:#6b747c">Mensaje</p>
      <p style="margin:0;padding:12px 16px;background:#f6f7f8;border-radius:6px;white-space:pre-wrap">${escaparHtml(
        valores.mensaje.trim()
      )}</p>
    </div>
  `.trim();

  return { texto, html };
}

/**
 * Envía la consulta. Devuelve `false` si el transporte falla, para que la
 * acción responda al visitante sin filtrar detalles del servidor.
 */
export async function enviarCorreoContacto(
  valores: ContactoFormValues,
  config: ConfiguracionCorreo
): Promise<boolean> {
  const { texto, html } = construirCuerpo(valores);
  const remitente = limpiarCabecera(valores.nombre.trim());

  try {
    await obtenerTransporte(config).sendMail({
      from: `"Ecocomal — Sitio web" <${config.user}>`,
      to: config.destino,
      replyTo: limpiarCabecera(valores.correo.trim()),
      subject: `[${limpiarCabecera(valores.motivo)}] ${remitente}`,
      text: texto,
      html,
    });
    return true;
  } catch (error) {
    console.error("[contacto] Falló el envío SMTP:", error);
    return false;
  }
}
