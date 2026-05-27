import { useRef, useCallback, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ABOUT, PROFILE } from '../data/portfolioData';
import { Shield, Rocket, Brain, Code2, Download, MapPin, Calendar, ChevronRight } from 'lucide-react';

const ICON_MAP = { shield: Shield, rocket: Rocket, brain: Brain, code: Code2 };

function useSpotlight() {
  const ref = useRef(null);
  const [spotlight, setSpotlight] = useState('');
  const onMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpotlight(`radial-gradient(350px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(99, 102, 241, 0.07), transparent 60%)`);
  }, []);
  const onLeave = useCallback(() => setSpotlight(''), []);
  return { ref, spotlight, onMove, onLeave };
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">{ABOUT.headline}</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left: Text + Key Strengths */}
          <motion.div
            className="about-text-side"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about-text-card">
              {ABOUT.description.split('\n\n').map((para, i) => (
                <p key={i} className="about-paragraph">{para}</p>
              ))}

              {/* Key Strengths — Bullet Highlights */}
              {ABOUT.keyStrengths && (
                <div className="about-strengths">
                  <h4 className="about-strengths-title">Core Strengths</h4>
                  <div className="about-strengths-list">
                    {ABOUT.keyStrengths.map((str, i) => (
                      <motion.div
                        key={i}
                        className="about-strength-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.07 }}
                      >
                        <ChevronRight size={14} className="about-strength-icon" />
                        <span>{str}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div className="about-meta">
                <div className="about-meta-item">
                  <MapPin size={16} />
                  <span>{PROFILE.location}</span>
                </div>
                <div className="about-meta-item">
                  <Calendar size={16} />
                  <span>Fresh Graduate · B.E CSE</span>
                </div>
              </div>

              <div className="about-cta-row">
                <motion.a
                  className="btn btn-primary"
                  href={PROFILE.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  Download Resume
                </motion.a>
                <motion.a
                  className="btn btn-outline"
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Talk
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights + Stats */}
          <motion.div
            className="about-highlights-side"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-highlights-grid">
              {ABOUT.highlights.map((item, i) => (
                <HighlightCard key={i} item={item} inView={inView} index={i} />
              ))}
            </div>

            <div className="about-fun-facts">
              {ABOUT.funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  className="about-fun-fact"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                >
                  <div className="about-fun-fact-value">{fact.value}</div>
                  <div className="about-fun-fact-label">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ item, inView, index }) {
  const Icon = ICON_MAP[item.icon] || Code2;
  const { ref, spotlight, onMove, onLeave } = useSpotlight();

  return (
    <motion.div
      ref={ref}
      className="about-highlight-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ background: spotlight || undefined }}
    >
      <div className="about-highlight-icon">
        <Icon size={22} />
      </div>
      <h4 className="about-highlight-label">{item.label}</h4>
      <p className="about-highlight-desc">{item.desc}</p>
    </motion.div>
  );
}
