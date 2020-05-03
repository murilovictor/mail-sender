import express from 'express'
import routes from './routes'
class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.express.use(express.json());
        this.express.use(routes)
    }
}

export default new App().express