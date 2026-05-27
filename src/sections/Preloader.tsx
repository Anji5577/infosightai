import { useEffect, useState } from 'react';
import ScrambleText from '@/components/effects/ScrambleText';

interface PreloaderProps {
  onComplete: () => void;
}

const PRELOADER_ITEMS = [
  { id: '01', title: 'QUICK' },
  { id: '02', title: 'EXPIAN' },
  { id: '03', title: 'GIVELL' },
  { id: '04', title: 'CHAPTR' },
  { id: '05', title: 'ALTEAM' },
  { id: '06', title: 'SOLOSIXTY' },
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (activeIndex < PRELOADER_ITEMS.length) {
      const timer = setTimeout(() => {
        setActiveIndex(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 800);
      }, 300);
      return () => clearTimeout(exitTimer);
    }
  }, [activeIndex, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-transform duration-700 ease-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full max-w-[400px] px-8">
        {PRELOADER_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-2 transition-all duration-300 ${
              index <= activeIndex
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4'
            }`}
          >
            <span className="text-[14px] leading-relaxed text-white/60 font-apple font-normal tracking-wider">
              {item.id}
            </span>
            <div className="flex-1 mx-4">
              {index <= activeIndex && (
                <ScrambleText
                  text={item.title}
                  className="text-[14px] leading-relaxed text-white font-sans font-semibold tracking-wider"
                  scrambleDuration={300}
                  delay={index * 50}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="text-[12px] text-white/40 font-sans font-medium tracking-widest uppercase">
          {activeIndex < PRELOADER_ITEMS.length ? (
            <span className="animate-pulse">Loading</span>
          ) : (
            <ScrambleText text="READY" scrambleDuration={200} />
          )}
        </div>
      </div>
    </div>
  );
}
