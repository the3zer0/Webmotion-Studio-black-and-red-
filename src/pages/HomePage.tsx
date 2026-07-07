import { SiteHeader } from "../components/navigation/SiteHeader";
import { CtaSection } from "../sections/cta/CtaSection";
import { Footer } from "../sections/footer";
import { HeroSection } from "../sections/hero";
import { ProcessSection } from "../sections/process/ProcessSection";
import { ProjectsSection } from "../sections/projects";
import { ServicesSection } from "../sections/services";
import { TestimonialsSection } from "../sections/testimonials";
import { WhyChooseUsSection } from "../sections/why-us";

export function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />

      </main>
    </>
  );
}