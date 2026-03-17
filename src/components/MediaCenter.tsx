import { motion } from 'motion/react';
import { Play, Image as ImageIcon } from 'lucide-react';

export function MediaCenter() {
  const mediaItems = [
    { id: 1, type: 'video', title: 'Derby Highlights: Fenerbahçe 3-1 Galatasaray', image: 'https://picsum.photos/seed/media1/800/600', duration: '12:45' },
    { id: 2, type: 'photo', title: 'Training Session: Pre-Match Focus', image: 'https://picsum.photos/seed/media2/800/600', count: '24 Photos' },
    { id: 3, type: 'video', title: 'Exclusive Interview: Edin Džeko', image: 'https://picsum.photos/seed/media3/800/600', duration: '08:30' },
    { id: 4, type: 'photo', title: 'Fans at Ülker Stadyumu', image: 'https://picsum.photos/seed/media4/800/600', count: '50+ Photos' },
  ];

  return (
    <section id="media" className="py-24 bg-fener-blue-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4"
          >
            Media <span className="text-fener-yellow">Center</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl text-lg">
            Watch the latest videos, match highlights, and browse exclusive photo galleries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`relative w-full ${index === 0 ? 'h-[400px] md:h-full' : 'aspect-video'}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fener-blue-dark via-fener-blue-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Play/View Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-fener-yellow/90 flex items-center justify-center text-fener-blue-dark transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                    {item.type === 'video' ? <Play className="w-8 h-8 ml-1" /> : <ImageIcon className="w-8 h-8" />}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-fener-yellow text-fener-blue-dark text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-white/80 bg-black/50 px-2 py-1 rounded-sm backdrop-blur-sm">
                      {item.type === 'video' ? item.duration : item.count}
                    </span>
                  </div>
                  <h3 className={`font-bold leading-tight text-white group-hover:text-fener-yellow transition-colors ${index === 0 ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
