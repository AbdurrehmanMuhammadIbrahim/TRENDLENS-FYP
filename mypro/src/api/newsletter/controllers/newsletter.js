'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const Brevo = require('sib-api-v3-sdk');

const defaultClient = Brevo.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const emailApi = new Brevo.TransactionalEmailsApi();

module.exports = createCoreController('api::newsletter.newsletter', ({ strapi }) => ({
  async create(ctx) {
    const { email } = ctx.request.body.data;

    // Check if the email is already subscribed
    const existingSubscriber = await strapi.query('api::newsletter.newsletter').findOne({ where: { email } });
    if (existingSubscriber) {
      return ctx.badRequest('Email is already subscribed');
    }

    // Create the new subscription
    let entity;
    try {
      entity = await strapi.service('api::newsletter.newsletter').create({ data: { email, subscribed: true } });
    } catch (error) {
      strapi.log.error('Error creating newsletter subscription', error);
      return ctx.internalServerError('Error creating newsletter subscription');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    // Send confirmation email using Brevo
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email }];
    sendSmtpEmail.sender = { email: 'education24to7@gmail.com', name: 'Trend Lens' };
    sendSmtpEmail.subject = 'Newsletter Subscription Confirmation';
    sendSmtpEmail.htmlContent = '<html><body><h1>Thank you for subscribing to our newsletter!</h1></body></html>';

    try {
      await emailApi.sendTransacEmail(sendSmtpEmail);
    } catch (error) {
      strapi.log.error('Error sending confirmation email', error);
      return ctx.internalServerError('Error sending confirmation email');
    }

    return sanitizedEntity;
  },

  async sendArticleNotification(article) {
    // Get all subscribed users
    const subscribers = await strapi.service('api::newsletter.newsletter').find({ filters: { subscribed: true } });

    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { email: 'education24to7@gmail.com', name: 'Trend Lens' };
    sendSmtpEmail.subject = `New Article Published: ${article.title}`;
    sendSmtpEmail.htmlContent = `<html><body>
    <h1>${article.title}</h1>
    <Link href="http://localhost:3000/${article.locale}/Articles/${article.slug}">http://localhost:3000/${article.locale}/Articles/${article.slug}</Link>
    </body></html>`;

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
}));
