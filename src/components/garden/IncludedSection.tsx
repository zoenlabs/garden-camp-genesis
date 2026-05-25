import { motion } from "framer-motion";
import { Check } from "lucide-react";

const included = [
  "Imersão presencial no Garden Studio",
  "Sessão prática de composição",
  "Gravação em estúdio",
  "Participação em videoclipe",
  "Café da manhã",
  "Almoço",
  "Possibilidade de lançamento pelo selo Celeiro Garden",
];

export function IncludedSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <div className="mx-auto flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-8 bg-gold/60" />
            Tudo Incluso
          </div>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-5xl">
            O que está <span className="text-gradient-gold italic">incluso</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-gold/20 bg-card/40 p-2 backdrop-blur-sm">
          <ul className="grid divide-y divide-border/40 sm:grid-cols-2 sm:divide-y-0">
            {included.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex items-center gap-4 px-6 py-5 sm:border-b sm:border-border/40 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <Check className="h-4 w-4 text-gold" />
                </div>
                <span className="text-base text-cream/90">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
