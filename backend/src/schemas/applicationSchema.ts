import { z } from 'zod'

export const applicationSchema = z.object({
  full_name: z.string().min(2),
  age_range: z.enum(['18 a 24', '25 a 30', '31 a 40', '40+']),
  city_state: z.string().min(2),
  whatsapp: z.string().min(8),
  email: z.string().email(),
  music_roles: z.array(z.string()).min(1),
  music_role_other: z.string().optional().nullable(),
  music_experience: z.enum(['Estou começando', '1 a 3 anos', '4 a 7 anos', '8 anos ou mais']),
  music_bio: z.string().min(10),
  instagram: z.string().min(2),
  portfolio_url: z.string().url(),
  availability: z.enum([
    'Sim, tenho disponibilidade total',
    'Talvez / preciso me organizar',
    'Não'
  ]),
  has_food_restriction: z.boolean(),
  food_restriction_details: z.string().optional().nullable(),
  investment_readiness: z.enum([
    'Sim, estou pronto para investir R$ 397 caso seja selecionado(a)',
    'Tenho interesse, mas preciso de mais informações',
    'Não estou pronto neste momento'
  ]),
  selection_reason: z.string().min(10),
})
