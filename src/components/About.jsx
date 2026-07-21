// =============================================
// About Section — Bio + Education Timeline
// Avatar: drop your photo as /public/het-avatar.jpg
// =============================================
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart } from "lucide-react";
import { personalInfo, education, interests } from "../data/resumeData";

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};
const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-primary" />
      <span className="text-primary text-sm font-semibold uppercase tracking-widest">
        {children}
      </span>
    </div>
  );
}

// Avatar — shows photo if loaded, falls back to initials
function Avatar() {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <div className="relative w-24 h-24 mb-6">
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-blue-400 blur-md opacity-40 scale-105" />
        <img
          src="/het-avatar.jpg"
          alt="Het Shah"
          onError={() => setImgError(true)}
          className="relative w-24 h-24 rounded-2xl object-cover object-top
                     border-2 border-white dark:border-white/20
                     shadow-xl shadow-primary/20"
          style={{ imageRendering: "auto" }}
        />
        {/* Online dot */}
        <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full
                         bg-green-400 border-4 border-white dark:border-[#1D1D1F]
                         shadow-sm" />
      </div>
    );
  }

  // Fallback: stylish initials
  return (
    <div className="relative w-24 h-24 mb-6">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-blue-400 blur-md opacity-40 scale-105" />
      <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-blue-400
                      flex items-center justify-center shadow-xl shadow-primary/20
                      border-2 border-white dark:border-white/20">
        <span className="text-white text-2xl font-black tracking-tight select-none">HS</span>
      </div>
      <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full
                       bg-green-400 border-2 border-white dark:border-[#1D1D1F] shadow-sm" />
    </div>
  );
}

const renderBio = (bioText) => {
  if (!bioText) return null;
  
  // Split into paragraphs by double newlines
  const paragraphs = bioText.split('\n\n');
  
  return paragraphs.map((para, idx) => {
    // Check if paragraph contains "What I've built" list
    if (para.includes("What I've built:")) {
      const lines = para.split('\n');
      const title = lines[0];
      const items = lines.slice(1);
      
      return (
        <div key={idx} className="my-5 bg-zinc-50 dark:bg-zinc-900/30 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800/50">
          <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
            {title}
          </h4>
          <ul className="space-y-3">
            {items.map((item, itemIdx) => {
              const match = item.match(/^([^\s]+)\s+(.+)$/);
              const emoji = match ? match[1] : "•";
              const text = match ? match[2] : item;
              
              return (
                <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-base flex-shrink-0 leading-none select-none">{emoji}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    
    // Default paragraph styling
    return (
      <p 
        key={idx} 
        className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-[15px] mb-4 last:mb-0"
      >
        {para}
      </p>
    );
  });
};

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-light-bg dark:bg-dark/50 relative overflow-hidden"
    >
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10
                      rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white tracking-tight">
            The person behind the code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Bio card ── */}
          <motion.div {...fadeInLeft}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl
                              bg-primary/10 dark:bg-primary/20 -z-10" />

              <div className="bg-white dark:bg-white/5 rounded-3xl p-8
                              border border-neutral/10 dark:border-white/10 shadow-sm
                              hover:border-primary/25 dark:hover:border-primary/35 transition-all duration-300">
                {/* ── Avatar ── */}
                <Avatar />

                <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">
                  {personalInfo.name}
                </h3>
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                  <MapPin size={14} className="text-primary" />
                  {personalInfo.location}
                </div>
                <div className="mb-6">
                  {renderBio(personalInfo.bio)}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t
                                border-neutral/10 dark:border-white/10">
                  {[
                    { label: "Projects", value: "3+" },
                    { label: "Cloud Certs", value: "3+" },
                    { label: "Years Exp", value: "1+" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-black text-primary">{s.value}</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Education + Interests ── */}
          <motion.div {...fadeInRight} className="space-y-8">
            {/* Education timeline */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-dark dark:text-white">Education</h3>
              </div>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5
                                bg-gradient-to-b from-primary to-primary/10
                                dark:from-primary dark:to-primary/20" />
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="flex gap-5 pl-2"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-dark
                                        border-2 border-primary flex items-center justify-center
                                        text-xl shadow-md z-10 relative">
                          {edu.icon}
                        </div>
                      </div>
                      <div className="bg-white dark:bg-white/5 rounded-2xl p-4
                                      border border-neutral/10 dark:border-white/10 flex-1
                                      hover:border-primary/30 transition-colors">
                        <div className="text-xs text-primary font-semibold mb-1">{edu.period}</div>
                        <div className="font-bold text-dark dark:text-white text-sm mb-1">{edu.degree}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{edu.institution}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-dark dark:text-white">Areas of Interest</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="tech-badge"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
