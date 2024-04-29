module.exports = ({ env }) => ({
    email: {
      config:{
        provider: 'nodemailer',
        providerOptions: {
          host: "smtp-relay.brevo.com",
          secure:false,
          port: 587,
          auth: {
            user: "education24to7@gmail.com",
            pass: "xsmtpsib-8798ee1f692ae1d2410e01b3d6d775be8c5085e0516dd226e33772a1788da7f4-NnYUXVW9C4kwbqBO"//env('BREVO_API_KEY'),
          },          
        },
        settings: {
          defaultFrom: env('EMAIL_ADDRESS_FROM'),
          defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
         
        },
      }
    },
  });

// module.exports = ({ env }) => ({
// email: {
//     config: {
//       provider: 'strapi-provider-email-brevo',
//       providerOptions: {
//         apiKey: 'oqqa gbtu zfcq ollj',
//       },
//       settings: {
//         defaultSenderEmail: 'education24to7@gmail.com',
//         // defaultSenderName: 'Sender Name',
//         defaultReplyTo: 'education24to7@gmail.com',
//       },
//     },
//   }
// })