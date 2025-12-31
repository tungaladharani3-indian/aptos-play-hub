import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Coins, X, ExternalLink } from "lucide-react";

interface WinnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  reward: string;
  gameName: string;
}

export const WinnerModal = ({ isOpen, onClose, reward, gameName }: WinnerModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Confetti effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? "hsl(180, 100%, 50%)" : "hsl(300, 100%, 60%)",
              }}
              initial={{ top: -20, rotate: 0 }}
              animate={{
                top: "120%",
                rotate: Math.random() * 720,
                x: (Math.random() - 0.5) * 200,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: "easeIn",
              }}
            />
          ))}
        </div>

        <motion.div
          className="glass-card p-8 text-center max-w-md w-full relative"
          initial={{ scale: 0.5, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Trophy animation */}
          <motion.div
            className="w-24 h-24 mx-auto mb-6 relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
            <div className="relative flex items-center justify-center h-full">
              <Trophy className="w-16 h-16 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="font-display text-3xl text-gradient mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            VICTORY!
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            You won {gameName}!
          </motion.p>

          {/* Reward display */}
          <motion.div
            className="bg-muted/50 rounded-2xl p-6 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Coins className="w-8 h-8 text-primary" />
              <span className="font-display text-4xl text-primary">{reward}</span>
            </div>
            <p className="text-muted-foreground text-sm">has been sent to your wallet</p>
          </motion.div>

          {/* Transaction link */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            View transaction on Aptos Explorer
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          {/* Close button */}
          <motion.button
            className="w-full btn-gaming py-4 rounded-xl text-primary-foreground font-display text-lg uppercase"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Play Again
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
