import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const InteractiveCard = ({ 
  children, 
  className = "",
  glowColor = "hsl(var(--primary))"
}: InteractiveCardProps) => {
  return (
    <motion.div
      className={`card-gradient rounded-xl overflow-hidden cursor-pointer ${className}`}
      whileHover={{ 
        scale: 1.03,
        boxShadow: `0 20px 40px -15px ${glowColor}40`
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {children}
    </motion.div>
  );
};

export default InteractiveCard;
