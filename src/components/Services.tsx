import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Capabilities built to make brands unmistakable."
        />

        <div className="mt-16 border-t border-gold-deep/30">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-3 md:gap-8 py-8 border-b border-gold-deep/30 hover:bg-gold/5 transition-colors duration-300 px-2 md:px-4"
            >
              <span className="md:col-span-1 font-mono text-sm text-gold">
                {service.number}
              </span>
              <h3 className="md:col-span-4 font-display text-3xl md:text-4xl text-ivory group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="md:col-span-6 text-ivory-dim text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
              <span className="hidden md:flex md:col-span-1 justify-end text-gold text-2xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                &#8599;
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
