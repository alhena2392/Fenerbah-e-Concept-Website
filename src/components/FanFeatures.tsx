import { motion } from 'motion/react';
import { Bell, Heart, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FanFeatures() {
  return (
    <section className="py-24 bg-fener-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fener-yellow/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4"
          >
            Join the <span className="text-fener-yellow">Family</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl text-lg">
            Create an account to personalize your experience, follow your favorite players, and get match reminders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 bg-fener-blue-dark rounded-3xl border border-white/5 hover:border-fener-yellow/30 transition-colors"
          >
            <div className="w-16 h-16 bg-fener-yellow/10 rounded-full flex items-center justify-center mb-6 text-fener-yellow">
              <UserPlus className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Create Profile</h3>
            <p className="text-white/60 text-sm mb-6">
              Sign up to access exclusive content and personalize your dashboard.
            </p>
            <Link 
              to="/login"
              className="mt-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Register Now
            </Link>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-fener-blue-dark rounded-3xl border border-white/5 hover:border-fener-yellow/30 transition-colors"
          >
            <div className="w-16 h-16 bg-fener-yellow/10 rounded-full flex items-center justify-center mb-6 text-fener-yellow">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Favorite Players</h3>
            <p className="text-white/60 text-sm mb-6">
              Select your favorite players to get customized news and stats updates.
            </p>
            <button 
              className="mt-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
              onClick={() => alert('Please login to select favorite players.')}
            >
              Select Favorites
            </button>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center p-8 bg-fener-blue-dark rounded-3xl border border-white/5 hover:border-fener-yellow/30 transition-colors"
          >
            <div className="w-16 h-16 bg-fener-yellow/10 rounded-full flex items-center justify-center mb-6 text-fener-yellow">
              <Bell className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Match Reminders</h3>
            <p className="text-white/60 text-sm mb-6">
              Never miss a game. Set up notifications for upcoming fixtures.
            </p>
            <button 
              className="mt-auto inline-flex items-center justify-center bg-fener-yellow hover:bg-fener-yellow-hover text-fener-blue-dark px-6 py-2 rounded-full text-sm font-bold transition-colors"
              onClick={() => alert('Reminder set for the next match!')}
            >
              Enable Alerts
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
