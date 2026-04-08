// =============================================
// Skills Section — Grid with progress bars
// =============================================
import { motion } from "framer-motion";
import { skills } from "../data/resumeData";

// Skill icons using devicon CDN class names → we'll render SVG/emoji fallbacks
const ICON_MAP = {
  "JavaScript": "🟨", "Python": "🐍", "Java": "☕", "HTML5": "🌐", "CSS3": "🎨",
  "SQL": "🗄️", "React.js": "⚛️", "Tailwind CSS": "💨", "Node.js": "🟢",
  "Express.js": "🚂", "FastAPI": "⚡", "MongoDB": "🍃", "MySQL": "🐬",
  "GCP": "☁️", "Git": "🔀", "GitHub": "🐙", "VS Code": "🔵",
};

const CATEGORY_COLORS = {
  "Languages": "#0066CC",
  "Frontend": "#00BCD4",
  "Backend": "#4CAF50",
  "Databases": "#FF9800",
  "Cloud & Tools": "#9C27B0",
};

function SkillBar({ name, level, color, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.07, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-lg">{ICON_MAP[name] || "💡"}</span>
          <span className="text-sm font-semibold text-dark dark:text-white">{name}</span>
        </div>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-neutral/10 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.07 + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

function CategoryBlock({ category, skillList }) {
  const color = CATEGORY_COLORS[category] || "#0066CC";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-white/5 rounded-3xl p-6 border border-neutral/10 dark:border-white/10 card-glow transition-all duration-300"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-3 h-3 rounded-full" style={{ background: color }} />
        <h3 className="font-bold text-dark dark:text-white text-sm uppercase tracking-wider">{category}</h3>
      </div>
      <div className="space-y-4">
        {skillList.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} color={color} idx={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section-padding bg-light-bg dark:bg-dark/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Skills</span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white tracking-tight mb-4">
            My Tech Stack
          </h2>
          <p className="text-neutral dark:text-neutral-light max-w-xl mx-auto">
            Technologies and tools I work with daily to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(([cat, list]) => (
            <CategoryBlock key={cat} category={cat} skillList={list} />
          ))}
        </div>

        {/* Floating tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["REST API Design", "System Design", "OOP", "CI/CD", "Computer Networks", "Operating Systems", "Data Structures & Algorithms", "Agile"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-neutral/15 dark:border-white/10 text-xs font-semibold text-neutral dark:text-neutral-light hover:border-primary/40 hover:text-primary dark:hover:text-primary-light transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
