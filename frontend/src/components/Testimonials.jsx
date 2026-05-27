import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function Testimonials() {
  // Don't render if no testimonials
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setDirection(1);
    setActiveIndex((p) => (p + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Feedback from mentors, collaborators, and peers.
          </p>
        </motion.div>

        <motion.div
          className="testimonial-carousel"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="testimonial-card-wrapper">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                className="testimonial-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="testimonial-quote-icon">
                  <Quote size={32} />
                </div>

                <p className="testimonial-content">{current.content}</p>

                <div className="testimonial-stars">
                  {Array.from({ length: current.rating }, (_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <div className="testimonial-author">
                  <div
                    className="testimonial-avatar"
                    style={{
                      background: `linear-gradient(135deg, ${current.gradient[0]}, ${current.gradient[1]})`,
                    }}
                  >
                    {current.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="testimonial-name">{current.name}</div>
                    <div className="testimonial-role">{current.role}</div>
                    <div className="testimonial-org">{current.organization}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-nav-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button className="testimonial-nav-btn" onClick={next} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
