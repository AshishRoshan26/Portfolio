import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Layers, Code2, ExternalLink, GitFork, Calendar, Clock, GitBranch, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/portfolioData';

export default function Projects({ onSelect }) {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  // Split: first project is the featured hero, rest are cards
  const featuredProject = filtered.find(p => p.is_featured) || filtered[0];
  const otherProjects = filtered.filter(p => p !== featuredProject);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production-grade applications with live source code — built with modern architectures and real-world engineering patterns.
          </p>
        </motion.div>

        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {PROJECT_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`filter-tab ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Project Hero */}
        {featuredProject && (
          <motion.div
            className="featured-project-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <FeaturedCard project={featuredProject} onClick={() => onSelect(featuredProject)} />
          </motion.div>
        )}

        {/* Remaining project cards */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id || project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <ProjectCard project={project} onClick={() => onSelect(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Project Card (Large Hero) ─── */
function FeaturedCard({ project, onClick }) {
  const gradient = `linear-gradient(135deg, ${project.gradient_from || '#6366f1'}, ${project.gradient_to || '#8b5cf6'})`;
  const categoryColor = project.gradient_from || '#818cf8';

  return (
    <div className="featured-card" onClick={onClick}>
      {/* Ambient glow */}
      <div className="featured-card-glow" style={{
        background: `radial-gradient(ellipse at 20% 50%, ${project.gradient_from}20 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, ${project.gradient_to}15 0%, transparent 60%)`
      }} />

      <div className="featured-card-gradient" style={{ background: gradient }} />

      <div className="featured-card-content">
        <div className="featured-card-left">
          <div className="featured-card-header">
            <div className="featured-card-badges">
              <span className="project-status-badge production">
                <span className="status-dot" />
                Live on GitHub
              </span>
              <span className="project-category-pill" style={{ color: categoryColor, borderColor: `${categoryColor}40` }}>
                {project.category_display || project.category}
              </span>
            </div>
          </div>

          <h3 className="featured-card-title">{project.title}</h3>
          <p className="featured-card-subtitle">{project.subtitle}</p>
          <p className="featured-card-desc">{project.short_description}</p>

          <div className="featured-card-tech">
            {(project.tech_stack || []).map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          <div className="featured-card-actions">
            {project.github_url && (
              <a
                className="project-action-btn github-btn"
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <GitBranch size={16} />
                View Source Code
              </a>
            )}
            {project.live_url && (
              <a
                className="project-action-btn live-btn"
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Live Project
              </a>
            )}
            <button
              className="project-action-btn details-btn"
              onClick={(e) => { e.stopPropagation(); onClick(); }}
            >
              <ArrowRight size={16} />
              Full Details
            </button>
          </div>
        </div>

        <div className="featured-card-right">
          <div className="featured-stats-grid">
            <div className="featured-stat-item">
              <Layers size={20} style={{ color: categoryColor }} />
              <div className="featured-stat-value">{project.modules_count}</div>
              <div className="featured-stat-label">Modules</div>
            </div>
            <div className="featured-stat-item">
              <Code2 size={20} style={{ color: categoryColor }} />
              <div className="featured-stat-value">{project.api_endpoints}</div>
              <div className="featured-stat-label">Endpoints</div>
            </div>
            <div className="featured-stat-item">
              <Clock size={20} style={{ color: categoryColor }} />
              <div className="featured-stat-value">{project.duration}</div>
              <div className="featured-stat-label">Duration</div>
            </div>
            <div className="featured-stat-item">
              <Zap size={20} style={{ color: categoryColor }} />
              <div className="featured-stat-value">{(project.tech_stack || []).length}</div>
              <div className="featured-stat-label">Technologies</div>
            </div>
          </div>

          {/* Quick features preview */}
          <div className="featured-features-preview">
            {(project.features || []).slice(0, 4).map((feat, i) => (
              <div key={i} className="featured-feature-item">
                <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
            {(project.features || []).length > 4 && (
              <div className="featured-feature-more">
                +{project.features.length - 4} more features
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Standard Project Card ─── */
function ProjectCard({ project, onClick }) {
  const gradient = `linear-gradient(135deg, ${project.gradient_from || '#6366f1'}, ${project.gradient_to || '#8b5cf6'})`;
  const categoryColor = project.gradient_from || '#818cf8';

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-gradient" style={{ background: gradient }} />
      <div className="project-card-body">
        <div className="project-card-top-row">
          <div className="project-card-badges-row">
            <div className="project-card-category" style={{ color: categoryColor }}>
              {project.category_display || project.category}
            </div>
            <span className="project-status-badge-sm production">
              <span className="status-dot-sm" />
              Live
            </span>
          </div>
          <div className="project-card-year">
            <Calendar size={12} />
            {project.year}
          </div>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-subtitle">{project.subtitle}</p>
        <p className="project-card-desc">{project.short_description}</p>

        <div className="project-card-tech">
          {(project.tech_stack || []).slice(0, 5).map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          {(project.tech_stack || []).length > 5 && (
            <span className="tech-tag">+{project.tech_stack.length - 5}</span>
          )}
        </div>

        <div className="project-card-stats">
          <div className="project-stat">
            <Layers size={14} />
            <span className="project-stat-value">{project.modules_count}</span>
            modules
          </div>
          <div className="project-stat">
            <Code2 size={14} />
            <span className="project-stat-value">{project.api_endpoints}</span>
            endpoints
          </div>
          {project.duration && (
            <div className="project-stat">
              <Clock size={14} />
              <span className="project-stat-value">{project.duration}</span>
            </div>
          )}
        </div>

        <div className="project-card-links">
          {project.github_url && (
            <a
              className="project-link-btn github-link"
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <GitBranch size={14} />
              Source
            </a>
          )}
          {project.live_url && (
            <a
              className="project-link-btn live-link"
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          <button
            className="project-link-btn"
            onClick={(e) => { e.stopPropagation(); onClick(); }}
          >
            <ArrowRight size={14} />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
