import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Calendar, Flag, Rocket, Star } from "lucide-react";

const timelineEvents = [
  {
    year: "2023",
    title: "O Início",
    description: "A equipe 16053 Clusters foi fundada por um grupo de estudantes apaixonados por robótica e tecnologia.",
    icon: <Flag className="text-primary" size={24} />,
  },
  {
    year: "2023",
    title: "Primeira Temporada",
    description: "Participamos da nossa primeira temporada da FTC, aprendendo muito sobre design, programação e trabalho em equipe.",
    icon: <Rocket className="text-accent" size={24} />,
  },
  {
    year: "2024",
    title: "Crescimento",
    description: "Expandimos nossa equipe e aprimoramos nossas habilidades técnicas, alcançando resultados cada vez melhores.",
    icon: <Star className="text-cluster-pink" size={24} />,
  },
  {
    year: "2024",
    title: "Novos Horizontes",
    description: "Continuamos evoluindo e buscando novas conquistas, sempre mantendo nossos valores e paixão pela robótica.",
    icon: <Calendar className="text-secondary-foreground" size={24} />,
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
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/20 hidden md:block" />

              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-6 animate-fade-in-up stagger-${index + 1}`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full card-gradient flex items-center justify-center border-2 border-foreground/20 z-10">
                      {event.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 card-gradient rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-glow">
                      <span className="inline-block px-3 py-1 rounded-full glass text-sm font-medium mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow title-underline">
            Olhando para o Futuro
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Nossa história está apenas começando. Com cada temporada, aprendemos 
            mais, crescemos mais e sonhamos mais alto. Acreditamos que o melhor 
            ainda está por vir, e estamos animados para escrever os próximos 
            capítulos dessa jornada incrível.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NossaHistoria;
