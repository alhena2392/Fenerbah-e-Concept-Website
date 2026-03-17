import { motion } from 'motion/react';
import { fixtures } from '@/data/mockData';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function Fixtures() {
  return (
    <section id="fixtures" className="py-24 bg-fener-blue relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4"
          >
            Season <span className="text-fener-yellow">Fixtures</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl text-lg">
            2025/2026 Season Schedule & Results
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {fixtures.map((fixture, index) => {
            const matchDate = new Date(fixture.date);
            const isFenerHome = fixture.homeTeam === "Fenerbahçe";
            
            return (
              <motion.div
                key={fixture.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
                  fixture.status === 'upcoming' 
                    ? 'bg-gradient-to-r from-fener-blue-dark to-fener-blue border-fener-yellow/30 hover:border-fener-yellow hover:shadow-[0_0_20px_rgba(255,209,0,0.15)] transform hover:-translate-y-1 relative overflow-hidden' 
                    : 'bg-white/5 border-transparent hover:bg-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                {fixture.status === 'upcoming' && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-fener-yellow/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                )}

                {/* Date & Time */}
                <div className={`flex md:flex-col items-center md:items-start gap-4 md:gap-1 w-full md:w-48 mb-4 md:mb-0 ${fixture.status === 'upcoming' ? 'text-white/90' : 'text-white/50'}`}>
                  <div className="flex items-center gap-2 font-medium">
                    <Calendar className={`w-4 h-4 ${fixture.status === 'upcoming' ? 'text-fener-yellow' : 'text-white/40'}`} />
                    {matchDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className={`w-4 h-4 ${fixture.status === 'upcoming' ? 'text-fener-yellow' : 'text-white/40'}`} />
                    {matchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {/* Match Teams & Score */}
                <div className="flex items-center justify-center gap-4 flex-1 w-full relative z-10">
                  <div className={`flex-1 text-right font-bold text-lg md:text-xl ${isFenerHome ? (fixture.status === 'upcoming' ? 'text-fener-yellow' : 'text-white/90') : (fixture.status === 'upcoming' ? 'text-white' : 'text-white/70')}`}>
                    {fixture.homeTeam}
                  </div>
                  
                  <div className="flex flex-col items-center justify-center px-4 min-w-[100px]">
                    {fixture.status === 'completed' ? (
                      <div className="bg-black/20 px-4 py-2 rounded-lg font-black text-2xl tracking-widest border border-white/5 text-white/80">
                        {fixture.homeScore} - {fixture.awayScore}
                      </div>
                    ) : (
                      <div className="bg-fener-yellow/10 px-4 py-2 rounded-lg font-bold text-lg text-fener-yellow border border-fener-yellow/20 shadow-[0_0_10px_rgba(255,209,0,0.1)]">
                        VS
                      </div>
                    )}
                    <span className={`text-[10px] uppercase tracking-wider mt-2 font-bold ${fixture.status === 'upcoming' ? 'text-fener-yellow/70' : 'text-white/30'}`}>
                      {fixture.competition}
                    </span>
                  </div>

                  <div className={`flex-1 text-left font-bold text-lg md:text-xl ${!isFenerHome ? (fixture.status === 'upcoming' ? 'text-fener-yellow' : 'text-white/90') : (fixture.status === 'upcoming' ? 'text-white' : 'text-white/70')}`}>
                    {fixture.awayTeam}
                  </div>
                </div>

                {/* Action/Venue */}
                <div className="w-full md:w-48 flex justify-end mt-4 md:mt-0 relative z-10">
                  {fixture.status === 'upcoming' ? (
                    <a
                      href="https://www.passolig.com.tr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto text-center bg-fener-yellow hover:bg-fener-yellow-hover text-fener-blue-dark px-6 py-2 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-fener-yellow/20"
                    >
                      Tickets
                    </a>
                  ) : (
                    <div className="w-full md:w-auto text-center px-6 py-2 text-sm font-medium text-white/30 bg-white/5 rounded-xl border border-white/5">
                      Full Time
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
