const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // console.log('%%%%%% TEST ACCOUNT %%%%%%%');
    // console.log(JSON.stringify(testAccount));

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'tennisdminemail@gmail.com',
            pass: 'P@ssw0rd@' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Tennis Admin 👻" <tennisdminemail@gmail.com>', // sender address
        to: 'arvind.charlotte@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    // console.log('Message sent: %s', info.messageId);

    const preview = nodemailer.getTestMessageUrl(info);
    // console.log('Preview URL: %s', preview);
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return preview;
}

module.exports = main;
