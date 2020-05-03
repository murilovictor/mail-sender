import express from 'express'
import routes from './routes'
import SendMessageService from './app/services/SendMessageService'



class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.express.use(express.json());
        this.express.use(routes)
    }
}

export default new App().express