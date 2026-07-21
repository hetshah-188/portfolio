// =============================================
// Skills Section — Grid with progress bars
// =============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/resumeData";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaAws 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiExpress, 
  SiFastapi, 
  SiMongodb, 
  SiPostgresql, 
  SiGooglecloud 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const ICON_MAP = {
  "React.js": <FaReact className="text-sky-400 group-hover:rotate-180 transition-transform duration-1000" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-neutral-400 dark:text-neutral-200" />,
  "FastAPI": <SiFastapi className="text-emerald-500" />,
  "Python": <FaPython className="text-blue-400" />,
  "Java": <FaJava className="text-red-500" />,
  "MongoDB": <SiMongodb className="text-emerald-600" />,
  "PostgreSQL": <SiPostgresql className="text-sky-600" />,
  "AWS (EC2, IAM, S3)": <FaAws className="text-amber-500" />,
  "GCP": <SiGooglecloud className="text-blue-500" />,
  "Git": <FaGitAlt className="text-orange-600" />,
  "GitHub": <FaGithub className="text-neutral-800 dark:text-white" />,
  "VS Code": <VscVscode className="text-sky-500" />,
};

const CATEGORY_COLORS = {
  "Frontend": "#00BCD4",
  "Backend": "#4CAF50",
  "Databases": "#FF9800",
  "Cloud & DevOps": "#9C27B0",
};

function SkillBar({ name, level, color, idx }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-default"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-120">
            {ICON_MAP[name] || "💡"}
          </span>
          <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-dark dark:group-hover:text-white">
            {name}
          </span>
        </div>
        <span 
          className="text-xs font-bold transition-all duration-300" 
          style={{ 
            color: hovered ? color : '#71717a', 
            textShadow: hovered ? `0 0 8px ${color}80` : 'none' 
          }}
        >
          {level}%
        </span>
      </div>
      
      {/* Progress track */}
      <div className="h-2 bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden border border-zinc-200/20 dark:border-zinc-700/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative"
          style={{ 
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            boxShadow: hovered ? `0 0 8px ${color}` : 'none'
          }}
        >
          {/* Shimmer effect on bar when hovered */}
          {hovered && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

function CategoryBlock({ category, skillList, isHovered, onHover, onLeave }) {
  const color = CATEGORY_COLORS[category] || "#0066CC";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        boxShadow: isHovered 
          ? `0 10px 30px -10px ${color}40, 0 0 20px -5px ${color}20` 
          : 'none',
        borderColor: isHovered ? color : undefined
      }}
      className="bg-white dark:bg-white/5 rounded-3xl p-7 border border-zinc-200 dark:border-zinc-800/50 card-glow transition-all duration-300 relative overflow-hidden"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id="skills" className="section-padding bg-light-bg dark:bg-dark/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Skills</span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white tracking-tight mb-4">
            My Tech Stack
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto">
            Technologies and tools I work with daily to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto md:justify-center items-center gap-2 mb-10 pb-2 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {["All", ...Object.keys(skills)].map((cat) => {
            const isActive = activeCategory === cat;
            const color = CATEGORY_COLORS[cat] || "#0066CC";
            
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 border flex-shrink-0 snap-center
                  ${isActive 
                    ? "text-white shadow-lg" 
                    : "bg-white dark:bg-white/5 border-zinc-200 dark:border-zinc-800/80 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                  }`}
                style={{
                  backgroundColor: isActive ? color : undefined,
                  borderColor: isActive ? color : undefined,
                  boxShadow: isActive ? `0 4px 14px ${color}50` : undefined,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill grid */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {categories
              .filter(([cat]) => activeCategory === "All" || activeCategory === cat)
              .map(([cat, list]) => (
                <motion.div
                  key={cat}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryBlock
                    category={cat}
                    skillList={list}
                    isHovered={hoveredCategory === cat}
                    onHover={() => setHoveredCategory(cat)}
                    onLeave={() => setHoveredCategory(null)}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

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
              className="px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-neutral/15 dark:border-white/10 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:border-primary/40 hover:text-primary dark:hover:text-primary-light transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
