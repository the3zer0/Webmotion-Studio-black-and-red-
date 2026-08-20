import Accordion from "../faq/Accordion";

const faqItems = [
  {
    question: "Why Choose Webmotion Studio?",
    answer:
      "We combine creative design, strategic thinking, and industry experience to create visuals that strengthen your brand identity and help your business stand out in a competitive market.",
  },

  {
    question: "What information do I need to provide before starting?",
    answer:
      "To begin your project, please provide your business name, tagline (if any), preferred colors, industry details, design preferences, references, and any existing brand assets you would like us to follow.",
  },

  {
    question: "Do you offer unlimited revisions?",
    answer:
      "Yes. We work closely with our clients and provide revisions to ensure the final design meets their expectations and business goals.",
  },

  {
    question: "Do I own the copyright to the final design?",
    answer:
      "Absolutely. Once the project is completed and delivered, you receive full ownership rights to the final approved design.",
  },

  {
    question: "Will I receive source files?",
    answer:
      "Yes. Depending on your selected package, editable source files such as AI, PSD, SVG, EPS, or other requested formats can be included.",
  },

  {
    question: "Why are transparent PNG files important?",
    answer:
      "Transparent PNG files allow you to use your logo or design on websites, social media, marketing materials, packaging, and watermarks without a background.",
  },

  {
    question: "Can you work with existing brand guidelines?",
    answer:
      "Yes. We can follow your existing brand guidelines to ensure consistency across all marketing materials and visual assets.",
  },

  {
    question: "What types of graphic design services do you offer?",
    answer:
      "We provide logo design, brand identity design, social media graphics, business cards, banners, posters, presentation design, advertising creatives, and other custom design solutions.",
  },

  {
    question: "How long does a graphic design project take?",
    answer:
      "Project timelines vary depending on complexity and revisions, but most graphic design projects are completed within 3–10 business days.",
  },

  {
    question: "Do you offer refunds?",
    answer:
      "Client satisfaction is our priority. Refund requests are reviewed on a case-by-case basis depending on the project stage and work completed.",
  },
];

export default function FAQ() {
  return (
    <Accordion
      title="Graphic Design FAQs"
      description="Everything you need to know about our graphic design, branding, and visual identity services."
      items={faqItems}
    />
  );
}