const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use SSL
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});


function send(from, to, subject, text) {
    const options = {
        from,
        to,
        subject,
        text,
    };
    return transporter.sendMail(options);
}



module.exports = send;

















/*
// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'user@gmail.com',
        pass: 'password',
    },
});

module.exports = createCoreService('api::email.email', ({ strapi }) => ({
    send(from, to, subject, text) {
        // Setup e-mail data.
        const options = {
            from,
            to,
            subject,
            text,
        };

        // Return a promise of the function that sends the email.
        return transporter.sendMail(options);
    },
}));

/*
await strapi.plugins['email'].services.email.send({
  to: 'paulbocuse@strapi.io',
  from: 'joelrobuchon@strapi.io',
  cc: 'helenedarroze@strapi.io',
  bcc: 'ghislainearabian@strapi.io',
  replyTo: 'annesophiepic@strapi.io',
  subject: 'Use strapi email provider successfully',
  text: 'Hello world!',
  html: 'Hello world!',
});





 config/plugins.js

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'hello@example.com',
        defaultReplyTo: 'hello@example.com',
      },
    },
  },
  // ...
});


*/