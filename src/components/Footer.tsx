import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { FenerLogo } from '@/components/FenerLogo';

export function Footer() {
  return (
    <footer className="bg-fener-blue-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14">
                <FenerLogo />
              </div>
              <span className="font-display font-bold text-xl tracking-wide uppercase">
                Fenerbahçe
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Fenerbahçe Sports Club is a professional sports club based in Kadıköy, Istanbul, Turkey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fener-yellow hover:text-fener-blue-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fener-yellow hover:text-fener-blue-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fener-yellow hover:text-fener-blue-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fener-yellow hover:text-fener-blue-dark transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-fener-yellow">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li><a href="#club" className="hover:text-white transition-colors">Club History</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">Latest News</a></li>
              <li><a href="#squad" className="hover:text-white transition-colors">First Team Squad</a></li>
              <li><a href="#matches" className="hover:text-white transition-colors">Fixtures & Results</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Media Center</a></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-fener-yellow">Services</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li>
                <a href="https://www.fenerium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Fenerium Store
                </a>
              </li>
              <li>
                <a href="https://www.passolig.com.tr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Buy Tickets (Passolig)
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fenerbahçe TV</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-fener-yellow">Contact</h4>
            <ul className="flex flex-col gap-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fener-yellow shrink-0" />
                <span>Ülker Stadyumu Fenerbahçe Şükrü Saracoğlu Spor Kompleksi, Kadıköy, Istanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-fener-yellow shrink-0" />
                <span>+90 216 542 1907</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-fener-yellow shrink-0" />
                <span>info@fenerbahce.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Fenerbahçe Sports Club. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
