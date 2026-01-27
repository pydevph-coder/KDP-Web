import nodemailer from 'nodemailer';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.FROM_EMAIL || smtpUser;

if (!smtpHost || !smtpUser || !smtpPass) {
  console.warn(
    'SMTP configuration missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and FROM_EMAIL in your environment.',
  );
}

export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export async function sendNewsletterEmail(options: {
  to: string[];
  subject: string;
  html: string;
  attachments?: { path: string; filename: string }[];
}) {
  const { to, subject, html, attachments } = options;

  const mailOptions: nodemailer.SendMailOptions = {
    from: fromEmail,
    bcc: to,
    subject,
    html,
  };

  if (attachments && attachments.length > 0) {
    mailOptions.attachments = attachments.map((att) => ({
      filename: att.filename,
      path: att.path,
    }));
  }

  await transporter.sendMail(mailOptions);
}


