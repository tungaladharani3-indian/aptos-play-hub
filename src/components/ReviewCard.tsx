import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    text: string;
    gamesWon: number;
  };
  index: number;
}

export const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <motion.div
      className="glass-card p-6 relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
          <img 
            src={review.avatar} 
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-display text-foreground">{review.name}</h4>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Review text */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        "{review.text}"
      </p>
      
      {/* Stats */}
      <div className="flex items-center gap-2 text-sm text-primary">
        <span className="font-display">{review.gamesWon}</span>
        <span className="text-muted-foreground">games won</span>
      </div>
    </motion.div>
  );
};
