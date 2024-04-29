// ./api/email/controllers/email.js

'use strict';

module.exports = {
  sendConfirmationEmail: async (ctx) => {
    const { toEmail, confirmationLink } = ctx.request.body;

    if (!toEmail || !confirmationLink) {
      return ctx.badRequest('Missing required parameters');
    }

    await strapi.services.email.sendConfirmationEmail(toEmail, confirmationLink);
    return ctx.send('Confirmation email sent');
  },
};
