// =============================================
// Experience Section — Timeline of work
// =============================================
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experience } from "../data/resumeData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-dark relative overflow-hidden"
    >
      {/* BG Accent Blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Journey</span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral/15 dark:border-white/10 ml-4 md:ml-6 space-y-12 py-2">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-dark border-4 border-primary group-hover:scale-125 transition-transform duration-300 z-10" />

              {/* Experience Card */}
              <div className="bg-white dark:bg-white/5 rounded-3xl p-6 md:p-8 border border-neutral/15 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                
                {/* Icon Container */}
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-2xl" style={{ color: exp.color }}>
                  {exp.icon || "💼"}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <span className="text-xs text-primary font-bold tracking-wider uppercase bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">
                      Internship
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-white mt-3 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                      {exp.company}
                    </p>
                    
                    {/* Meta info: Period + Location */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span className="leading-normal">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-light-bg dark:bg-white/10 text-neutral dark:text-neutral-light border border-neutral/5 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
