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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow title-underline animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            {subtitle}
          </p>
        )}
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="text-foreground/50" size={32} />
        </div>
      )}

      {/* Fade effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
