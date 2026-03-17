import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { squad } from '@/data/mockData';

export function SquadList() {
  return (
    <main className="pt-32 pb-24 bg-fener-blue-dark min-h-screen">
      <div className="container mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-fener-yellow mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4"
          >
            First <span className="text-fener-yellow">Team</span> Squad
          </motion.h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Meet the players representing the glorious yellow and navy blue colors this season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {squad.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-fener-blue aspect-[3/4] shadow-xl border border-white/5 hover:border-fener-yellow/50 transition-all duration-500"
            >
              <img 
                src={player.image} 
                alt={player.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-fener-blue-dark via-fener-blue-dark/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-fener-yellow font-display font-black text-5xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  {player.number}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide leading-tight mb-1">
                  {player.name}
                </h3>
                <p className="text-sm text-white/70 font-medium uppercase tracking-widest mb-4">
                  {player.position}
                </p>
                
                <Link 
                  to={`/squad/${player.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-fener-blue-dark bg-fener-yellow px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  View Profile
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
