// =============================================
// Footer — Minimal, modern
// =============================================
import { motion } from "framer-motion";
import { Mail, Code2, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/resumeData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark dark:bg-black py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            Het<span className="text-primary">.</span>Shah
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
              { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:bg-primary/20 transition-all"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm flex items-center gap-1">
            © {year} Het Shah · Made with <Heart size={12} className="text-red-400 fill-red-400" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
