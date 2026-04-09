// =============================================
// Hero Section — Animated background + typing
// =============================================
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { personalInfo } from "../data/resumeData";

const ROLES = personalInfo.roles;

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const full = ROLES[roleIdx];
    let timer;
    if (!deleting) {
      if (text.length < full.length) {
        timer = setTimeout(() => setText(full.slice(0, text.length + 1)), 80);
      } else {
        setPause(true);
        timer = setTimeout(() => { setPause(false); setDeleting(true); }, 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(full.slice(0, text.length - 1)), 45);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx, pause]);

  return (
    <span className="text-primary font-bold">
      {text}
      <span className="typing-cursor text-primary">|</span>
    </span>
  );
}

// Floating orb background
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <div className="blob blob-delay-0 absolute -top-32 -right-32 w-96 h-96 bg-primary/20 dark:bg-primary/15 blur-3xl" />
      {/* Blob 2 */}
      <div className="blob blob-delay-1 absolute top-1/2 -left-24 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/10 blur-3xl" />
      {/* Blob 3 */}
      <div className="blob blob-delay-2 absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-400/10 dark:bg-cyan-500/10 blur-3xl" />
      {/* Dot grid */}
      <div className="dot-pattern absolute inset-0 opacity-40 dark:opacity-20" />
    </div>
  );
}

const stagger = { animate: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-dark overflow-hidden pt-16"
    >
      <BackgroundOrbs />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        {/* Greeting badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-dark dark:text-white mb-4 tracking-tight leading-none"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Het Shah</span>{" "}
          <span className="inline-block animate">👋</span>
        </motion.h1>

        {/* Subheading with typing */}
        <motion.p
          variants={fadeUp}
          className="text-2xl md:text-3xl text-neutral dark:text-neutral-light font-light mb-2"
        >
          I build things for the web
        </motion.p>
        <motion.div variants={fadeUp} className="text-2xl md:text-3xl mb-8 h-10">
          <TypingText />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-base md:text-lg text-neutral dark:text-neutral-light leading-relaxed mb-10"
        >
          CE student at GTU crafting scalable web experiences — from RESTful APIs to AI-powered apps.
          Based in Ahmedabad, India 📍
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToProjects}
            className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/25"
          >
            View Projects <ExternalLink size={16} />
          </motion.button>
          <motion.a
            href="/Het_Shah_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary/30 text-primary dark:text-blue-400 font-semibold transition-all hover:border-primary hover:bg-primary/5"
          >
            <Download size={16} /> View Resume
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-neutral/20 dark:border-white/10 text-neutral dark:text-neutral-light font-semibold transition-all hover:border-primary/30 hover:text-primary dark:hover:text-primary-light"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
          {[
            { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
            { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: MdEmail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-2xl bg-light-bg dark:bg-white/10 flex items-center justify-center text-neutral dark:text-neutral-light hover:text-primary dark:hover:text-primary-light hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 border border-transparent hover:border-primary/20"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-light hover:text-primary transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button> */}
    </section>
  );
}
