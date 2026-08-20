// src/pages/VideoEditingPage.tsx

import { SiteHeader } from "../components/navigation/SiteHeader";
import { CtaSection } from "../sections/cta/CtaSection";
import { Footer } from "../sections/footer";
import Hero from "../sections/video-editing/Hero";
import PortfolioEcosystem from "../sections/video-editing/PortfolioEcosystem";
import Services from "../sections/video-editing/Services";
import Process from "../sections/video-editing/Process";
import TheStory from "../sections/video-editing/TheStory";
import Pricing from "../sections/video-editing/Pricing";
import FAQ from "../sections/video-editing/Faq";

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
        <Pricing />
        <FAQ />

        <CtaSection />
        <Footer />
      </main>
    </>
  );
}