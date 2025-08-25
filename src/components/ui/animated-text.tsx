import { motion } from "framer-motion";
import { textReveal } from "@/commen/config/animations";

interface AnimatedTextProps {
  words: string[];
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function AnimatedText({ 
  words, 
  className = "", 
  delay = 0, 
  staggerDelay = 0.05 
}: AnimatedTextProps) {
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={textReveal}
          transition={{
            ...textReveal.transition,
            delay: delay + index * staggerDelay,
          }}
          className={`inline-block ${className}`}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
