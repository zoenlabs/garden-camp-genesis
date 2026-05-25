import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Informe seu nome completo").max(120),
  ageRange: z.enum(["18-24", "25-30", "31-40", "40+"], {
    message: "Selecione uma faixa etária",
  }),
  cityState: z.string().trim().min(2, "Informe cidade e estado").max(120),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(160),
  roles: z.array(z.string()).min(1, "Selecione ao menos uma opção"),
  otherRole: z.string().max(120).optional(),
  experience: z.enum(["iniciando", "1-3", "4-7", "8+"], {
    message: "Selecione uma opção",
  }),
  bio: z.string().trim().min(20, "Conte um pouco mais (mín. 20 caracteres)").max(1500),
  instagram: z.string().trim().min(2, "Informe seu @").max(80),
  link: z.union([z.literal(""), z.string().trim().url("Informe uma URL válida").max(400)]).optional(),
  availability: z.enum(["sim", "talvez", "nao"], {
    message: "Selecione uma opção",
  }),
  hasDietary: z.enum(["nao", "sim"], { message: "Selecione" }),
  dietaryDetails: z.string().max(300).optional(),
  investment: z.enum(["sim", "info", "nao"], {
    message: "Selecione uma opção",
  }),
  why: z.string().trim().min(20, "Conte um pouco mais (mín. 20 caracteres)").max(1500),
}).refine(
  (d) => !d.roles.includes("Outro") || (d.otherRole && d.otherRole.trim().length > 1),
  { message: "Descreva sua atuação", path: ["otherRole"] }
).refine(
  (d) => d.hasDietary === "nao" || (d.dietaryDetails && d.dietaryDetails.trim().length > 1),
  { message: "Descreva sua restrição", path: ["dietaryDetails"] }
);

export type ApplicationData = z.infer<typeof applicationSchema>;

export const formatPhone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};
