import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitFork, Star, Users, BookOpen, GitCommit } from 'lucide-react';
import { GITHUB_ACTIVITY } from '../data/portfolioData';

export default function GithubActivity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { icon: BookOpen, value: GITHUB_ACTIVITY.repos, label: 'Repositories' },
    { icon: Star, value: GITHUB_ACTIVITY.stars, label: 'Stars Earned' },
    { icon: GitFork, value: GITHUB_ACTIVITY.forks, label: 'Forks' },
    { icon: Users, value: GITHUB_ACTIVITY.followers, label: 'Followers' },
  ];

  return (
    <section className="section" id="github" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Open Source</span>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            Contributions, repositories, and open-source involvement.
          </p>
        </motion.div>

        <div className="github-layout">
          {/* Stats row */}
          <motion.div
            className="github-stats-row"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="github-stat-card"
                whileHover={{ y: -4, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              >
                <stat.icon size={20} className="github-stat-icon" />
                <div className="github-stat-value">{stat.value}</div>
                <div className="github-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="github-bottom-row">
            {/* Language breakdown */}
            <motion.div
              className="github-languages-card"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="github-card-title">Language Distribution</h3>
              <div className="github-lang-bar">
                {GITHUB_ACTIVITY.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="github-lang-segment"
                    style={{
                      width: `${lang.percentage}%`,
                      background: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <div className="github-lang-legend">
                {GITHUB_ACTIVITY.languages.map((lang) => (
                  <div key={lang.name} className="github-lang-item">
                    <span className="github-lang-dot" style={{ background: lang.color }} />
                    <span className="github-lang-name">{lang.name}</span>
                    <span className="github-lang-pct">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent commits */}
            <motion.div
              className="github-commits-card"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="github-card-title">Recent Commits</h3>
              <div className="github-commits-list">
                {GITHUB_ACTIVITY.recentCommits.map((commit, i) => (
                  <motion.div
                    key={i}
                    className="github-commit"
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                  >
                    <GitCommit size={14} className="github-commit-icon" />
                    <div className="github-commit-info">
                      <div className="github-commit-msg">{commit.message}</div>
                      <div className="github-commit-meta">
                        <span className="github-commit-repo">{commit.repo}</span>
                        <span className="github-commit-date">{commit.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="github-cta"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              className="btn btn-outline"
              href={`https://github.com/${GITHUB_ACTIVITY.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitFork size={16} />
              View Full GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
