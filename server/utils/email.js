const Email = require('email-templates');
const nodemailer = require('nodemailer');
const path = require('path');

// 1. Configure the SMTP Transporter (Hostinger)
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 465,
//   secure: true, // true for 465, false for other ports
  auth: {
    user: 'cbea18942c9e61', // Your PRIMARY login
    pass: '4ae9148caa553e',
  },
});

// 2. Initialize the Email Client
const emailClient = new Email({
  message: {
    from: '"Rebeca Support" <support@rebeca.in>'
  },
  send: true, // Set to true to actually send emails
  transport: transporter,
  views: {
    root: path.resolve('emails'), // Folder where your Pug templates live
    options: { extension: 'pug' }
  },
  // This ensures CSS works in Gmail
  juiceResources: {
    preserveImportant: true,
    webResources: { relativeTo: path.resolve('emails') }
  }
});

/**
 * Reusable send function
 * @param {string} template - The folder name (e.g., 'event-registration')
 * @param {string} to - Recipient email
 * @param {object} locals - Variables for the Pug template (name, eventName, etc.)
 */
const sendEmail = async (template, to, locals) => {
  try {
    await emailClient.send({
      template: template,
      message: { to: to },
      locals: locals,
    });
    console.log(`Email [${template}] sent successfully to ${to}`);
  } catch (error) {
    console.error(`Error sending [${template}] email:`, error);
    throw error; // Rethrow to handle it in the route
  }
};

module.exports = sendEmail ;