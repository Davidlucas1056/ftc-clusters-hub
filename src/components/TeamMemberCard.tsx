import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}

const TeamMemberCard = ({ name, role, imageUrl }: TeamMemberCardProps) => {
  return (
    <motion.div 
      className="card-gradient rounded-xl p-6 text-center cursor-pointer"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-foreground/20"
        whileHover={{ scale: 1.1 }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cluster-blue to-cluster-pink flex items-center justify-center">
            <motion.span 
              className="text-2xl font-bold"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {name.charAt(0)}
            </motion.span>
          </div>
        )}
      </motion.div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-foreground/70 text-sm">{role}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
