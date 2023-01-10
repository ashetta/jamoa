import express, { Express, Request, Response, NextFunction } from "express";
import routes from "./modules/routes";
import dotenv from "dotenv"
dotenv.config()

const app: Express = express()
const PORT: string | number = process.env.PORT || 2004

app.use(express.json())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorHandle) {
        return res.status(err.status).json({
            message: err.message,
            status: err.status
        })
    }

    return res.status(500).json({
        message: 'Error in Server',
        status: 500
    })
})

app.all("/*", (_: Request, res: Response) => res.sendStatus(404))
export default {
    app, 
    PORT
}