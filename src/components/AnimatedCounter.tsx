import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  className?: string;
  duration?: number;
}

const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  className = "",
  duration = 2
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  const isNumber = typeof value === "number" || !isNaN(Number(value));

  useEffect(() => {
    if (isInView && isNumber) {
      const numValue = typeof value === "number" ? value : parseInt(value);
      const controls = animate(0, numValue, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest).toString());
        }
      });
      return controls.stop;
    } else if (!isNumber) {
      setDisplayValue(value.toString());
    }
  }, [isInView, value, duration, isNumber]);

  return (
    <motion.span 
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
