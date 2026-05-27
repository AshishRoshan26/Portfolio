import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Layers, Code2, Server, GitBranch, ExternalLink, Calendar, Clock, Zap } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const gradient = `linear-gradient(135deg, ${project.gradient_from || '#6366f1'}, ${project.gradient_to || '#8b5cf6'})`;
  const categoryColor = project.gradient_from || '#818cf8';

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-gradient-bar" style={{ background: gradient }} />

          <div className="modal-header">
            <div>
              <div className="modal-header-badges">
                <div className="modal-category" style={{ color: categoryColor }}>
                  {project.category_display || project.category}
                </div>
                <span className="project-status-badge-sm production">
                  <span className="status-dot-sm" />
                  Live
                </span>
              </div>
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{project.subtitle}</p>
            </div>
            <button className="modal-close" onClick={onClose}>
              <X size={18} />
            </button>
          </div>

          <div className="modal-body">
            {/* Stats row */}
            <div className="modal-stats-row">
              <div className="modal-stat-card">
                <Layers size={18} style={{ color: categoryColor, marginBottom: 4 }} />
                <div className="modal-stat-value">{project.modules_count}</div>
                <div className="modal-stat-label">Modules</div>
              </div>
              <div className="modal-stat-card">
                <Code2 size={18} style={{ color: categoryColor, marginBottom: 4 }} />
                <div className="modal-stat-value">{project.api_endpoints}</div>
                <div className="modal-stat-label">API Endpoints</div>
              </div>
              <div className="modal-stat-card">
                <Zap size={18} style={{ color: categoryColor, marginBottom: 4 }} />
                <div className="modal-stat-value">{(project.tech_stack || []).length}</div>
                <div className="modal-stat-label">Technologies</div>
              </div>
              {project.duration && (
                <div className="modal-stat-card">
                  <Clock size={18} style={{ color: categoryColor, marginBottom: 4 }} />
                  <div className="modal-stat-value" style={{ fontSize: '1.2rem' }}>{project.duration}</div>
                  <div className="modal-stat-label">Duration</div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="modal-actions">
              {project.github_url && (
                <a
                  className="modal-action-btn github"
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch size={18} />
                  View on GitHub
                </a>
              )}
              {project.live_url && (
                <a
                  className="modal-action-btn live"
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Live Project
                </a>
              )}
            </div>

            {/* Description */}
            <p className="modal-desc">{project.description}</p>

            {/* Tech Stack */}
            <h3 className="modal-section-title">
              <Code2 size={18} style={{ color: categoryColor }} />
              Tech Stack
            </h3>
            <div className="modal-tech-stack">
              {(project.tech_stack || []).map(tech => (
                <span key={tech} className="tech-tag" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <h3 className="modal-section-title">
              <CheckCircle size={18} style={{ color: 'var(--accent-emerald)' }} />
              Key Features
            </h3>
            <div className="modal-features">
              {(project.features || []).map((feat, i) => (
                <div key={i} className="modal-feature">
                  <CheckCircle size={14} className="modal-feature-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Architecture */}
            {project.architecture && (
              <>
                <h3 className="modal-section-title">
                  <Server size={18} style={{ color: categoryColor }} />
                  Architecture
                </h3>
                <div className="modal-architecture">
                  {project.architecture}
                </div>
              </>
            )}

            {/* Meta info */}
            <div className="modal-meta-row">
              {project.year && (
                <div className="modal-meta-item">
                  <Calendar size={14} />
                  <span>Year: {project.year}</span>
                </div>
              )}
              {project.duration && (
                <div className="modal-meta-item">
                  <Clock size={14} />
                  <span>Duration: {project.duration}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
