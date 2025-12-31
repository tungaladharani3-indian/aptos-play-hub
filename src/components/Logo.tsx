import { motion } from "framer-motion";

export const Logo = ({ size = "large" }: { size?: "small" | "large" }) => {
  const dimensions = size === "large" ? "w-32 h-32" : "w-12 h-12";
  
  return (
    <motion.div
      className={`${dimensions} relative`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-secondary rounded-full" />
      </motion.div>
      
      {/* Inner hexagon */}
      <motion.div 
        className="absolute inset-2 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(300, 100%, 60%)" />
            </linearGradient>
          </defs>
          <polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill="none"
            stroke="url(#hexGradient)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
      
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-primary font-display font-black"
          style={{ fontSize: size === "large" ? "2rem" : "0.75rem" }}
          animate={{ 
            textShadow: [
              "0 0 10px hsl(180, 100%, 50%)",
              "0 0 20px hsl(180, 100%, 50%)",
              "0 0 10px hsl(180, 100%, 50%)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          DGC
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse-slow" />
    </motion.div>
  );
};
