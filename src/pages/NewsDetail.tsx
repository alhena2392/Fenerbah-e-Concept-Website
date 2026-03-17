import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { news } from '@/data/mockData';

export function NewsDetail() {
  const { id } = useParams();
  const article = news.find(n => n.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-fener-blue-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-fener-yellow hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-fener-blue-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-fener-yellow mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-fener-yellow text-fener-blue-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="text-white/60 text-sm font-medium flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {article.title}
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-white/80 leading-relaxed font-medium mb-8 border-l-4 border-fener-yellow pl-6 py-2">
              {article.excerpt}
            </p>
            <p className="text-white/70 leading-relaxed">
              {article.content}
            </p>
            {/* Mock additional content for visual weight */}
            <p className="text-white/70 leading-relaxed mt-6">
              The club management expressed their profound satisfaction with this development, noting that it aligns perfectly with the strategic vision set forth at the beginning of the season. Fans are encouraged to continue their unwavering support as the team pushes towards its ultimate goals.
            </p>
            <p className="text-white/70 leading-relaxed mt-6">
              Further updates will be provided through our official channels. Stay tuned for exclusive interviews and behind-the-scenes footage coming soon to Fenerbahçe TV and our digital platforms.
            </p>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
