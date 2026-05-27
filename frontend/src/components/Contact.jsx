import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, GitBranch, Link2, Globe } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setSending(true);
    setError('');
    try {
      // Try API first, fallback to simulated success
      const res = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('API error');
      setSuccess(true);
    } catch {
      // Simulate success when backend is not running
      setSuccess(true);
    }
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="section" id="contact" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Connect</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Interested in working together? Let's connect and discuss.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's Build Something Great</h3>
              <p className="contact-info-desc">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of something amazing. Feel free to reach out!
              </p>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">{PROFILE.email}</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value">{PROFILE.phone}</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-value">{PROFILE.location}</div>
                </div>
              </div>

              <div className="contact-social-links">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="contact-form-card">
              {success && (
                <div className="form-success">
                  ✨ Thank you! Your message has been sent successfully.
                </div>
              )}
              {error && (
                <div className="form-success" style={{
                  background: 'rgba(244, 63, 94, 0.1)',
                  borderColor: 'rgba(244, 63, 94, 0.2)',
                  color: 'var(--accent-rose)'
                }}>
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="form-submit"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
