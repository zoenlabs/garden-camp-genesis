import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export function SuccessModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-1.5rem)] max-w-md border-gold/30 bg-gradient-to-b from-card to-background p-6 text-center sm:p-10">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-amber-glow/10 shadow-[var(--shadow-glow)]"
        >
          <Check className="h-9 w-9 text-gold" />
        </motion.div>

        <DialogTitle className="mt-8 font-display text-4xl text-cream">
          Inscrição <span className="text-gradient-gold italic">recebida.</span>
        </DialogTitle>

        <p className="mt-5 text-sm leading-relaxed text-cream/70">
          Sua inscrição para o Garden Camp foi enviada com sucesso.
          A equipe Garden irá analisar seu perfil com atenção. Caso você seja
          selecionado(a), receberá contato com os próximos passos e terá poucas
          horas para garantir sua vaga.
        </p>

        <Button
          onClick={() => onOpenChange(false)}
          className="mt-8 h-12 w-full rounded-full bg-gradient-to-br from-gold to-amber-glow text-background hover:from-gold-soft hover:to-gold"
        >
          Voltar para a página
        </Button>
      </DialogContent>
    </Dialog>
  );
}
