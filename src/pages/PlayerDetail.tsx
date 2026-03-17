import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Flag, Activity } from 'lucide-react';
import { squad } from '@/data/mockData';

export function PlayerDetail() {
  const { id } = useParams();
  const player = squad.find(p => p.id === id);

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-fener-blue-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Player Not Found</h1>
          <Link to="/" className="text-fener-yellow hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-fener-blue-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-fener-yellow mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Squad
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src={player.image} 
              alt={player.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fener-blue-dark via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-fener-yellow font-display font-black text-8xl md:text-9xl opacity-20 absolute bottom-4 right-8 select-none">
                {player.number}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight relative z-10">
                {player.name}
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                <User className="w-4 h-4 text-fener-yellow" />
                {player.position}
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                <Flag className="w-4 h-4 text-fener-yellow" />
                {player.nationality}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 border-b border-white/10 pb-4">
                Biography
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {player.bio}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Activity className="w-6 h-6 text-fener-yellow" />
                Season Stats
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(player.stats).map(([key, value]) => (
                  <div key={key} className="bg-fener-blue p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-fener-yellow/30 transition-colors">
                    <span className="text-4xl font-black text-fener-yellow mb-2">{value}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button 
                className="w-full sm:w-auto bg-fener-yellow hover:bg-fener-yellow-hover text-fener-blue-dark px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-fener-yellow/20"
                onClick={() => alert(`Added ${player.name} to favorites!`)}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
