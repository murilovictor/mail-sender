import { Router } from 'express'
import EmailController from './app/controller/EmailController'


const routes = Router()

routes.post('/forgot-password', EmailController.forgotPassword)

export default routes