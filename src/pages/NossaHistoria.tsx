import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Calendar, Flag, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import InteractiveCard from "@/components/InteractiveCard";

const timelineEvents = [
  {
    year: "2018",
    title: "A Fundação - Tech Guears",
    description: "Nossa equipe foi fundada em 2018 com o nome Tech Guears, um grupo de estudantes apaixonados por robótica que deram os primeiros passos na FIRST Tech Challenge.",
    icon: <Flag className="text-primary" size={24} />,
    color: "hsl(var(--primary))",
  },
  {
    year: "2020",
    title: "Nova Identidade - Clusters",
    description: "Passamos por uma grande transformação, mudando nosso nome e identidade visual para Clusters 16053, refletindo nossa evolução e união como equipe.",
    icon: <Rocket className="text-accent" size={24} />,
    color: "hsl(var(--accent))",
  },
  {
    year: "2021",
    title: "Nacional - Prêmio Motivate",
    description: "Conquistamos o Prêmio Motivate no Campeonato Nacional da FTC, um reconhecimento pela nossa capacidade de inspirar e motivar outras equipes.",
    icon: <Star className="text-cluster-pink" size={24} />,
    color: "hsl(var(--cluster-pink))",
  },
  {
    year: "2025",
    title: "Regional - Dupla Conquista",
    description: "No Regional de 2025, alcançamos um desempenho excepcional, conquistando o Aliança Vencedora e o prestigiado Control Award, reconhecendo nossa excelência em controle e automação.",
    icon: <Calendar className="text-secondary-foreground" size={24} />,
    color: "hsl(var(--secondary))",
  },
];

const NossaHistoria = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Nossa História"
        subtitle="A jornada da equipe 16053 Clusters desde o início até hoje"
      />

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/20 hidden md:block origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <AnimatedSection
                    key={index}
                    delay={index * 0.2}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <div className="relative flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <motion.div 
                        className="flex-shrink-0 w-16 h-16 rounded-full card-gradient flex items-center justify-center border-2 border-foreground/20 z-10"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          boxShadow: `0 0 30px ${event.color}40`
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {event.icon}
                      </motion.div>

                      {/* Content */}
                      <InteractiveCard className="flex-1 p-6 md:p-8">
                        <motion.span 
                          className="inline-block px-3 py-1 rounded-full glass text-sm font-medium mb-3"
                          whileHover={{ scale: 1.1 }}
                        >
                          {event.year}
                        </motion.span>
                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                          {event.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {event.description}
                        </p>
                      </InteractiveCard>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-glow title-underline"
              whileHover={{ scale: 1.02 }}
            >
              Olhando para o Futuro
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Nossa história está apenas começando. Com cada temporada, aprendemos 
              mais, crescemos mais e sonhamos mais alto. Acreditamos que o melhor 
              ainda está por vir, e estamos animados para escrever os próximos 
              capítulos dessa jornada incrível.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NossaHistoria;
