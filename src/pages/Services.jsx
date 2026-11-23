import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import {
  ArrowLeft,
  ArrowUpRight,
  Banknote,
  Blend,
  Cake,
  FileImage,
  FileText,
  Gift,
  Home as HouseIcon,
  IdCard,
  Image as ImageIcon,
  Layers,
  LayoutTemplate,
  MailPlus,
  Megaphone,
  MessageSquare,
  Monitor,
  PartyPopper,
  Palette,
  PenTool,
  Percent,
  PlaySquare,
  RefreshCw,
  Rocket,
  Scissors,
  Tag,
  TrendingUp,
  UtensilsCrossed,
  Wand2,
} from "lucide-react";

const services = [
  {
    id: "photo",
    icon: ImageIcon,
    title: "PHOTO EDITING & DESIGN",
    body: "Retouching, compositing, design and color work that keeps every image natural, sharp and intentional.",
    items: [
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
    ],
  },
];

const process = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Brief & Concept",
    body: "We start with your references, photos or raw files and lock the mood, format and platform the piece is built for.",
  },
  {
    step: "02",
    icon: Monitor,
    title: "Design & Edit",
    body: "Retouching, compositing or layout work happens with every screen in mind — feeds, print and full-resolution delivery all checked as we go.",
  },
  {
    step: "03",
    icon: RefreshCw,
    title: "Review & Refine",
    body: "You see drafts early. Revisions are folded in fast so the final piece matches what you pictured.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Showcase & Delivery",
    body: "Finished files are exported in every format you need and added to the portfolio, ready to publish or print.",
  },
];

export default function ServicesPage({ navItems, onNavigate }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0514] text-[#f3efff]">
      <PageShell navItems={navItems} currentPath="/services" onNavigate={onNavigate}>
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
              02 — Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl"
            >
              SERVICES<span className="text-white/30">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base"
            >
              Photo retouching, graphic design, color grading and end-to-end image finishing.
            </motion.p>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-lg text-3xl font-extrabold tracking-tight sm:text-5xl"
            >
              OUR PROCESS<span className="text-white/30">.</span>
            </motion.h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50">
                        <StepIcon size={17} strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-semibold tracking-[0.2em] text-white/20">{step.step}</span>
                    </div>
                    <h3 className="mt-5 text-base font-bold tracking-tight text-white/90 sm:text-lg">{step.title}</h3>
                    <p className="mt-2.5 text-[13px] leading-6 text-white/40">{step.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/40">
                    <Icon size={16} strokeWidth={1.7} />
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                    {String(index + 1).padStart(2, "0")} — Photo & Design
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{service.title}</h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-white/40">{service.body}</p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {service.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-3"
                      >
                        <ItemIcon size={15} strokeWidth={1.6} className="shrink-0 text-white/40" />
                        <span className="text-[11px] font-medium leading-4 text-white/65">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
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
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">Have a project in mind?</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">LET'S CREATE <span className="text-white/30">SOMETHING.</span></h2>
              <button
                onClick={() => onNavigate("/contact")}
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0a0514] hover:bg-white/90"
              >
                Start a Project <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        </section>
      </PageShell>
    </div>
  );
}