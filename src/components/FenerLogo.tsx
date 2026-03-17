import { cn } from '@/lib/utils';

interface FenerLogoProps {
  className?: string;
  imageClassName?: string;
}

export function FenerLogo({ className, imageClassName }: FenerLogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center p-4", className)}>
      <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
        {/* 5 Stars Crown - Precisely Arched */}
        <div className="absolute top-0 left-0 right-0 flex items-end justify-center gap-0.5 z-20 pointer-events-none -translate-y-1/2">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className={cn(
                "fill-fener-yellow drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                i === 0 || i === 4 ? "w-[15%] translate-y-3" : 
                i === 1 || i === 3 ? "w-[18%] translate-y-1" : 
                "w-[22%]"
              )}
            >
              <path d="M12 1.7L14.7 9.1H22.5L16.2 13.7L18.9 21.1L12 16.5L5.1 21.1L7.8 13.7L1.5 9.1H9.3L12 1.7Z" />
            </svg>
          ))}
        </div>

        {/* Circular Container with Gold Border */}
        <div className="relative z-10 w-full h-full rounded-full border-[3px] border-fener-yellow bg-fener-blue overflow-hidden shadow-[0_0_20px_rgba(255,209,0,0.2)] p-2">
          <div className="absolute inset-0 bg-gradient-to-tr from-fener-blue-dark/50 to-transparent" />
          <img 
            src="https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png" 
            alt="Fenerbahçe Logo" 
            className={cn("w-full h-full object-contain relative z-10", imageClassName)}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Glow Behind */}
      <div className="absolute inset-0 bg-fener-yellow/5 blur-3xl rounded-full -z-10" />
    </div>
  );
}


