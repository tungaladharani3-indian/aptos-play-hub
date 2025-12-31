import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

interface WalletButtonProps {
  isConnected: boolean;
  address?: string;
  onConnect: () => void;
  onDisconnect: () => void;
}

export const WalletButton = ({ isConnected, address, onConnect, onDisconnect }: WalletButtonProps) => {
  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <motion.button
      className="btn-gaming px-8 py-4 rounded-xl text-primary-foreground flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={isConnected ? onDisconnect : onConnect}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Wallet className="w-5 h-5" />
      <span className="text-lg">
        {isConnected ? truncateAddress(address || "") : "Connect Petra Wallet"}
      </span>
    </motion.button>
  );
};
