// ./api/email/services/email.js

'use strict';

const nodemailer = require('nodemailer');

module.exports = {
  sendConfirmationEmail: async (toEmail, confirmationLink) => {
    const transporter = nodemailer.createTransport({
      // configure your email provider here
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: toEmail,
      subject: 'Confirm your email',
      html: `<p>Click the following link to confirm your email: <a href="${confirmationLink}">${confirmationLink}</a></p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.messageId);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  },
};
