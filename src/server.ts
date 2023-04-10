import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

class Server {
  public init = () => {
    const app = express()

    app.use(helmet())
    app.use(cors())
    app.use(cookieParser())
    app.use(express.json())

    const PORT = Number(process.env.PORT) || 5000

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  }
}

export const server = new Server()
