import { motion } from 'motion/react';
import { History, ArrowRight } from 'lucide-react';
import { museumEvents } from '@/data/mockData';

export function DigitalMuseum() {
  return (
    <section className="py-24 bg-fener-blue text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-fener-yellow/10 rounded-full text-fener-yellow text-sm font-bold mb-6"
            >
              <History className="w-4 h-4" />
              HISTORY & HERITAGE
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black uppercase leading-none mb-6"
            >
              Digital <span className="text-fener-yellow">Museum</span>
            </motion.h2>
            <p className="text-white/60 text-lg">
              Explore the legendary journey of the world's biggest sports club. From 1907 to eternity, our glory is eternal.
            </p>
          </div>
          <button className="flex items-center gap-2 text-fener-yellow font-bold group">
            FULL TIMELINE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Decorative Grid Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0" />
        
        <div className="flex overflow-x-auto pb-16 px-6 sm:px-12 gap-8 no-scrollbar scroll-smooth">
          {museumEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[320px] md:w-[450px] relative group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 group-hover:border-fener-yellow/50 transition-colors duration-500 shadow-2xl">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fener-blue via-fener-blue/20 to-transparent opacity-80" />
                
                <div className="absolute top-6 left-6 flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-black text-fener-yellow/30 leading-none mb-2">
                    {event.year}
                  </span>
                  <div className="w-px h-12 bg-gradient-to-b from-fener-yellow/50 to-transparent" />
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-fener-yellow transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Year indicator on the timeline line */}
              <div className="mt-8 flex flex-col items-center relative z-10">
                <div className="w-4 h-4 rounded-full bg-fener-yellow shadow-[0_0_15px_rgba(255,237,0,0.5)] mb-2" />
                <span className="text-sm font-bold text-white/40">{event.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
