import Accordion from "../faq/Accordion";

const faqItems = [
  {
    question: "How long does a website take to build?",
    answer:
      "Most websites are completed within 2–4 weeks, depending on the project's complexity, content requirements, and revision rounds.",
  },

  {
    question: "Do you design before development?",
    answer:
      "Yes, every project begins with a design phase to ensure the best user experience and visual direction.",
  },

  {
    question: "Will my website be mobile responsive?",
    answer:
      "Absolutely, all websites we build are fully responsive across desktop, tablet, and mobile devices.",
  },

  {
    question: "Do you provide hosting support?",
    answer:
      "Yes, we can help with hosting setup, deployment, and ongoing website maintenance.",
  },

  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes, we can modernize and optimize your existing website for better performance and user experience.",
  },

  {
    question: "Do you build custom features?",
    answer:
      "Yes, we develop custom functionality tailored to your specific business requirements.",
  },
];

export default function FAQ() {
  return (
    <Accordion
      title="Web Development FAQs"
      description="Everything you need to know about our website design, development, deployment, and maintenance services."
      items={faqItems}
    />
  );
}