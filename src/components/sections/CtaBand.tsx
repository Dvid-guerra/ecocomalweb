import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import RoofDivider from "@/components/ui/RoofDivider";

export interface CtaBandProps {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBand({
  title,
  description,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-grafito-900 py-16 sm:py-20">
      <RoofDivider
        withChimney
        className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-56 -translate-x-1/2 text-crema-50 opacity-[0.05] sm:w-72"
      />

      <Container className="relative z-10">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl font-display text-2xl uppercase leading-tight tracking-tight text-balance text-crema-50 sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-crema-100/85">{description}</p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={ctaHref} variant="cta" size="lg">
              {ctaLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
