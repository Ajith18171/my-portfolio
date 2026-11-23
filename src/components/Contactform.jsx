import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Loader2, AlertCircle } from "lucide-react";

/**
 * ContactForm
 *
 * This posts to whatever endpoint you pass via `endpoint`. Two easy options
 * if you don't have a backend:
 *   1. Formspree — sign up free at formspree.io, use your form's endpoint
 *      e.g. endpoint="https://formspree.io/f/xxxxxxx"
 *   2. EmailJS — client-side email sending, swap the fetch call for
 *      emailjs.send(...) inside handleSubmit
 *
 * Usage:
 * <ContactForm endpoint="https://formspree.io/f/xxxxxxx" />
 */
const PROJECT_TYPES = ["Photo Editing", "Video Editing", "Color Grading", "Full Post-Production"];

export default function ContactForm({ endpoint }) {
  const [form, setForm] = useState({ name: "", email: "", projectType: PROJECT_TYPES[0], message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email.";
    }
    if (!form.message.trim()) next.message = "Tell me a bit about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No endpoint wired up yet — simulate for local preview
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus("success");
      setForm({ name: "", email: "", projectType: PROJECT_TYPES[0], message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0a0514]">
          <Check size={20} strokeWidth={2.2} />
        </span>
        <p className="text-lg font-semibold">Message sent</p>
        <p className="max-w-sm text-sm text-white/40">
          Thanks for reaching out — I'll get back to you within a day or two.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 underline underline-offset-4 hover:text-white"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" error={errors.name}>
        <input
          type="text"
          value={form.name}
          onChange={handleChange("name")}
          placeholder="Your name"
          className={inputClass(errors.name)}
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          placeholder="you@email.com"
          className={inputClass(errors.email)}
        />
      </Field>

      <Field label="Project type" className="sm:col-span-2">
        <select
          value={form.projectType}
          onChange={handleChange("projectType")}
          className={inputClass() + " appearance-none"}
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-[#0a0514]">
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message} className="sm:col-span-2">
        <textarea
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Tell me about your project, timeline and budget..."
          className={inputClass(errors.message) + " resize-none"}
        />
      </Field>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex w-full items-center justify-center gap-3 rounded-md bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0a0514] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>

        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 flex items-center gap-2 text-xs text-red-300/80"
            >
              <AlertCircle size={14} />
              Something went wrong. Please try again or email me directly.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Field({ label, error, children, className = "" }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[11px] text-red-300/80">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full rounded-md border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-white/40 focus:bg-white/[0.06] ${
    error ? "border-red-400/50" : "border-white/15"
  }`;
}