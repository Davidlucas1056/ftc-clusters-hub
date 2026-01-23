import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Heart, Users, Lightbulb, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import fllMentorshipImg from "@/assets/fll-mentorship.jpeg";
import harmoniaImg from "@/assets/harmonia-project.jpeg";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import InteractiveCard from "@/components/InteractiveCard";
import ParallaxImage from "@/components/ParallaxImage";
import MagneticButton from "@/components/MagneticButton";

const NossosProjetos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Nossos Projetos"
        subtitle="Iniciativas que fazem a diferença na comunidade"
      />

      {/* Projeto Harmonia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="text-cluster-pink" size={32} />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-glow">
                  Projeto Harmonia
                </h2>
              </motion.div>
              <motion.div 
                className="w-16 h-1 bg-primary mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </AnimatedSection>

            {/* Imagem do Projeto Harmonia */}
            <AnimatedSection delay={0.2}>
              <ParallaxImage 
                src={harmoniaImg} 
                alt="Projeto Harmonia - Oficina de robótica" 
                className="max-w-2xl mx-auto mb-10 rounded-2xl border-2 border-foreground/10 shadow-glow h-64"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <InteractiveCard className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cluster-pink to-primary flex items-center justify-center">
                      <Lightbulb className="text-white" size={48} />
                    </div>
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                      O Projeto Harmonia é uma iniciativa da Cluster 16053 que tem como objetivo 
                      levar a robótica de forma acessível e inclusiva para crianças e adolescentes. 
                      Através de atividades práticas, oficinas e contato direto com a tecnologia, 
                      o projeto busca despertar o interesse pelo STEM, mostrando que a robótica 
                      pode ser simples, divertida e ao alcance de todos, independentemente da 
                      realidade social.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <motion.div 
                    className="glass rounded-xl p-6 text-center"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      <AnimatedCounter value={100} suffix="+" />
                    </div>
                    <p className="text-foreground/70">Crianças Impactadas</p>
                  </motion.div>
                  <motion.div 
                    className="glass rounded-xl p-6 text-center"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--accent) / 0.3)" }}
                  >
                    <div className="text-3xl font-bold text-accent mb-2">
                      <AnimatedCounter value={5} />
                    </div>
                    <p className="text-foreground/70">Oficinas Realizadas</p>
                  </motion.div>
                  <motion.div 
                    className="glass rounded-xl p-6 text-center"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--cluster-pink) / 0.3)" }}
                  >
                    <div className="text-3xl font-bold text-cluster-pink mb-2">∞</div>
                    <p className="text-foreground/70">Sonhos Inspirados</p>
                  </motion.div>
                </div>
              </InteractiveCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Apadrinhamento FLL */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="text-primary" size={32} />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-glow">
                  Apadrinhamento de Equipes FLL
                </h2>
              </motion.div>
              <motion.div 
                className="w-16 h-1 bg-accent mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <AnimatedSection direction="left">
                <ParallaxImage 
                  src={fllMentorshipImg} 
                  alt="Mentoria de equipes FLL" 
                  className="card-gradient rounded-2xl h-80"
                />
              </AnimatedSection>

              <AnimatedSection direction="right" className="space-y-6">
                <InteractiveCard className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <BookOpen className="text-accent" size={28} />
                    </motion.div>
                    <h3 className="text-xl font-bold">Programa de Mentoria</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Acreditamos no poder da colaboração e no compartilhamento de conhecimento. 
                    Por isso, desenvolvemos um programa de apadrinhamento para equipes da 
                    FIRST Lego League (FLL), ajudando novos times a dar seus primeiros passos 
                    na robótica competitiva.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Oferecemos suporte técnico, orientação estratégica e mentoria para que 
                    essas equipes possam desenvolver seus robôs e projetos de inovação, 
                    compartilhando nossa experiência e paixão pela robótica.
                  </p>
                </InteractiveCard>

                <motion.div 
                  className="glass rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter value={7} duration={1.5} />
                  </div>
                  <p className="text-lg text-foreground/80">Equipes fazem parte do programa</p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-glow title-underline"
              whileHover={{ scale: 1.02 }}
            >
              Faça Parte da Mudança
            </motion.h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Nossos projetos só são possíveis graças ao apoio de patrocinadores e 
              voluntários. Quer fazer parte dessa transformação?
            </p>
            <MagneticButton>
              <motion.a 
                href="/patrocinio" 
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Seja um Apoiador
              </motion.a>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NossosProjetos;
