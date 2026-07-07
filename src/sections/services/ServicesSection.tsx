import { Container } from "../../components/common/Container";
import { Reveal } from "../../components/common/Reveal";
import { ServiceGrid } from "./ServiceGrid";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-32"
    >
      <Container>

        <Reveal>

          <p className="text-sm uppercase tracking-[0.45em] text-[#ff2b2b]">
            WHAT WE DO
          </p>

          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-white md:text-7xl">

           Design.
           <br />
           Motion.
           <br />
           Development.

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

           Everything your brand needs to stand out online.
           From identity systems to cinematic storytelling and
           high-performance digital experiences.

          </p>

        </Reveal>

        <ServiceGrid />

      </Container>
    </section>
  );
}