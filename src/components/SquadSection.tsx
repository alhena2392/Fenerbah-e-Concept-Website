import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { squad } from '@/data/mockData';

export function SquadSection() {
  return (
    <section id="squad" className="py-24 bg-fener-blue-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fener-yellow/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight"
            >
              First <span className="text-fener-yellow">Team</span>
            </motion.h2>
            <p className="text-white/60 max-w-xl text-lg">
              Meet the players representing the glorious yellow and navy blue colors this season.
            </p>
          </div>
          <Link 
            to="/squad" 
            className="group flex items-center gap-2 text-fener-yellow font-semibold hover:text-white transition-colors"
          >
            View Full Squad
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {squad.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    </section>
  );
}
