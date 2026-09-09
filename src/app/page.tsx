import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import RoofDivider from "@/components/ui/RoofDivider";
import HeroSlideshow from "@/components/sections/HeroSlideshow";

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[70vh] items-center sm:min-h-[85vh]">
        <HeroSlideshow />

        <RoofDivider
          className="pointer-events-none absolute bottom-0 right-0 h-auto w-[55%] text-white opacity-[0.07]"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-white" aria-hidden="true">
          <RoofDivider className="h-12 w-full sm:h-16" />
        </div>

        <Container className="relative z-10 max-w-2xl">
          <h1 className="font-display text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Estufas ahorradoras de leña
          </h1>
          <p className="mt-6 max-w-xl text-lg text-verde-50/90">
            Tecnología de combustión mejorada que cuida tu leña y el aire de tu
            cocina, para que el tiempo de cocinar siga siendo tiempo de
            conversar en familia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/cotizacion" variant="cta" size="lg">
              Solicitar cotización
            </Button>
            <Button href="/productos" variant="outline" size="lg">
              Conocer los productos
            </Button>
          </div>
        </Container>
      </section>

      <div className="flex justify-center bg-white py-8">
        <RoofDivider withChimney className="h-20 w-72 text-verde-600 md:h-24 md:w-96" />
      </div>
    </>
  );
}
