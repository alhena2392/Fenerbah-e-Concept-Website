import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, AlertCircle, ChevronDown, Repeat2 } from 'lucide-react';
import { squad } from '@/data/mockData';

export function PlayerComparison() {
  const [player1Id, setPlayer1Id] = useState<string>(squad[2].id); // Tadic
  const [player2Id, setPlayer2Id] = useState<string>(squad[3].id); // Szymanski

  const player1 = useMemo(() => squad.find(p => p.id === player1Id), [player1Id]);
  const player2 = useMemo(() => squad.find(p => p.id === player2Id), [player2Id]);

  if (!player1 || !player2) return null;

  const compareStats = [
    { label: 'Appearances', key: 'appearances' },
    { label: 'Goals', key: 'goals' },
    { label: 'Assists', key: 'assists' },
  ];

  const handleSwap = () => {
    setPlayer1Id(player2Id);
    setPlayer2Id(player1Id);
  };

  return (
    <section className="py-24 bg-fener-blue-dark overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-fener-yellow/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-fener-yellow/10 rounded-full text-fener-yellow text-sm font-bold mb-6"
          >
            <Users className="w-4 h-4" />
            BATTLE OF THE STARS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4"
          >
            Player <span className="text-fener-yellow">Comparison</span>
          </motion.h2>
          <p className="text-white/60 max-w-xl">
            Compare our heroes' season statistics and see how they contribute to our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 max-w-7xl mx-auto">
          {/* Player 1 Selector & Profile */}
          <PlayerSlot 
            player={player1} 
            isPlayer1={true} 
            onSelect={setPlayer1Id} 
            otherId={player2Id} 
          />

          {/* VS & Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-fener-yellow flex items-center justify-center shadow-[0_0_30px_rgba(255,237,0,0.3)]">
              <span className="text-fener-blue text-2xl font-black">VS</span>
            </div>
            <button 
              onClick={handleSwap}
              className="p-3 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-full transition-all group"
            >
              <Repeat2 className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>

          {/* Player 2 Selector & Profile */}
          <PlayerSlot 
            player={player2} 
            isPlayer1={false} 
            onSelect={setPlayer2Id} 
            otherId={player1Id} 
          />
        </div>

        {/* Stats Comparison Grid */}
        <div className="mt-16 max-w-5xl mx-auto space-y-8">
          {compareStats.map((stat) => {
            const val1 = (player1.stats as any)[stat.key] || 0;
            const val2 = (player2.stats as any)[stat.key] || 0;
            const maxVal = Math.max(val1, val2, 1);
            
            return (
              <div key={stat.key} className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                  <span className={`${val1 >= val2 ? 'text-fener-yellow' : 'text-white/40'}`}>{val1}</span>
                  <span className="text-white/60 text-xs">{stat.label}</span>
                  <span className={`${val2 >= val1 ? 'text-fener-yellow' : 'text-white/40'}`}>{val2}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 h-3 bg-white/5 rounded-full overflow-hidden p-0.5">
                  <div className="flex justify-end">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(val1 / maxVal) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${val1 >= val2 ? 'bg-fener-yellow' : 'bg-white/20'}`}
                    />
                  </div>
                  <div className="flex justify-start">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(val2 / maxVal) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${val2 >= val1 ? 'bg-fener-yellow' : 'bg-white/20'}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlayerSlot({ player, isPlayer1, onSelect, otherId }: { 
  player: any, 
  isPlayer1: boolean, 
  onSelect: (id: string) => void,
  otherId: string
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${isPlayer1 ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-end gap-6 ${isPlayer1 ? 'flex-row-reverse' : 'flex-row'}`}>
        <motion.div 
          key={player.id}
          initial={{ opacity: 0, x: isPlayer1 ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group flex-shrink-0"
        >
          <div className="w-48 h-64 md:w-56 md:h-80 overflow-hidden rounded-[2rem] border-2 border-white/10 group-hover:border-fener-yellow/50 transition-colors duration-500 shadow-2xl">
            <img 
              src={player.image} 
              alt={player.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fener-blue/80 via-transparent to-transparent" />
          </div>
          <div className={`absolute -bottom-4 ${isPlayer1 ? '-right-4' : '-left-4'} w-12 h-12 bg-fener-blue border-2 border-fener-yellow rounded-full flex items-center justify-center font-black text-fener-yellow`}>
            {player.number}
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 py-8">
          <div className="space-y-1">
            <p className="text-fener-yellow/60 text-xs font-bold uppercase tracking-[0.2em]">
              {player.position}
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-white italic">
              {player.name.split(' ').map((n: string) => n.toUpperCase()).join(' ')}
            </h3>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold flex items-center gap-2 transition-all"
            >
              CHANGE PLAYER <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-12 left-0 right-0 z-50 bg-fener-blue-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-w-[200px]"
                >
                  {squad.filter(p => p.id !== otherId).map(p => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onSelect(p.id);
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-fener-yellow/10 text-white/70 hover:text-fener-yellow text-sm font-bold transition-colors border-b border-white/5 last:border-0"
                    >
                      {p.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
