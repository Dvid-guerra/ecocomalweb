"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const inputClasses =
  "w-full rounded-lg border border-verde-100 px-4 py-2.5 text-ink placeholder-muted focus:border-verde-500 focus:outline-none focus:ring-2 focus:ring-verde-500/30";

export default function CotizacionForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: conectar con el servicio real de envío de solicitudes.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-verde-100 bg-white p-8 text-center shadow-sm">
        <CheckCircle2 size={40} className="text-verde-600" />
        <h3 className="font-display text-xl font-semibold text-ink">¡Solicitud enviada!</h3>
        <p className="text-sm text-muted">
          TODO: mensaje real de confirmación — nos pondremos en contacto pronto.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-verde-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-ink">
          Nombre completo
        </label>
        <input id="nombre" name="nombre" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1 block text-sm font-medium text-ink">
          Teléfono
        </label>
        <input id="telefono" name="telefono" type="tel" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="ubicacion" className="mb-1 block text-sm font-medium text-ink">
          Departamento / municipio
        </label>
        <input id="ubicacion" name="ubicacion" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="comentarios" className="mb-1 block text-sm font-medium text-ink">
          Comentarios (opcional)
        </label>
        <textarea id="comentarios" name="comentarios" rows={4} className={inputClasses} />
      </div>

      <Button type="submit" variant="cta" size="lg" className="mt-2">
        Enviar solicitud
      </Button>
    </form>
  );
}
