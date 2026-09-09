import RoofDivider from "@/components/ui/RoofDivider";
import Container from "@/components/ui/Container";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-verde-900 pb-16 pt-20 sm:pb-20 sm:pt-28">
      <RoofDivider
        className="pointer-events-none absolute bottom-0 right-0 h-auto w-[45%] text-white opacity-[0.07]"
      />

      <Container className="relative z-10 max-w-3xl">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-naranja-400">
          <span className="h-px w-8 bg-naranja-400" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-lg text-verde-50/90">{description}</p>
        )}
      </Container>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 text-white"
        aria-hidden="true"
      >
        <RoofDivider className="h-12 w-full sm:h-16" />
      </div>
    </section>
  );
}
