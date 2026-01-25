import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  showScrollIndicator?: boolean;
}

const HeroSection = ({ title, subtitle, showScrollIndicator = false }: HeroSectionProps) => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center relative hero-section">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow title-underline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-foreground/50" size={32} />
        </motion.div>
      )}

      {/* Fade effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
