import { motion } from "framer-motion";

interface CrestProps {
  className?: string;
  spin?: boolean;
}

/**
 * The Reign crest: a broken-ring wax-seal monogram.
 * This is the page's signature mark — used in the nav, the hero,
 * and the footer as a recurring identity anchor.
 */
export default function Crest({ className = "w-16 h-16", spin = false }: CrestProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        animate={spin ? { rotate: 360 } : undefined}
        transition={spin ? { duration: 40, repeat: Infinity, ease: "linear" } : undefined}
      >
        {/* Broken outer ring */}
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.25"
          strokeDasharray="18 6"
          opacity="0.8"
        />
        {/* Inner ring */}
        <circle
          cx="60"
          cy="60"
          r="42"
          fill="none"
          stroke="var(--color-gold-deep)"
          strokeWidth="0.75"
        />
        {/* Four cardinal ticks */}
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="60"
            y1="6"
            x2="60"
            y2="14"
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            transform={`rotate(${deg} 60 60)`}
          />
        ))}
      </motion.svg>
      {/* Static monogram, counter-rotated visually by not spinning */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display italic text-gold select-none"
          style={{ fontSize: "2.1rem", lineHeight: 1 }}
        >
          R
        </span>
      </div>
    </div>
  );
}
