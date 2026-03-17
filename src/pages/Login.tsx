import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Lock, Mail } from 'lucide-react';
import { FenerLogo } from '@/components/FenerLogo';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Mock login/register
    alert(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
    navigate('/');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-fener-blue-dark relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/stadium-night/1920/1080"
          alt="Stadium Night"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fener-blue-dark/80 via-fener-blue-dark to-fener-blue-dark" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-fener-yellow mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-fener-blue/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-fener-blue-dark flex items-center justify-center border-2 border-fener-yellow p-3 shadow-lg shadow-fener-yellow/20">
              <FenerLogo />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2 uppercase tracking-wide">
            {isLogin ? 'Welcome Back' : 'Join the Family'}
          </h1>
          <p className="text-center text-white/60 mb-8 text-sm">
            {isLogin ? 'Sign in to access your fan dashboard.' : 'Create an account to personalize your experience.'}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-fener-yellow focus:ring-1 focus:ring-fener-yellow transition-all"
                  required
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-fener-yellow focus:ring-1 focus:ring-fener-yellow transition-all"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-fener-yellow focus:ring-1 focus:ring-fener-yellow transition-all"
                required
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-xs text-fener-yellow hover:underline">Forgot Password?</a>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-fener-yellow hover:bg-fener-yellow-hover text-fener-blue-dark font-bold py-4 rounded-xl mt-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-fener-yellow/20"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-white/60">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-fener-yellow font-bold hover:underline"
            >
              {isLogin ? 'Register' : 'Sign In'}
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
