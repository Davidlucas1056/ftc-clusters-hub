import { Link } from "react-router-dom";
import { Users, Trophy, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoImg from "@/assets/logo-clusters.png";
import teamPhoto from "@/assets/team-photo.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <img 
              src={logoImg} 
              alt="Clusters 16053 Logo" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 object-contain"
            />
          </div>
          
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              FIRST Tech Challenge • Team 16053
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow animate-fade-in-up stagger-1">
            CLUSTERS
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up stagger-2">
            Somos uma equipe apaixonada por robótica, inovação e tecnologia. 
            Juntos, construímos o futuro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Link to="/quem-somos" className="btn-primary inline-flex items-center gap-2">
              Conheça-nos
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/patrocinio"
              className="px-6 py-3 rounded-lg glass font-bold hover:bg-foreground/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              Apoie nossa equipe
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <img 
              src={teamPhoto} 
              alt="Equipe Clusters 16053" 
              className="w-full rounded-2xl shadow-2xl border-2 border-foreground/10"
            />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/nossa-equipe"
              className="card-gradient rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:animate-pulse-glow">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nossa Equipe</h3>
              <p className="text-foreground/70">
                Conheça os membros que fazem a magia acontecer
              </p>
            </Link>

            <Link
              to="/conquistas"
              className="card-gradient rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Trophy className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Conquistas</h3>
              <p className="text-foreground/70">
                6 participações em campeonatos nacionais
              </p>
            </Link>

            <Link
              to="/patrocinio"
              className="card-gradient rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cluster-pink/20 flex items-center justify-center">
                <Heart className="text-cluster-pink" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Patrocínio</h3>
              <p className="text-foreground/70">
                Faça parte dessa história e apoie nossa missão
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-glow">
              Nossa Missão
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Inspirar jovens a explorar o mundo da ciência, tecnologia, 
              engenharia e matemática (STEM) através da robótica competitiva. 
              Acreditamos que cada desafio é uma oportunidade de aprender e crescer juntos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            Quer saber mais?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Descubra nossa história, conheça nossa equipe e veja como você pode 
            fazer parte dessa jornada incrível.
          </p>
          <Link to="/nossa-historia" className="btn-primary inline-flex items-center gap-2">
            Explore Nossa História
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
