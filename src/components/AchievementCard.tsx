import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  year: string;
  icon?: React.ReactNode;
}

const AchievementCard = ({ title, description, year, icon }: AchievementCardProps) => {
  return (
    <div className="p-6">
      <div className="flex items-start gap-4">
        <motion.div 
          className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          {icon || <Trophy className="text-primary" size={24} />}
        </motion.div>
        <div>
          <motion.span 
            className="text-sm text-foreground/60 font-medium"
            whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
          >
            {year}
          </motion.span>
          <h3 className="font-bold text-lg mt-1 mb-2">{title}</h3>
          <p className="text-foreground/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
