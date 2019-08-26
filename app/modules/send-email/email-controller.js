class EmailController {

  constructor(emailService) {
    this._emailService = emailService;

    this.sendEmail = this.sendEmail.bind(this);
  }

  async sendEmail(req, res, next) {
    const body = req.body;
    console.log('************* Body in the Req ***************');
    console.log(JSON.stringify(body));
    console.log('*********************************************');
//    const preview = await this._emailService.send();
    return res.json({
      test: 'preview'
    });
  }
}

module.exports = EmailController;
