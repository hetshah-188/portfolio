// =============================================
// Projects Section — Animated cards
// =============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, CheckCircle2, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/resumeData";

function StatusBadge({ status }) {
  const isLive = status === "In Progress";
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
      isLive ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
              : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
    }`}>
      {isLive ? <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> : <CheckCircle2 size={10} />}
      {status}
    </span>
  );
}

function ProjectCard({ project, idx }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="card-glow group relative bg-white dark:bg-white/5 rounded-3xl border border-neutral/10 dark:border-white/10 overflow-hidden cursor-pointer transition-all duration-300"
        onClick={() => setExpanded(true)}
      >
        {/* Top gradient bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient.replace('/20', '').replace('/10', '')} bg-[${project.color}]`}
          style={{ background: `linear-gradient(90deg, ${project.color}88, ${project.color}33)` }}
        />

        <div className="p-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${project.color}15` }}>
                {project.icon}
              </div>
              <div>
                <h3 className="font-bold text-dark dark:text-white text-lg leading-tight">{project.title}</h3>
                <p className="text-xs text-neutral dark:text-neutral-light">{project.subtitle}</p>
              </div>
            </div>
            <StatusBadge status={project.status} />
          </div>

          {/* Description */}
          <p className="text-sm text-neutral dark:text-neutral-light leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral/10 dark:border-white/10">
            <span className="text-xs text-neutral-light flex items-center gap-1">
              <Clock size={12} /> {project.period}
            </span>
            <div className="flex items-center gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-light-bg dark:bg-white/10 flex items-center justify-center text-neutral dark:text-neutral-light hover:text-primary transition-colors"
              >
                <FaGithub size={14} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Details <ExternalLink size={12} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Hover shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 60%)` }}
        />
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-md"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1a1a2e] rounded-3xl p-8 max-w-lg w-full border border-neutral/10 dark:border-white/10 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${project.color}15` }}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark dark:text-white">{project.title}</h3>
                    <p className="text-sm text-neutral dark:text-neutral-light">{project.subtitle}</p>
                  </div>
                </div>
                <button onClick={() => setExpanded(false)}
                  className="w-9 h-9 rounded-full bg-light-bg dark:bg-white/10 flex items-center justify-center hover:bg-neutral/20 transition-colors">
                  <X size={16} className="text-dark dark:text-white" />
                </button>
              </div>

              <p className="text-sm text-neutral dark:text-neutral-light leading-relaxed mb-4">{project.longDesc}</p>

              <h4 className="font-semibold text-dark dark:text-white mb-3 text-sm">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral dark:text-neutral-light">
                    <CheckCircle2 size={14} style={{ color: project.color }} className="flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((t) => <span key={t} className="tech-badge">{t}</span>)}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white transition-all"
                style={{ background: project.color }}
              >
                <FaGithub size={16} /> View on GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Projects</span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white tracking-tight mb-4">
            Things I've Built
          </h2>
          <p className="text-neutral dark:text-neutral-light max-w-xl mx-auto">
            A collection of projects showcasing full-stack skills, AI integration, and cloud deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
