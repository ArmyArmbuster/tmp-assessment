/// region imports
const nodemailer = require('nodemailer');
/// endregion

exports.sendEmail = async (options) => {

  const transporter = nodemailer.createTransport({

    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {

      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const transporterOptions = {

    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_DEST,
    subject: options.subject,
    text: options.message,
    html: undefined,
  };

  await transporter.sendMail(transporterOptions);
};
