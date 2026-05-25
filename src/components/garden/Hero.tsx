import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/garden/Logo";

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
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Layered overlays — deeper green wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-leaf-dark/85 via-background/80 to-background" />
      <div className="absolute inset-0 vignette" />

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 md:px-12 md:py-6">
        <div className="flex items-center">
          <Logo className="h-10 w-auto sm:h-12" />
        </div>
        <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cream/60 sm:flex">
          <span className="h-px w-6 bg-gold/50" />
          Edition 1 · 2026
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold sm:hidden">
          Inscrições abertas
        </div>
      </header>

      {/* Content — centered, mobile-first */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] w-full max-w-3xl flex-col items-center justify-center px-5 pb-28 pt-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/85"
        >
          <span className="h-px w-8 bg-gold/60" />
          Acampamento de Criação
          <span className="h-px w-8 bg-gold/60" />
        </motion.div>

        {/* Folder-inspired wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="mt-5 flex flex-col items-center"
        >
          <span className="font-display text-xs uppercase tracking-[0.5em] text-cream/65 sm:text-sm">
            2026
          </span>
          <h1 className="sr-only">Garden Camp</h1>
          <Logo className="mt-3 h-[30rem] w-auto sm:h-[42rem] md:h-[54rem] lg:h-[60rem]" />
          <div className="mt-3 flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60 sm:w-12" />
            <span className="font-display text-[10px] uppercase tracking-[0.4em] text-gold sm:text-xs">
              Edição 2026
            </span>
            <span className="h-px w-8 bg-gold/60 sm:w-12" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/85 text-balance sm:text-lg md:text-xl"
        >
          Um dia inteiro de imersão criativa no <span className="text-sage">Garden Studio</span> para artistas, compositores, cantores e criativos da música cristã.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-4 max-w-lg text-sm leading-relaxed text-cream/65 sm:text-base"
        >
          6 de Junho · Vinhedo · Interior de SP — composição, gravação, conexão e criação musical ao lado da equipe Garden.
        </motion.p>

        {/* Highlight chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {[
            { icon: Calendar, label: "6 de Junho" },
            { icon: MapPin, label: "Vinhedo · SP" },
            { icon: Users, label: "15 a 20 selecionados" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-leaf/30 bg-background/40 px-3 py-1.5 text-[11px] text-cream/85 backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs"
            >
              <Icon className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            onClick={onApply}
            className="h-14 w-full rounded-full bg-gradient-to-br from-leaf to-leaf-deep px-7 text-base font-medium text-cream shadow-[0_20px_60px_-20px_var(--leaf)] transition-transform hover:scale-[1.02] hover:from-leaf hover:to-moss sm:w-auto"
          >
            Quero participar da seleção
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-14 w-full rounded-full border border-cream/20 px-7 text-base text-cream hover:bg-cream/5 hover:text-cream sm:w-auto"
          >
            <a href="#experiencia">Ver como funciona</a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/10 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-3 text-[9px] uppercase tracking-[0.35em] text-cream/55 sm:gap-x-6 sm:py-4 sm:text-[10px]">
          <span>Country Gospel</span>
          <span className="text-gold/60">·</span>
          <span>Música Cristã</span>
          <span className="text-gold/60">·</span>
          <span>Garden Studio</span>
        </div>
      </div>
    </section>
  );
}
