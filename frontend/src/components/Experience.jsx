import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Journey</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            Key milestones in my development journey.
          </p>
        </motion.div>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.id || i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <div className={`timeline-dot ${item.is_current ? 'current' : ''}`} />
              <div className="timeline-card">
                <div className="timeline-type">
                  {item.type_display || item.type}
                </div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-org">
                  {item.organization}
                  {item.location ? ` \u00B7 ${item.location}` : ''}
                </div>
                <div className="timeline-date">
                  {formatDate(item.start_date)}
                  {' \u2014 '}
                  {item.is_current ? 'Present' : formatDate(item.end_date)}
                </div>
                {item.description && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                )}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="timeline-highlights">
                    {item.highlights.map((h, j) => (
                      <div key={j} className="timeline-highlight">
                        <span className="timeline-highlight-dot" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
