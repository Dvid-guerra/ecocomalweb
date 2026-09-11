"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { enviarContacto } from "@/lib/actions/contacto";
import {
  MOTIVOS,
  VALORES_INICIALES,
  type ContactoFormValues,
} from "@/lib/contacto";

type EstadoEnvio =
  | { tipo: "inactivo" }
  | { tipo: "exito"; mensaje: string }
  | { tipo: "error"; mensaje: string };

const campoBase =
  "w-full rounded-md border bg-white px-4 py-2.5 text-grafito-800 transition-colors placeholder:text-grafito-300 focus:outline-none focus:ring-2 focus:ring-oliva-500/40";

function campoClases(tieneError: boolean): string {
  return `${campoBase} ${
    tieneError
      ? "border-terracota-600 focus:border-terracota-600"
      : "border-grafito-300 focus:border-oliva-500"
  }`;
}

export default function FormularioContacto() {
  const idBase = useId();
  const [estado, setEstado] = useState<EstadoEnvio>({ tipo: "inactivo" });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactoFormValues>({
    defaultValues: VALORES_INICIALES,
    mode: "onBlur",
  });

  async function onSubmit(valores: ContactoFormValues) {
    setEstado({ tipo: "inactivo" });

    try {
      const resultado = await enviarContacto(valores);

      if (!resultado.ok) {
        // Errores devueltos por la validación del servidor.
        for (const [campo, mensaje] of Object.entries(resultado.errores ?? {})) {
          setError(campo as keyof ContactoFormValues, {
            type: "server",
            message: mensaje,
          });
        }
        setEstado({ tipo: "error", mensaje: resultado.mensaje });
        return;
      }

      reset(VALORES_INICIALES);
      setEstado({ tipo: "exito", mensaje: resultado.mensaje });
    } catch {
      setEstado({
        tipo: "error",
        mensaje:
          "No pudimos enviar tu solicitud. Verifica tu conexión e inténtalo de nuevo.",
      });
    }
  }

  const idNombre = `${idBase}-nombre`;
  const idOrganizacion = `${idBase}-organizacion`;
  const idCorreo = `${idBase}-correo`;
  const idTelefono = `${idBase}-telefono`;
  const idMotivo = `${idBase}-motivo`;
  const idMensaje = `${idBase}-mensaje`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-lg border border-grafito-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={idNombre}
            className="mb-1.5 block text-sm font-medium text-grafito-800"
          >
            Nombre
          </label>
          <input
            id={idNombre}
            type="text"
            autoComplete="name"
            aria-invalid={errors.nombre ? true : undefined}
            aria-describedby={errors.nombre ? `${idNombre}-error` : undefined}
            className={campoClases(Boolean(errors.nombre))}
            {...register("nombre", {
              required: "Indica tu nombre completo.",
              minLength: { value: 2, message: "Indica tu nombre completo." },
            })}
          />
          {errors.nombre && (
            <p
              id={`${idNombre}-error`}
              className="mt-1.5 text-sm text-terracota-600"
            >
              {errors.nombre.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={idOrganizacion}
            className="mb-1.5 block text-sm font-medium text-grafito-800"
          >
            Empresa / Institución{" "}
            <span className="font-normal text-grafito-500">(opcional)</span>
          </label>
          <input
            id={idOrganizacion}
            type="text"
            autoComplete="organization"
            className={campoClases(false)}
            {...register("organizacion")}
          />
        </div>

        <div>
          <label
            htmlFor={idCorreo}
            className="mb-1.5 block text-sm font-medium text-grafito-800"
          >
            Correo
          </label>
          <input
            id={idCorreo}
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={errors.correo ? true : undefined}
            aria-describedby={errors.correo ? `${idCorreo}-error` : undefined}
            className={campoClases(Boolean(errors.correo))}
            {...register("correo", {
              required: "Escribe un correo electrónico válido.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: "Escribe un correo electrónico válido.",
              },
            })}
          />
          {errors.correo && (
            <p
              id={`${idCorreo}-error`}
              className="mt-1.5 text-sm text-terracota-600"
            >
              {errors.correo.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={idTelefono}
            className="mb-1.5 block text-sm font-medium text-grafito-800"
          >
            Teléfono{" "}
            <span className="font-normal text-grafito-500">(opcional)</span>
          </label>
          <input
            id={idTelefono}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={errors.telefono ? true : undefined}
            aria-describedby={
              errors.telefono ? `${idTelefono}-error` : undefined
            }
            className={campoClases(Boolean(errors.telefono))}
            {...register("telefono", {
              minLength: {
                value: 8,
                message: "El teléfono debe tener al menos 8 dígitos.",
              },
            })}
          />
          {errors.telefono && (
            <p
              id={`${idTelefono}-error`}
              className="mt-1.5 text-sm text-terracota-600"
            >
              {errors.telefono.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor={idMotivo}
          className="mb-1.5 block text-sm font-medium text-grafito-800"
        >
          Motivo de la consulta
        </label>
        <select
          id={idMotivo}
          aria-invalid={errors.motivo ? true : undefined}
          aria-describedby={errors.motivo ? `${idMotivo}-error` : undefined}
          className={campoClases(Boolean(errors.motivo))}
          defaultValue=""
          {...register("motivo", {
            required: "Selecciona el motivo de tu consulta.",
          })}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {MOTIVOS.map((motivo) => (
            <option key={motivo} value={motivo}>
              {motivo}
            </option>
          ))}
        </select>
        {errors.motivo && (
          <p
            id={`${idMotivo}-error`}
            className="mt-1.5 text-sm text-terracota-600"
          >
            {errors.motivo.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor={idMensaje}
          className="mb-1.5 block text-sm font-medium text-grafito-800"
        >
          Mensaje
        </label>
        <textarea
          id={idMensaje}
          rows={5}
          aria-invalid={errors.mensaje ? true : undefined}
          aria-describedby={errors.mensaje ? `${idMensaje}-error` : undefined}
          className={campoClases(Boolean(errors.mensaje))}
          placeholder="Cantidad de unidades estimada, departamento o municipio, y plazos previstos."
          {...register("mensaje", {
            required: "Cuéntanos brevemente qué necesitas.",
            minLength: {
              value: 10,
              message:
                "Cuéntanos brevemente qué necesitas (mínimo 10 caracteres).",
            },
          })}
        />
        {errors.mensaje && (
          <p
            id={`${idMensaje}-error`}
            className="mt-1.5 text-sm text-terracota-600"
          >
            {errors.mensaje.message}
          </p>
        )}
      </div>

      {/* Estados de resultado, anunciados a lectores de pantalla. */}
      <div aria-live="polite" role="status">
        {estado.tipo === "exito" && (
          <p className="flex items-start gap-2 rounded-md border border-oliva-300 bg-oliva-50 p-4 text-sm text-oliva-900">
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
            {estado.mensaje}
          </p>
        )}
        {estado.tipo === "error" && (
          <p className="flex items-start gap-2 rounded-md border border-terracota-400 bg-crema-100 p-4 text-sm text-terracota-600">
            <AlertCircle
              size={18}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
            {estado.mensaje}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        disabled={isSubmitting}
        className="mt-1 w-full sm:w-auto sm:self-start"
      >
        {isSubmitting && (
          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
        )}
        {isSubmitting ? "Enviando…" : "Enviar solicitud"}
      </Button>
    </form>
  );
}
