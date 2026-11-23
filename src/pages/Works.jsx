import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageShell from "../components/PageShell";

import logo1 from "../assets/logos/1.jpg";
import logo2 from "../assets/logos/2.png";
import logo3 from "../assets/logos/3.png";
import logo4 from "../assets/logos/4.png";
import logo5 from "../assets/logos/5.jpg";

import social1 from "../assets/insta post/001.jpg";
import social2 from "../assets/insta post/01.jpg";
import social3 from "../assets/insta post/2 copy.jpg";
import social4 from "../assets/insta post/Advertistment.jpg";
import social5 from "../assets/insta post/album.jpg";
import social6 from "../assets/insta post/ALl.jpg";
import social7 from "../assets/insta post/Invitations.jpg";
import social8 from "../assets/insta post/v.jpg";

import businessCard1 from "../assets/Cards/1.JPG";
import businessCard2 from "../assets/Cards/2.JPG";
import businessCard3 from "../assets/Cards/3.jpg";
import businessCard4 from "../assets/Cards/4.JPG";
import businessCard5 from "../assets/Cards/5.JPG";

import beforeAfter1 from "../assets/before After/1.jpg";
import beforeAfter2 from "../assets/before After/2.jpg";
import beforeAfter3 from "../assets/before After/3.jpg";
import beforeAfter4 from "../assets/before After/4.jpg";

import invitation1 from "../assets/invitations/1.jpg";
import invitation2 from "../assets/invitations/2.jpg";
import invitation3 from "../assets/invitations/3.jpeg";
import invitation4 from "../assets/invitations/4.jpg";
import invitation5 from "../assets/invitations/5.jpg";
import invitation6 from "../assets/invitations/6.jpg";
import invitation7 from "../assets/invitations/7.jpeg";
import invitation8 from "../assets/invitations/8.jpeg";

import thumbnail1 from "../assets/thumbnails/ff/Ok/1.png";
import thumbnail2 from "../assets/thumbnails/ff/Ok/2.png";
import thumbnail3 from "../assets/thumbnails/ff/Ok/3.png";
import thumbnail4 from "../assets/thumbnails/ff/Ok/4.png";
import thumbnail5 from "../assets/thumbnails/ff/Ok/5.png";
import thumbnail6 from "../assets/thumbnails/ff/Ok/6.jpg";
import thumbnail7 from "../assets/thumbnails/ff/Ok/7.jpg";
import thumbnail8 from "../assets/thumbnails/film/Thumbnail.jpg";

import ytResult11 from "../assets/thumbnails/ff/Ok/11.jpg";
import ytResult22 from "../assets/thumbnails/ff/Ok/22.jpg";
import ytResult33 from "../assets/thumbnails/ff/Ok/33.jpg";
import ytResult44 from "../assets/thumbnails/ff/Ok/44.jpg";

import {
  ArrowLeft,
  ArrowUpRight,
  FileImage,
  Image as ImageIcon,
  Layers,
  Palette,
  PenTool,
  Play,
  Scissors,
  Mail,
} from "lucide-react";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    id: "all",
    label: "All Works",
    icon: Layers,
  },
  {
    id: "logo",
    label: "Logo Design",
    icon: PenTool,
  },
  {
    id: "social",
    label: "Social Media",
    icon: Palette,
  },
  {
    id: "invitation",
    label: "Invitation Design",
    icon: Mail,
  },
  {
    id: "graphic",
    label: "Graphic / Print",
    icon: FileImage,
  },
  {
    id: "thumbnail",
    label: "Thumbnail Design",
    icon: Play,
  },
];

/* =========================================================
   WORKS
========================================================= */

const works = [
  /* =====================================================
     LOGO DESIGN
  ===================================================== */

  {
    category: "logo",
    title: "Logo Design 01",
    type: "Logo Design",
    tag: "Logo",
    image: logo1,
    tone: "from-slate-900 via-indigo-900/60 to-black",
  },
  {
    category: "logo",
    title: "Logo Design 02",
    type: "Logo Design",
    tag: "Logo",
    image: logo2,
    tone: "from-zinc-900 via-purple-900/50 to-black",
  },
  {
    category: "logo",
    title: "Logo Design 03",
    type: "Logo Design",
    tag: "Logo",
    image: logo3,
    tone: "from-yellow-950 via-amber-900/40 to-black",
  },
  {
    category: "logo",
    title: "Logo Design 04",
    type: "Logo Design",
    tag: "Logo",
    image: logo4,
    tone: "from-emerald-950 via-teal-900/50 to-black",
  },
  {
    category: "logo",
    title: "Logo Design 05",
    type: "Logo Design",
    tag: "Logo",
    image: logo5,
    tone: "from-blue-950 via-cyan-900/50 to-black",
  },

  /* =====================================================
     SOCIAL MEDIA
  ===================================================== */

  {
    category: "social",
    title: "Social Media Promotion 01",
    type: "Social Media Post",
    tag: "Instagram",
    image: social1,
    tone: "from-pink-950 via-violet-900/60 to-black",
  },
  {
    category: "social",
    title: "Short Film First Poster",
    type: "Social Media Post",
    tag: "Instagram",
    image: social2,
    tone: "from-cyan-950 via-blue-900/50 to-black",
  },
  {
    category: "social",
    title: "Short Film Promo Insta Post",
    type: "Social Media Post",
    tag: "Creative",
    image: social3,
    tone: "from-orange-950 via-red-900/50 to-black",
  },
  {
    category: "social",
    title: "Editing Advertisement Design",
    type: "Social Media Post",
    tag: "Advertisement",
    image: social4,
    tone: "from-emerald-950 via-teal-900/50 to-black",
  },
  {
    category: "social",
    title: "Album Promotion",
    type: "Social Media Post",
    tag: "Album",
    image: social5,
    tone: "from-fuchsia-950 via-purple-900/50 to-black",
  },
  {
    category: "social",
    title: "Social Media Creative",
    type: "Social Media Post",
    tag: "Creative",
    image: social6,
    tone: "from-violet-950 via-indigo-900/60 to-black",
  },
  {
    category: "social",
    title: "Invitation Design Promotion",
    type: "Social Media Post",
    tag: "Invitation",
    image: social7,
    tone: "from-rose-950 via-pink-900/50 to-black",
  },
  {
    category: "social",
    title: "Video Editing Advertisement",
    type: "Social Media Post",
    tag: "Promotion",
    image: social8,
    tone: "from-blue-950 via-cyan-900/50 to-black",
  },

  /* =====================================================
     INVITATION DESIGN
  ===================================================== */

  {
    category: "invitation",
    title: "Invitation Design 01",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation1,
    tone: "from-violet-950 via-fuchsia-900/50 to-black",
  },
  {
    category: "invitation",
    title: "Invitation Design 02",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation2,
    tone: "from-blue-950 via-indigo-900/50 to-black",
  },
  {
    category: "invitation",
    title: "Invitation Design 03",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation3,
    tone: "from-rose-950 via-pink-900/50 to-black",
  },
  {
    category: "invitation",
    title: "Invitation Design 04",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation4,
    tone: "from-amber-950 via-orange-900/50 to-black",
  },
  {
    category: "invitation",
    title: "Invitation Design 05",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation5,
    tone: "from-emerald-950 via-teal-900/50 to-black",
  },
  {
    category: "invitation",
    title: "Invitation Design 06",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation6,
    tone: "from-cyan-950 via-blue-900/50 to-black",
  },
  {
    category: "invitation",
    title: "Invitation Design 07",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation7,
    tone: "from-purple-950 via-indigo-900/50 to-black",
  },
  {
    category: "invitation",
    title: "Invitation Design 08",
    type: "Invitation Design",
    tag: "Invitation",
    image: invitation8,
    tone: "from-red-950 via-rose-900/50 to-black",
  },

  /* =====================================================
     THUMBNAIL DESIGN
  ===================================================== */

  {
    category: "thumbnail",
    title: "Thumbnail Design 01",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail1,
    tone: "from-violet-950 via-fuchsia-900/50 to-black",
  },
  {
    category: "thumbnail",
    title: "Thumbnail Design 02",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail2,
    tone: "from-blue-950 via-indigo-900/50 to-black",
  },
  {
    category: "thumbnail",
    title: "Thumbnail Design 03",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail3,
    tone: "from-rose-950 via-pink-900/50 to-black",
  },
  {
    category: "thumbnail",
    title: "Thumbnail Design 04",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail4,
    tone: "from-amber-950 via-orange-900/50 to-black",
  },
  {
    category: "thumbnail",
    title: "Thumbnail Design 05",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail5,
    tone: "from-emerald-950 via-teal-900/50 to-black",
  },
  {
    category: "thumbnail",
    title: "Thumbnail Design 06",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail6,
    tone: "from-cyan-950 via-blue-900/50 to-black",
  },
  {
    category: "thumbnail",
    title: "Thumbnail Design 07",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail7,
    tone: "from-purple-950 via-indigo-900/50 to-black",
  },
  {
    category: "thumbnail",
    title: "Short Film Thumbnail",
    type: "YouTube Thumbnail",
    tag: "Thumbnail",
    image: thumbnail8,
    tone: "from-purple-950 via-indigo-900/50 to-black",
  },

  /* =====================================================
     BUSINESS CARDS / GRAPHIC PRINT
  ===================================================== */

  {
    category: "graphic",
    title: "Business Card — Front",
    type: "Business Card Design",
    tag: "Business Card",
    image: businessCard1,
    tone: "from-slate-950 via-violet-900/50 to-black",
  },
  {
    category: "graphic",
    title: "Business Card — Tamil Back",
    type: "Business Card Design",
    tag: "Tamil",
    image: businessCard2,
    tone: "from-purple-950 via-indigo-900/50 to-black",
  },
  {
    category: "graphic",
    title: "Business Card — English Back",
    type: "Business Card Design",
    tag: "English",
    image: businessCard3,
    tone: "from-blue-950 via-cyan-900/50 to-black",
  },
  {
    category: "graphic",
    title: "Business Card — Back Design",
    type: "Business Card Design",
    tag: "Back",
    image: businessCard4,
    tone: "from-emerald-950 via-teal-900/50 to-black",
  },
  {
    category: "graphic",
    title: "Business Card — Front Design",
    type: "Business Card Design",
    tag: "Front",
    image: businessCard5,
    tone: "from-rose-950 via-orange-900/50 to-black",
  },

  /* =====================================================
     BEFORE / AFTER
  ===================================================== */

  {
    category: "before-after",
    title: "Before & After 01",
    type: "Photo Retouching",
    tag: "Before / After",
    image: beforeAfter1,
    tone: "from-violet-950 via-fuchsia-900/50 to-black",
  },
  {
    category: "before-after",
    title: "Before & After 02",
    type: "Photo Retouching",
    tag: "Before / After",
    image: beforeAfter2,
    tone: "from-blue-950 via-indigo-900/50 to-black",
  },
  {
    category: "before-after",
    title: "Before & After 03",
    type: "Photo Retouching",
    tag: "Before / After",
    image: beforeAfter3,
    tone: "from-emerald-950 via-teal-900/50 to-black",
  },
  {
    category: "before-after",
    title: "Before & After 04",
    type: "Photo Retouching",
    tag: "Before / After",
    image: beforeAfter4,
    tone: "from-rose-950 via-purple-900/50 to-black",
  },

];

/* =========================================================
   FLOATING ICON
========================================================= */

function FloatingIcon({
  icon: Icon,
  className,
  delay = 0,
  size = 18,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 4, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/30 backdrop-blur-sm ${className}`}
    >
      <Icon size={size} strokeWidth={1.4} />
    </motion.div>
  );
}

/* =========================================================
   YOUTUBE RESULTS SHOWCASE
========================================================= */

function YouTubeResultsShowcase() {
  const results = [
    {
      number: "03",
      thumbnail: thumbnail3,
      screenshot: ytResult33,
      views: "100K+",
      label: "100K+ VIEWS",
      description:
        "A thumbnail designed to capture attention and help the video stand out on YouTube.",
      videoUrl: "https://youtu.be/LsOCoAV35gY?si=GFUWh3VRT2OOPm8r",
    },
    {
      number: "04",
      thumbnail: thumbnail4,
      screenshot: ytResult44,
      views: "75K+",
      label: "75K+ VIEWS",
      description:
        "Strong visual hierarchy and bold thumbnail composition built for YouTube discovery.",
      videoUrl: "https://youtu.be/c-rr0-nh_H8?si=rEZ17DiogBwGkW54",
    },
    {
      number: "01",
      thumbnail: thumbnail1,
      screenshot: ytResult11,
      views: "45K",
      label: "45K VIEWS",
      description:
        "A focused thumbnail concept created to make the video instantly recognizable in the feed.",
      videoUrl: "https://youtu.be/zqymJAvVJho?si=hPVxEQ0b1estFf0K",
    },
    {
      number: "02",
      thumbnail: thumbnail2,
      screenshot: ytResult22,
      views: "43K",
      label: "43K VIEWS",
      description:
        "Purposeful thumbnail design combining clarity, contrast and visual impact.",
      videoUrl: "https://youtu.be/A0eQ6YpV1tM?si=OPI6D-TIBpFebNyu",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#08040f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,.10),transparent_38%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.25em] text-white/40">
            <Play size={11} fill="currentColor" />
            YouTube Performance
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
            THUMBNAILS{" "}
            <span className="text-white/30">THAT GOT NOTICED.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
            We create thumbnails built to grab attention — with real YouTube
            results to show for it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {results.map((result, index) => (
            <motion.a
              key={result.number}
              href={result.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              whileHover={{ y: -6 }}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors hover:border-white/20"
              aria-label={`Watch YouTube video for Thumbnail Design ${result.number}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
                <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                  <div className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white/55 backdrop-blur-md">
                    Our Thumbnail · {result.number}
                  </div>

                  <div className="aspect-video bg-black">
                    <img
                      src={result.thumbnail}
                      alt={`Thumbnail Design ${result.number}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                </div>

                <div className="relative flex flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/25">
                        Actual YouTube Result
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/35 transition group-hover:border-red-500/40 group-hover:bg-red-500/10 group-hover:text-red-300">
                        <ArrowUpRight size={12} />
                      </span>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black">
                      <div className="aspect-video">
                        <img
                          src={result.screenshot}
                          alt={`YouTube result for Thumbnail Design ${result.number}`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/25">
                        Video Performance
                      </p>

                      <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                        {result.views}
                      </p>

                      <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                        Views
                      </p>
                    </div>

                    <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-red-300/80">
                      YouTube
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
            Designed for attention · Built for YouTube
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WORK PREVIEW
========================================================= */

function WorkPreview({ item, index }) {
  const [imageError, setImageError] = useState(false);

  const image = item.image;

  const cardContent = (
    <>
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${item.tone}`}
      >
        {image && !imageError ? (
          <img
            src={image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className={`h-full w-full transition duration-500 group-hover:scale-105 ${
              item.category === "logo"
                ? "object-contain p-4"
                : "object-cover"
            }`}
          />
        ) : (
          <>
            <div className="absolute inset-[10%] rotate-[-4deg] border border-white/15 bg-black/20 shadow-2xl backdrop-blur-sm" />

            <div className="absolute inset-[17%] rotate-[3deg] overflow-hidden border border-white/10 bg-white/[0.04]">
              <div className="absolute left-[12%] top-[12%] h-[45%] w-[32%] rounded-full bg-white/15 blur-xl" />

              <div className="absolute bottom-[10%] left-[8%] h-[24%] w-[84%] bg-white/10" />

              <div className="absolute right-[10%] top-[15%] h-7 w-7 rounded-full border border-white/20" />

              <div className="absolute bottom-[12%] left-[10%] h-px w-[45%] bg-white/25" />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.14),transparent_28%)]" />

            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Portfolio Preview
            </span>
          </>
        )}

        {/* TAG */}

        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/55 backdrop-blur-md">
          {item.tag}
        </div>

        {/* BOTTOM INFO */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-4 pt-14">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
            {item.type}
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/20">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* CARD DETAILS */}

      <div className="px-4 py-4">
        <h3 className="text-sm font-semibold tracking-tight text-white/85">
          {item.title}
        </h3>

        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/25">
          {item.type}
        </p>

        {item.description && (
          <p className="mt-3 text-sm leading-6 text-white/30">
            {item.description}
          </p>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        delay: Math.min((index % 8) * 0.025, 0.2),
      }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
    >
      {item.videoUrl ? (
        <a
          href={item.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${item.title} on YouTube`}
          className="block"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.article>
  );
}

/* =========================================================
   MAIN WORK PAGE
========================================================= */

export default function WorkPage({
  initialCategory = "all",
  navItems,
  onNavigate,
}) {
  const [active, setActive] = useState(initialCategory);

  const [prevInitialCategory, setPrevInitialCategory] =
    useState(initialCategory);

  if (initialCategory !== prevInitialCategory) {
    setPrevInitialCategory(initialCategory);
    setActive(initialCategory);
  }

  /* =====================================================
     FILTER + ORDER
     
     Logo designs are intentionally shown FIRST
     when "All Works" is selected.
  ===================================================== */

  const filteredWorks = useMemo(() => {
    if (active === "all") {
      return [...works].sort((a, b) => {
        if (a.category === "logo" && b.category !== "logo") {
          return -1;
        }

        if (a.category !== "logo" && b.category === "logo") {
          return 1;
        }

        return 0;
      });
    }

    return works.filter((item) => item.category === active);
  }, [active]);

  /* =====================================================
     CATEGORY SELECT
  ===================================================== */

  const chooseCategory = (id) => {
    setActive(id);

    const url =
      id === "all"
        ? "/work"
        : `/work?category=${id}`;

    window.history.replaceState({}, "", url);

    requestAnimationFrame(() => {
      document
        .getElementById("work-gallery")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0514] text-[#f3efff]">
      <PageShell
        navItems={navItems}
        currentPath="/work"
        activeCategory={active}
        onNavigate={onNavigate}
      >
        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,.16),transparent_34%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,rgba(255,255,255,.05),transparent_30%)]" />

          <FloatingIcon
            icon={ImageIcon}
            className="left-[7%] top-[20%]"
            delay={0.2}
          />

          <FloatingIcon
            icon={PenTool}
            className="right-[10%] top-[25%]"
            delay={0.8}
          />

          <FloatingIcon
            icon={Scissors}
            className="bottom-[18%] left-[13%]"
            delay={1.2}
          />

          <FloatingIcon
            icon={FileImage}
            className="bottom-[15%] right-[14%]"
            delay={0.5}
          />

          <FloatingIcon
            icon={Palette}
            className="left-[30%] top-[15%]"
            delay={1.5}
            size={16}
          />

          <div className="relative mx-auto max-w-[1400px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10 lg:py-28">
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
              Selected Portfolio · 2024 — 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-5 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl lg:text-[92px]"
            >
              OUR <span className="text-white/30">WORKS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base"
            >
              A visual collection of photo editing, retouching, social media
              creatives, logo design, invitation design, thumbnails
              and graphic work.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="mx-auto mt-10 h-px w-24 bg-white/30"
            />
          </div>
        </section>

        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <section className="sticky top-16 z-20 border-b border-white/10 bg-[#0a0514]/90 backdrop-blur-xl">
          <div className="scrollbar-none mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">
            {categories.map((category) => {
              const Icon = category.icon;
              const selected = active === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => chooseCategory(category.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                    selected
                      ? "border-white bg-white text-[#0a0514]"
                      : "border-white/10 bg-white/[0.02] text-white/40 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <Icon size={13} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* =================================================
            GALLERY
        ================================================= */}

        <section
          id="work-gallery"
          className="mx-auto max-w-[1400px] scroll-mt-32 px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
        >
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/25">
                Portfolio Collection
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {categories.find((c) => c.id === active)?.label}
              </h2>
            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
              {filteredWorks.length}{" "}
              {filteredWorks.length === 1 ? "Project" : "Projects"}
            </p>
          </div>

          {filteredWorks.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center">
              <ImageIcon
                size={30}
                className="mx-auto text-white/20"
              />

              <p className="mt-5 text-sm text-white/40">
                No projects added to this category yet.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredWorks.map((item, index) => (
                  <WorkPreview
                    key={`${item.category}-${item.title}`}
                    item={item}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </section>

        {/* =================================================
            YOUTUBE RESULTS
        ================================================= */}

        {(active === "all" || active === "thumbnail") && (
          <YouTubeResultsShowcase />
        )}

        {/* =================================================
            CLOSING CTA
        ================================================= */}

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center sm:px-10"
          >
            <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Have a project in mind?
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                LET&apos;S CREATE{" "}
                <span className="text-white/30">SOMETHING.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/30">
                Photo editing or graphic design — let&apos;s turn your raw idea
                into polished visual content.
              </p>

              <button
                onClick={() => onNavigate("/contact")}
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0a0514] hover:bg-white/90"
              >
                Start a Project
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        </section>
      </PageShell>
    </div>
  );
}