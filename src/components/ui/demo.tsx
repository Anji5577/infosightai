'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <div className="hero-card w-full h-[550px] md:h-[600px] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center text-left">
          <span className="section-label">
            AI Automation Services
          </span>
          <h1 className="hero-headline">
            Turning manual operations<br />into <span className="accent"><em>intelligent</em> systems</span>.
          </h1>
          <p className="mt-4 text-zinc-400 max-w-lg text-sm md:text-base leading-relaxed">
            We help businesses automate workflows, deploy AI systems, and scale operations without increasing headcount.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center mt-8">
            <a
              href="mailto:info@info-sight.net"
              className="btn-primary"
            >
              Book a Consultation <span className="cta-arrow">→</span>
            </a>
            
            <button
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative hero-robot-container">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
