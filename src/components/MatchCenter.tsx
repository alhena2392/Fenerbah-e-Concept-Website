import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { nextMatch } from '@/data/mockData';
import { FenerLogo } from '@/components/FenerLogo';

export function MatchCenter() {
  const matchDate = useMemo(() => new Date(nextMatch.date), [nextMatch.date]);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = matchDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [matchDate]);
  
  return (
    <section id="matches" className="py-24 bg-fener-blue-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fener-yellow/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4"
          >
            Match <span className="text-fener-yellow">Center</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl text-lg">
            Stay updated with the latest fixtures and get your tickets for the upcoming matches.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-fener-blue rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-fener-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Home Team */}
              <div className="flex flex-col items-center gap-6 flex-1">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full p-6 flex items-center justify-center border border-white/10 shadow-inner">
                  {nextMatch.homeTeam === "Fenerbahçe" ? (
                    <FenerLogo />
                  ) : (
                    <img src={nextMatch.homeLogo} alt={nextMatch.homeTeam} className="w-full h-full object-contain drop-shadow-xl" referrerPolicy="no-referrer" />
                  )}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">{nextMatch.homeTeam}</h3>
              </div>

              {/* Match Info */}
              <div className="flex flex-col items-center justify-center flex-[1.5] text-center gap-6">
                <div className="bg-white/5 px-6 py-2 rounded-full border border-white/10 text-sm font-semibold tracking-widest uppercase text-fener-yellow">
                  {nextMatch.competition}
                </div>
                
                <div className="text-5xl md:text-6xl font-black tracking-tighter text-white/20">
                  VS
                </div>
                
                {/* Countdown Timer */}
                <div className="flex gap-2 sm:gap-3 justify-center my-2">
                  <div className="flex flex-col items-center bg-fener-blue-dark/80 px-2 sm:px-3 py-2 rounded-xl border border-white/5 min-w-[50px] sm:min-w-[60px]">
                    <span className="text-lg sm:text-xl font-bold text-fener-yellow">{timeLeft.days}</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-fener-blue-dark/80 px-2 sm:px-3 py-2 rounded-xl border border-white/5 min-w-[50px] sm:min-w-[60px]">
                    <span className="text-lg sm:text-xl font-bold text-fener-yellow">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50">Hours</span>
                  </div>
                  <div className="flex flex-col items-center bg-fener-blue-dark/80 px-2 sm:px-3 py-2 rounded-xl border border-white/5 min-w-[50px] sm:min-w-[60px]">
                    <span className="text-lg sm:text-xl font-bold text-fener-yellow">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50">Mins</span>
                  </div>
                  <div className="flex flex-col items-center bg-fener-blue-dark/80 px-2 sm:px-3 py-2 rounded-xl border border-white/5 min-w-[50px] sm:min-w-[60px]">
                    <span className="text-lg sm:text-xl font-bold text-fener-yellow">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50">Secs</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 text-white/80 font-medium w-full max-w-xs">
                  <div className="flex items-center justify-center gap-3 bg-fener-blue-dark/50 py-3 rounded-xl border border-white/5">
                    <Calendar className="w-5 h-5 text-fener-yellow" />
                    <span>{matchDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-fener-blue-dark/50 py-3 rounded-xl border border-white/5">
                    <Clock className="w-5 h-5 text-fener-yellow" />
                    <span>{matchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-fener-blue-dark/50 py-3 rounded-xl border border-white/5">
                    <MapPin className="w-5 h-5 text-fener-yellow" />
                    <span>{nextMatch.stadium}</span>
                  </div>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center gap-6 flex-1">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full p-6 flex items-center justify-center border border-white/10 shadow-inner">
                  {nextMatch.awayTeam === "Fenerbahçe" ? (
                    <FenerLogo />
                  ) : (
                    <img src={nextMatch.awayLogo} alt={nextMatch.awayTeam} className="w-full h-full object-contain drop-shadow-xl" referrerPolicy="no-referrer" />
                  )}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">{nextMatch.awayTeam}</h3>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="https://www.passolig.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-fener-yellow hover:bg-fener-yellow-hover text-fener-blue-dark px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-fener-yellow/20"
              >
                <span>Buy Ticket via Passolig</span>
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
