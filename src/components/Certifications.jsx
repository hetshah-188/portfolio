// =============================================
// Certifications Section
// =============================================
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "../data/resumeData";

export default function Certifications() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Certifications & Achievements</h2>
          <p className="text-white/50 text-sm">Hands-on learning & real-world recognition</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${cert.color}20` }}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-0.5">{cert.title}</h3>
                  <p className="text-xs text-white/50">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {cert.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-xs text-white/60">
                    <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: cert.color }} />
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
