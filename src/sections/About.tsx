import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  paragraphs: string[];
}

const TEAM: Record<string, TeamMember> = {
  kirilo: {
    paragraphs: [
      'As founder of InfosightAI, Kirilo leads product design with a focus on structure, clarity, and performance.',
      'His work spans AI solutions, SaaS platforms, and scalable digital systems, delivering experiences that are as strategic as they are refined.',
    ],
  },
  sebastian: {
    paragraphs: [
      'As co-founder of InfosightAI, Sebastian leads full-stack engineering with a focus on system architecture, and long-term performance.',
      'His work spans AI solutions, SaaS platforms, and complex digital infrastructures, building products that are as stable as they are sophisticated.',
    ],
  },
};

export default function About() {
  const [activeMember, setActiveMember] = useState<'kirilo' | 'sebastian'>('kirilo');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Canvas wipe animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight * 0.3;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const rows = 16;
    const cols = Math.ceil(width / (height / rows));
    const cellW = width / cols;
    const cellH = height / rows;

    const values = new Float32Array(rows * cols);
    for (let i = 0; i < rows * cols; i++) {
      const row = Math.floor(i / cols);
      const rowProgress = (rows - 1 - row) / (rows - 1);
      values[i] = Math.min(rowProgress * 0.65 + Math.random() * 0.15, 1);
    }
    const maxVal = Math.max(...values);
    for (let i = 0; i < values.length; i++) {
      values[i] /= maxVal;
    }

    const draw = (progress: number) => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#000000' : '#ffffff';

      for (let i = 0; i < rows * cols; i++) {
        const alpha = Math.min(Math.max((progress - values[i]) / (1 - values[i] + 0.001) * 3, 0), 1);
        if (alpha <= 0) continue;
        
        ctx.globalAlpha = alpha;
        const col = i % cols;
        const row = Math.floor(i / cols);
        ctx.fillRect(col * cellW, row * cellH, cellW + 1, cellH + 1);
      }
      ctx.globalAlpha = 1;
    };

    gsap.to({ value: 0 }, {
      value: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        onUpdate: (self) => {
          draw(self.progress);
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleSwitch = (member: 'kirilo' | 'sebastian') => {
    if (member === activeMember || isTransitioning) return;
    setIsTransitioning(true);
    
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        onComplete: () => {
          setActiveMember(member);
          gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            delay: 0.1,
            onComplete: () => setIsTransitioning(false),
          });
        },
      });
    } else {
      setActiveMember(member);
      setIsTransitioning(false);
    }
  };

  const member = TEAM[activeMember];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505] font-sans overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-15 pointer-events-none" />
      <div className="noise-overlay" />
      
      {/* Canvas Wipe Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-[30svh] -translate-y-full z-50 pointer-events-none"
      />

      {/* Toggle Buttons */}
      <div className="mt-24 lg:mt-40 z-20 flex justify-center items-center px-4 relative">
        <div className="max-w-[480px] w-full bg-[#111111]/80 border border-white/5 rounded-full p-1.5 flex justify-between items-center gap-1 backdrop-blur-md">
          <button
            onClick={() => handleSwitch('kirilo')}
            className={`flex-1 text-[11px] font-sans font-bold tracking-[0.18em] py-3 rounded-full transition-all duration-500 cursor-pointer ${
              activeMember === 'kirilo' 
                ? 'bg-white text-black shadow-md' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            KIRILO SZTARCSAK
          </button>
          <button
            onClick={() => handleSwitch('sebastian')}
            className={`flex-1 text-[11px] font-sans font-bold tracking-[0.18em] py-3 rounded-full transition-all duration-500 cursor-pointer ${
              activeMember === 'sebastian' 
                ? 'bg-white text-black shadow-md' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            SEBASTIAN RENZ
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative w-full min-h-[50svh] lg:h-[65svh] overflow-hidden flex items-center bg-transparent border-b border-white/[0.06]">
        <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-0" />
        
        {/* Content */}
        <div ref={contentRef} className="relative z-10 w-full px-5 lg:px-[5vw]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 max-w-[900px] mx-auto text-center sm:text-left">
            {member.paragraphs.map((paragraph, idx) => (
              <div
                key={`${activeMember}-${idx}`}
                className="text-[13px] lg:text-[14px] font-sans font-normal leading-[1.8] tracking-wider text-zinc-400"
              >
                <span>
                  {paragraph}
                </span>
              </div>
            ))}
          </div>
          
          {/* Decorative initial */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
            <span className="text-[200px] lg:text-[320px] font-sans font-extrabold text-white/[0.015]">
              {activeMember === 'kirilo' ? 'K' : 'S'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
