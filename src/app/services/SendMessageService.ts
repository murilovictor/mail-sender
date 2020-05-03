import awsSesMail from "aws-ses-mail";
import { ResponseMessage } from "../model/ResponseMessage";

class SendMessageService {
  private client: awsSesMail;

  constructor() {
    this.client = new awsSesMail();

    this.client.setConfig({
      region: process.env.AWS_SES_REGION,
      accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    });
  }

  async send(to: string, subject: string, template: string, params: any): Promise<ResponseMessage> {
    console.log("Enviando...", to, params);

    const options = {
      from: process.env.EMAIL_SENDER,
      to: to,
      subject: subject,
      template: `./src/resources/templates/${template}`,
      templateArgs: params,
    };

    return new Promise((resolve, reject) => {
      this.client.sendEmailByHtml(options, function (err, data) {
        if (err) {
          reject(
            new ResponseMessage(
              err.success,
              err.result.message,
              err.result.statusCode,
              'Não foi possível enviar o email, Tente novamente.'
            )
          );
        } else {
          resolve(
            new ResponseMessage(
              data.success,
              data.result.message,
              data.result.statusCode | 200,
              'E-mail de recuperação enviado. Verifique seu E-mail.'
            )
          );
        }
      });
    });
  }
}

export default new SendMessageService();
