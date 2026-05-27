import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, TECHNICAL_EVENTS, COMPETITIVE_ACHIEVEMENTS } from '../data/portfolioData';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="certifications" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Continuous learning, competitive events, and professional development milestones.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="cert-card-accent" style={{ background: cert.color }} />
              <div className="cert-card-body">
                <div className="cert-icon" style={{ background: `${cert.color}18`, color: cert.color }}>
                  <span style={{ fontSize: '1.4rem' }}>{cert.icon}</span>
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <p className="cert-description">{cert.description}</p>
                </div>
                {cert.link && cert.link !== '#' && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Events */}
        {TECHNICAL_EVENTS && TECHNICAL_EVENTS.length > 0 && (
          <>
            <motion.div
              className="subsection-header"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="subsection-title">🏅 Technical Events & Competitions</h3>
            </motion.div>

            <div className="events-grid">
              {TECHNICAL_EVENTS.map((event, i) => (
                <motion.div
                  key={event.id}
                  className="event-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="event-card-left" style={{ background: `${event.color}15`, color: event.color }}>
                    <span style={{ fontSize: '1.6rem' }}>{event.icon}</span>
                  </div>
                  <div className="event-card-right">
                    <div className="event-type" style={{ color: event.color }}>{event.type_display}</div>
                    <h4 className="event-title">{event.title}</h4>
                    <div className="event-venue">{event.venue}</div>
                    <p className="event-desc">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Competitive Achievements */}
        {COMPETITIVE_ACHIEVEMENTS && COMPETITIVE_ACHIEVEMENTS.length > 0 && (
          <>
            <motion.div
              className="subsection-header"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="subsection-title">🎯 Competitive Achievements</h3>
            </motion.div>

            <div className="achievements-row">
              {COMPETITIVE_ACHIEVEMENTS.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <div className="achievement-icon" style={{ background: `${ach.color}15` }}>
                    <span style={{ fontSize: '1.5rem' }}>{ach.icon}</span>
                  </div>
                  <h4 className="achievement-title">{ach.title}</h4>
                  <p className="achievement-desc">{ach.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
