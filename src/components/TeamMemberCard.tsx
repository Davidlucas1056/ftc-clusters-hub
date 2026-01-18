interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}

const TeamMemberCard = ({ name, role, imageUrl }: TeamMemberCardProps) => {
  return (
    <div className="card-gradient rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-glow">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-foreground/20">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cluster-blue to-cluster-pink flex items-center justify-center">
            <span className="text-2xl font-bold">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-foreground/70 text-sm">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
