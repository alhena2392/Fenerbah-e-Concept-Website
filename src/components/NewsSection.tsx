import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { news } from '@/data/mockData';

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-fener-blue relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight"
            >
              Latest <span className="text-fener-yellow">News</span>
            </motion.h2>
            <p className="text-white/60 max-w-xl text-lg">
              Stay up to date with the latest happenings across all branches of Fenerbahçe Sports Club.
            </p>
          </div>
          <Link 
            to="/news" 
            className="group flex items-center gap-2 text-fener-yellow font-semibold hover:text-white transition-colors"
          >
            View All News
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-fener-blue-dark rounded-2xl overflow-hidden border border-white/5 hover:border-fener-yellow/30 transition-all hover:-translate-y-2 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-fener-yellow text-fener-blue-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-white/50 mb-3 font-medium tracking-wide">
                  {item.date}
                </div>
                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-fener-yellow transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-3 mb-6 flex-grow">
                  {item.excerpt}
                </p>
                
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fener-yellow mt-auto group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
