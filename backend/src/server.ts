import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import 'dotenv/config'
import { applicationsRoute } from './routes/applications.js'

const app = Fastify({ logger: true })

await app.register(helmet)
await app.register(cors, {
  origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
})
await app.register(rateLimit, {
  max: 10,
  timeWindow: '1 minute',
})

await app.register(applicationsRoute)

const port = Number(process.env.PORT ?? 3001)
await app.listen({ port, host: '0.0.0.0' })
