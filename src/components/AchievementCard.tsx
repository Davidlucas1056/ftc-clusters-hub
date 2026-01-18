import { Trophy } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  year: string;
  icon?: React.ReactNode;
}

const AchievementCard = ({ title, description, year, icon }: AchievementCardProps) => {
  return (
    <div className="card-gradient rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          {icon || <Trophy className="text-primary" size={24} />}
        </div>
        <div>
          <span className="text-sm text-foreground/60 font-medium">{year}</span>
          <h3 className="font-bold text-lg mt-1 mb-2">{title}</h3>
          <p className="text-foreground/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
