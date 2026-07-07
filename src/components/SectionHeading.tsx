import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-widest-lg uppercase text-gold mb-4"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display font-medium text-4xl sm:text-5xl md:text-6xl ${
          light ? "text-void" : "text-ivory"
        }`}
      >
        {title}
      </motion.h2>
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        width="140"
        height="12"
        viewBox="0 0 140 12"
        className="mt-5"
      >
        <motion.path
          d="M1 6 Q 35 -2, 70 6 T 139 6"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
