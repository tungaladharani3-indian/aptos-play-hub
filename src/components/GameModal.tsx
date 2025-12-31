import { motion, AnimatePresence } from "framer-motion";
import { X, Wallet, Trophy, Users, Clock, Coins, CheckCircle } from "lucide-react";
import { useState } from "react";

interface GameModalProps {
  game: {
    id: number;
    name: string;
    description: string;
    type: "battle" | "mind";
    players: string;
    reward: string;
    image: string;
  } | null;
  onClose: () => void;
  onApprove: () => void;
}

export const GameModal = ({ game, onClose, onApprove }: GameModalProps) => {
  const [isApproving, setIsApproving] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  if (!game) return null;

  const handleApprove = async () => {
    setIsApproving(true);
    // Simulate wallet approval
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsApproving(false);
    setIsApproved(true);
    setTimeout(() => {
      onApprove();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-card w-full max-w-lg overflow-hidden"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header image */}
          <div className="relative h-48">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${game.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-display uppercase ${
                game.type === "battle" 
                  ? "bg-destructive/20 text-destructive" 
                  : "bg-primary/20 text-primary"
              }`}>
                {game.type}
              </span>
              <h2 className="font-display text-2xl text-foreground">{game.name}</h2>
            </div>

            <p className="text-muted-foreground mb-6">{game.description}</p>

            {/* Game stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="glass-card p-3 text-center">
                <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                <span className="text-sm text-muted-foreground">{game.players}</span>
              </div>
              <div className="glass-card p-3 text-center">
                <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                <span className="text-sm text-muted-foreground">5-10 min</span>
              </div>
              <div className="glass-card p-3 text-center">
                <Coins className="w-5 h-5 mx-auto mb-1 text-primary" />
                <span className="text-sm text-muted-foreground">{game.reward}</span>
              </div>
            </div>

            {/* Entry fee info */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Entry Fee</span>
                <span className="font-display text-xl text-primary">0.5 APT</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-muted-foreground">Potential Win</span>
                <span className="font-display text-xl text-secondary">{game.reward}</span>
              </div>
            </div>

            {/* Action button */}
            <motion.button
              className={`w-full py-4 rounded-xl font-display text-lg uppercase tracking-wider flex items-center justify-center gap-3 ${
                isApproved 
                  ? "bg-green-500 text-white" 
                  : "btn-gaming text-primary-foreground"
              }`}
              whileHover={{ scale: isApproving ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleApprove}
              disabled={isApproving || isApproved}
            >
              {isApproved ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Approved! Starting Game...
                </>
              ) : isApproving ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Awaiting Wallet Approval...
                </>
              ) : (
                <>
                  <Wallet className="w-5 h-5" />
                  Approve & Play
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
