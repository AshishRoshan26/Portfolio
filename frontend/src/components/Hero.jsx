import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Download, FileText, GitBranch, Link2, Mail } from 'lucide-react';
import { PROFILE, HERO_TITLES, STATS } from '../data/portfolioData';

/* ── Character scramble effect ── */
const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function useTextScramble(text, { scrambleDuration = 1200 } = {}) {
  const [display, setDisplay] = useState('');
  const frameRef = useRef(null);

  useEffect(() => {
    if (!text) return;
    const chars = text.split('');
    const revealed = new Array(chars.length).fill(false);
    const startTime = Date.now();
    let animating = true;

    const tick = () => {
      if (!animating) return;
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / scrambleDuration, 1);
      const revealCount = Math.floor(progress * chars.length);
      for (let i = 0; i < revealCount; i++) revealed[i] = true;

      const result = chars.map((ch, i) => {
        if (ch === ' ') return ' ';
        if (revealed[i]) return ch;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');

      setDisplay(result);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => { animating = false; cancelAnimationFrame(frameRef.current); };
  }, [text, scrambleDuration]);

  return display;
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);
  const scrambledName = useTextScramble(PROFILE.name, { scrambleDuration: 1200 });

  useEffect(() => {
    const currentTitle = HERO_TITLES[titleIndex];
    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>
      <div className="hero-gradient-mesh" />

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {PROFILE.available_for_work && (
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="hero-badge-dot" />
                <span className="hero-badge-pulse" />
                Open to Opportunities
              </motion.div>
            )}

            <h1 className="hero-name">
              <motion.span
                className="hero-greeting"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hi, I'm
              </motion.span>
              <br />
              <span className="hero-name-gradient">{scrambledName}</span>
            </h1>

            <div className="hero-title">
              <span className="hero-title-prefix">&gt; </span>
              {displayText}<span className="typing-cursor">|</span>
            </div>

            <p className="hero-description">{PROFILE.tagline}</p>

            {/* ── Primary CTAs ── */}
            <div className="hero-actions">
              <motion.a
                className="btn btn-primary hero-btn-glow"
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={16} />
                View Projects
              </motion.a>
              <motion.a
                className="btn btn-outline"
                href={PROFILE.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
              <motion.a
                className="btn btn-outline btn-hire"
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                Hire Me
              </motion.a>
            </div>

            {/* ── Social Links ── */}
            <div className="hero-social-row">
              {PROFILE.github_url && (
                <a href={PROFILE.github_url} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
                  <GitBranch size={20} />
                  <span>GitHub</span>
                </a>
              )}
              {PROFILE.linkedin_url && (
                <a href={PROFILE.linkedin_url} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
                  <Link2 size={20} />
                  <span>LinkedIn</span>
                </a>
              )}
              <a href={PROFILE.resume_url} target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Resume">
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </div>

            {/* ── Recruiter-Friendly Stats ── */}
            <div className="hero-stats">
              {[
                { value: `${STATS.projects_count}+`, label: 'Projects Built' },
                { value: `${STATS.dsa_problems}+`, label: 'DSA Problems' },
                { value: `${STATS.certifications}+`, label: 'Certifications' },
                { value: `${STATS.technologies_used}+`, label: 'Technologies' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="hero-stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                >
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero-code-window">
              <div className="code-window-header">
                <span className="code-window-dot red" />
                <span className="code-window-dot yellow" />
                <span className="code-window-dot green" />
                <span className="code-window-title">portfolio.py</span>
              </div>
              <div className="code-window-body">
                <CodeLine n={1}><span className="code-keyword">class</span> <span className="code-function">Developer</span><span className="code-bracket">:</span></CodeLine>
                <CodeLine n={2}>&nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-function">__init__</span><span className="code-bracket">(</span><span className="code-variable">self</span><span className="code-bracket">)</span><span className="code-bracket">:</span></CodeLine>
                <CodeLine n={3}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">self</span>.<span className="code-variable">name</span> <span className="code-operator">=</span> <span className="code-string">"{PROFILE.firstName}"</span></CodeLine>
                <CodeLine n={4}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">self</span>.<span className="code-variable">role</span> <span className="code-operator">=</span> <span className="code-string">"Backend Engineer"</span></CodeLine>
                <CodeLine n={5}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">self</span>.<span className="code-variable">stack</span> <span className="code-operator">=</span> <span className="code-bracket">[</span></CodeLine>
                <CodeLine n={6}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Django"</span>, <span className="code-string">"FastAPI"</span>,</CodeLine>
                <CodeLine n={7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"PostgreSQL"</span>, <span className="code-string">"Docker"</span></CodeLine>
                <CodeLine n={8}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-bracket">]</span></CodeLine>
                <CodeLine n={9} />
                <CodeLine n={10}>&nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-function">build</span><span className="code-bracket">(</span><span className="code-variable">self</span><span className="code-bracket">)</span><span className="code-bracket">:</span></CodeLine>
                <CodeLine n={11}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment"># Building the future 🚀</span></CodeLine>
                <CodeLine n={12}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-string">"production_ready"</span></CodeLine>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} style={{ color: 'var(--text-muted)' }} />
      </motion.div>
    </section>
  );
}

function CodeLine({ n, children }) {
  return (
    <div className="code-line">
      <span className="code-line-num">{n}</span>
      <span>{children || '\u00A0'}</span>
    </div>
  );
}
