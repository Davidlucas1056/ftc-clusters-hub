import { Link } from "react-router-dom";
import { Users, Trophy, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoImg from "@/assets/logo-clusters.png";
import teamPhoto from "@/assets/team-photo.jpeg";
import AnimatedSection from "@/components/AnimatedSection";
import InteractiveCard from "@/components/InteractiveCard";
import FloatingElement from "@/components/FloatingElement";
import MagneticButton from "@/components/MagneticButton";
import ParallaxImage from "@/components/ParallaxImage";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
        <div className="container mx-auto px-4 text-center">
          <FloatingElement duration={4} distance={15}>
            <motion.img 
              src={logoImg} 
              alt="Clusters 16053 Logo" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 object-contain"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            />
          </FloatingElement>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
            >
              FIRST Tech Challenge • Team 16053
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {"CLUSTERS".split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{ 
                  scale: 1.2, 
                  color: "hsl(var(--primary))",
                  textShadow: "0 0 30px hsl(var(--primary))"
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Somos uma equipe apaixonada por robótica, inovação e tecnologia. 
            Juntos, construímos o futuro.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <MagneticButton>
              <Link to="/quem-somos" className="btn-primary inline-flex items-center gap-2">
                Conheça-nos
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/patrocinio"
                className="px-6 py-3 rounded-lg glass font-bold hover:bg-foreground/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                Apoie nossa equipe
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <motion.div 
              className="w-1 h-3 bg-foreground/50 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Team Photo Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto">
            <ParallaxImage 
              src={teamPhoto} 
              alt="Equipe Clusters 16053" 
              className="w-full rounded-2xl shadow-2xl border-2 border-foreground/10 h-72"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { to: "/nossa-equipe", icon: Users, iconColor: "text-primary", bgColor: "bg-primary/20", title: "Nossa Equipe", desc: "Conheça os membros que fazem a magia acontecer" },
              { to: "/conquistas", icon: Trophy, iconColor: "text-accent", bgColor: "bg-accent/20", title: "Conquistas", desc: "6 participações em campeonatos nacionais" },
              { to: "/patrocinio", icon: Heart, iconColor: "text-cluster-pink", bgColor: "bg-cluster-pink/20", title: "Patrocínio", desc: "Faça parte dessa história e apoie nossa missão" },
            ].map((item, index) => (
              <AnimatedSection key={item.to} delay={index * 0.1}>
                <Link to={item.to}>
                  <InteractiveCard className="p-8 text-center h-full">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full ${item.bgColor} flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={item.iconColor} size={32} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </InteractiveCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-8 text-glow"
              whileHover={{ scale: 1.02 }}
            >
              Nossa Missão
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Inspirar jovens a explorar o mundo da ciência, tecnologia, 
              engenharia e matemática (STEM) através da robótica competitiva. 
              Acreditamos que cada desafio é uma oportunidade de aprender e crescer juntos.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-glow"
              whileHover={{ scale: 1.02 }}
            >
              Quer saber mais?
            </motion.h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              Descubra nossa história, conheça nossa equipe e veja como você pode 
              fazer parte dessa jornada incrível.
            </p>
            <MagneticButton>
              <Link to="/nossa-historia" className="btn-primary inline-flex items-center gap-2">
                Explore Nossa História
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
