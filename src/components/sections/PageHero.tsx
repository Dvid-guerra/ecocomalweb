import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import RoofDivider from "@/components/ui/RoofDivider";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-grafito-900 pb-16 pt-16 sm:pb-20 sm:pt-24">
      <RoofDivider className="pointer-events-none absolute bottom-0 right-0 h-auto w-[45%] text-crema-50 opacity-[0.05]" />

      <Container className="relative z-10">
        <Heading as="h1" tone="dark" eyebrow={eyebrow} subtitle={description}>
          {title}
        </Heading>
      </Container>
    </section>
  );
}
