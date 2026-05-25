import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  onApply: () => void;
}

export function ValueSection({ onApply }: Props) {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 bg-wood-texture" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-8 bg-gold/60" />
            Investimento
            <span className="h-px w-8 bg-gold/60" />
          </div>

          <h2 className="mt-8 font-display text-4xl leading-[1.05] text-cream text-balance md:text-5xl lg:text-6xl">
            Uma experiência de <span className="text-gradient-gold italic">valor real</span> por uma condição especial.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base text-cream/75 md:text-lg">
            Uma experiência como essa tem valor real estimado em{" "}
            <span className="text-cream">R$ 1.999</span>. Mas nesta edição
            especial do Garden Camp, os selecionados participarão por apenas{" "}
            <span className="text-gold">R$ 397</span>.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/40 p-8 backdrop-blur-sm">
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream/55">
                Valor real estimado
              </div>
              <div className="mt-3 font-display text-5xl text-cream/40 line-through decoration-cream/30 decoration-2">
                R$ 1.999
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/15 to-amber-glow/5 p-8 shadow-[var(--shadow-glow)]">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                Condição para selecionados
              </div>
              <div className="mt-3 font-display text-5xl text-gradient-gold">R$ 397</div>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-sm italic leading-relaxed text-cream/65 md:text-base">
            Você não está comprando uma aula. Você está se candidatando para
            viver um dia de criação musical real dentro do Garden.
          </p>

          <Button
            size="lg"
            onClick={onApply}
            className="mt-10 h-14 w-full max-w-sm rounded-full bg-gradient-to-br from-leaf to-leaf-deep px-8 text-base font-medium text-cream hover:from-leaf hover:to-moss sm:w-auto"
          >
            Inscrever-me na seleção oficial
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
