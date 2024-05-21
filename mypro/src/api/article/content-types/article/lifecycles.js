'use strict';

const Brevo = require('sib-api-v3-sdk');

const defaultClient = Brevo.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const emailApi = new Brevo.TransactionalEmailsApi();

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Prepare the email content
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { email: 'education24to7@gmail.com', name: 'Trend Lens' };
    sendSmtpEmail.subject = `New Article Published: ${result.title}`;
    sendSmtpEmail.htmlContent = `<html><body>
    <h1>${result.title}</h1>
   
    <Link href="http://localhost:3000/${result.locale}/Articles/${result.slug}">http://localhost:3000/${result.locale}/Articles/${result.slug} </Link>
    </body></html>`;

    // Get all subscribed users
    const subscribers = await strapi.service('api::newsletter.newsletter').find({ filters: { subscribed: true } });

    for (const subscriber of subscribers.results) {
      sendSmtpEmail.to = [{ email: subscriber.email }];
      try {
        await emailApi.sendTransacEmail(sendSmtpEmail);
        strapi.log.info(`Notification email sent to ${subscriber.email}`);
      } catch (error) {
        strapi.log.error(`Error sending notification email to ${subscriber.email}`, error);
      }
    }
  },
};
