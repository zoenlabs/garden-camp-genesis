import { motion } from "framer-motion";
import { PenLine, Sparkles, Mic, Music2, Film, Disc3 } from "lucide-react";
import { Logo } from "./Logo";

const items = [
  {
    icon: PenLine,
    title: "Sessão de composição ao vivo",
    desc: "Construa uma canção do zero com a equipe Garden, observando o processo criativo em tempo real.",
  },
  {
    icon: Sparkles,
    title: "Desenvolvimento criativo",
    desc: "Direção artística, arranjo e refinamento da ideia ao lado de profissionais que vivem produção musical.",
  },
  {
    icon: Mic,
    title: "Gravação prática em estúdio",
    desc: "Mão na massa em um estúdio profissional de alto nível, com captação, monitoração e direção real.",
  },
  {
    icon: Music2,
    title: "Voz principal selecionada",
    desc: "Participação na gravação de voz principal conforme a dinâmica criativa do dia e seleção interna.",
  },
  {
    icon: Film,
    title: "Gravação de videoclipe",
    desc: "Encerramos o dia com um videoclipe gravado dentro do Garden, registrando o que foi criado por todos.",
  },
  {
    icon: Disc3,
    title: "Selo Celeiro Garden",
    desc: "Possibilidade de lançamento pelo selo Celeiro Garden, com créditos autorais e participação artística conforme a dinâmica do projeto.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-8 bg-gold/60" />
            A Experiência
          </div>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream text-balance md:text-5xl lg:text-6xl">
            O que acontece no <span className="text-gradient-gold italic">Garden Camp</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-card"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-glow/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/15 to-amber-glow/5">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-cream">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
