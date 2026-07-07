// src/pages/VideoEditingPage.tsx

import { SiteHeader } from "../components/navigation/SiteHeader";
import { CtaSection } from "../sections/cta/CtaSection";
import { Footer } from "../sections/footer";
import Hero from "../sections/video-editing/Hero";
import PortfolioEcosystem from "../sections/video-editing/PortfolioEcosystem";
import Services from "../sections/video-editing/Services";
import Process from "../sections/video-editing/Process";
import TheStory from "../sections/video-editing/TheStory";
import Testimonials from "../sections/video-editing/Testimonials";
import Pricing from "../sections/video-editing/Pricing";

export function VideoEditingPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <PortfolioEcosystem />
        <Services />
        <Process />
        <TheStory />
        <Testimonials />
        <Pricing />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}