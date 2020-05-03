import SendMessageService from "../services/SendMessageService";

class EmailController {

  public async forgotPassword(req: Request, res: Response) {
    const { to, params } = req.body;

    const retorno = await SendMessageService.send(
      to,
      "ClickFest - Recuperação de senha",
      "forgot-password.html",
      params
    )
      .then((response) => {
        console.log(`Enviado com sucesso!`)
        return response;
      })
      .catch((err) => {
        console.error(`Error when sending forgot-password to ${to} => ${err.message}`)
        return err;
      });

    return res.status(200).json(retorno);
  }
  
}

export default new EmailController();
