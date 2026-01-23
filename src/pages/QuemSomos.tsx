import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import teamRegional from "@/assets/team-regional.jpeg";
import AnimatedSection from "@/components/AnimatedSection";
import InteractiveCard from "@/components/InteractiveCard";
import ParallaxImage from "@/components/ParallaxImage";

const values = [
  { icon: Target, iconColor: "text-primary", bgColor: "bg-primary/20", title: "Foco", desc: "Mantemos o olhar fixo em nossos objetivos, trabalhando com determinação para alcançar cada meta estabelecida." },
  { icon: Lightbulb, iconColor: "text-accent", bgColor: "bg-accent/20", title: "Inovação", desc: "Buscamos constantemente novas soluções e ideias criativas para superar os desafios que encontramos." },
  { icon: Users, iconColor: "text-cluster-pink", bgColor: "bg-cluster-pink/20", title: "Trabalho em Equipe", desc: "Acreditamos que juntos somos mais fortes. Cada membro contribui com suas habilidades únicas." },
  { icon: Rocket, iconColor: "text-secondary-foreground", bgColor: "bg-secondary/40", title: "Ambição", desc: "Sonhamos alto e trabalhamos duro para transformar esses sonhos em realidade, temporada após temporada." },
];

const QuemSomos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Quem Somos"
        subtitle="Somos a equipe 16053 Clusters, uma equipe de robótica da FIRST Tech Challenge"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Sobre a Clusters */}
            <AnimatedSection>
              <InteractiveCard className="p-8 md:p-12 mb-12">
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-6 text-glow"
                  whileHover={{ scale: 1.02 }}
                >
                  Sobre a Clusters 16053
                </motion.h2>
                <p className="text-foreground/80 leading-relaxed">
                  A Cluster 16053 é uma equipe inspirada pela robótica e movida pela paixão 
                  por aprender, criar e inovar. Praticamos ativamente o método STEM, integrando 
                  ciência, tecnologia, engenharia e matemática no desenvolvimento de soluções 
                  técnicas e no crescimento pessoal de cada membro. Mais do que competir, 
                  acreditamos nos valores da FIRST e colocamos em prática o Gracious Professionalism®, 
                  trabalhando com respeito, colaboração e ética, dentro e fora da arena, sempre 
                  buscando evoluir como equipe e impactar positivamente nossa comunidade.
                </p>
                <div className="mt-6 max-w-xs mx-auto">
                  <ParallaxImage 
                    src={teamRegional} 
                    alt="Equipe Clusters no Regional 2025" 
                    className="w-full rounded-xl border-2 border-foreground/10 h-48"
                  />
                </div>
              </InteractiveCard>
            </AnimatedSection>

            {/* O que é a FTC */}
            <AnimatedSection delay={0.2}>
              <InteractiveCard className="p-8 md:p-12 mb-12">
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-6 text-glow"
                  whileHover={{ scale: 1.02 }}
                >
                  O que é a FTC?
                </motion.h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  A FIRST Tech Challenge (FTC) é uma competição internacional de robótica 
                  para estudantes do ensino fundamental e médio. Através dela, jovens de 
                  todo o mundo têm a oportunidade de projetar, construir e programar robôs 
                  para competir em desafios emocionantes.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Mais do que construir robôs, a FTC ensina trabalho em equipe, resolução 
                  de problemas, liderança e gracious professionalism - valores que 
                  carregamos em tudo o que fazemos.
                </p>
              </InteractiveCard>
            </AnimatedSection>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={0.1 * index}>
                  <InteractiveCard className="p-6 h-full">
                    <motion.div 
                      className={`w-12 h-12 rounded-full ${value.bgColor} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className={value.iconColor} size={24} />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.desc}</p>
                  </InteractiveCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
