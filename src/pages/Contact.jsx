// import { motion } from "framer-motion";
// import PageShell from "../components/PageShell";
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   AtSign,
//   Check,
//   Clock,
//   Mail,
//   MessageCircle,
// } from "lucide-react";
// import { useState } from "react";

// /* Contact details */
// const INSTAGRAM_HANDLE = " ";
// const CONTACT_EMAIL = "ajithkumarsridhar2000@gmail.com";

// export default function ContactPage({ navItems, onNavigate }) {
//   const [emailCopied, setEmailCopied] = useState(false);

//   const dmLink = ` `;
//   const profileLink = ` `;

//   const mailLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
//     "Project Inquiry"
//   )}&body=${encodeURIComponent(
//     "Hi, I'd like to talk about a project.\n\nWhat I need:\nTimeline:\nBudget (if known):"
//   )}`;

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(CONTACT_EMAIL);
//       setEmailCopied(true);

//       setTimeout(() => {
//         setEmailCopied(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Failed to copy email:", error);
//     }
//   };

//   const channels = [
//     {
//       id: "email",
//       icon: Mail,
//       title: "Send an email",
//       body: "Prefer writing it all out? Send the brief, references or files straight to the inbox we check daily.",
//       cta: "Send an Email",
//       href: mailLink,
//       subtext: CONTACT_EMAIL,
//     },
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#0a0514] text-[#f3efff]">
//       <PageShell
//         navItems={navItems}
//         currentPath="/contact"
//         onNavigate={onNavigate}
//       >
//         {/* Hero */}
//         <section className="relative overflow-hidden border-b border-white/10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,.16),transparent_34%)]" />

//           <div className="relative mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
//             <motion.button
//               onClick={() => onNavigate("/")}
//               initial={{ opacity: 0, x: -15 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="mx-auto mb-9 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 transition hover:border-white/25 hover:text-white"
//             >
//               <ArrowLeft size={13} /> Back to Home
//             </motion.button>

//             <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35"
//             >
//               06 — Contact
//             </motion.p>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.15 }}
//               className="mt-5 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl"
//             >
//               LET'S WORK
//               <br />
//               <span className="text-white/30">TOGETHER.</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/40 sm:text-base"
//             >
//               Have a project in mind? Pick whichever's easiest and let's shape
//               it into something worth watching.
//             </motion.p>
//           </div>
//         </section>

//         {/* Contact channels */}
//         <section className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 lg:py-20">
//           <div className="mb-10 flex items-center gap-3">
//             <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/40">
//               <AtSign size={14} strokeWidth={1.7} />
//             </span>

//             <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
//               Let's Connect
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//             {channels.map((channel, i) => {
//               const Icon = channel.icon;

//               return (
//                 <motion.div
//                   key={channel.id}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.4 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center sm:p-8"
//                 >
//                   <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white/60">
//                     <Icon size={22} strokeWidth={1.6} />
//                   </span>

//                   <h2 className="mt-6 text-xl font-bold tracking-tight sm:text-2xl">
//                     {channel.title}
//                   </h2>

//                   <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-white/40">
//                     {channel.body}
//                   </p>

//                   {/* Main CTA */}
//                   <a
//                     href={channel.href}
//                     target={
//                       channel.id === "instagram" ? "_blank" : undefined
//                     }
//                     rel={
//                       channel.id === "instagram"
//                         ? "noopener noreferrer"
//                         : undefined
//                     }
//                     className="mx-auto mt-7 flex w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0a0514] transition hover:bg-white/90"
//                   >
//                     <Icon size={15} />
//                     {channel.cta}
//                   </a>

//                   {/* Instagram profile / Copy email */}
//                   {channel.id === "instagram" ? (
//                     <a
//                       href={channel.subtextHref}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="mx-auto mt-4 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 transition hover:text-white"
//                     >
//                       {channel.subtext}
//                       <ArrowUpRight size={12} />
//                     </a>
//                   ) : (
//                     <button
//                       type="button"
//                       onClick={copyEmail}
//                       className="mx-auto mt-4 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40 transition hover:text-white"
//                       title="Click to copy email"
//                     >
//                       {emailCopied ? (
//                         <>
//                           <Check size={13} className="text-green-400" />
//                           <span className="text-green-400">Copied!</span>
//                         </>
//                       ) : (
//                         <>
//                           {CONTACT_EMAIL}
//                           <span className="text-[9px] uppercase tracking-[0.12em] text-white/25">
//                             Copy
//                           </span>
//                         </>
//                       )}
//                     </button>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Response time note */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-center"
//           >
//             <Clock
//               size={13}
//               strokeWidth={1.8}
//               className="shrink-0 text-white/35"
//             />

//             <p className="text-[11px] leading-5 text-white/35">
//               Usually replies within 24 hours on both channels.
//             </p>
//           </motion.div>
//         </section>
//       </PageShell>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import { ArrowLeft, AtSign, Check, Clock, Mail } from "lucide-react";
import { useState } from "react";

/* Contact details */
const CONTACT_EMAIL = "ajithkumarsridhar2000@gmail.com";

export default function ContactPage({ navItems, onNavigate }) {
  const [emailCopied, setEmailCopied] = useState(false);

  const mailLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Professional Inquiry"
  )}&body=${encodeURIComponent(
    "Hi,\n\nI'd like to get in touch regarding an opportunity.\n\nInquiry Type:\nProject / Role Details:\nTimeline:\n\nLooking forward to hearing from you."
  )}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setEmailCopied(true);

      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0514] text-[#f3efff]">
      <PageShell
        navItems={navItems}
        currentPath="/contact"
        onNavigate={onNavigate}
      >
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,.16),transparent_34%)]" />

          <div className="relative mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
            <motion.button
              onClick={() => onNavigate("/")}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="mx-auto mb-9 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 transition hover:border-white/25 hover:text-white"
            >
              <ArrowLeft size={13} />
              Back to Home
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35"
            >
              03 — Contact
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl"
            >
              LET'S WORK
              <br />
              <span className="text-white/30">TOGETHER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/40 sm:text-base"
            >
              Whether you're looking to hire, collaborate, or bring a
              creative project to life, I'd love to hear from you.
              Let's connect and explore what's possible.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/40">
              <AtSign size={14} strokeWidth={1.7} />
            </span>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              Let's Connect
            </p>
          </div>

          {/* Perfectly Centered Email Card */}
          <div className="mx-auto flex max-w-[560px] justify-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:px-12 sm:py-14"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 text-white/60">
                <Mail size={25} strokeWidth={1.5} />
              </span>

              <h2 className="mt-7 text-2xl font-bold tracking-tight sm:text-3xl">
                Get in Touch
              </h2>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/40">
                Open to exciting career opportunities, freelance projects,
                and creative collaborations. Drop me an email and let's
                start a conversation.
              </p>

              {/* Email CTA */}
              <a
                href={mailLink}
                className="mt-9 flex w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0a0514] transition hover:bg-white/90"
              >
                <Mail size={16} />
                Send an Email
              </a>

              {/* Copy Email */}
              <button
                type="button"
                onClick={copyEmail}
                className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-white/40 transition hover:text-white"
                title="Click to copy email"
              >
                {emailCopied ? (
                  <>
                    <Check size={14} className="text-green-400" />
                    <span className="text-green-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    {CONTACT_EMAIL}
                    <span className="text-[9px] uppercase tracking-widest text-white/25">
                      Copy
                    </span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-center"
          >
            <Clock
              size={13}
              strokeWidth={1.8}
              className="shrink-0 text-white/35"
            />

            <p className="text-[11px] leading-5 text-white/35">
              Your Ideas, My Creativity. Let's Connect.
            </p>
          </motion.div>
        </section>
      </PageShell>
    </div>
  );
}

