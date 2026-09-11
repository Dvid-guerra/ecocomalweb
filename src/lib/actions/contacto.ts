"use server";

import {
  validarContacto,
  type ContactoFormValues,
  type ContactoResult,
} from "@/lib/contacto";

/**
 * Recibe una consulta del formulario de contacto y licitaciones.
 *
 * Una Server Action es un endpoint público: todo lo que llega aquí se trata
 * como no confiable y se vuelve a validar en el servidor.
 *
 * TODO: conectar el envío real (destino de correo pendiente). Cuando el
 * cliente confirme la dirección institucional, definir CONTACTO_DESTINO en el
 * entorno y enviar el correo desde este punto.
 */
export async function enviarContacto(
  valores: ContactoFormValues
): Promise<ContactoResult> {
  const errores = validarContacto(valores);

  if (Object.keys(errores).length > 0) {
    return {
      ok: false,
      mensaje: "Revisa los campos marcados e inténtalo de nuevo.",
      errores,
    };
  }

  const destino = process.env.CONTACTO_DESTINO;

  if (!destino) {
    // Sin destino configurado la consulta no sale del servidor: lo dejamos
    // explícito en los logs para que no pase inadvertido en producción.
    console.warn(
      "[contacto] CONTACTO_DESTINO no está configurado: la consulta no se envió por correo."
    );
  }

  // TODO: reemplazar por el envío real (SMTP o proveedor transaccional).

  return {
    ok: true,
    mensaje:
      "Recibimos tu solicitud. Nuestro equipo te contactará para dar seguimiento.",
  };
}
