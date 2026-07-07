import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { stats } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative bg-void py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="About Reign Media Concept" title="Every brand has a story worth telling." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="font-display italic text-2xl md:text-3xl text-gold-light leading-snug">
              "We don't just create visuals—we craft experiences that leave
              lasting impressions."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-mono text-xs uppercase tracking-widest-lg text-ivory-dim">
                Reign Media Concept
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6 text-ivory-dim text-base md:text-lg leading-relaxed"
          >
            <p>
              We are a creative media and branding company dedicated to
              helping businesses, organizations, and individuals build a
              powerful and memorable presence through innovative design,
              strategic branding, and compelling digital content.
            </p>
            <p>
              Our services span graphic design, brand identity, social media
              management, content creation, photography, videography, and
              digital marketing — all tailored to help our clients connect
              with their audience and achieve measurable growth.
            </p>
            <p>
              Driven by creativity, excellence, and innovation, whether
              you're launching a new business, refreshing your brand, or
              scaling your digital presence,{" "}
              <span className="text-gold">Reign Media Concept</span> is your
              trusted creative partner.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-gold-deep/30 pt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="font-display text-4xl md:text-5xl text-ivory">
                {stat.value}
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
