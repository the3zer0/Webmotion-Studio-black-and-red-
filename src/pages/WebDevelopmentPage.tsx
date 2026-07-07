import { SiteHeader } from "../components/navigation/SiteHeader";
import { CtaSection } from "../sections/cta/CtaSection";
import { Footer } from "../sections/footer";
import Hero from "../sections/web-dev/Hero";
import FeaturedWork from "../sections/web-dev/FeaturedWork";
import Services from "../sections/web-dev/Services";
import Process from "../sections/web-dev/Process";
import Testimonials from "../sections/web-dev/Testimonials";
import Pricing from "../sections/web-dev/Pricing";

export function WebDevelopmentPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}