import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function ScarcitySection() {
  return (
    <section className="relative bg-background py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-gold/25 bg-card/60 p-8 text-center backdrop-blur-sm md:p-12"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/5 via-transparent to-amber-glow/5" />

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
            <Users className="h-6 w-6 text-gold" />
          </div>

          <h2 className="mt-8 font-display text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl">
            Poucas vagas. <span className="text-gradient-gold italic">Seleção real.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-cream/75 md:text-lg">
            Estamos selecionando apenas <span className="text-gold">15 a 20 pessoas</span> para
            esta edição. O formulário será analisado com atenção pela equipe Garden.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-cream/55 md:text-base">
            Se você for selecionado, receberá o contato da equipe e terá um
            prazo curto para garantir sua vaga.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
