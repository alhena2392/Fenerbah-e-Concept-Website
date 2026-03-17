import { motion } from 'motion/react';
import { ArrowRight, Ticket } from 'lucide-react';
import { lastMatch, nextMatch } from '@/data/mockData';
import { FenerLogo } from '@/components/FenerLogo';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/stadium/1920/1080"
          alt="Ülker Stadyumu"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fener-blue-dark via-fener-blue-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-end pb-24 h-full">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-fener-yellow/10 border border-fener-yellow/30 text-fener-yellow px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-fener-yellow animate-pulse" />
            Next Match
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              {nextMatch.homeTeam}
            </span>
            <span className="block text-fener-yellow">
              vs {nextMatch.awayTeam}
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-fener-yellow">Date:</span>
              <span>{new Date(nextMatch.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-fener-yellow">Venue:</span>
              <span>{nextMatch.stadium}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://www.passolig.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-fener-yellow hover:bg-fener-yellow-hover text-fener-blue-dark px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
            >
              <Ticket className="w-5 h-5" />
              Buy Ticket (Passolig)
            </a>
            <a
              href="#matches"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Match Details
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Last Match Result Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:justify-self-end w-full max-w-md bg-fener-blue/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-white/60 uppercase tracking-widest">Last Match</span>
            <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full">{lastMatch.competition}</span>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-16 h-16 bg-white/5 rounded-full p-2 flex items-center justify-center">
                {lastMatch.homeTeam === "Fenerbahçe" ? (
                  <FenerLogo />
                ) : (
                  <img src={lastMatch.homeLogo} alt={lastMatch.homeTeam} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                )}
              </div>
              <span className="font-bold text-sm text-center">{lastMatch.homeTeam}</span>
            </div>
            
            <div className="flex flex-col items-center justify-center px-4">
              <div className="text-4xl font-display font-black tracking-tighter text-fener-yellow">
                {lastMatch.homeScore} - {lastMatch.awayScore}
              </div>
              <span className="text-xs text-white/50 mt-2">FT</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-16 h-16 bg-white/5 rounded-full p-2 flex items-center justify-center">
                {lastMatch.awayTeam === "Fenerbahçe" ? (
                  <FenerLogo />
                ) : (
                  <img src={lastMatch.awayLogo} alt={lastMatch.awayTeam} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                )}
              </div>
              <span className="font-bold text-sm text-center">{lastMatch.awayTeam}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
