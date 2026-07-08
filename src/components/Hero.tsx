import { motion } from "framer-motion";
// import Crest from "./Crest";
import logo from '../assets/20260203_232516.png'

const wordTop = "REIGN".split("");
const wordBottom = "MEDIA CONCEPT".split("");

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void pt-28 pb-16"
    >
      {/* hairline grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-140 h-140 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-105 h-105 rounded-full bg-gold-deep/10 blur-[120px]" />

      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-10 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono text-xs uppercase tracking-widest-lg text-gold">
            Creative Media &amp; Branding Studio — Lagos
          </span>
        </motion.div>

        <div>
          <h1 className="font-display font-medium leading-[0.9] text-[16vw] md:text-[9.5rem] lg:text-[10.5rem] -ml-1">
            <span className="block overflow-hidden">
              {wordTop.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.35 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-ivory"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden text-outline-gold text-[9vw] md:text-[5.2rem] lg:text-[5.8rem] mt-1 md:mt-2 tracking-wide">
              {wordBottom.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.75 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-4"
        >
          <p className="max-w-md text-ivory-dim text-base md:text-lg leading-relaxed">
            Where creativity reigns and brands thrive. We build brand identities,
            content, and campaigns for businesses ready to own their space.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#portfolio"
              className="font-mono text-xs uppercase tracking-widest-lg bg-gold text-void px-7 py-4 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest-lg text-ivory hover:text-gold transition-colors duration-300 border-b border-ivory-dim hover:border-gold pb-1 whitespace-nowrap"
            >
              Work With Us
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
      >
        <img src={logo} className="w-32 h-32"  />
      </motion.div>
    </section>
  );
}
