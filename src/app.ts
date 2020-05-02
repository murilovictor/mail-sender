import * as dotenv from 'dotenv'
import express from 'express'
import routes from './routes'


class App {
    public express: express.Application

    constructor() {
        dotenv.config()

        this.express = express()
        this.routes()

    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express