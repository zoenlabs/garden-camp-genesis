import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const clientDir = join(__dirname, 'dist/client')
const port = process.env.PORT || 3000

const { default: handler } = await import('./dist/server/server.js')

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
}

async function tryServeStatic(pathname, res) {
  try {
    const filePath = join(clientDir, pathname)
    const data = await readFile(filePath)
    const mime = MIME[extname(filePath)] ?? 'application/octet-stream'
    res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'public, max-age=31536000, immutable' })
    res.end(data)
    return true
  } catch {
    return false
  }
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`)

    if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/_build/')) {
      if (await tryServeStatic(url.pathname, res)) return
    }

    const headers = new Headers()
    for (const [key, value] of Object.entries(req.headers)) {
      if (value != null) headers.set(key, Array.isArray(value) ? value.join(', ') : value)
    }

    let body = null
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = await new Promise((resolve) => {
        const chunks = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', () => resolve(Buffer.concat(chunks)))
      })
    }

    const request = new Request(url.href, { method: req.method, headers, body })
    const response = await handler.fetch(request, {}, {})

    const responseHeaders = {}
    response.headers.forEach((value, key) => { responseHeaders[key] = value })
    res.writeHead(response.status, responseHeaders)
    res.end(Buffer.from(await response.arrayBuffer()))
  } catch (err) {
    console.error(err)
    res.writeHead(500)
    res.end('Internal Server Error')
  }
})

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
