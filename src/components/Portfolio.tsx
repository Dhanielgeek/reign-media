import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { portfolioItems } from "../data/content";
import test from '../assets/IMG_0755.jpeg'

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
          {portfolioItems.map((item, i) => {
            const hasLink = Boolean(item.link);
            const Card = hasLink ? motion.a : motion.div;

            return (
              <Card
                key={item.id}
                {...(hasLink
                  ? {
                      href: item.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `Watch ${item.title} (opens in a new tab)`,
                    }
                  : {})}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden aspect-4/5 cursor-pointer block"
              >
                <img
                  src={test}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* gradient so text is readable over any image */}
                <div className="absolute inset-0 bg-linear-to-t from-void/90 via-void/20 to-void/10" />

                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 transition-colors duration-500 m-3" />

                {/* play / external-link affordance — only for items with a link */}
                {hasLink && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                      <div className="w-16 h-16 rounded-full bg-ivory/10 backdrop-blur-sm border border-gold/60 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-gold-light ml-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-gold-light">
                        Watch video ↗
                      </span>
                    </div>
                  </div>
                )}

                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-gold-light mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-ivory translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}