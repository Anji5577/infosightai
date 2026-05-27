import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrambleText from '@/components/effects/ScrambleText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  {
    id: '01',
    title: 'RFP PIPELINE',
    category: 'RFP Automation',
    year: '2026',
    image: '/works/quick.jpg',
    fullName: 'Automated RFP Intelligence Pipeline',
    description: '35-node AI pipeline that intercepts RFP emails, classifies with Gemini, extracts structured scope data, generates PDF briefs, and distributes automatically.',
    tags: ['12x Faster', '<60s Per RFP', '35+ Nodes']
  },
  {
    id: '02',
    title: 'PM SYSTEM',
    category: 'PM Automation',
    year: '2026',
    image: '/works/expian.jpg',
    fullName: 'Intelligent Project Manager System',
    description: 'AI-powered PM layer monitoring all emails, auto-extracting tasks, scoring priority, surfacing everything in a live dashboard with alerts.',
    tags: ['85% Less work', '0 Missed', '24/7 Running']
  },
  {
    id: '03',
    title: 'VOICE RECEPTIONIST',
    category: 'Voice AI',
    year: '2026',
    image: '/works/solosixty.jpg',
    fullName: 'AI Voice Receptionist System',
    description: 'AI-powered voice receptionist answering calls 24/7, understanding intent with NLP, routing inquiries, booking appointments, sending summaries.',
    tags: ['24/7 Live', '0 Missed calls', '95% Accuracy']
  }
];

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Staggered items animation - only animate transform, keep opacity
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      
      gsap.fromTo(
        item,
        { y: 40 },
        {
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative w-full bg-[#050505] py-24 lg:py-44 border-b border-white/[0.06] overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-20 z-0 pointer-events-none" />
      <div className="noise-overlay" />
      <div className="ambient-glow top-0 right-0 w-96 h-96 z-0" />

      {/* Section heading */}
      <div ref={headingRef} className="px-[5vw] mb-16 lg:mb-24 relative z-10">
        <div className="flex flex-wrap items-baseline gap-0">
          <span className="text-[12px] md:text-[14px] font-sans font-semibold tracking-[0.25em] text-accent whitespace-pre uppercase">
            {'SUCCESS  '}
          </span>
          <span className="text-[12px] md:text-[14px] font-sans font-semibold tracking-[0.25em] text-white whitespace-pre uppercase">
            {'STORIES  '}
          </span>
          <span className="text-[12px] md:text-[14px] font-sans font-semibold tracking-[0.25em] text-zinc-500 uppercase">
            {'//  SYSTEMS IN PRODUCTION'}
          </span>
        </div>
      </div>

      {/* Works grid */}
      <div className="px-[5vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKS.map((work, index) => (
            <div
              key={work.id}
              ref={el => { itemRefs.current[index] = el; }}
              className="group relative overflow-hidden cursor-pointer premium-card w-full h-full project-card"
            >
              <Link
                to={`/work/${work.title.replace(/[{}]/g, '').toLowerCase()}`}
                className="block p-6 lg:p-8 min-h-[460px] flex flex-col justify-between"
              >
                {/* Top: Number & Category */}
                <div className="flex items-start justify-between">
                  <span className="text-[12px] font-mono font-medium tracking-wider text-accent/30">
                    {work.id}
                  </span>
                  <span className="project-type">
                    {work.category}
                  </span>
                </div>

                {/* Center: Project image */}
                <div className="w-full h-32 lg:h-40 rounded-lg overflow-hidden relative border border-white/5 group-hover:border-accent/30 transition-all duration-500 my-6">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Description & metadata */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className="flex items-end justify-between mb-2">
                    <ScrambleText
                      text={work.title}
                      className="project-title group-hover:text-accent transition-colors duration-300"
                      scrambleDuration={400}
                      delay={index * 60}
                    />
                    <span className="text-[11px] font-sans font-normal tracking-wider text-zinc-500">
                      {work.year}
                    </span>
                  </div>
                  
                  <h4 className="text-[13px] font-sans font-semibold text-zinc-300 mb-2">
                    {work.fullName}
                  </h4>
                  
                  <p className="text-[12px] font-sans font-normal leading-[1.6] text-zinc-400 mb-4">
                    {work.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-badge"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
