import { motion } from "framer-motion";
import { Logo } from "./Logo";

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-10" />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ top: 0 }}
        animate={{ top: "100%" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo size="large" />
      </motion.div>
      
      {/* Loading text */}
      <motion.div
        className="mt-8 font-display text-2xl text-primary glow-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing Gaming Arena
        </motion.span>
      </motion.div>
      
      {/* Progress bar */}
      <motion.div
        className="mt-6 w-64 h-1 bg-muted rounded-full overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary/20 rotate-45 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping" />
    </motion.div>
  );
};
