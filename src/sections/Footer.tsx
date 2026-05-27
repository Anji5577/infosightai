import TaggedLogo from '@/components/TaggedLogo';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo flex items-center">
            <TaggedLogo variant="footer" />
          </a>
          <p className="footer-tagline">
            AI & Automation Services.<br />
            A division of Infosight Consultancy.
          </p>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/infosightai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LI
            </a>
            <a
              href="https://www.youtube.com/@infosightai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              YT
            </a>
            <a
              href="https://www.instagram.com/infosightai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="footer-col-title">Services</span>
            <a href="#services">AI Workflow Automation</a>
            <a href="#services">RFP Automation</a>
            <a href="#services">PM Automation</a>
            <a href="#services">Enterprise AI Deployment</a>
            <a href="#services">AI Voice Receptionist</a>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Company</span>
            <a href="https://info-sight.net/about_us.html" target="_blank" rel="noopener noreferrer">
              About
            </a>
            <a href="#projects">Projects</a>
            <a href="https://info-sight.net/contact_us.html" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Resources</span>
            <a href="https://n8n.io" target="_blank" rel="noopener noreferrer">
              n8n Cloud
            </a>
            <a href="https://deepmind.google/technologies/gemini" target="_blank" rel="noopener noreferrer">
              Google Gemini
            </a>
            <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">
              Supabase
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              React
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>© 2026 InfosightAI. All rights reserved.</span>
        <a href="mailto:info@info-sight.net">info@info-sight.net</a>
      </div>
    </footer>
  );
}
