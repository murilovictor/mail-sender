export class ResponseMessage {
    success: boolean
    message: string
    developerMessage: string
    statusCode: number

    constructor(success, developerMessage, statusCode, message) {
        this.success = success
        this.developerMessage = developerMessage
        this.statusCode = statusCode
        this.message = message
    }
}