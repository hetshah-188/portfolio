// =============================================
// Contact Section — Form with EmailJS
// =============================================
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/resumeData";
import emailjs from "@emailjs/browser";

// ⚠️ Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_qo27npe";
const EMAILJS_TEMPLATE_ID = "template_rkho26k";
const EMAILJS_PUBLIC_KEY = "9aRTv1oVemdDmhY39";

function InputField({ label, name, type = "text", value, onChange, error, multiline }) {
  const base = "w-full bg-light-bg dark:bg-white/5 border rounded-2xl px-5 py-3.5 text-sm text-dark dark:text-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200";
  const borderClass = error ? "border-red-400" : "border-neutral/20 dark:border-white/10";

  return (
    <div>
      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">{label}</label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={`${base} ${borderClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={`${base} ${borderClass}`}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-300/10 dark:bg-blue-900/20 rounded-full blur-3xl" />

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
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-neutral dark:text-neutral-light max-w-xl mx-auto">
            Have a project in mind or want to chat? I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
              { icon: FaGithub, label: "GitHub", value: "hetshah-188", href: personalInfo.github },
              { icon: FaLinkedinIn, label: "LinkedIn", value: "hetshah188", href: personalInfo.linkedin },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-neutral dark:text-neutral-light font-medium mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                      className="text-sm font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-dark dark:text-white">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability card */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-dark dark:text-white">Currently Available</span>
              </div>
              <p className="text-xs text-neutral dark:text-neutral-light">
                Open for internships, freelance projects, and full-time roles.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit}
              className="bg-light-bg dark:bg-white/5 rounded-3xl p-8 border border-neutral/10 dark:border-white/10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
                <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
              </div>
              <InputField label="Message" name="message" value={form.message} onChange={handleChange} error={errors.message} multiline />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    Sending...
                  </>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </motion.button>

              {/* Status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium"
                  >
                    <CheckCircle size={16} /> Message sent! I'll get back to you soon 🎉
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-500 text-sm font-medium"
                  >
                    <AlertCircle size={16} /> Something went wrong. Try emailing me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
