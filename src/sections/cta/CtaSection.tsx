import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
const whatsappMessage =
`Hello Webmotion Studio, I came across your work and I'm interested in discussing a potential project. I'd love to share my requirements and explore how we can collaborate to create something exceptional.`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          service: formData.service,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
        <section
      id="contact"
      className="relative overflow-hidden px-6 py-40 lg:px-12"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2b2b]/10 blur-[250px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[48px] border border-white/10 bg-[#090909]/80 p-10 md:p-20"
        >
          <div className="grid gap-16 lg:grid-cols-2">
            {/* LEFT SIDE */}

            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
                START A PROJECT
              </p>

              <h2 className="font-display text-5xl leading-none text-white md:text-8xl">
                Ready to build
                <br />
                something
                <br />
                remarkable?
              </h2>

              <p className="mt-10 max-w-xl text-lg leading-8 text-gray-400">
                Whether it's a website, brand identity, video editing or content
                system, let's create something people remember.
              </p>

              <div className="mt-14 flex flex-col gap-4">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#ff2b2b] px-8 py-5 text-lg text-white transition-all duration-300 hover:scale-[1.02]"
                >
                  Start a Project

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
  href={`https://wa.me/8801805768267?text=${encodeURIComponent(
    whatsappMessage
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-white/10 px-8 py-5 text-center text-lg text-white transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
>
  Chat on WhatsApp
</a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
                <div className="h-2 w-2 rounded-full bg-[#ff2b2b]" />

                <span>
                  Usually replies within{" "}
                  <span className="text-white">6–12 hours</span>
                </span>
              </div>
            </div>
                        {/* RIGHT SIDE */}

            <div className="rounded-[32px] border border-[#ff2b2b]/30 bg-black/30 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#ff2b2b]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#ff2b2b]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    WhatsApp
                  </label>

                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Your WhatsApp number"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#ff2b2b]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    Service Needed
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#ff2b2b]"
                  >
                    <option value="">Select a service</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Custom">Custom</option>
                    
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    Project Details
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#ff2b2b]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ff2b2b] px-8 py-5 text-lg text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Inquiry"}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                {success && (
                  <p className="text-center text-sm text-green-400">
                    Inquiry sent successfully. We'll get back to you soon.
                  </p>
                )}

                <p className="text-center text-sm text-gray-500">
                  Your information is kept private and confidential.
                </p>
              </form>
            </div>
          </div>
                    <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-4">
            <div>
              <h3 className="font-display text-4xl text-white">
                55+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="font-display text-4xl text-white">
                20+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
                Brands Worked With
              </p>
            </div>

            <div>
              <h3 className="font-display text-4xl text-white">
                3M+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
                Views Generated
              </p>
            </div>

            <div>
              <h3 className="font-display text-4xl text-white">
                98%
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
                Client Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}