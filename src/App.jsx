import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageShell from "./components/PageShell";
import WorkPage from "./pages/Works";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";

import {
  ArrowUpRight,
  ChevronDown,
  House,
  Briefcase,
  Image,
  User,
  Settings,
  Mail,
  Scissors,
  Sparkles,
  Palette,
  Move,
  PenTool,
  Crop,
  SlidersHorizontal,
  Layers,
  Wand2,
  Aperture,
  Contrast,
  RotateCcw,
  Camera,
  Music,
  SquareDashedMousePointer,
  Sun,
  Quote,
  Upload,
  Download,
  CheckCircle2,
  Heart,
  PlaySquare,
  RefreshCw,
  Blend,
  Megaphone,
  LayoutTemplate,
  FileText,
  IdCard,
  Tag,
  Type,
} from "lucide-react";

/* =============================================================
   FLOATING TOOL ICON
============================================================= */

function FloatingIcon({
  icon: Icon,
  className,
  size = 15,
  duration = 5,
  delay = 0,
  yRange = 10,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -yRange, 0],
        opacity: [0.35, 0.65, 0.35],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 backdrop-blur-sm ${className}`}
      style={{
        width: size * 2.1,
        height: size * 2.1,
      }}
    >
      <Icon size={size} strokeWidth={1.6} />
    </motion.div>
  );
}

/* =============================================================
   EDITOR ANIMATION
============================================================= */

function EditorAnimation() {
  const CYCLE = 9;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px]">

      {/* Floating icons */}
      <FloatingIcon
        icon={PenTool}
        className="left-[-6%] top-[2%]"
        duration={5.5}
        delay={0.2}
      />

      <FloatingIcon
        icon={Crop}
        className="right-[-4%] top-[16%]"
        duration={4.5}
        delay={0.6}
      />

      <FloatingIcon
        icon={SlidersHorizontal}
        className="left-[-8%] top-[38%]"
        duration={6}
        delay={0.1}
      />

      <FloatingIcon
        icon={Layers}
        className="right-[-8%] top-[46%]"
        duration={5}
        delay={0.9}
      />

      <FloatingIcon
        icon={Wand2}
        className="left-[-4%] top-[62%]"
        duration={4.8}
        delay={1.2}
      />

      <FloatingIcon
        icon={Image}
        className="right-[-2%] bottom-[6%]"
        duration={5.2}
        delay={0.4}
      />

      <FloatingIcon
        icon={Aperture}
        className="left-[2%] bottom-[-4%]"
        duration={6.2}
        delay={0.8}
      />

      <FloatingIcon
        icon={Contrast}
        className="right-[18%] top-[-6%]"
        duration={5.6}
        delay={1.4}
        size={13}
      />

      <FloatingIcon
        icon={RotateCcw}
        className="left-[24%] bottom-[-6%]"
        duration={4.6}
        delay={0.3}
        size={13}
      />

      <FloatingIcon
        icon={Camera}
        className="left-[-8%] top-[86%]"
        duration={5.4}
        delay={1.1}
        size={13}
      />

      <FloatingIcon
        icon={Type}
        className="right-[-6%] bottom-[24%]"
        duration={5}
        delay={0.5}
        size={13}
      />

      <FloatingIcon
        icon={Tag}
        className="left-[8%] top-[-8%]"
        duration={4.7}
        delay={1.6}
        size={12}
      />

      <FloatingIcon
        icon={SquareDashedMousePointer}
        className="right-[6%] bottom-[-8%]"
        duration={5.8}
        delay={0.7}
        size={13}
      />

      <FloatingIcon
        icon={Sun}
        className="left-[38%] top-[-8%]"
        duration={5.3}
        delay={1}
        size={12}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.16, 0.26, 0.16],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[80px]"
      />

      {/* Construction rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-white/[0.05]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[10%] rounded-full border border-dashed border-white/[0.07]"
      />

      {/* =========================================================
          MAIN PHOTO FRAME
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          rotate: -6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: -5,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="absolute left-[13%] top-[7%] h-[52%] w-[46%] border border-white/20 bg-[#151020] p-[3%] shadow-2xl"
      >
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-violet-950 via-[#29153f] to-black">

          <div className="absolute left-1/2 top-[18%] h-[46%] w-[46%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#e7d6f2]/70 via-violet-300/20 to-transparent blur-[1px]" />

          <div className="absolute bottom-[-8%] left-1/2 h-[44%] w-[80%] -translate-x-1/2 rounded-t-[50%] bg-gradient-to-t from-violet-950 to-violet-500/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/5" />

          {/* Scan sweep */}
          <motion.div
            animate={{ y: ["-10%", "110%"] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 right-0 h-[2px] bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          />

          {/* Crop corners */}
          <div className="absolute left-[8%] top-[8%] h-[14%] w-[14%] border-l border-t border-white/70" />

          <div className="absolute right-[8%] top-[8%] h-[14%] w-[14%] border-r border-t border-white/70" />

          <div className="absolute bottom-[8%] left-[8%] h-[14%] w-[14%] border-b border-l border-white/70" />

          <motion.div
            animate={{
              opacity: [0.7, 0.7, 1, 1, 0.7],
              scale: [1, 1, 1.35, 1.35, 1],
            }}
            transition={{
              duration: CYCLE,
              repeat: Infinity,
              times: [0, 0.7, 0.76, 0.86, 0.92],
              ease: "easeInOut",
            }}
            className="absolute bottom-[8%] right-[8%] h-[14%] w-[14%] border-b border-r border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />

          <div className="absolute bottom-[6%] left-[8%] text-[7px] uppercase tracking-[0.25em] text-white/50">
            RAW / 01
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          FLOATING RETOUCH CARD
      ========================================================= */}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[3%] top-[3%] h-[24%] w-[32%] rotate-[7deg] border border-white/15 bg-[#120b1e]/90 p-[4%] shadow-xl backdrop-blur-md"
      >
        <div className="relative h-full overflow-hidden bg-gradient-to-br from-fuchsia-900/60 via-purple-900/30 to-black">

          <div className="absolute left-[28%] top-[14%] h-[55%] w-[38%] rounded-full bg-fuchsia-300/20 blur-md" />

          <div className="absolute bottom-[-18%] left-[8%] h-[60%] w-[95%] rounded-t-full bg-purple-500/20" />

          <div className="absolute bottom-[6%] left-[8%] text-[7px] uppercase tracking-[0.2em] text-white/50">
            RETOUCH
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          COLOR GRADE PANEL
      ========================================================= */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[0%] bottom-[26%] w-[26%] border border-white/15 bg-[#10091a]/90 p-[6%] backdrop-blur-xl"
      >
        <div className="mb-[10%] flex items-center gap-1.5">
          <Palette size={11} className="text-white/45" />

          <span className="text-[6.5px] uppercase tracking-[0.18em] text-white/40">
            Color Grade
          </span>
        </div>

        <div className="flex gap-1">
          {[
            "#ff315c",
            "#ff8a3d",
            "#ffd43b",
            "#6ee7b7",
            "#5b8cff",
            "#a855f7",
          ].map((color, i) => (
            <span
              key={color}
              className="relative h-6 flex-1"
              style={{ background: color }}
            >
              {i === 3 && (
                <motion.span
                  animate={{
                    opacity: [0, 0, 1, 1, 0],
                    scale: [0.6, 0.6, 1, 1, 0.6],
                  }}
                  transition={{
                    duration: CYCLE,
                    repeat: Infinity,
                    times: [0, 0.16, 0.22, 0.26, 0.32],
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-[3px] border-2 border-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                />
              )}
            </span>
          ))}
        </div>

        <div className="mt-[10%] flex justify-between text-[5.5px] uppercase tracking-widest text-white/20">
          <span>Shadows</span>
          <span>Highlights</span>
        </div>
      </motion.div>

      {/* =========================================================
          LAYERS PANEL
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        className="absolute bottom-[3%] left-[1%] w-[98%] border border-white/15 bg-[#0e0918]/90 p-[4%] shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-[6%] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Layers size={11} className="text-white/50" />

            <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-white/50">
              Layers
            </span>
          </div>

          <span className="font-mono text-[7px] text-white/30">
            Layer 12
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex h-6 gap-1">
            <div className="w-[18%] bg-violet-500/30" />
            <div className="w-[25%] bg-fuchsia-500/30" />
            <div className="w-[32%] bg-white/10" />
            <div className="w-[15%] bg-violet-400/30" />
            <div className="flex-1 bg-white/5" />
          </div>

          <div className="flex h-4 gap-1">
            <div className="w-[35%] bg-white/10" />
            <div className="w-[20%] bg-purple-500/25" />
            <div className="w-[30%] bg-white/10" />
            <div className="flex-1 bg-white/5" />
          </div>

          <div className="relative h-px bg-white/10">
            <motion.div
              animate={{
                left: ["3%", "3%", "88%", "88%", "3%"],
              }}
              transition={{
                duration: CYCLE,
                repeat: Infinity,
                times: [0, 0.34, 0.62, 0.7, 1],
                ease: "easeInOut",
              }}
              className="absolute -top-1.5 h-4 w-px bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
            />
          </div>
        </div>

        <div className="mt-[6%] flex items-center justify-between text-[6px] uppercase tracking-[0.18em] text-white/20">
          <span>Retouch</span>
          <span>Color</span>
          <span>Layout</span>
          <span>Export</span>
        </div>
      </motion.div>

      {/* Tool icons */}

      <motion.div
        animate={{
          rotate: [0, 8, 0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-[24%] top-[62%] flex h-[8%] w-[8%] items-center justify-center border border-white/15 bg-white/[0.04] text-white/40 backdrop-blur-md"
      >
        <Scissors size={14} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -8, 0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-[4%] bottom-[36%] flex h-[7%] w-[7%] items-center justify-center border border-white/15 bg-white/[0.04] text-white/40 backdrop-blur-md"
      >
        <Sparkles size={13} />
      </motion.div>

      {/* Floating labels */}

      <motion.div
        animate={{
          y: [0, -6, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[1%] top-[24%] flex items-center gap-2"
      >
        <span className="h-px w-6 bg-white/20" />

        <span className="text-[7px] uppercase tracking-[0.28em] text-white/30">
          Photo
        </span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 6, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
        className="absolute right-[6%] top-[44%] flex items-center gap-2"
      >
        <span className="text-[7px] uppercase tracking-[0.28em] text-white/30">
          Design
        </span>

        <span className="h-px w-6 bg-white/20" />
      </motion.div>

      {/* Cursor */}

      <motion.div
        animate={{
          left: ["82%", "80%", "72%", "16%", "82%", "18%", "82%"],
          top: ["48%", "58%", "62%", "88%", "88%", "12%", "48%"],
        }}
        transition={{
          duration: CYCLE,
          repeat: Infinity,
          times: [0, 0.1, 0.16, 0.34, 0.62, 0.76, 1],
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <Move
          size={16}
          className="text-white/70 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        />

        <motion.span
          animate={{
            scale: [0, 0, 1.8, 1.8],
            opacity: [0, 0.6, 0, 0],
          }}
          transition={{
            duration: CYCLE,
            repeat: Infinity,
            times: [0, 0.16, 0.24, 0.3],
            ease: "easeOut",
          }}
          className="absolute -left-2 -top-2 h-6 w-6 rounded-full border border-white"
        />
      </motion.div>

      {/* Particles */}

      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -16, 0],
            opacity: [0.12, 0.5, 0.12],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.25,
          }}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${8 + ((i * 19) % 84)}%`,
            top: `${8 + ((i * 27) % 80)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =============================================================
   SECTION CARD
============================================================= */

function SectionCard({
  id,
  index,
  eyebrow,
  icon: Icon,
  title,
  body,
  accentIcons = [],
  tags = [],
  large = false,
  onClick,
}) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          onClick();
        }
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f081f]/60 px-6 py-14 backdrop-blur-sm transition-colors hover:border-white/20 sm:px-10 lg:px-14 ${
        large ? "py-20" : "py-14"
      } ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* Accent icons */}

      {accentIcons.map((AccentIcon, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -8, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute hidden text-white/30 sm:block"
          style={{
            right: `${8 + i * 9}%`,
            top: i % 2 === 0 ? "14%" : "62%",
          }}
        >
          <AccentIcon size={26} strokeWidth={1.4} />
        </motion.div>
      ))}

      <div className="relative z-10 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/40">
          <Icon size={14} strokeWidth={1.7} />
        </span>

        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          {index} — {eyebrow}
        </p>
      </div>

      <h2
        className={`relative z-10 mt-5 font-bold tracking-tight ${
          large
            ? "text-5xl sm:text-6xl"
            : "text-4xl sm:text-5xl md:text-6xl"
        }`}
      >
        {title}
      </h2>

      <p className="relative z-10 mt-5 max-w-xl text-sm leading-7 text-white/40">
        {body}
      </p>

      {tags.length > 0 && (
        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/30 transition-colors group-hover:text-white/70">
        {onClick ? "Explore" : ""}

        {onClick && (
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        )}
      </span>
    </motion.section>
  );
}

/* =============================================================
   STATS
============================================================= */

function StatsStrip() {
  const stats = [
    {
      value: "2.5+",
      label: "Years of Experience",
    },
    {
      value: "1K+",
      label: "Images Transformed",
    },
    {
      value: "100+",
      label: "Creative Projects",
    },
    {
      value: "100%",
      label: "Attention to Detail",
    },
  ];

  return (
    <div className="relative border-y border-white/10 bg-white/[0.015]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-4 md:divide-y-0 md:divide-x lg:px-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col items-center gap-1.5 px-4 py-9 text-center md:items-start md:px-8 md:text-left"
          >
            <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {stat.value}
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =============================================================
   SERVICES / SKILLS MARQUEE
   Replaced software names with actual creative services.
============================================================= */

function ToolkitMarquee() {
  const tools = [
    {
      name: "Photo Retouching",
      icon: Wand2,
    },
    {
      name: "Background Removal",
      icon: Scissors,
    },
    {
      name: "Background Replacement",
      icon: RefreshCw,
    },
    {
      name: "Color Correction",
      icon: Palette,
    },
    {
      name: "Creative Photo Editing",
      icon: Blend,
    },
    {
      name: "Wedding Photo Editing",
      icon: Heart,
    },
    {
      name: "Wedding Album Design",
      icon: Layers,
    },
    {
      name: "YouTube Thumbnails",
      icon: PlaySquare,
    },
    {
      name: "Poster Design",
      icon: LayoutTemplate,
    },
    {
      name: "Social Media Designs",
      icon: Megaphone,
    },
    {
      name: "Logo Design",
      icon: PenTool,
    },
    {
      name: "Banner Design",
      icon: Image,
    },
    {
      name: "Color Grading",
      icon: Palette,
    },
    {
      name: "Image Enhancement",
      icon: Sparkles,
    },
    {
      name: "Typography & Layout",
      icon: Type,
    },
  ];

  const loop = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-[#0d0720] py-8">

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d0720] to-transparent sm:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d0720] to-transparent sm:w-32" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center gap-10 pr-10"
      >
        {loop.map(({ name, icon: Icon }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 text-white/35"
          >
            <Icon
              size={17}
              strokeWidth={1.6}
            />

            <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.16em]">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =============================================================
   PROCESS
============================================================= */

function ProcessSection() {
  const steps = [
    {
      icon: Upload,
      title: "Send Your Files",
      body: "Share your photos and creative requirements so the editing process can begin.",
    },
    {
      icon: Wand2,
      title: "Edit & Retouch",
      body: "Every image and design is carefully edited with attention to detail, style and consistency.",
    },
    {
      icon: Palette,
      title: "Polish & Grade",
      body: "Colors, tones and finishing touches are refined to create a clean professional result.",
    },
    {
      icon: Download,
      title: "Final Delivery",
      body: "Receive high-quality, ready-to-use files optimized for print, web and social media.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-12 flex items-end justify-between gap-6"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From raw files to finished visuals.
          </h2>
        </div>
      </motion.div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            className="relative bg-[#0f081f] px-6 py-9"
          >
            <span className="text-xs font-semibold text-white/25">
              0{i + 1}
            </span>

            <span className="mt-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60">
              <step.icon
                size={18}
                strokeWidth={1.6}
              />
            </span>

            <h3 className="mt-5 text-base font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/40">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =============================================================
   TESTIMONIALS
============================================================= */

function TestimonialsSection() {
  const highlights = [
    {
      icon: Wand2,
      title: "Clean & Natural Retouching",
      body: "Detailed skin, portrait and product retouching while keeping the final image realistic and polished.",
    },
    {
      icon: Palette,
      title: "Creative Color & Mood",
      body: "From natural tones to cinematic looks, every image is graded to create the right visual mood.",
    },
    {
      icon: Sparkles,
      title: "Creative Visual Editing",
      body: "Compositing, background changes and creative effects designed to turn ordinary images into standout visuals.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">

      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          Editing Approach
        </p>

        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Every edit has a purpose.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
          From precise retouching to creative photo manipulation, the goal is
          simple — make every visual cleaner, stronger and more impactful.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {highlights.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f081f]/60 p-7 transition-colors hover:border-white/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/50 transition-colors group-hover:text-white/80">
                <Icon size={18} strokeWidth={1.6} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                {item.body}
              </p>

              <div className="mt-6 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-16 group-hover:bg-white/40" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* =============================================================
   CLOSING CTA
============================================================= */

function ClosingCTA({ onClick }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-10">

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#160c2c] via-[#0f081f] to-[#0a0514] px-8 py-14 text-center sm:px-16"
      >

        <div className="absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/40">

          <CheckCircle2
            size={16}
            className="text-white/50"
          />

          Currently booking new projects
        </div>

        <h2 className="relative z-10 mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Have photos or designs that need a professional finish?
        </h2>

        <button
          onClick={onClick}
          className="group relative z-10 mx-auto mt-8 flex items-center justify-center gap-3 rounded-md bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0a0514] transition hover:bg-white/90"
        >
          Start a Project

          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </motion.div>
    </section>
  );
}

/* =============================================================
   APP
============================================================= */

/* =============================================================
   EXPERIENCE
============================================================= */

function ExperienceSection() {
  const jobs = [
    {
      role: "Freelance Graphic Designer & Photo Editor",
      org: "Self-employed",
      period: "2025 – 2026",
      points: [
        "Handled photo editing, retouching, wedding album design, color correction, and image enhancement for clients.",
        "Used Adobe Photoshop and Lightroom to deliver professional-quality designs.",
        "Applied color correction and color grading to achieve high-quality visual results.",
      ],
    },
    {
      role: "Photo Editor & Graphic Designer",
      org: "Photo Color Lab",
      period: "2024 – 2025",
      points: [
        "Designed customized wedding albums with creative layouts and photo arrangements.",
        "Edited and retouched photographs using Adobe Photoshop and Lightroom.",
        "Created promotional posters, banners, and other graphic materials.",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
        Experience
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Where I've worked.
      </h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {jobs.map((job, i) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#0f081f]/60 p-7 transition-colors hover:border-white/20"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
              {job.org} · {job.period}
            </p>

            <h3 className="mt-3 text-lg font-semibold text-white">
              {job.role}
            </h3>

            <ul className="mt-4 space-y-3">
              {job.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-sm leading-6 text-white/40"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =============================================================
   SKILLS
============================================================= */

function SkillsSection() {
  const technical = [
    { name: "Adobe Photoshop", level: 80, label: "Almost 80%" },
    { name: "Adobe Lightroom", level: 60, label: "Almost 60%" },
    { name: "Adobe Illustrator", level: null, label: "Basics" },
  ];

  const design = [
    "Graphic Design & Creative Design",
    "Professional Photo Editing & Retouching",
    "Color Correction & Color Grading",
    "Poster & Banner Design",
    "Logo Design & Brand Identity",
    "Social Media Creative Design",
    "Wedding Album Designing",
    "Photo Manipulation",
    "Background Removal & Replacement",
    "Image Enhancement & Restoration",
    "Typography & Layout Design",
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
        Skills
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Tools & expertise.
      </h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/10 bg-[#0f081f]/60 p-7"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Technical Skills
          </h3>

          <div className="mt-6 space-y-6">
            {technical.map((t) => (
              <div key={t.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-white/80">{t.name}</span>
                  <span className="text-xs text-white/40">{t.label}</span>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.level ?? 25}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      t.level ? "bg-violet-400/70" : "bg-white/30"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#0f081f]/60 p-7"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Design Skills
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {design.map((d) => (
              <span
                key={d}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-white/55"
              >
                {d}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  );

  const [workCategory, setWorkCategory] = useState(
    () =>
      new URLSearchParams(window.location.search).get("category") ||
      "all"
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);

      setWorkCategory(
        new URLSearchParams(window.location.search).get("category") ||
          "all"
      );
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (path, category = "all") => {
    const url =
      path === "/work" && category !== "all"
        ? `/work?category=${category}`
        : path;

    window.history.pushState({}, "", url);

    setCurrentPath(path);

    if (path === "/work") {
      setWorkCategory(category);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: House,
    },
    {
      name: "Work",
      path: "/work",
      icon: Briefcase,
    },
    
    {
      name: "About",
      path: "/about",
      icon: User,
    },
    {
      name: "Services",
      path: "/services",
      icon: Settings,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
    },
  ];

  if (currentPath === "/work") {
    return (
      <WorkPage
        navItems={navItems}
        initialCategory={workCategory}
        onNavigate={navigate}
      />
    );
  }

  if (currentPath === "/about") {
    return (
      <AboutPage
        navItems={navItems}
        onNavigate={navigate}
      />
    );
  }

  if (currentPath === "/services") {
    return (
      <ServicesPage
        navItems={navItems}
        onNavigate={navigate}
      />
    );
  }

  if (currentPath === "/contact") {
    return (
      <ContactPage
        navItems={navItems}
        onNavigate={navigate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0514] text-[#f3efff]">

      <PageShell
        navItems={navItems}
        currentPath="/"
        onNavigate={navigate}
      >

        {/* =======================================================
            HERO
        ======================================================= */}

        <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">

          <div className="absolute inset-0">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(255,255,255,0.06),transparent_35%)]" />

            <div className="absolute right-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0514] via-[#0a0514]/95 to-[#0a0514] lg:bg-gradient-to-r lg:from-[#0a0514] lg:via-[#0a0514]/90 lg:to-[#0a0514]/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-[#0a0514]/30" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-[1600px] flex-col items-center justify-center gap-14 px-5 py-16 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-[3vw] xl:px-[4vw]">

            {/* Text */}

            <div className="w-full max-w-2xl shrink-0 text-center lg:text-left">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="mb-6 flex items-center justify-center gap-3 lg:justify-start"
              >
                <span className="h-px w-8 bg-white/50" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-xs">
                  2.5+ Years of Creative Experience
                </p>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="relative z-10 text-[38px] font-extrabold leading-[0.96] tracking-[-0.04em] sm:text-[52px] md:text-[62px] lg:text-[68px] xl:text-[78px]"
              >
                Professional
                <br />

                <span className="text-white/45">
                  Photo Editor & Graphic Designer
                </span>
              </motion.h1>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                }}
                className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 sm:text-xs lg:justify-start"
              >
                {[
                  ["Photo Retouching", Image],
                  ["Graphic Design", PenTool],
                  ["Color Grading", Palette],
                  ["Creative Editing", Sparkles],
                ].map(([label, Icon], index) => (
                  <motion.div
                    key={label}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.35 + index * 0.1,
                    }}
                    className="flex items-center gap-2"
                  >
                    <Icon
                      size={12}
                      strokeWidth={1.7}
                      className="text-white/30"
                    />

                    <span>{label}</span>

                    {index !== 3 && (
                      <span className="ml-1 text-white/15">
                        •
                      </span>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="mx-auto mt-5 max-w-[520px] text-[13px] leading-6 text-white/35 sm:text-sm sm:leading-7 lg:mx-0"
              >
                Turning raw photos into polished, visually powerful images and
                designs through precise retouching, color work and
                creative direction.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
              >
                <a
                  href="/work"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/work");
                  }}
                  className="group flex items-center justify-center gap-3 rounded-md bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0a0514] transition hover:bg-white/90"
                >
                  View My Work

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                }}
                className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
              >
                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Available for freelance projects
                </span>
              </motion.div>
            </div>

            {/* Animation */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="pointer-events-none flex w-full flex-1 items-center justify-center lg:justify-end"
            >
              <EditorAnimation />
            </motion.div>
          </div>

          {/* Scroll */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Scroll
            </span>

            <ChevronDown
              size={15}
              className="animate-bounce text-white/30"
            />
          </motion.div>

          <div className="absolute bottom-7 right-7 hidden text-right lg:block">
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
              Selected Work
            </p>

            <p className="mt-1 text-xs text-white/40">
              2024 — 2026
            </p>
          </div>
        </section>

        {/* =======================================================
            STATS + SERVICES
        ======================================================= */}

        <StatsStrip />

        <ToolkitMarquee />

        {/* =======================================================
            MAIN SECTIONS
        ======================================================= */}

        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-16 sm:px-8 lg:px-10">

          <SectionCard
            id="work"
            index="01"
            eyebrow="Selected Work"
            icon={Briefcase}
            title={
              <>
                SHOW THE
                <br />
                <span className="text-white/35">
                  WORK.
                </span>
              </>
            }
            body="A curated collection of photo editing, creative designs, album work, social media content and brand design."
            accentIcons={[
              Layers,
              Wand2,
              SquareDashedMousePointer,
            ]}
            onClick={() => navigate("/work")}
          />

          <SectionCard
            id="photo"
            index="02"
            eyebrow="Photo"
            icon={Image}
            title="PHOTO EDITING"
            body="Professional retouching, compositing and color work that keeps every image clean, natural and visually powerful."
            accentIcons={[
              PenTool,
              Crop,
              Aperture,
            ]}
            tags={[
              "Logo Design",
              "Social Media",
              "Color Correction",
              "Thumbnail Design",
            ]}
            onClick={() => navigate("/work", "all")}
          />

        </div>

        <ProcessSection />

        <ExperienceSection />

        <SkillsSection />

        <TestimonialsSection />

        {/* =======================================================
            ABOUT / SERVICES / CONTACT
        ======================================================= */}

        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 pb-16 sm:px-8 lg:px-10">

          <SectionCard
            id="about"
            index="01"
            eyebrow="About"
            icon={User}
            title="ABOUT ME"
            body="Two and a half years of experience turning ordinary photos into polished, professional visuals and designs."
            accentIcons={[
              Camera,
              Sparkles,
              Sun,
            ]}
            onClick={() => navigate("/about")}
          />

          <SectionCard
            id="services"
            index="02"
            eyebrow="Services"
            icon={Settings}
            title="SERVICES"
            body="Photo retouching, creative photo manipulation, graphic design, brand identity, color grading and complete image finishing."
            accentIcons={[
              SlidersHorizontal,
              Contrast,
              Palette,
            ]}
            onClick={() => navigate("/services")}
          />

          <SectionCard
            id="contact"
            index="03"
            eyebrow="Contact"
            icon={Mail}
            title={
              <>
                LET'S WORK
                <br />
                <span className="text-white/35">
                  TOGETHER.
                </span>
              </>
            }
            body="Have an opportunity, project, or creative idea in mind? Let's connect and explore how we can make it happen."
            accentIcons={[
              Mail,
              ArrowUpRight,
              Music,
            ]}
            large
            onClick={() => navigate("/contact")}
          />
        </div>

        <ClosingCTA
          onClick={() => navigate("/contact")}
        />
      </PageShell>
    </div>
  );
}

export default App;