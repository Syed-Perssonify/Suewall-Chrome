import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText } from "lucide-react";
import { fadeInBlur } from "@/commen/config/animations";

interface FeatureItemProps {
  icon: "ShieldCheck" | "Lock" | "FileText";
  text: string;
  color: string;
  delay: number;
}

const iconMap = {
  ShieldCheck,
  Lock,
  FileText,
};

export function FeatureItem({ icon, text, color, delay }: FeatureItemProps) {
  const IconComponent = iconMap[icon];
  
  return (
    <motion.div
      variants={fadeInBlur}
      transition={{ ...fadeInBlur.transition, delay }}
      className="flex items-center justify-center sm:justify-start gap-1"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: delay + 0.2, duration: 0.6, type: "spring" }}
      >
        <IconComponent className={`w-4 h-4 ${color} flex-shrink-0`} />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
        className="text-center sm:text-left"
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
