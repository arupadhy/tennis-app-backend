const emailSender = require('../../../lib/email-proxy');

class EmailService {

  constructor() {
  }

  async send() {
    try {
      return emailSender();
    }catch(err) {
      console.log(err);
    }
  }
}

module.exports = EmailService;