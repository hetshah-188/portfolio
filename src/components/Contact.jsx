// =============================================
// Contact Section
// Uses emailjs.send() (not sendForm) for max
// mobile compatibility — values passed directly
// as a JS object, no DOM form parsing needed.
// Includes a mailto fallback for no-JS / app env.
// =============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/resumeData";
import emailjs from "@emailjs/browser";

// ── Replace with your real EmailJS credentials ──
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ────────────────────────────────────────────────

// Detect whether EmailJS is actually configured
const EMAILJS_CONFIGURED =
  EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY  !== "YOUR_PUBLIC_KEY";

function InputField({ label, name, type = "text", value, onChange, error, multiline }) {
  const base =
    "w-full bg-white dark:bg-white/5 border rounded-2xl px-5 py-3.5 text-sm " +
    "text-dark dark:text-white placeholder-neutral-light " +
    "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary " +
    "transition-all duration-200 appearance-none";
  const border = error
    ? "border-red-400"
    : "border-neutral/20 dark:border-white/10";

  return (
    <div>
      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={`${base} ${border} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Your ${label.toLowerCase()}...`}
          autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"}
          className={`${base} ${border}`}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form,   setForm]   = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = "Invalid email address";
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

    // If EmailJS is not configured, open mailto as fallback (works on mobile too)
    if (!EMAILJS_CONFIGURED) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body    = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
      return;
    }

    setStatus("loading");
    try {
      // emailjs.send() — sends values as a plain object.
      // Much more reliable on mobile than sendForm() which
      // relies on reading the DOM form element.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          to_email:     personalInfo.email,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  // Build a mailto href for the direct-email fallback button
  const mailtoHref = `mailto:${personalInfo.email}`;

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-300/10 dark:bg-blue-900/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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
            Have a project in mind or just want to chat? I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Mail,        label: "Email",    value: personalInfo.email,    href: mailtoHref },
              { icon: MapPin,      label: "Location", value: personalInfo.location, href: null },
              { icon: FaGithub,    label: "GitHub",   value: "hetshah-188",         href: personalInfo.github },
              { icon: FaLinkedinIn,label: "LinkedIn", value: "hetshah188",          href: personalInfo.linkedin },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-neutral dark:text-neutral-light font-medium mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-dark dark:text-white">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="p-5 rounded-3xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-dark dark:text-white">Currently Available</span>
              </div>
              <p className="text-xs text-neutral dark:text-neutral-light">
                Open for internships, freelance projects, and full-time roles.
              </p>
            </div>

            {/* Direct email button — always visible, great fallback on mobile */}
            <a
              href={mailtoHref}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl
                         border-2 border-primary/30 text-primary dark:text-blue-400
                         text-sm font-semibold transition-all
                         hover:border-primary hover:bg-primary/5 active:scale-95"
            >
              <Mail size={15} />
              Email Me Directly
              <ExternalLink size={13} />
            </a>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-light-bg dark:bg-white/5 rounded-3xl p-6 md:p-8 border border-neutral/10 dark:border-white/10 space-y-5"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              {/* Message */}
              <InputField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                multiline
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary flex items-center justify-center gap-2
                           disabled:opacity-60 disabled:cursor-not-allowed
                           active:scale-[0.98] transition-transform"
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending…
                  </>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>

              {/* Status feedback */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium"
                  >
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you soon 🎉
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                      <AlertCircle size={16} />
                      Something went wrong — try emailing me directly below.
                    </div>
                    {/* Inline mailto fallback shown on error */}
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-2"
                    >
                      <Mail size={13} /> {personalInfo.email}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hint if EmailJS not configured */}
              {!EMAILJS_CONFIGURED && (
                <p className="text-xs text-neutral-light text-center pt-1">
                  
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
