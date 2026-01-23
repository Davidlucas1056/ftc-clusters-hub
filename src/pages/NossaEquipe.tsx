import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import teamPhotoImg from "@/assets/team-photo.jpeg";
import memberPedro from "@/assets/member-pedro.png";
import memberDavid from "@/assets/member-david.png";
import memberArthur from "@/assets/member-arthur.png";
import memberVitoria from "@/assets/member-vitoria.png";
import memberHarrison from "@/assets/member-harrison.png";
import mentorJocelio from "@/assets/mentor-jocelio.png";
import mentorWelligton from "@/assets/mentor-welligton.png";
import mentorPaixao from "@/assets/mentor-paixao.png";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import MagneticButton from "@/components/MagneticButton";

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Pedro Iago", role: "Engenheiro", imageUrl: memberPedro },
  { name: "David", role: "Programador", imageUrl: memberDavid },
  { name: "Arthur", role: "Engenheiro Mecânico", imageUrl: memberArthur },
  { name: "Vitória", role: "Designer", imageUrl: memberVitoria },
  { name: "Harrison", role: "Programador", imageUrl: memberHarrison },
];

const mentors: TeamMember[] = [
  { name: "Jocélio", role: "Técnico", imageUrl: mentorJocelio },
  { name: "Welligton", role: "Mentor", imageUrl: mentorWelligton },
  { name: "Paixão", role: "Mentor", imageUrl: mentorPaixao },
];

const TeamMemberCardHover = ({ name, role, imageUrl }: TeamMember) => {
  return (
    <motion.div 
      className="group relative card-gradient rounded-xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden">
        {imageUrl ? (
          <motion.img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cluster-blue to-cluster-pink flex items-center justify-center">
            <motion.span 
              className="text-4xl font-bold"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {name.charAt(0)}
            </motion.span>
          </div>
        )}
      </div>
      
      {/* Role - always visible */}
      <div className="p-4 text-center">
        <p className="text-foreground/70 text-sm">{role}</p>
      </div>
      
      {/* Name overlay - visible on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="font-bold text-2xl text-white text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

const NossaEquipe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Nossa Equipe"
        subtitle="Conheça as pessoas incríveis que fazem a Clusters acontecer"
      />

      {/* Team Photo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto">
            <ParallaxImage 
              src={teamPhotoImg} 
              alt="Equipe Clusters 16053" 
              className="w-full rounded-2xl border-2 border-foreground/10 shadow-glow h-72"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline"
              whileHover={{ scale: 1.02 }}
            >
              Membros da Equipe
            </motion.h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <TeamMemberCardHover name={member.name} role={member.role} imageUrl={member.imageUrl} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline"
              whileHover={{ scale: 1.02 }}
            >
              Nossos Mentores
            </motion.h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mentors.map((mentor, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <TeamMemberCardHover name={mentor.name} role={mentor.role} imageUrl={mentor.imageUrl} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-glow"
              whileHover={{ scale: 1.02 }}
            >
              Quer fazer parte da equipe?
            </motion.h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Estamos sempre em busca de pessoas apaixonadas por tecnologia, 
              inovação e trabalho em equipe. Se você tem interesse em robótica 
              e quer fazer a diferença, entre em contato conosco!
            </p>
            <MagneticButton>
              <motion.a
                href="mailto:clusters16053@gmail.com"
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Junte-se a Nós
              </motion.a>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NossaEquipe;
