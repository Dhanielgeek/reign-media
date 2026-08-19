import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  // WhatsApp username
  // Do not include the @ symbol
  const whatsappUsername = "ReignMCs";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Open WhatsApp directly from the Phone / WhatsApp section
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Reign Media Concept, I would like to make an enquiry about your services."
    );

    const whatsappUrl = `https://wa.me/${whatsappUsername}?text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Submit contact form and open WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Reign Media Concept,

My name is ${formData.name}.

Email: ${formData.email}

Service I'm interested in:
${formData.service || "Not specified"}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappUsername}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative bg-charcoal py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build your reign."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mt-16">
          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-10"
          >
            <p className="text-ivory-dim leading-relaxed">
              Tell us about your brand and where you want to take it. We'll
              get back to you within one business day.
            </p>

            <div className="flex flex-col gap-6">
              {/* =========================
                  EMAIL
              ========================== */}
              <a
                href="mailto:reignmediaconcept@gmail.com"
                className="flex items-start gap-4 group"
              >
                <HiOutlineMail className="text-gold text-xl mt-1 shrink-0" />

                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim mb-1">
                    Email
                  </p>

                  <p className="text-ivory group-hover:text-gold transition-colors">
                    reignmediaconcept@gmail.com
                  </p>
                </div>
              </a>

              {/* =========================
                  WHATSAPP
              ========================== */}
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex items-start gap-4 text-left group"
              >
                <HiOutlinePhone className="text-gold text-xl mt-1 shrink-0" />

                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim mb-1">
                    Phone / WhatsApp
                  </p>

                  <p className="text-ivory group-hover:text-gold transition-colors">
                    @ReignMCs
                  </p>

                  <p className="text-xs text-ivory-dim mt-1">
                    Click to chat on WhatsApp
                  </p>
                </div>
              </button>

              {/* =========================
                  LOCATION
              ========================== */}
              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker className="text-gold text-xl mt-1 shrink-0" />

                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim mb-1">
                    Studio
                  </p>

                  <p className="text-ivory">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {/* =========================
                  NAME
              ========================== */}
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                  Name
                </span>

                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors"
                />
              </label>

              {/* =========================
                  EMAIL
              ========================== */}
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                  Email
                </span>

                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@brand.com"
                  className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors"
                />
              </label>

              {/* =========================
                  SERVICE
              ========================== */}
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                  Service Interested In
                </span>

                <input
                  name="service"
                  type="text"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Brand identity, videography, digital marketing..."
                  className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors"
                />
              </label>

              {/* =========================
                  MESSAGE
              ========================== */}
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                  Message
                </span>

                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your brand and your goals..."
                  className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors resize-none"
                />
              </label>

              {/* =========================
                  WHATSAPP BUTTON
              ========================== */}
              <button
                type="submit"
                className="sm:col-span-2 justify-self-start font-mono text-xs uppercase tracking-widest-lg bg-gold text-void px-8 py-4 hover:bg-gold-light transition-colors duration-300 mt-2"
              >
                Continue on WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}