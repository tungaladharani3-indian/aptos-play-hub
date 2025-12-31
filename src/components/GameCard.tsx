import { motion } from "framer-motion";
import { Coins, Users, Trophy, Gamepad2 } from "lucide-react";

interface GameCardProps {
  game: {
    id: number;
    name: string;
    description: string;
    type: "battle" | "mind";
    players: string;
    reward: string;
    image: string;
  };
  index: number;
  onSelect: (game: any) => void;
}

export const GameCard = ({ game, index, onSelect }: GameCardProps) => {
  return (
    <motion.div
      className="game-card cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(game)}
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${game.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Game type badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider ${
          game.type === "battle" 
            ? "bg-destructive/80 text-destructive-foreground" 
            : "bg-primary/80 text-primary-foreground"
        }`}>
          {game.type === "battle" ? "Battle" : "Mind Game"}
        </div>
        
        {/* Play icon overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center glow-cyan">
            <Gamepad2 className="w-8 h-8 text-primary-foreground" />
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {game.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {game.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{game.players}</span>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Coins className="w-4 h-4" />
            <span>{game.reward}</span>
          </div>
        </div>
      </div>
      
      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};
