import { useEffect, useState } from 'react';
import TaggedLogo from '@/components/TaggedLogo';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="/" className="flex items-center group relative z-50">
            <TaggedLogo />
          </a>

          {/* Menu Items (Centered on Desktop) */}
          <div className="nav-links hidden md:flex items-center gap-10 uppercase tracking-widest font-medium">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('services');
              }}
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('projects');
              }}
            >
              Projects
            </a>
            <a
              href="#why-us"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('why-us');
              }}
            >
              Why Us
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('reviews');
              }}
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('faq');
              }}
            >
              FAQ
            </a>
          </div>

          {/* Action Button & Hamburger */}
          <div className="flex items-center gap-4 relative z-50">
            <a
              href="mailto:info@info-sight.net"
              className="nav-cta hidden sm:inline-flex"
            >
              Get in touch
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel (outside nav to prevent containing block transform clipping) */}
      <div
        className={`fixed inset-0 bg-[#09090B]/98 backdrop-blur-xl pt-28 pb-10 px-[5vw] transition-all duration-500 md:hidden flex flex-col justify-center z-[150] ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="nav-links flex flex-col gap-8 font-medium text-[18px] tracking-widest text-center uppercase">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('services');
            }}
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('projects');
            }}
          >
            Projects
          </a>
          <a
            href="#why-us"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('why-us');
            }}
          >
            Why Us
          </a>
          <a
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('reviews');
            }}
          >
            Reviews
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('faq');
            }}
          >
            FAQ
          </a>
          
          <div className="pt-8 border-t border-white/5 flex justify-center sm:hidden">
            <a
              href="mailto:info@info-sight.net"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-cta text-center w-full max-w-[280px]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
