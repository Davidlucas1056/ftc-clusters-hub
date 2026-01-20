import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import teamPhotoImg from "@/assets/team-photo.jpeg";
import memberPedro from "@/assets/member-pedro.png";
import memberDavid from "@/assets/member-david.png";
import memberArthur from "@/assets/member-arthur.png";
import memberVitoria from "@/assets/member-vitoria.png";
import memberHarrison from "@/assets/member-harrison.png";

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Pedro Iago", role: "Capitão", imageUrl: memberPedro },
  { name: "David", role: "Programador", imageUrl: memberDavid },
  { name: "Arthur", role: "Engenheiro Mecânico", imageUrl: memberArthur },
  { name: "Vitória", role: "Designer", imageUrl: memberVitoria },
  { name: "Harrison", role: "Marketing", imageUrl: memberHarrison },
];

import mentorJocelio from "@/assets/mentor-jocelio.png";
import mentorWelligton from "@/assets/mentor-welligton.png";
import mentorPaixao from "@/assets/mentor-paixao.png";

const mentors: TeamMember[] = [
  { name: "Jocélio", role: "Técnico", imageUrl: mentorJocelio },
  { name: "Welligton", role: "Mentor", imageUrl: mentorWelligton },
  { name: "Paixão", role: "Mentor", imageUrl: mentorPaixao },
];

const TeamMemberCardHover = ({ name, role, imageUrl }: TeamMember) => {
  return (
    <div className="group relative card-gradient rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cluster-blue to-cluster-pink flex items-center justify-center">
            <span className="text-4xl font-bold">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      {/* Role - always visible */}
      <div className="p-4 text-center">
        <p className="text-foreground/70 text-sm">{role}</p>
      </div>
      
      {/* Name overlay - visible on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="font-bold text-2xl text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {name}
        </h3>
      </div>
    </div>
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
          <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border-2 border-foreground/10 shadow-glow">
            <img 
              src={teamPhotoImg} 
              alt="Equipe Clusters 16053" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline">
            Membros da Equipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className={`animate-fade-in-up stagger-${(index % 6) + 1}`}>
                <TeamMemberCardHover name={member.name} role={member.role} imageUrl={member.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline">
            Nossos Mentores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mentors.map((mentor, index) => (
              <div key={index} className="animate-fade-in-up">
                <TeamMemberCardHover name={mentor.name} role={mentor.role} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            Quer fazer parte da equipe?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Estamos sempre em busca de pessoas apaixonadas por tecnologia, 
            inovação e trabalho em equipe. Se você tem interesse em robótica 
            e quer fazer a diferença, entre em contato conosco!
          </p>
          <a
            href="mailto:contato@clusters16053.com"
            className="btn-primary"
          >
            Junte-se a Nós
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NossaEquipe;
