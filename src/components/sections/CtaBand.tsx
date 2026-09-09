import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import RoofDivider from "@/components/ui/RoofDivider";

export interface CtaBandProps {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CtaBand({ title, description, ctaLabel, ctaHref }: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-verde-900 py-16 sm:py-20">
      <RoofDivider
        withChimney
        className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-56 -translate-x-1/2 text-white opacity-[0.07] sm:w-72"
      />

      <Container className="relative z-10">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl uppercase tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-verde-50/90">{description}</p>
          )}
          <Button href={ctaHref} variant="cta" size="lg">
            {ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
