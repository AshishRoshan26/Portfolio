import { Heart, GitBranch, Link2, Globe, ArrowUp } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="nav-logo-icon" style={{ width: 32, height: 32, fontSize: '0.85rem' }}>{PROFILE.initials}</div>
              <span className="footer-brand-name">{PROFILE.firstName}<span style={{ color: 'var(--accent-primary)' }}>.</span>dev</span>
            </div>
            <p className="footer-tagline">{PROFILE.title}</p>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">Navigation</h4>
              <a href="#hero" className="footer-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#skills" className="footer-link">Skills</a>
            </div>
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">Connect</h4>
              <a href={PROFILE.github_url} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href={PROFILE.linkedin_url} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href={`mailto:${PROFILE.email}`} className="footer-link">Email</a>
              <a href={PROFILE.resume_url} target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a>
            </div>
          </div>

          <div className="footer-social">
            {PROFILE.github_url && (
              <a href={PROFILE.github_url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <GitBranch size={18} />
              </a>
            )}
            {PROFILE.linkedin_url && (
              <a href={PROFILE.linkedin_url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Link2 size={18} />
              </a>
            )}
            {PROFILE.instagram_url && (
              <a href={PROFILE.instagram_url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Globe size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-text">
            <span>&copy; {currentYear} </span>
            <span className="footer-text-accent">{PROFILE.name}</span>
            <span> &mdash; Built with </span>
            <Heart size={14} style={{ display: 'inline', color: 'var(--accent-rose)', verticalAlign: 'middle' }} />
            <span> using React + Vite</span>
          </div>
          <button
            className="footer-back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={14} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
