import { useState } from 'react';

const SERVICES = [
  {
    id: '01',
    title: 'AI Workflow Automation',
    description:
      'End-to-end intelligent pipelines that chain AI classification, data extraction, and multi-system orchestration.',
  },
  {
    id: '02',
    title: 'RFP Automation',
    description:
      'AI that reads, parses, and summarizes proposals - extracting scope, deadlines, and key terms into PDF briefs in under 60 seconds.',
  },
  {
    id: '03',
    title: 'PM Automation',
    description:
      'Intelligent task extraction from emails, deadline-proximity scoring, real-time dashboards with instant alerts.',
  },
  {
    id: '04',
    title: 'Enterprise AI Deployment',
    description:
      'Production-ready AI systems with monitoring, error handling, and scalability integrated into your existing stack.',
  },
  {
    id: '05',
    title: 'AI Voice Receptionist',
    description:
      '24/7 AI-powered voice system that answers calls, understands intent, routes to the right team, and books appointments.',
  },
];

const METRICS = [
  { value: '85%', label: 'Reduction in manual work' },
  { value: '<60s', label: 'RFP processing time' },
  { value: '100%', label: 'Deadline compliance' },
  { value: '40+', label: 'Hours saved per person/month' },
];

const WHY_US = [
  {
    title: 'Ships in Days',
    description: 'Working production systems in days, not months.',
  },
  {
    title: 'Domain-Aware AI',
    description: 'Models and workflows tuned to your industry context.',
  },
  {
    title: 'Custom to Your Stack',
    description: 'Built around your tools, data, and operating rhythm.',
  },
  {
    title: 'Full-Stack Ownership',
    description: 'We own the entire pipeline end to end.',
  },
  {
    title: 'Measurable ROI',
    description: 'Clear before and after metrics for every deployment.',
  },
  {
    title: 'Fully Managed',
    description: 'We monitor, optimize, and scale your systems 24/7.',
  },
];

const INDUSTRIES = [
  {
    name: 'AEC & Construction',
    icon: '🏗️',
    desc: 'Automating bid package extraction, drawing processing, and contract validation.'
  },
  {
    name: 'Finance',
    icon: '🏦',
    desc: 'Streamlining audit reconciliations, compliance reports, and expense data entry.'
  },
  {
    name: 'Healthcare',
    icon: '🏥',
    desc: 'Routing intake documents, appointment scheduling, and insurance form parsing.'
  },
  {
    name: 'Real Estate',
    icon: '🏢',
    desc: 'Automating lease abstractions, property listings sync, and client intake.'
  },
  {
    name: 'Logistics',
    icon: '📦',
    desc: 'Extracting invoice data, customs filing checks, and tracking workflows.'
  },
  {
    name: 'E-commerce',
    icon: '🛒',
    desc: 'Automating inventory alerts, review classification, and order tracking.'
  }
];

const TESTIMONIALS = [
  {
    quote:
      'The Project Managers Automation system developed by InfoSightAI streamlined project tracking, reporting, and team coordination across multiple departments. The automation reduced operational bottlenecks, improved accountability, and enabled faster decision-making throughout our delivery process.',
    name: 'Vamsidhar Babu',
    role: 'Managing Director, Infosight Consultancy - India',
  },
  {
    quote:
      'InfoSightAI transformed our RFP workflow into a highly efficient automated system. What previously required extensive manual coordination can now be completed faster, with greater accuracy and significantly improved operational visibility.',
    name: 'KSN Prasad',
    role: 'Managing Director, Infosight Consultancy - Dubai',
  },
];

export function ServicesSection() {
  return (
    <section id="services">
      <div className="section-inner">
        <span className="section-label">Our Services</span>
        <h2>Intelligent automation, end to end</h2>
        <p className="section-subtitle">
          Every system we deliver is production-grade from day one.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card group">
              <div>
                <span className="card-number">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <a href="#services" className="card-link">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MetricsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {METRICS.map((metric) => (
          <div key={metric.label} className="stat-item">
            <div className="stat-number">{metric.value}</div>
            <div className="stat-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="how-section">
      <div className="section-inner">
        <span className="section-label">How it works</span>
        <h2>From chaos to clarity in 4 steps</h2>

        <div className="timeline">
          <div className="timeline-track"></div>

          <div className="timeline-step">
            <div className="step-number">01</div>
            <div className="step-dot"></div>
            <h3>Discover</h3>
            <p>We audit your workflows and map every manual process.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">02</div>
            <div className="step-dot"></div>
            <h3>Design</h3>
            <p>We architect an AI pipeline tailored to your stack.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">03</div>
            <div className="step-dot"></div>
            <h3>Deploy</h3>
            <p>Working production system in days, tested on your data.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">04</div>
            <div className="step-dot"></div>
            <h3>Optimize</h3>
            <p>24/7 monitoring, continuous improvement, scaling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section id="why-us">
      <div className="section-inner">
        <span className="section-label">Why InfosightAI</span>
        <h2>Built different by design</h2>
        <p className="section-subtitle">
          We combine rapid engineering with robust operational safety.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, index) => (
            <div 
              key={item.title} 
              className="premium-card p-6 lg:p-8 min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] font-mono font-medium tracking-wider text-accent/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-[18px] lg:text-[21px] font-sans font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[13px] lg:text-[14px] font-sans font-normal leading-[1.7] text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries">
      <div className="section-inner">
        <span className="section-label">Industries</span>
        <h2>Automation for every sector</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-12">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="industry-card">
              <span className="industry-icon">{ind.icon}</span>
              <span className="industry-name">{ind.name}</span>
              <p className="industry-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const [activeReviewer, setActiveReviewer] = useState<number>(0);

  return (
    <section id="reviews">
      <div className="section-inner">
        <span className="section-label">Client Results</span>
        <h2>Trusted by teams scaling with AI</h2>
        <p className="section-subtitle">
          Businesses use InfoSightAI to automate operations, reduce overhead, and deploy intelligent systems faster.
        </p>

        {/* Tabs for switching testimonials */}
        <div className="flex border-b border-white/5 mb-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setActiveReviewer(index)}
              className={`reviewer-tab ${activeReviewer === index ? 'active' : ''}`}
            >
              {testimonial.name}
            </button>
          ))}
        </div>

        {/* Active testimonial card */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            {TESTIMONIALS[activeReviewer].quote}
          </p>
          <div className="testimonial-author">
            {TESTIMONIALS[activeReviewer].name}
          </div>
          <div className="testimonial-role">
            {TESTIMONIALS[activeReviewer].role}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "How long does deployment take?", a: "Most systems go live within 1-2 weeks." },
    { q: "What tools do you integrate with?", a: "Gmail, Google Drive, Supabase, Telegram, Slack, and any API-enabled tool." },
    { q: "Do we need technical staff?", a: "No. We build, deploy, monitor, and maintain everything." },
    { q: "What AI models do you use?", a: "Primarily Google Gemini." },
    { q: "How is pricing structured?", a: "Project-based, fixed fee, aligned to outcomes." }
  ];

  return (
    <section id="faq">
      <div className="section-inner max-w-[800px] mx-auto">
        <span className="section-label">FAQ</span>
        <h2>Common questions</h2>
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-white/5 bg-[#111111]/40 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-sans font-semibold text-[14px] md:text-[16px] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[18px] text-white">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-40 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-6 font-sans font-normal text-[13px] md:text-[14px] leading-[1.8] text-zinc-400">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ClosingCTASection() {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>
      <div className="cta-inner">
        <span className="section-label">Get started</span>
        <h2 className="cta-headline">Ready to automate<br />your operations?</h2>
        <p className="cta-sub">Working AI systems deployed in days, not months. No headcount required.</p>
        <div className="cta-buttons">
          <a href="mailto:info@info-sight.net" className="btn-primary">
            Book a Consultation <span className="cta-arrow">→</span>
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
