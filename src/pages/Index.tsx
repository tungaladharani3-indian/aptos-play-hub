import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { WalletButton } from "@/components/WalletButton";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ParticleBackground } from "@/components/ParticleBackground";
import { GameCard } from "@/components/GameCard";
import { ReviewCard } from "@/components/ReviewCard";
import { GameModal } from "@/components/GameModal";
import { WinnerModal } from "@/components/WinnerModal";
import { Gamepad2, Trophy, Shield, Zap, ChevronDown, LogOut } from "lucide-react";

const games = [
  { id: 1, name: "Cyber Duel", description: "Fast-paced 1v1 combat in a neon arena. Quick reflexes and strategy determine the winner.", type: "battle" as const, players: "1v1", reward: "1.0 APT", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop" },
  { id: 2, name: "Mind Matrix", description: "Solve complex puzzles faster than your opponent. Logic and speed combined.", type: "mind" as const, players: "1v1", reward: "0.8 APT", image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=400&h=300&fit=crop" },
  { id: 3, name: "Battle Royale", description: "Last player standing wins the pot. 10 players enter, one emerges victorious.", type: "battle" as const, players: "10 Players", reward: "5.0 APT", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop" },
  { id: 4, name: "Chess Masters", description: "Classic chess with a crypto twist. Prove your strategic superiority.", type: "mind" as const, players: "1v1", reward: "2.0 APT", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop" },
  { id: 5, name: "Speed Racer", description: "High-octane racing through digital tracks. Precision driving required.", type: "battle" as const, players: "4 Players", reward: "2.5 APT", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
  { id: 6, name: "Memory Quest", description: "Test your memory against others. Remember patterns, win rewards.", type: "mind" as const, players: "1v1", reward: "0.5 APT", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop" },
  { id: 7, name: "Arena Clash", description: "Team-based combat. Coordinate with allies to defeat enemies.", type: "battle" as const, players: "3v3", reward: "3.0 APT", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop" },
  { id: 8, name: "Trivia Showdown", description: "Knowledge is power. Answer questions correctly to claim victory.", type: "mind" as const, players: "5 Players", reward: "1.5 APT", image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400&h=300&fit=crop" },
  { id: 9, name: "Pixel Warriors", description: "Retro-style fighting game with modern stakes. Combo your way to victory.", type: "battle" as const, players: "1v1", reward: "1.2 APT", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop" },
  { id: 10, name: "Word Wizard", description: "Create words from letters faster than your opponent. Vocabulary pays off.", type: "mind" as const, players: "1v1", reward: "0.6 APT", image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=300&fit=crop" },
];

const reviews = [
  { id: 1, name: "CryptoGamer_X", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop", rating: 5, text: "Best blockchain gaming platform! Won 50 APT last month. The games are fair and payouts are instant.", gamesWon: 127 },
  { id: 2, name: "BlockchainQueen", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", rating: 5, text: "Finally a platform that combines my love for gaming and crypto. The UI is amazing!", gamesWon: 89 },
  { id: 3, name: "AptosWarrior", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", rating: 4, text: "Great variety of games. Mind Matrix is my favorite. Very addictive!", gamesWon: 234 },
  { id: 4, name: "NeonPlayer99", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop", rating: 5, text: "Smooth wallet integration and instant transactions. This is the future of gaming.", gamesWon: 156 },
];

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [wonGame, setWonGame] = useState<typeof games[0] | null>(null);

  const connectWallet = async () => {
    // Simulating Petra wallet connection
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setWalletAddress("0x1a2b3c4d5e6f7890abcdef1234567890abcdef12");
    setIsWalletConnected(true);
    setIsLoading(false);
    setShowDashboard(true);
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress("");
    setShowDashboard(false);
  };

  const handleGameSelect = (game: typeof games[0]) => {
    setSelectedGame(game);
  };

  const handleGameApprove = () => {
    setSelectedGame(null);
    // Simulate game and win
    setTimeout(() => {
      setWonGame(games[0]);
      setShowWinnerModal(true);
    }, 1000);
  };

  const scrollToGames = () => {
    document.getElementById("games-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!showDashboard ? (
        // Landing Page
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
            {/* Logo */}
            <Logo size="large" />
            
            {/* Title */}
            <motion.h1
              className="mt-8 font-display text-5xl md:text-7xl text-center leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gradient">DECENTRALIZED</span>
              <br />
              <span className="text-foreground">GAMING CLUB</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              className="mt-6 text-xl text-muted-foreground text-center max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Battle. Win. Earn. The ultimate Web3 gaming experience on Aptos blockchain.
              Play skill-based games and earn real crypto rewards.
            </motion.p>
            
            {/* Wallet Connect Button */}
            <div className="mt-10">
              <WalletButton
                isConnected={isWalletConnected}
                address={walletAddress}
                onConnect={connectWallet}
                onDisconnect={disconnectWallet}
              />
            </div>
            
            {/* Features */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Gamepad2, title: "10+ Games", desc: "Battle & mind games" },
                { icon: Shield, title: "Secure", desc: "Blockchain verified" },
                { icon: Zap, title: "Instant", desc: "Fast payouts" },
              ].map((feature, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <feature.icon className="w-10 h-10 mx-auto text-primary mb-3" />
                  <h3 className="font-display text-lg text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            className="pb-8 flex justify-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToGames}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
      ) : (
        // Dashboard
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <motion.header
            className="sticky top-0 z-40 glass-card border-b border-border"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Logo size="small" />
                <span className="font-display text-xl text-foreground hidden sm:block">DGC</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="glass-card px-4 py-2 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="font-display text-primary">12.5 APT</span>
                </div>
                
                <button
                  onClick={disconnectWallet}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <LogOut className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.header>

          {/* Main content */}
          <main className="container mx-auto px-4 py-8">
            {/* Welcome section */}
            <motion.section
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                <span className="text-gradient">Welcome, Champion</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Choose your arena and prove your skills. Win big!
              </p>
            </motion.section>

            {/* Games Grid */}
            <section id="games-section" className="mb-16">
              <motion.h2
                className="font-display text-2xl text-foreground mb-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Gamepad2 className="w-6 h-6 text-primary" />
                Choose Your Game
              </motion.h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {games.map((game, index) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    index={index}
                    onSelect={handleGameSelect}
                  />
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="mb-16">
              <motion.h2
                className="font-display text-2xl text-foreground mb-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Trophy className="w-6 h-6 text-primary" />
                Player Reviews
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <ReviewCard key={review.id} review={review} index={index} />
                ))}
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-border py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground">
                © 2024 Decentralized Gaming Club. Built on{" "}
                <span className="text-primary">Aptos Blockchain</span>
              </p>
            </div>
          </footer>
        </div>
      )}

      {/* Game Modal */}
      <GameModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
        onApprove={handleGameApprove}
      />

      {/* Winner Modal */}
      <WinnerModal
        isOpen={showWinnerModal}
        onClose={() => setShowWinnerModal(false)}
        reward={wonGame?.reward || "1.0 APT"}
        gameName={wonGame?.name || ""}
      />
    </div>
  );
};

export default Index;
