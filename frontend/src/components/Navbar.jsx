import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Track active section
      const sections = NAV_ITEMS.map(i => i.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
            <div className="nav-logo-icon">{PROFILE.initials}</div>
            <span>{PROFILE.firstName}<span style={{ color: 'var(--accent-primary)' }}>.</span>dev</span>
          </a>

          <div className="nav-links">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="btn btn-primary nav-cta"
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            Get in Touch
          </a>

          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href={PROFILE.resume_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 8, justifyContent: 'center' }}
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      )}
    </>
  );
}
