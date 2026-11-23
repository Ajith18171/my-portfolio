import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

/**
 * BeforeAfterSlider
 * Drag (mouse or touch) to reveal the "after" image over the "before" image.
 *
 * Usage:
 * <BeforeAfterSlider
 *   beforeSrc="/images/raw-01.jpg"
 *   afterSrc="/images/edit-01.jpg"
 *   beforeLabel="RAW"
 *   afterLabel="EDITED"
 * />
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
}) {
  const [position, setPosition] = useState(50); // percent
  const [dragging, setDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e) => {
    setDragging(true);
    updatePosition(e.clientX ?? e.touches?.[0]?.clientX);
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e) => {
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      if (clientX != null) updatePosition(clientX);
    };
    const handleUp = () => setDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [dragging, updatePosition]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  };

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[4/5] w-full select-none overflow-hidden rounded-xl border border-white/10 bg-[#0f081f] sm:aspect-[3/4] ${className}`}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
    >
      {/* After image — full width, sits underneath */}
      <img
        src={afterSrc}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Before image — clipped to the slider position */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          draggable={false}
          className="h-full object-cover"
          style={{ width: containerWidth || "100%", maxWidth: "none" }}
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 h-full w-[2px] bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        style={{ left: `${position}%` }}
      >
        <motion.div
          role="slider"
          tabIndex={0}
          aria-label="Comparison slider"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={handleKeyDown}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/30 bg-[#0a0514] text-white shadow-xl outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <MoveHorizontal size={16} strokeWidth={1.8} />
        </motion.div>
      </div>

      {/* Hint, fades once the user has interacted */}
      {!dragging && (
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.25em] text-white/30 opacity-0 transition-opacity group-hover:opacity-100">
          Drag to compare
        </span>
      )}
    </div>
  );
}