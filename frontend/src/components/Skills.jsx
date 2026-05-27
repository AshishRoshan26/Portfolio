import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { SKILL_GROUPS } from '../data/portfolioData';

/* ─── Logo Lookup: Devicon CDN for known techs, emoji fallback ─── */
const SKILL_ICONS = {
  'Python':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Django':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'FastAPI':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'SQL':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'JavaScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Bootstrap':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'PostgreSQL':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MySQL':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MongoDB':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'SQLite':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'pytest':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg',
  'Linux':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'Bash Scripting': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  'Git':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Docker':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
  'AWS (EC2, S3, RDS)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
};

const LEVEL_CONFIG = {
  'Advanced':     { color: '#10b981', bg: 'rgba(16,185,129,0.12)', label: 'Advanced', width: '92%' },
  'Intermediate': { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', label: 'Intermediate', width: '65%' },
  'Learning':     { color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', label: 'Learning', width: '35%' },
};

function getSkillIcon(skill) {
  if (skill.icon && skill.icon.startsWith('http')) return skill.icon;
  if (SKILL_ICONS[skill.name]) return SKILL_ICONS[skill.name];
  return null;
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const totalSkills = SKILL_GROUPS.reduce((sum, g) => sum + g.skills.length, 0);

  return (
    <section className="section" id="skills" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            {totalSkills} technologies across {SKILL_GROUPS.length} domains — hover any skill to see how I've applied it.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="skill-groups-grid">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              className="skill-group-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
            >
              {/* Gradient accent bar */}
              <div className="skill-group-accent" style={{ background: group.gradient }} />

              {/* Ambient glow */}
              <div
                className="skill-group-glow"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${group.color}15, transparent 70%)` }}
              />

              <div className="skill-group-body">
                {/* Header */}
                <div className="skill-group-header">
                  <div className="skill-group-icon" style={{ background: `${group.color}18`, color: group.color }}>
                    <span>{group.icon}</span>
                  </div>
                  <div className="skill-group-header-text">
                    <h3 className="skill-group-title">{group.title}</h3>
                    <span className="skill-group-count">{group.skills.length} skills</span>
                  </div>
                  {group.badge && (
                    <span
                      className="skill-group-badge"
                      style={{ color: group.color, borderColor: `${group.color}40`, background: `${group.color}12` }}
                    >
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* Skill Tags with Logos */}
                <div className="skill-group-tags">
                  {group.skills.map((skill) => (
                    <SkillTag key={skill.name} skill={skill} groupColor={group.color} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="skills-total-indicator"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span className="skills-legend">
            <span className="skills-legend-item"><span className="skills-legend-dot" style={{background:'#10b981'}} /> Advanced</span>
            <span className="skills-legend-item"><span className="skills-legend-dot" style={{background:'#f59e0b'}} /> Intermediate</span>
            <span className="skills-legend-item"><span className="skills-legend-dot" style={{background:'#8b5cf6'}} /> Learning</span>
          </span>
          <span>{SKILL_GROUPS.length} categories · {totalSkills} technologies · hover to explore</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Interactive Skill Tag with Logo & Tooltip ─── */
function SkillTag({ skill, groupColor }) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const tagRef = useRef(null);
  const level = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG['Intermediate'];
  const show = hovered || pinned;
  const iconUrl = getSkillIcon(skill);

  return (
    <div
      className={`skill-tag-wrapper ${show ? 'active' : ''}`}
      ref={tagRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.stopPropagation(); setPinned(prev => !prev); }}
    >
      <span className="skill-tag" style={{ '--tag-color': groupColor }}>
        {/* Logo or proficiency dot */}
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={skill.name}
            className="skill-tag-logo"
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <span className="skill-tag-dot" style={{ background: level.color }} />
        )}
        {skill.name}
      </span>

      {/* Tooltip */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="skill-tooltip"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <div className="skill-tooltip-arrow" />
            <div className="skill-tooltip-header">
              {iconUrl && (
                <img src={iconUrl} alt="" className="skill-tooltip-logo" />
              )}
              <span className="skill-tooltip-name">{skill.name}</span>
              <span className="skill-tooltip-level" style={{ color: level.color, background: level.bg }}>
                {level.label}
              </span>
            </div>
            <div className="skill-tooltip-bar-track">
              <motion.div
                className="skill-tooltip-bar-fill"
                style={{ background: level.color }}
                initial={{ width: 0 }}
                animate={{ width: level.width }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <p className="skill-tooltip-context">{skill.context}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
