import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/photos/Logo.jpg";

/* =============================================================
   PAGE SHELL
   Single source of truth for the top navbar + mobile sidebar.
   Every page (Home, Work, About, Services, Contact) renders its
   own content as `children`, inside this shared chrome — so a
   nav change here updates every page at once instead of needing
   to be copy-pasted into each file.

   `navItems`: [{ name, path, category?, icon }]
   `onNavigate(path, category?)`: pushes history + updates route
   `currentPath` / `activeCategory`: used to highlight the active
   nav item (Work vs Photo vs Video all live at "/work", so a
   plain path match isn't enough for those three).
============================================================= */
export default function PageShell({ children, navItems, currentPath, activeCategory = "all", onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const isItemActive = (item) => {
    if (item.path !== currentPath) return false;
    if (item.path === "/work") return (item.category || "all") === (activeCategory || "all");
    return true;
  };

  const go = (item) => (e) => {
    e.preventDefault();
    closeMenu();
    onNavigate(item.path, item.category);
  };

  return (
    <>
      {/* =========================================================
          TOP NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-[#0a0514]/80 backdrop-blur-xl">
        <nav className="flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" onClick={go({ path: "/" })} className="flex shrink-0 items-center gap-3">
            <img src={logo} alt="Your Name logo" className="h-9 w-9 object-contain" />
            <div className="hidden sm:block">
              <p className="text-xs font-bold tracking-wide">AJITHKUMAR S</p>
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                GRAPHIC DESIGNER & PHOTO EDITOR
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={go(item)}
                className={`group relative text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                  isItemActive(item) ? "text-white" : "text-white/45 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${
                    isItemActive(item) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              onClick={go({ path: "/contact" })}
              className="hidden items-center gap-2 border border-white/15 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 transition hover:border-white hover:bg-white hover:text-[#0a0514] md:flex"
            >
              Let's Work
              <ArrowUpRight size={13} />
            </a>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-white hover:bg-white hover:text-[#0a0514]"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* =========================================================
          SIDEBAR
      ========================================================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 top-0 z-50 flex h-full w-[280px] flex-col border-r border-white/10 bg-[#0d071a] shadow-2xl sm:w-[300px]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
                <a href="/" onClick={go({ path: "/" })} className="flex items-center gap-3">
                  <img src={logo} alt="Your Name logo" className="h-10 w-10 object-contain" />
                  <div>
                    <p className="text-sm font-bold tracking-wide">AJITHKUMAR.S</p>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                      Photo & Video Editor
                    </p>
                  </div>
                </a>

                <button
                  onClick={closeMenu}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition hover:border-white hover:bg-white hover:text-[#0a0514]"
                  aria-label="Close navigation"
                >
                  <X size={17} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isItemActive(item);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.path}
                      onClick={go(item)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                      className={`group flex items-center gap-4 rounded-md px-3 py-3.5 text-xs font-medium uppercase tracking-[0.15em] transition ${
                        active ? "bg-white/5 text-white" : "text-white/55 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                        className={`shrink-0 transition ${active ? "text-white" : "text-white/35 group-hover:text-white"}`}
                      />
                      <span className="flex-1">{item.name}</span>
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </motion.a>
                  );
                })}
              </nav>

              <div className="border-t border-white/10 px-4 py-5">
                <a
                  href="/contact"
                  onClick={go({ path: "/contact" })}
                  className="flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#0a0514]"
                >
                  Let's Work Together
                  <ArrowUpRight size={14} />
                </a>
                <p className="mt-4 text-center text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Available for freelance projects
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="pt-16">{children}</main>
    </>
  );
}