import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { votingOptions } from '@/data/mockData';

export function MatchVoting() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (id: string) => {
    setSelectedId(id);
    setHasVoted(true);
  };

  const totalVotes = votingOptions.reduce((acc, opt) => acc + opt.votes, 0) + (hasVoted ? 1 : 0);

  return (
    <section className="py-24 bg-fener-blue-dark/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-fener-yellow/10 rounded-full text-fener-yellow text-sm font-bold mb-6"
          >
            <Trophy className="w-4 h-4" />
            VOTE NOW
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4"
          >
            Man of the <span className="text-fener-yellow">Match</span>
          </motion.h2>
          <p className="text-white/60 max-w-xl">
            Who was the best player in our victory against Trabzonspor? Cast your vote and help us decide!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {votingOptions.map((player) => {
            const voteCount = player.id === selectedId ? player.votes + 1 : player.votes;
            const percentage = Math.round((voteCount / totalVotes) * 100);

            return (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={!hasVoted ? { y: -10 } : {}}
                className={`relative p-6 rounded-3xl border transition-all duration-500 ${
                  selectedId === player.id 
                    ? 'bg-fener-yellow border-fener-yellow shadow-[0_0_30px_rgba(255,237,0,0.2)]' 
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full overflow-hidden border-2 transition-colors ${
                    selectedId === player.id ? 'border-fener-blue' : 'border-white/10'
                  }`}>
                    <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                  </div>
                  {selectedId === player.id && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-fener-blue text-white p-1 rounded-full"
                    >
                      <CheckCircle2 className="w-5 h-5 text-fener-yellow" />
                    </motion.div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className={`font-bold mb-4 transition-colors ${
                    selectedId === player.id ? 'text-fener-blue' : 'text-white'
                  }`}>
                    {player.name}
                  </h3>

                  <AnimatePresence mode="wait">
                    {!hasVoted ? (
                      <button
                        onClick={() => handleVote(player.id)}
                        className="w-full py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-colors"
                      >
                        Vote
                      </button>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2"
                      >
                        <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full ${selectedId === player.id ? 'bg-fener-blue' : 'bg-fener-yellow'}`}
                          />
                        </div>
                        <span className={`text-sm font-bold ${
                          selectedId === player.id ? 'text-fener-blue' : 'text-fener-yellow'
                        }`}>
                          {percentage}%
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
