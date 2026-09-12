"use server";

import { headers } from "next/headers";
import {
  validarContacto,
  type ContactoFormValues,
  type ContactoResult,
} from "@/lib/contacto";
import { enviarCorreoContacto, leerConfiguracion } from "@/lib/correo";
import { registrarIntento } from "@/lib/rate-limit";

/**
 * Recibe una consulta del formulario de contacto y licitaciones.
 *
 * Una Server Action es un endpoint público: todo lo que llega aquí se trata
 * como no confiable y se vuelve a validar en el servidor.
 */

const ERROR_GENERICO =
  "No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos o escríbenos directamente por correo.";

/**
 * IP del visitante a partir de las cabeceras del proxy. Sin proxy delante no
 * hay cabecera y todos los visitantes comparten el cubo "desconocida": el
 * límite sigue aplicando, solo que de forma global.
 */
async function obtenerIp(): Promise<string> {
  const cabeceras = await headers();
  const forwarded = cabeceras.get("x-forwarded-for");
  if (forwarded) {
    // Formato "cliente, proxy1, proxy2": el primero es el visitante.
    const primera = forwarded.split(",")[0]?.trim();
    if (primera) return primera;
  }
  return cabeceras.get("x-real-ip")?.trim() || "desconocida";
}

export async function enviarContacto(
  valores: ContactoFormValues
): Promise<ContactoResult> {
  // 1. Trampa anti-spam. Se responde con el mismo mensaje de éxito que vería
  //    una persona: si el bot recibe un error, aprende a esquivar el campo.
  if (valores.sitioWeb.trim() !== "") {
    return {
      ok: true,
      mensaje:
        "Recibimos tu solicitud. Nuestro equipo te contactará para dar seguimiento.",
    };
  }

  // 2. Validación de servidor, la única que cuenta.
  const errores = validarContacto(valores);

  if (Object.keys(errores).length > 0) {
    return {
      ok: false,
      mensaje: "Revisa los campos marcados e inténtalo de nuevo.",
      errores,
    };
  }

  // 3. Límite de envíos. Va después de validar para que un formulario mal
  //    rellenado no consuma intentos de una persona que solo se equivocó.
  const limite = registrarIntento(await obtenerIp());

  if (!limite.permitido) {
    const minutos = Math.ceil((limite.esperaSegundos ?? 600) / 60);
    return {
      ok: false,
      mensaje: `Ya recibimos varias solicitudes desde esta conexión. Espera ${minutos} minuto${
        minutos === 1 ? "" : "s"
      } antes de enviar otra.`,
    };
  }

  // 4. Envío.
  const config = leerConfiguracion();

  if (!config) {
    // Falta configuración del servidor: es un fallo nuestro, no del visitante,
    // y no debe pasar por bueno un envío que nunca salió.
    console.error(
      "[contacto] Faltan variables SMTP (SMTP_USER, SMTP_PASSWORD o CONTACTO_DESTINO): la consulta no se envió."
    );
    return { ok: false, mensaje: ERROR_GENERICO };
  }

  const enviado = await enviarCorreoContacto(valores, config);

  if (!enviado) {
    return { ok: false, mensaje: ERROR_GENERICO };
  }

  return {
    ok: true,
    mensaje:
      "Recibimos tu solicitud. Nuestro equipo te contactará para dar seguimiento.",
  };
}
