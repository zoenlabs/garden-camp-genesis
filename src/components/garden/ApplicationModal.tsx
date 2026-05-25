import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { applicationSchema, formatPhone, type ApplicationData } from "@/lib/validations";
import { SuccessModal } from "./SuccessModal";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const roleOptions = [
  "Cantor(a)",
  "Compositor(a)",
  "Instrumentista",
  "Produtor(a)",
  "Artista independente",
  "Líder de louvor / Worship",
  "Outro",
];

const steps = ["Sobre você", "Sua trajetória", "Disponibilidade"];

export function ApplicationModal({ open, onOpenChange }: Props) {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
    mode: "onTouched",
    defaultValues: {
      roles: [],
      hasDietary: "nao",
    },
  });

  const roles = watch("roles") ?? [];
  const hasDietary = watch("hasDietary");

  const handleNext = async () => {
    const fields: (keyof ApplicationData)[][] = [
      ["fullName", "ageRange", "cityState", "whatsapp", "email"],
      ["roles", "otherRole", "experience", "bio", "instagram", "link"],
      ["availability", "hasDietary", "dietaryDetails", "investment", "why"],
    ];
    const ok = await trigger(fields[step], { shouldFocus: true });
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const onSubmit = async (_data: ApplicationData) => {
    setSubmitting(true);
    // Simulated submission
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitting(false);
    setSuccess(true);
    onOpenChange(false);
    reset();
    setStep(0);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="flex max-h-[92svh] w-[calc(100%-1.5rem)] max-w-3xl flex-col gap-0 overflow-hidden border-gold/20 bg-gradient-to-b from-card to-background p-0 sm:w-[calc(100%-2rem)]"
        >
          {/* Header */}
          <div className="relative shrink-0 border-b border-border/60 bg-background/60 px-5 py-5 backdrop-blur md:px-10 md:py-6">

            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Seleção Oficial
            </div>
            <DialogTitle className="mt-2 font-display text-3xl text-cream md:text-4xl">
              Garden Camp <span className="text-cream/40">|</span>{" "}
              <span className="text-gradient-gold italic">Seleção Oficial</span>
            </DialogTitle>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/65">
              Uma experiência exclusiva e imersiva no Garden para compositores,
              artistas, cantores e criativos da música. No dia 6 de Junho, você
              poderá viver um dia inteiro com a equipe Garden. Incluso café da
              manhã e almoço. Estamos selecionando apenas 15 a 20 pessoas —
              preencha com atenção.
            </p>

            {/* Stepper */}
            <div className="mt-6 flex items-center gap-3">
              {steps.map((label, i) => (
                <div key={label} className="flex flex-1 items-center gap-3">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs transition-colors ${
                      i <= step
                        ? "border-gold bg-gold text-background"
                        : "border-border text-cream/50"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="hidden text-xs text-cream/70 sm:block">{label}</div>
                  {i < steps.length - 1 && (
                    <div className={`h-px flex-1 ${i < step ? "bg-gold" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-10 md:py-8">
            <AnimatePresence mode="wait">

              {step === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <Field label="Nome completo" error={errors.fullName?.message}>
                    <Input {...register("fullName")} placeholder="Como você assina" />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Idade" error={errors.ageRange?.message}>
                      <Controller
                        control={control}
                        name="ageRange"
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="18-24">18 a 24</SelectItem>
                              <SelectItem value="25-30">25 a 30</SelectItem>
                              <SelectItem value="31-40">31 a 40</SelectItem>
                              <SelectItem value="40+">40+</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </Field>
                    <Field label="Cidade e Estado" error={errors.cityState?.message}>
                      <Input {...register("cityState")} placeholder="Ex: Vinhedo, SP" />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="WhatsApp" error={errors.whatsapp?.message}>
                      <Controller
                        control={control}
                        name="whatsapp"
                        render={({ field }) => (
                          <Input
                            placeholder="(11) 99999-9999"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(formatPhone(e.target.value))}
                          />
                        )}
                      />
                    </Field>
                    <Field label="E-mail" error={errors.email?.message}>
                      <Input type="email" {...register("email")} placeholder="voce@email.com" />
                    </Field>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <Field label="Qual sua principal atuação na música?" error={errors.roles?.message as string | undefined}>
                    <Controller
                      control={control}
                      name="roles"
                      render={({ field }) => (
                        <div className="grid gap-2 sm:grid-cols-2">
                          {roleOptions.map((opt) => {
                            const checked = field.value?.includes(opt);
                            return (
                              <label
                                key={opt}
                                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                                  checked ? "border-gold/60 bg-gold/10 text-cream" : "border-border bg-muted/30 text-cream/80 hover:border-border/80"
                                }`}
                              >
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={(c) => {
                                    if (c) field.onChange([...(field.value ?? []), opt]);
                                    else field.onChange(field.value?.filter((v: string) => v !== opt));
                                  }}
                                />
                                {opt}
                              </label>
                            );
                          })}
                        </div>
                      )}
                    />
                  </Field>

                  {roles.includes("Outro") && (
                    <Field label="Descreva sua atuação" error={errors.otherRole?.message}>
                      <Input {...register("otherRole")} placeholder="Conte-nos" />
                    </Field>
                  )}

                  <Field label="Há quanto tempo você atua na música?" error={errors.experience?.message}>
                    <Controller
                      control={control}
                      name="experience"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="iniciando">Estou começando</SelectItem>
                            <SelectItem value="1-3">1 a 3 anos</SelectItem>
                            <SelectItem value="4-7">4 a 7 anos</SelectItem>
                            <SelectItem value="8+">8 anos ou mais</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>

                  <Field
                    label="Conte brevemente sobre você na música"
                    hint="O que você faz hoje e por que gostaria de viver essa experiência no Garden?"
                    error={errors.bio?.message}
                  >
                    <Textarea rows={4} {...register("bio")} placeholder="Sua história em poucas linhas" />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Instagram" hint="Perfil aberto para análise." error={errors.instagram?.message}>
                      <Input {...register("instagram")} placeholder="@seuperfil" />
                    </Field>
                    <Field
                      label="Link de vídeo, música ou material"
                      hint="YouTube, Spotify, Instagram, Drive..."
                      error={errors.link?.message}
                    >
                      <Input {...register("link")} placeholder="https://..." />
                    </Field>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <Field label="Disponibilidade no dia 6 de Junho (dia inteiro)" error={errors.availability?.message}>
                    <Controller
                      control={control}
                      name="availability"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sim">Sim, tenho disponibilidade total</SelectItem>
                            <SelectItem value="talvez">Talvez / preciso me organizar</SelectItem>
                            <SelectItem value="nao">Não</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>

                  <Field label="Possui alguma restrição alimentar ou intolerância?" error={errors.hasDietary?.message}>
                    <Controller
                      control={control}
                      name="hasDietary"
                      render={({ field }) => (
                        <RadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                          className="flex gap-6"
                        >
                          <label className="flex cursor-pointer items-center gap-2 text-sm text-cream/80">
                            <RadioGroupItem value="nao" /> Não
                          </label>
                          <label className="flex cursor-pointer items-center gap-2 text-sm text-cream/80">
                            <RadioGroupItem value="sim" /> Sim
                          </label>
                        </RadioGroup>
                      )}
                    />
                  </Field>

                  {hasDietary === "sim" && (
                    <Field label="Qual restrição ou intolerância?" error={errors.dietaryDetails?.message}>
                      <Input {...register("dietaryDetails")} placeholder="Descreva" />
                    </Field>
                  )}

                  <div className="rounded-xl border border-gold/25 bg-gold/5 p-5 text-sm leading-relaxed text-cream/75">
                    <p>
                      Essa experiência tem valor real estimado em{" "}
                      <span className="text-cream">R$ 1.999</span>, mas nesta
                      edição especial os selecionados participarão por apenas{" "}
                      <span className="text-gold">R$ 397</span>.
                    </p>
                    <p className="mt-2 text-cream/60">
                      Inclui: imersão presencial, sessão de composição,
                      gravação em estúdio, videoclipe, café da manhã, almoço e
                      possibilidade de lançamento pelo selo Celeiro Garden.
                      Vagas extremamente limitadas.
                    </p>
                  </div>

                  <Field label="Caso seja selecionado(a), você está pronto para investir?" error={errors.investment?.message}>
                    <Controller
                      control={control}
                      name="investment"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sim">Sim, estou pronto para investir R$ 397 caso seja selecionado(a)</SelectItem>
                            <SelectItem value="info">Tenho interesse, mas preciso de mais informações</SelectItem>
                            <SelectItem value="nao">Não estou pronto neste momento</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>

                  <Field label="Por que você acredita que deveria estar entre os selecionados?" error={errors.why?.message}>
                    <Textarea rows={4} {...register("why")} placeholder="Fale com sinceridade" />
                  </Field>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer actions */}
            <div className="mt-10 flex flex-col-reverse items-stretch justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
              <Button
                type="button"
                variant="ghost"
                onClick={() => (step === 0 ? onOpenChange(false) : setStep((s) => s - 1))}
                className="text-cream/70 hover:bg-muted hover:text-cream"
              >
                {step === 0 ? "Cancelar" : "Voltar"}
              </Button>

              {step < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="h-12 rounded-full bg-gradient-to-br from-gold to-amber-glow px-8 text-background hover:from-gold-soft hover:to-gold"
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 rounded-full bg-gradient-to-br from-gold to-amber-glow px-8 text-background hover:from-gold-soft hover:to-gold disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar inscrição"
                  )}
                </Button>
              )}
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <SuccessModal open={success} onOpenChange={setSuccess} />
    </>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-wider text-cream/70">{label}</Label>
      {children}
      {hint && !error && <p className="text-xs text-cream/45">{hint}</p>}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
