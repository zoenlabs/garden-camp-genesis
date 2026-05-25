import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onApply: () => void;
}

export function Hero({ onApply }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster=""
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 vignette" />

      {/* Top nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 font-display text-xl tracking-wide text-cream">
          <span className="text-gradient-gold font-semibold">Garden</span>
          <span className="text-cream/70">Camp</span>
        </div>
        <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/60 md:flex">
          <span className="h-px w-8 bg-gold/50" />
          Edição 2026
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] max-w-6xl flex-col items-start justify-center px-6 pb-24 pt-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/80"
        >
          <span className="h-px w-10 bg-gold/60" />
          Imersão presencial · Música Cristã · Country Gospel
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="mt-6 font-display text-6xl font-medium leading-[0.95] text-cream text-balance sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Garden <em className="not-italic text-gradient-gold">Camp</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/85 text-balance md:text-xl"
        >
          Um dia inteiro de imersão criativa no Garden Studio para artistas,
          compositores, cantores e criativos da música cristã.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/65 md:text-base"
        >
          No dia 6 de Junho, em Vinhedo, você poderá viver uma experiência real
          de composição, gravação, conexão e criação musical ao lado da equipe Garden.
        </motion.p>

        {/* Highlight chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {[
            { icon: Calendar, label: "6 de Junho" },
            { icon: MapPin, label: "Garden Studio · Vinhedo SP" },
            { icon: Users, label: "Apenas 15 a 20 selecionados" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-gold/25 bg-background/40 px-4 py-2 text-xs text-cream/85 backdrop-blur-md"
            >
              <Icon className="h-3.5 w-3.5 text-gold" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={onApply}
            className="h-14 rounded-full bg-gradient-to-br from-gold to-amber-glow px-8 text-base font-medium text-background shadow-[0_20px_60px_-20px_var(--amber-glow)] transition-transform hover:scale-[1.02] hover:from-gold-soft hover:to-gold"
          >
            Quero participar da seleção
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-14 rounded-full border border-cream/20 px-8 text-base text-cream hover:bg-cream/5 hover:text-cream"
          >
            <a href="#experiencia">Ver como funciona</a>
          </Button>
        </motion.div>
      </div>

      {/* Tags strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/10 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-cream/50 md:px-12">
          <span>Country Gospel</span>
          <span className="hidden md:inline">·</span>
          <span>Música Cristã</span>
          <span className="hidden md:inline">·</span>
          <span>Garden Studio</span>
          <span className="hidden md:inline">·</span>
          <span>Selo Celeiro Garden</span>
        </div>
      </div>
    </section>
  );
}
