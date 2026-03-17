import { motion } from 'motion/react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { storeProducts } from '@/data/mockData';

export function MiniStore() {
  return (
    <section id="store" className="py-24 bg-fener-blue relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight"
            >
              Official <span className="text-fener-yellow">Store</span>
            </motion.h2>
            <p className="text-white/60 max-w-xl text-lg">
              Get the latest gear and show your support. Official merchandise available at Fenerium.
            </p>
          </div>
          <a 
            href="https://www.fenerium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-fener-yellow text-fener-blue-dark px-6 py-3 rounded-xl font-bold hover:bg-fener-yellow-hover transition-colors shadow-lg shadow-fener-yellow/20"
          >
            <ShoppingBag className="w-5 h-5" />
            View All Products
            <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {storeProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl hover:shadow-fener-yellow/10 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 p-6 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-fener-blue text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                  {product.category}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow bg-fener-blue-dark">
                <h3 className="text-sm font-bold leading-tight mb-2 group-hover:text-fener-yellow transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-lg font-black text-fener-yellow mb-4 mt-auto">
                  {product.price}
                </p>
                
                <a 
                  href="https://www.fenerium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-fener-yellow hover:text-fener-blue-dark py-3 rounded-lg transition-colors group/btn"
                >
                  View on Fenerium
                  <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
