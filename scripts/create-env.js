const fs = require('fs')

fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`)

fs.writeFileSync('./.env', `AUTH_DOMAIN=${process.env.AUTH_DOMAIN}\n`)

fs.writeFileSync('./.env', `DATABASE_URL=${process.env.DATABASE_UR}\n`)

fs.writeFileSync('./.env', `PROJECT_ID=${process.env.PROJECT_ID}\n`)

fs.writeFileSync('./.env', `MESSAGING_SENDER_ID=${process.env.MESSAGING_SENDER_ID}\n`)

fs.writeFileSync('./.env', `SITE_KEY=${process.env.SITE_KEY}\n`)
