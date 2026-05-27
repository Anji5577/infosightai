import { useState, useEffect, useCallback } from 'react';
import ScrambleText from '@/components/effects/ScrambleText';

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  const [showContent, setShowContent] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = useCallback(() => {
    setIsExiting(true);
    setTimeout(onEnter, 1000);
  }, [onEnter]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-1000 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Sound Toggle */}
      {showContent && (
        <div className="absolute top-[calc(5svh+env(safe-area-inset-top))] right-[6.5vw] flex items-center gap-3">
          <button
            onClick={() => setSoundOn(!soundOn)}
            className="flex items-center gap-2 text-[14px] font-sans font-semibold tracking-widest cursor-pointer select-none"
          >
            <span className={soundOn ? 'text-accent-light font-semibold' : 'text-white'}>
              ON
            </span>
            <span className={!soundOn ? 'text-accent-light font-semibold' : 'text-white'}>
              OFF
            </span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center gap-12">
        {/* Click to Enter */}
        {showContent && (
          <button
            onClick={handleEnter}
            className="group relative cursor-pointer"
          >
            <ScrambleText
              text="CLICK TO ENTER"
              className="text-[16px] md:text-[18px] font-sans font-semibold tracking-[0.2em] text-white hover:text-accent-light transition-colors duration-300"
              scrambleDuration={800}
              as="div"
            />
            <div className="absolute -bottom-2 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
          </button>
        )}

        {/* Headphones Recommended */}
        {showContent && (
          <div className="opacity-0 animate-[fadeIn_0.5s_ease_0.5s_forwards]">
            <ScrambleText
              text="HEADPHONES RECOMMENDED"
              className="text-[12px] md:text-[14px] font-sans font-medium tracking-[0.15em] text-white/50"
              scrambleDuration={600}
              delay={600}
            />
          </div>
        )}
      </div>

      {/* Socials */}
      {showContent && (
        <div className="absolute bottom-[5svh] left-[6.5vw] opacity-0 animate-[fadeIn_0.5s_ease_0.8s_forwards]">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/infosightai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-sans font-medium tracking-widest text-[#C5C4C2] hover:text-white hover:opacity-80 transition-all duration-300"
            >
              LKDN
            </a>
            <a
              href="https://www.youtube.com/@infosightai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-sans font-medium tracking-widest text-[#C5C4C2] hover:text-white hover:opacity-80 transition-all duration-300"
            >
              YT
            </a>
            <a
              href="https://www.instagram.com/infosightai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-sans font-medium tracking-widest text-[#C5C4C2] hover:text-white hover:opacity-80 transition-all duration-300"
            >
              IG
            </a>
          </div>
        </div>
      )}

      {/* Location */}
      {showContent && (
        <div className="absolute bottom-[5svh] right-[6.5vw] opacity-0 animate-[fadeIn_0.5s_ease_1s_forwards]">
          <ScrambleText
            text="Budapest"
            className="text-[14px] font-sans font-medium tracking-widest text-[#C5C4C2]"
            scrambleDuration={600}
            delay={800}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
