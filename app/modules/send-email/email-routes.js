const bodyParser = require('body-parser');

class EmailRoutes {
  
   constructor(emailController) {
     this.emailController = emailController;

     this.register = this.register.bind(this);
   }

   register(router) {
     router.post('/send/email', bodyParser.json(), this.emailController.sendEmail);
   }
}

module.exports = EmailRoutes;
