import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "Você canta, compõe, produz ou atua na música",
  "Você quer viver uma experiência prática em estúdio",
  "Você deseja se conectar com outros criativos",
  "Você leva sua trajetória musical a sério",
  "Você atua ou deseja atuar na música cristã, worship ou country gospel",
];

const notForYou = [
  "Você só está curioso e não quer se comprometer",
  "Você não tem disponibilidade no dia 6 de Junho",
  "Você não está disposto a investir R$ 397 caso seja selecionado",
  "Você não quer participar de uma experiência coletiva e criativa",
];

export function AudienceSection() {
  return (
    <section className="relative bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-gold/30 bg-gradient-to-br from-card/80 to-card/30 p-10 md:p-12"
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Para você se...</div>
            <h3 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl text-balance">
              Essa experiência é <span className="text-gradient-gold italic">para você</span>
            </h3>
            <ul className="mt-6 space-y-3">
              {forYou.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <Check className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <span className="text-sm leading-relaxed text-cream/85 md:text-base">{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl border border-border/60 bg-card/30 p-10 md:p-12"
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-cream/55">Talvez não seja...</div>
            <h3 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl text-balance">
              Talvez não seja <span className="italic text-cream/70">para você</span>
            </h3>
            <ul className="mt-6 space-y-3">
              {notForYou.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-muted/40">
                    <X className="h-3.5 w-3.5 text-cream/55" />
                  </div>
                  <span className="text-sm leading-relaxed text-cream/70 md:text-base">{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
