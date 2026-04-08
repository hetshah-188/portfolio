// =============================================
// Navbar — Sticky, transparent-to-frosted
// =============================================
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Code2, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    // Offset for fixed 64px navbar
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-dark/80 shadow-sm border-b border-white/20 dark:border-white/5"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 font-bold text-xl text-dark dark:text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Code2 size={16} className="text-white" />
          </div>
          <span>Het<span className="text-primary">.</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              whileHover={{ scale: 1.05 }}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${active === link.href.slice(1)
                  ? "text-primary"
                  : "text-neutral dark:text-neutral-light hover:text-dark dark:hover:text-white"
                }`}
            >
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Resume download button — desktop only */}
          <motion.a
            href="/Het_Shah_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20"
          >
            <Download size={13} />
            Resume
          </motion.a>
          {/* Dark mode toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-light-bg dark:bg-white/10 flex items-center justify-center text-dark dark:text-white transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-9 h-9 rounded-full bg-light-bg dark:bg-white/10 flex items-center justify-center text-dark dark:text-white"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl bg-white/95 dark:bg-dark/95 border-t border-white/10"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="block px-8 py-4 text-sm font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors border-b border-neutral/10 dark:border-white/5"
              >
                {link.label}
              </motion.a>
            ))}
            {/* Resume link in mobile menu */}
            <motion.a
              href="/Het_Shah_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
              className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-primary"
            >
              <Download size={14} /> Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
