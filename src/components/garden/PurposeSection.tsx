import { motion } from "framer-motion";

export function PurposeSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/purpose-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
      <div className="absolute inset-0 vignette" />


      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-8 bg-gold/60" />
            O Propósito
            <span className="h-px w-8 bg-gold/60" />
          </div>

          <h2 className="mt-8 font-display text-4xl leading-[1.05] text-cream text-balance md:text-6xl lg:text-7xl">
            Um dia para criar, gravar, se conectar e{" "}
            <span className="text-gradient-gold italic">viver música de verdade.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
            O Garden Camp foi criado para quem sente que a música não pode ficar
            apenas no campo das ideias. É uma imersão presencial para artistas,
            compositores, produtores, cantores e criativos que querem
            experimentar um processo real de criação dentro de um estúdio
            profissional.
          </p>

          <div className="mx-auto mt-16 max-w-3xl border-y border-gold/20 py-10">
            <p className="font-display text-2xl italic leading-snug text-gradient-gold md:text-3xl lg:text-4xl text-balance">
              "Não é uma palestra. Não é um workshop comum. É um dia dentro do
              processo criativo real do Garden."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
