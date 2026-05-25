import { FastifyInstance } from 'fastify'
import { pool } from '../db.js'
import { applicationSchema } from '../schemas/applicationSchema.js'
import { ZodError } from 'zod'

export async function applicationsRoute(app: FastifyInstance) {
  app.post('/api/applications', async (request, reply) => {
    let data: ReturnType<typeof applicationSchema.parse>

    try {
      data = applicationSchema.parse(request.body)
    } catch (err) {
      if (err instanceof ZodError) {
        return reply.status(400).send({
          success: false,
          code: 'VALIDATION_ERROR',
          message: 'Verifique os campos preenchidos.',
        })
      }
      throw err
    }

    const email = data.email.toLowerCase().trim()
    const whatsapp = data.whatsapp.replace(/\D/g, '')

    try {
      await pool.query(
        `INSERT INTO garden_camp_applications (
          full_name, age_range, city_state, whatsapp, email,
          music_roles, music_role_other, music_experience, music_bio,
          instagram, portfolio_url, availability, has_food_restriction,
          food_restriction_details, investment_readiness, selection_reason
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16
        )`,
        [
          data.full_name, data.age_range, data.city_state,
          whatsapp, email, data.music_roles, data.music_role_other ?? null,
          data.music_experience, data.music_bio, data.instagram,
          data.portfolio_url, data.availability, data.has_food_restriction,
          data.food_restriction_details ?? null, data.investment_readiness,
          data.selection_reason,
        ]
      )
    } catch (err: any) {
      if (err.code === '23505') {
        return reply.status(409).send({
          success: false,
          code: 'DUPLICATE_APPLICATION',
          message: 'Identificamos que já existe uma inscrição com este contato.',
        })
      }
      throw err
    }

    return reply.status(201).send({
      success: true,
      message: 'Inscrição recebida com sucesso.',
    })
  })
}
