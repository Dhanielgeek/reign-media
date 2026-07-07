import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-charcoal py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Get In Touch" title="Let's build your reign." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mt-16">
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
              <div className="flex items-start gap-4">
                <HiOutlineMail className="text-gold text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim mb-1">
                    Email
                  </p>
                  <p className="text-ivory">hello@reignmediaconcept.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlinePhone className="text-gold text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim mb-1">
                    Phone / WhatsApp
                  </p>
                  <p className="text-ivory">+234 900 000 0000</p>
                </div>
              </div>
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            {sent ? (
              <div className="border border-gold/50 p-10 flex flex-col gap-3">
                <span className="font-display italic text-3xl text-gold">
                  Message received.
                </span>
                <p className="text-ivory-dim">
                  Thank you for reaching out — a member of the Reign team will
                  be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                    Name
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    placeholder="you@brand.com"
                    className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                    Service Interested In
                  </span>
                  <input
                    type="text"
                    placeholder="Brand identity, videography, digital marketing..."
                    className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                    Message
                  </span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand and your goals..."
                    className="bg-transparent border-b border-ivory-dim/40 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="sm:col-span-2 justify-self-start font-mono text-xs uppercase tracking-widest-lg bg-gold text-void px-8 py-4 hover:bg-gold-light transition-colors duration-300 mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
