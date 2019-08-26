const express = require('express');
const https = require('https');
const fs = require('fs');
const EmailRoutes = require('../app/modules/send-email/email-routes');
const EmailController = require('../app/modules/send-email/email-controller');
const EmailService = require('../app/modules/send-email/email-service');
const Middlewares = require('../app/middlewares/cores-middleware');
const bodyParser = require('body-parser');
const emailService = new EmailService();
const emailRoutes = new EmailRoutes(new EmailController(emailService));
const router = express.Router();
const app = express();

emailRoutes.register(router);
app.use(bodyParser.json({limit: '1mb'}));
// app.use(Middlewares.enableCors);
app.use('/', router);

https.createServer({
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.cert')
}, app)
.listen(3000, () => console.log('app listening on 3000'));

