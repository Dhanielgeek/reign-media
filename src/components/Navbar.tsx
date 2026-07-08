import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data/content";
import logo from '../assets/20260203_232516.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-void/90 backdrop-blur-md border-b border-gold-deep/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="font-display italic text-2xl text-gold group-hover:text-gold-light transition-colors">
            <img src={logo} alt="Reign Media Logo" className="w-10 h-10" />
          </span>
          <span className="font-mono text-[0.65rem] tracking-widest-lg uppercase text-ivory-dim">
            Reign Media Concept
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest-lg text-ivory-dim hover:text-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-xs uppercase tracking-widest-lg border border-gold text-gold px-5 py-2.5 hover:bg-gold hover:text-void transition-colors duration-300"
        >
          Start a Project
        </a>

        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-void border-t border-gold-deep/30"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm uppercase tracking-widest-lg text-ivory-dim hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-widest-lg border border-gold text-gold px-5 py-3 text-center hover:bg-gold hover:text-void transition-colors"
              >
                Start a Project
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
