import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Image, Video, Palette, LayoutGrid } from "lucide-react";

/**
 * FilterablePortfolio
 *
 * Replace `defaultItems` with your real projects, or pass your own
 * array via the `items` prop:
 * { id, title, category: "photo" | "video" | "color", thumbnail, href, year }
 *
 * Usage:
 * <FilterablePortfolio items={myProjects} />
 */
const CATEGORIES = [
  { key: "all", label: "All Work", icon: LayoutGrid },
  { key: "photo", label: "Photo", icon: Image },
  { key: "video", label: "Video", icon: Video },
  { key: "color", label: "Color Grading", icon: Palette },
];

const defaultItems = [
  { id: 1, title: "Editorial Portrait Series", category: "photo", year: "2026", thumbnail: "" },
  { id: 2, title: "Wedding Highlight Reel", category: "video", year: "2026", thumbnail: "" },
  { id: 3, title: "Brand Campaign Grade", category: "color", year: "2025", thumbnail: "" },
  { id: 4, title: "Product Retouching Set", category: "photo", year: "2025", thumbnail: "" },
  { id: 5, title: "Short Film Color Pass", category: "color", year: "2025", thumbnail: "" },
  { id: 6, title: "Event Recap Edit", category: "video", year: "2025", thumbnail: "" },
];

export default function FilterablePortfolio({ items = defaultItems }) {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  return (
    <div className="w-full">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                isActive
                  ? "border-white bg-white text-[#0a0514]"
                  : "border-white/15 text-white/50 hover:border-white/40 hover:text-white"
              }`}
            >
              <Icon size={12} strokeWidth={1.8} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.a
              layout
              key={item.id}
              href={item.href || "#"}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#0f081f]"
            >
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-950 via-[#1b0f2e] to-black">
                  {item.category === "video" ? (
                    <Video size={28} strokeWidth={1.3} className="text-white/15" />
                  ) : item.category === "color" ? (
                    <Palette size={28} strokeWidth={1.3} className="text-white/15" />
                  ) : (
                    <Image size={28} strokeWidth={1.3} className="text-white/15" />
                  )}
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 opacity-0 transition group-hover:opacity-100">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                    {item.year} · {item.category}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-white/30">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}