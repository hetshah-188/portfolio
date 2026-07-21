// =============================================
// Navbar — Sticky, transparent-to-frosted
// Mobile menu uses plain elements (no framer
// motion on items) to ensure touch events fire
// reliably on iOS/Android WebViews.
// =============================================
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Code2, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Frosted glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll to section — offset by navbar height (64px)
  const handleNav = useCallback((href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  // Mobile tap handler: close menu first, then scroll after menu finishes collapsing
  const handleMobileNav = useCallback((href) => {
    setMenuOpen(false);
    // Small delay lets the menu close animation start before scroll
    setTimeout(() => handleNav(href), 50);
  }, [handleNav]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "backdrop-blur-xl bg-white/90 dark:bg-[#1D1D1F]/90 shadow-sm border-b border-black/5 dark:border-white/5"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => handleNav("#home")}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-xl text-dark dark:text-white"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span>Het<span className="text-primary">.</span></span>
          </motion.button>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
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
              </motion.button>
            ))}
          </nav>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Resume — desktop */}
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

            {/* Dark/light toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              className="w-9 h-9 rounded-full bg-light-bg dark:bg-white/10 flex items-center justify-center text-dark dark:text-white transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden w-9 h-9 rounded-full bg-light-bg dark:bg-white/10 flex items-center justify-center text-dark dark:text-white active:scale-90 transition-transform"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile full-screen overlay menu ──
          Rendered as a portal-like sibling to the header so it
          is never clipped by the header's overflow or z-index.
          Uses plain <button> / <a> elements — no framer-motion
          on individual items — so touch events fire instantly. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ top: 64 }} /* sits flush below the 64px header */
            className="fixed left-0 right-0 bottom-0 z-40 md:hidden flex flex-col
                       bg-white dark:bg-[#1D1D1F]
                       border-t border-neutral/10 dark:border-white/8
                       overflow-y-auto"
          >
            {/* Nav links */}
            <nav className="flex flex-col flex-1 pt-4 pb-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  /* Use onPointerDown so it fires before any focus/blur noise on iOS */
                  onPointerDown={() => handleMobileNav(link.href)}
                  className={`w-full text-left px-8 py-4 text-base font-medium
                    border-b border-neutral/8 dark:border-white/5
                    transition-colors duration-150 active:bg-primary/5
                    ${active === link.href.slice(1)
                      ? "text-primary"
                      : "text-dark dark:text-white"
                    }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Resume link */}
              <a
                href="/Het_Shah_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary
                           border-b border-neutral/8 dark:border-white/5 active:bg-primary/5"
                onClick={() => setMenuOpen(false)}
              >
                <Download size={16} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}