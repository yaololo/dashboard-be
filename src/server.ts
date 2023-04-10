import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import path from 'path'

class Server {
  public init = () => {
    const app = express()

    app.use(helmet())
    app.use(cors())
    app.use(cookieParser())
    app.use(express.json())

    

    // Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname + '/../../frontend/dist')))

    // Anything that doesn't match the above, send back index.html
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname + '/../../frontend/dist', 'index.html'))
    })

    const PORT = Number(process.env.PORT) || 5000

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  }
}

export const server = new Server()
