import SendMessageService from "../services/SendMessageService";

class EmailController {
  public async forgotPassword(req: Request, res: Response) {
    const { to, params } = req.body;

    try {

      SendMessageService.send(
        to,
        "ClickFest - Recuperação de senha",
        "forgot-password.html",
        params
      );

      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ error: "Error on forgot password, try again." });
    }
  }
}

export default new EmailController();
