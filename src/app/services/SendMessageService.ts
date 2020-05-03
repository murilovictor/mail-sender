import awsSesMail from "aws-ses-mail";

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

  send(to: string, subject: string, template: string, params: any) {
    console.log("Enviando...", to, params);
    this.client.sendEmailByHtml(
      {
        from: process.env.EMAIL_SENDER,
        to: to,
        subject: subject,
        template: `./src/resources/templates/${template}`,
        templateArgs: params,
      },
      () => console.log("Enviado com sucesso!")
    );
  }
}

export default new SendMessageService();
