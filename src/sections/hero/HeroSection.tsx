import { Container } from "../../components/common/Container";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroDevice } from "./HeroDevice";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative z-10 py-24">
  <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_.95fr]">
    <HeroContent />
    <HeroDevice />
  </div>
</Container>
    </section>
  );
}