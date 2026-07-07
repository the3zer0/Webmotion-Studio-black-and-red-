import { SiteHeader } from "../components/navigation/SiteHeader";
import { CtaSection } from "../sections/cta/CtaSection";
import { Footer } from "../sections/footer";
import Hero from "../sections/graphics-design/Hero";
import FeaturedWork from "../sections/graphics-design/FeaturedWork";
import Services from "../sections/graphics-design/Services";
import Process from "../sections/graphics-design/Process";
// TheStory module was not found; omitted to prevent build error
import Testimonials from "../sections/graphics-design/Testimonials";
import Pricing from "../sections/graphics-design/Pricing";

export function GraphicsDesignPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        {/* PortfolioEcosystem omitted due to missing module */}
        <FeaturedWork />
        <Services />
        <Process />
        {/* TheStory section omitted due to missing module */}
        <Testimonials />
        <Pricing />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
} 