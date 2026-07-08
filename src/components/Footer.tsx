import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Crest from "./Crest";
import logo from '../assets/20260203_232516.png'
export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-gold-deep/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 pb-12">
          <div className="flex items-center gap-4">
            {/* <Crest className="w-14 h-14" /> */}
            <img src={logo} alt="Reign Media Logo" className="w-10 h-10" />
            <div>
              <p className="font-display italic text-xl text-ivory">
                Reign Media Concept
              </p>
              <p className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim mt-1">
                Where Creativity Reigns and Brands Thrive
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" aria-label="Instagram" className="text-ivory-dim hover:text-gold transition-colors text-xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="text-ivory-dim hover:text-gold transition-colors text-xl">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-ivory-dim hover:text-gold transition-colors text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-gold-deep/20 pt-6">
          <p className="font-mono text-[0.65rem] text-ivory-dim/70">
            © {new Date().getFullYear()} Reign Media Concept. All rights reserved.
          </p>
          <a
            href="#home"
            className="font-mono text-[0.65rem] uppercase tracking-widest-lg text-ivory-dim hover:text-gold transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
