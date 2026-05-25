import { motion } from "framer-motion";
import guitarist from "@/assets/garden/guitarist.png";
import windowImg from "@/assets/garden/window.png";
import lounge from "@/assets/garden/garden-lounge.png";

export function StudioSection() {
  return (
    <section className="relative bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/80">
              <span className="h-px w-8 bg-gold/60" />
              O Estúdio
            </div>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl text-balance">
              O Garden não é só um estúdio.{" "}
              <span className="text-gradient-gold italic">É um ambiente onde música ganha vida.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-cream/75 md:text-lg">
              O Garden Studio, em Vinhedo, interior de São Paulo, é um espaço
              criado para artistas que levam a música a sério. Um lugar com
              estética, direção criativa, produção musical e ambiente preparado
              para transformar ideias em canções reais.
            </p>
            <p className="mt-6 text-base leading-relaxed text-cream/65 md:text-lg">
              Sob a direção do produtor <span className="text-gold">Janderson Santos</span>,
              vencedor do Grammy Latino, o Garden carrega uma identidade forte
              no universo country gospel e na música cristã — unindo excelência
              técnica, sensibilidade artística e uma experiência de produção
              fora do comum.
            </p>

            <div className="mt-6 flex gap-8 border-t border-cream/10 pt-6">
              <div>
                <div className="font-display text-3xl text-gradient-gold">Grammy</div>
                <div className="text-xs uppercase tracking-wider text-cream/55">Latino · Produção</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gradient-gold">100%</div>
                <div className="text-xs uppercase tracking-wider text-cream/55">Imersão presencial</div>
              </div>
            </div>
          </motion.div>

          {/* Image grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="col-span-4 row-span-6 overflow-hidden rounded-lg border border-border/60 shadow-[var(--shadow-premium)]"
              >
                <img src={guitarist} alt="Músico tocando violão no Garden Studio" className="h-full w-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="col-span-2 row-span-3 overflow-hidden rounded-lg border border-border/60"
              >
                <img src={windowImg} alt="Detalhes country do Garden Studio" className="h-full w-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="col-span-2 row-span-3 overflow-hidden rounded-lg border border-border/60"
              >
                <img src={lounge} alt="The Garden — área de convivência" className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
