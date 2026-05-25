FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/start-server.mjs ./start-server.mjs
COPY --from=builder /app/package.json ./package.json
ENV PORT=3000
EXPOSE 3000
CMD ["node", "start-server.mjs"]
