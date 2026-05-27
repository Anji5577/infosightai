import { useState, useEffect, useRef, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from '@/sections/Preloader';
import Hero from '@/sections/Hero';
import Navigation from '@/sections/Navigation';
import Works from '@/sections/Works';
import Footer from '@/sections/Footer';
import {
  ServicesSection,
  MetricsSection,
  ProcessSection,
  WhyChooseUsSection,
  IndustriesSection,
  TestimonialsSection,
  FAQSection,
  ClosingCTASection,
} from '@/sections/AutomationSections';
import { SplineSceneBasic } from '@/components/ui/demo';


gsap.registerPlugin(ScrollTrigger);

// Home page with all sections
function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [showHero, setShowHero] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const handleHeroEnter = () => {
    setShowHero(false);
    setShowContent(true);
  };

  useEffect(() => {
    if (!showContent) return;

    // Initialize smooth scrolling feel
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      ScrollTrigger.update();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Refresh ScrollTrigger after content loads
    scrollTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [showContent]);

  return (
    <div ref={mainRef} className="relative">
      {/* Hero overlay */}
      {showHero && <Hero onEnter={handleHeroEnter} />}

      {/* Main content */}
      {showContent && (
        <>
          <Navigation />
          
          {/* Main Hero / 3D Banner Section */}
          <section className="hero-section relative w-full flex flex-col items-center justify-start px-[5vw] pb-16 bg-[#050505] border-b border-white/[0.06] overflow-hidden">
            <div className="grid-overlay absolute inset-0 opacity-40 z-0 pointer-events-none" />
            <div className="noise-overlay" />
            <div className="ambient-glow -top-40 -left-40 w-96 h-96 z-0" />
            <div className="ambient-glow -bottom-40 -right-40 w-96 h-96 z-0" />

            <div className="max-w-[1200px] mx-auto w-full relative z-10">
              <SplineSceneBasic />
            </div>
          </section>

          {/* Client Trust Bar Section */}
          <div className="w-full py-12 border-b border-white/[0.06] bg-[#09090B]">
            <div className="max-w-[1080px] mx-auto px-8 flex flex-col items-center justify-center gap-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/35 font-medium font-sans">
                Trusted by teams scaling with AI
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 mt-2">
                {/* Vercel */}
                <div className="h-5 text-white opacity-30 hover:opacity-70 transition-opacity duration-300 flex items-center gap-2 select-none">
                  <svg className="h-3.5 w-auto fill-current" viewBox="0 0 76 65">
                    <path d="M37.527 0L75.054 65H0L37.527 0Z" />
                  </svg>
                  <span className="font-sans font-bold tracking-tight text-xs">VERCEL</span>
                </div>
                {/* Stripe */}
                <div className="h-5 text-white opacity-30 hover:opacity-70 transition-opacity duration-300 flex items-center select-none">
                  <span className="font-sans font-black tracking-normal text-base">stripe</span>
                </div>
                {/* Linear */}
                <div className="h-5 text-white opacity-30 hover:opacity-70 transition-opacity duration-300 flex items-center gap-1.5 select-none">
                  <svg className="h-3.5 w-auto fill-current" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 14.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-4H6.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5z" />
                  </svg>
                  <span className="font-sans font-semibold tracking-tight text-xs">Linear</span>
                </div>
                {/* Supabase */}
                <div className="h-5 text-white opacity-30 hover:opacity-70 transition-opacity duration-300 flex items-center gap-1.5 select-none">
                  <svg className="h-3.5 w-auto fill-current" viewBox="0 0 784 1022">
                    <path d="M465 0L60 520h350l-80 502 405-520H385l80-502z" />
                  </svg>
                  <span className="font-sans font-bold tracking-tight text-xs">SUPABASE</span>
                </div>
                {/* Resend */}
                <div className="h-5 text-white opacity-30 hover:opacity-70 transition-opacity duration-300 flex items-center gap-1 select-none">
                  <span className="font-mono font-bold tracking-wide text-xs">✉ RESEND</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <ServicesSection />

          {/* Metrics Section */}
          <MetricsSection />

          {/* Works Section */}
          <Works />

          {/* Process Section */}
          <ProcessSection />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection />

          {/* Industries Section */}
          <IndustriesSection />



          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* Closing CTA */}
          <ClosingCTASection />

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

// Work detail page (placeholder for routing)
function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-[24px] font-serif font-bold tracking-wider mb-4">
          WORK DETAIL
        </h1>
        <p className="text-[14px] font-sans font-normal text-[#C5C4C2] mb-8">
          Project page content would go here
        </p>
        <a
          href="/"
          className="text-[14px] font-sans font-semibold tracking-wider text-accent-light hover:opacity-85 transition-opacity duration-300"
        >
          ← BACK TO HOME
        </a>
      </div>
    </div>
  );
}

// Main App
function App() {
  const [preloaderDone, setPreloaderDone] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setPreloaderDone(true);
  };

  return (
    <BrowserRouter>
      <div className="bg-transparent min-h-screen">
        {/* Preloader */}
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

        {/* Main App */}
        {preloaderDone && (
          <Suspense
            fallback={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <span className="text-[14px] font-apple font-normal text-white/40 tracking-wider">
                  Loading...
                </span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work/:title" element={<WorkPage />} />
              <Route
                path="/demo"
                element={
                  <div className="min-h-screen bg-[#050505] p-8 md:p-16 flex items-center justify-center">
                    <div className="w-full max-w-5xl">
                      <SplineSceneBasic />
                    </div>
                  </div>
                }
              />
              <Route
                path="*"
                element={
                  <div className="min-h-screen bg-black text-white flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-[48px] font-serif font-bold text-accent-light mb-4">404</h1>
                      <p className="text-[14px] font-sans font-semibold text-[#C5C4C2]">
                        PAGE NOT FOUND
                      </p>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
