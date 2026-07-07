import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { portfolioItems } from "../data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-void py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading eyebrow="Selected Work" title="A glimpse into our craft." />
          <p className="max-w-xs text-ivory-dim text-sm leading-relaxed md:text-right">
            A sample of the brand worlds we've helped bring to life — full case
            studies available on request.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden aspect-4/5 cursor-pointer"
            >
              <img src={item.image} alt={item.title} />
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.tone} opacity-80 transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-void/90 via-void/20 to-void/10" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 transition-colors duration-500 m-3" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-gold-light mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-ivory translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
