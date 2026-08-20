import FAQ from "./Accordion";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We provide Web Development, Video Editing, and Graphics Design services tailored for creators, brands, and businesses.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on complexity, but most projects are completed within a few days to a few weeks.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Every package includes revisions to ensure the final result meets your expectations.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Absolutely. We work with clients worldwide and communicate through WhatsApp, email, and video calls.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out the contact form and we will discuss your project requirements, timeline, and next steps.",
  },
];

export function FaqSection() {
  return (
    <FAQ
      title="Frequently Asked Questions"
      description="Everything you need to know before starting your project."
      items={faqItems}
    />
  );
}