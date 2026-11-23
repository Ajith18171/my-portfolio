import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Banknote,
  Blend,
  Building2,
  Cake,
  FileImage,
  FileText,
  Gift,
  Home as HouseIcon,
  IdCard,
  Layers,
  LayoutTemplate,
  MailPlus,
  Megaphone,
  Palette,
  PartyPopper,
  PenTool,
  Percent,
  PlaySquare,
  RefreshCw,
  Scissors,
  Tag,
  TrendingUp,
  UtensilsCrossed,
  Wand2,
} from "lucide-react";

/* Edit these three however your real path went — company names,
   dates, and a line on what you actually did there. */
const experience = [
 
{
  place: "PHOTO COLOR LAB",
  role: "Photo Editor & Graphic Designer",
  period: "2024 — 2025",
  text: [
    "Designed and edited wedding albums with creative layouts and professional photo arrangements.",
    "Performed professional photo retouching, skin correction, and image enhancement.",
    "Created promotional posters, banners, and print designs.",
    "Applied color correction, color grading, and tone adjustments using Lightroom and Photoshop.",
    "Handled background removal, replacement, and photo manipulation.",
    "Prepared high-quality images for printing and maintained consistent color quality.",
    "Worked on multiple client projects while maintaining design accuracy and deadlines."
  ].join("\n"),
},
{
  place: "FREELANCE",
  role: "Freelance Graphic Designer & Photo Editor",
  period: "2025 — 2026",
  text: [
    "Created custom posters, banners, logos, and social media creatives.",
    "Handled client-based photo editing, retouching, and image enhancement projects.",
    "Designed customized wedding albums with creative layouts and compositions.",
    "Performed advanced color correction, color grading, and cinematic tone adjustments.",
    "Created creative photo manipulations and professional visual compositions.",
    "Used Photoshop and Lightroom for detailed editing and high-quality output.",
    "Managed client feedback, design revisions, and project delivery."
  ].join("\n"),
},

{
  title: "PROFESSIONAL DEVELOPMENT",
  role: "Hands-on Learning & Skill Development",
  text: [
    "Gained practical experience in professional graphic design and photo editing workflows.",
    "Improved advanced Adobe Photoshop skills through real-world editing projects.",
    "Developed strong Lightroom skills in color correction, color grading, and image enhancement.",
    "Learned creative wedding album layouts, photo composition, and print design techniques.",
    "Enhanced skills in photo manipulation, skin retouching, and background editing.",
    "Developed creative thinking, visual design sense, and attention to detail.",
    "Improved time management, client communication, and project handling skills.",
    "Expanded knowledge of Adobe Illustrator and DaVinci Resolve for creative design and visual editing."
  ].join("\n"),
}

];


/* Full skill set — mirrors the services actually offered on the
   Services page, so this page and that one always stay in sync. */
const photoSkills = [
  { label: "Logo Creation", icon: PenTool },
  { label: "YouTube Thumbnails", icon: PlaySquare },
  { label: "Retouching", icon: Wand2 },
  { label: "Background Removal", icon: Scissors },
  { label: "Background Replacement", icon: RefreshCw },
  { label: "Double Exposure", icon: Blend },
  { label: "Wedding Albums", icon: Layers },
  { label: "House Warming Edits", icon: HouseIcon },
  { label: "Birthday Album Designs", icon: Cake },
  { label: "Birthday Gift Edits", icon: Gift },
  { label: "Trending Photo Edits", icon: TrendingUp },
  { label: "Banner Edits", icon: Banknote },
  { label: "Brochures", icon: FileImage },
  { label: "Creative Poster Design", icon: LayoutTemplate },
  { label: "Product Label Design", icon: Tag },
  { label: "Flyer Design", icon: FileText },
  { label: "Menu Design", icon: UtensilsCrossed },
  { label: "Visiting Card Design", icon: IdCard },
  { label: "Social Media Advertisements", icon: Megaphone },
  { label: "Event Promotion Poster", icon: PartyPopper },
  { label: "Sale / Offer Design", icon: Percent },
  { label: "Invitation Design", icon: MailPlus },
  { label: "Color Correction & Grading", icon: Palette },
];

/* Clean, simple side-profile scene: someone sitting in a chair,
   working at a desktop monitor. Built entirely from circles,
   rounded rectangles and straight lines — no free-hand curves —
   so it stays crisp and easy to read at a glance. Only three things
   move: a slow idle bob on the person, a soft screen glow, and a
   cursor sliding along a toolbar. */
function WorkspaceIllustration() {
  return (
    <svg
      viewBox="0 85 320 195"
      className="h-full w-full max-w-[300px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e7b49f" />
          <stop offset="100%" stopColor="#b97868" />
        </linearGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#51406f" />
          <stop offset="100%" stopColor="#211a35" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <ellipse cx="145" cy="266" rx="130" ry="9" fill="#000" opacity="0.32" />

      {/* cinematic monitor light */}
      <motion.rect
        x="150" y="107" width="97" height="70" rx="8"
        fill="url(#screenGlow)" opacity="0.18" filter="url(#glow)"
        animate={{ opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* desk */}
      <rect x="122" y="190" width="130" height="7" rx="3" fill="#302941" />
      <rect x="128" y="197" width="7" height="67" rx="3" fill="#171321" />
      <rect x="239" y="197" width="7" height="67" rx="3" fill="#171321" />
      <rect x="122" y="189" width="130" height="3" rx="1.5" fill="#71658d" opacity="0.7" />

      {/* monitor */}
      <rect x="153" y="110" width="91" height="63" rx="7" fill="#151220" stroke="#71658e" strokeWidth="2" />
      <motion.rect
        x="159" y="116" width="79" height="51" rx="4"
        fill="url(#screenGlow)"
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <rect x="166" y="123" width="38" height="5" rx="2.5" fill="#fff" opacity="0.82" />
      <rect x="166" y="133" width="60" height="4" rx="2" fill="#fff" opacity="0.38" />
      <rect x="166" y="141" width="48" height="4" rx="2" fill="#fff" opacity="0.26" />
      <rect x="166" y="151" width="61" height="10" rx="3" fill="#081020" opacity="0.62" />
      <motion.rect
        x="168" y="153" width="3" height="6" rx="1.5" fill="#ddd6fe"
        animate={{ x: [0, 55, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <rect x="190" y="173" width="17" height="17" rx="2" fill="#252039" />
      <rect x="178" y="188" width="42" height="5" rx="2.5" fill="#4d4562" />

      {/* ergonomic chair */}
      <path d="M52 100 Q50 95 57 94 L66 94 Q73 95 73 102 L73 198 Q73 205 66 207 L58 207 Q51 205 51 198Z" fill="#29233a" />
      <path d="M55 104 Q54 101 59 100 L65 100 Q69 101 69 105 L69 194 Q69 199 65 200 L59 200 Q55 199 55 194Z" fill="#3b3150" />
      <path d="M51 195 Q51 190 57 190 L112 190 Q119 190 119 197 L119 202 Q119 208 112 210 L58 210 Q51 208 51 202Z" fill="#2c2540" />
      <rect x="99" y="178" width="31" height="11" rx="5.5" fill="#403651" />
      <rect x="82" y="207" width="7" height="43" rx="3.5" fill="#211b2d" />
      <path d="M85 248 L62 262 M85 248 L85 264 M85 248 L108 262" stroke="#211b2d" strokeWidth="5" strokeLinecap="round" />
      <circle cx="62" cy="262" r="4" fill="#13101b" />
      <circle cx="85" cy="264" r="4" fill="#13101b" />
      <circle cx="108" cy="262" r="4" fill="#13101b" />

      {/* human editor — natural adult proportions, not toy/doll proportions */}
      <motion.g
        animate={{ y: [0, -1.2, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* head, neck and hair: side profile */}
        <path d="M76 137 Q76 123 87 120 Q99 118 105 128 Q108 135 103 143 L99 149 Q92 154 84 150 Q77 146 76 137Z" fill="url(#skin)" />
        <path d="M76 136 Q75 124 86 120 Q98 117 105 128 Q99 125 92 127 Q84 128 78 137Z" fill="#17131f" />
        <path d="M101 135 Q106 136 103 140 Q101 142 98 141" fill="#d69d8d" />
        <circle cx="98" cy="134" r="1.3" fill="#2b2024" />
        <path d="M97 144 Q93 146 90 144" stroke="#8e5e59" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M84 150 L94 151 L96 164 L82 164Z" fill="url(#skin)" />

        {/* torso with shoulder slope */}
        <path d="M72 163 Q83 157 92 158 Q102 159 106 166 L109 199 Q91 207 69 199 L68 174 Q68 167 72 163Z" fill="url(#shirt)" />
        <path d="M81 161 Q87 168 93 161" stroke="#cfc5e8" strokeWidth="2" opacity="0.55" fill="none" />

        {/* far arm resting toward keyboard */}
        <motion.g
          animate={{ y: [0, 1.2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M98 177 Q108 183 119 188 L141 190" stroke="#c88f80" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="144" cy="190" r="3.7" fill="#dfa394" />
        </motion.g>

        {/* near arm reaching naturally to mouse */}
        <motion.g
          animate={{ x: [0, 1.5, 0, -1, 0], rotate: [0, 0.8, 0, -0.5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 174px" }}
        >
          <path d="M99 171 Q109 174 119 178 Q133 183 151 183" stroke="#c88f80" strokeWidth="8" strokeLinecap="round" fill="none" />
          <ellipse cx="154" cy="183" rx="5" ry="3.5" fill="#dfa394" />
        </motion.g>

        {/* natural seated leg geometry */}
        <path d="M76 198 Q88 203 103 204 L126 218 Q130 221 128 229 L125 248" stroke="#211b2e" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M125 248 Q134 247 143 249" stroke="#15111e" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M71 198 Q80 202 91 207" stroke="#1a1527" strokeWidth="10" strokeLinecap="round" fill="none" />
      </motion.g>

      {/* keyboard */}
      <rect x="151" y="181" width="62" height="11" rx="3" fill="#262039" stroke="#665b80" strokeWidth="1.2" />
      {[156, 165, 174, 183, 192, 201].map((x) => (
        <motion.rect
          key={x}
          x={x} y="184" width="6" height="2.5" rx="1"
          fill="#c4b5fd" opacity="0.45"
          animate={{ y: [184, 185, 184] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: (x - 156) * 0.03 }}
        />
      ))}
    </svg>
  );
}

export default function AboutPage({ navItems, onNavigate }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0514] text-[#f3efff]">
      <PageShell navItems={navItems} currentPath="/about" onNavigate={onNavigate}>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,.16),transparent_34%)]" />

          <div className="relative mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
            <motion.button
              onClick={() => onNavigate("/")}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="mx-auto mb-9 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 transition hover:border-white/25 hover:text-white"
            >
              <ArrowLeft size={13} /> Back to Home
            </motion.button>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">
              01 — About
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl"
            >
              ABOUT <span className="text-white/30">ME.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base"
            >
              Two and a half years turning raw photos into finished, client-ready work — at a photo color lab and through freelance client projects.
            </motion.p>
          </div>
        </section>

        {/* Experience timeline + workspace illustration */}
        <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="mb-10 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/40">
              <Building2 size={14} strokeWidth={1.7} />
            </span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">Where the experience comes from</p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
            <div className="relative border-l border-white/10 pl-8">
              {experience.map((step, i) => (
                <motion.div
                  key={step.place}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-white/30 bg-[#0a0514]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  </span>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">{step.period}</p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">{step.place}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/35">{step.role}</p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/40">{step.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Animated desk illustration — sits beside the timeline on
                larger screens, and above the fold on mobile. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="order-first flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-8 lg:sticky lg:top-28 lg:order-none lg:self-start"
            >
              <WorkspaceIllustration />
              <p className="mt-2 max-w-[220px] text-center text-[11px] leading-6 text-white/30">
                Hours at the desk, one edit at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
            <div className="mb-10 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/40">
                <Award size={14} strokeWidth={1.7} />
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">Skills & Tools</p>
            </div>

            <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
              PHOTO & DESIGN, <span className="text-white/30">END TO END.</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/40">
              Everything below is a skill actually used on real client work — the same list this portfolio's Services page is built from.
            </p>

            {/* Photo editing */}
            <div className="mt-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">Photo Editing & Design</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {photoSkills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                      className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-3"
                    >
                      <Icon size={15} strokeWidth={1.6} className="shrink-0 text-white/45" />
                      <span className="text-[11px] font-medium leading-4 text-white/70">{skill.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center sm:px-10"
          >
            <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">See it in practice</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">VIEW <span className="text-white/30">THE WORK.</span></h2>
              <button
                onClick={() => onNavigate("/work")}
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0a0514] hover:bg-white/90"
              >
                Browse Portfolio <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        </section>
      </PageShell>
    </div>
  );
}