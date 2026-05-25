import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  onApply: () => void;
}

export function FinalCTA({ onApply }: Props) {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/studio-3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
      <div className="absolute inset-0 vignette" />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="mx-auto flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Última chamada
            <span className="h-px w-8 bg-gold/60" />
          </div>

          <h2 className="mt-8 font-display text-4xl leading-[0.95] text-cream text-balance sm:text-5xl md:text-7xl lg:text-8xl">
            Pronto para viver o{" "}
            <span className="font-script text-gradient-leaf text-5xl sm:text-6xl md:text-8xl lg:text-9xl">Garden Camp?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base text-cream/80 md:text-lg">
            Preencha sua inscrição com atenção. Se o seu perfil for
            selecionado, a equipe Garden entrará em contato com os próximos passos.
          </p>

          <Button
            size="lg"
            onClick={onApply}
            className="mt-12 h-16 w-full max-w-sm rounded-full bg-gradient-to-br from-leaf to-leaf-deep px-8 text-base font-medium text-cream shadow-[0_30px_80px_-20px_var(--leaf)] transition-transform hover:scale-[1.02] hover:from-leaf hover:to-moss sm:w-auto sm:px-10"
          >
            Quero participar da seleção oficial
          </Button>
        </motion.div>
      </div>

      <footer className="relative mt-24 border-t border-cream/10 pt-10 text-center text-xs text-cream/45">
        <div className="mx-auto max-w-4xl px-6">
          <div>
            <span className="font-script text-3xl text-gradient-leaf">Garden</span>{" "}
            <span className="font-display text-sm uppercase tracking-[0.3em] text-cream/70">Camp</span>
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em]">
            Garden Studio · Vinhedo · São Paulo
          </div>
          <div className="mt-6 text-[11px] text-cream/40">
            © {new Date().getFullYear()} Garden Studio. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </section>
  );
}
