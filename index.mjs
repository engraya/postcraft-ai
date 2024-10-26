import { MailtrapClient } from "mailtrap";

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "f2e4bf7525e8ddb98b180db3a3bc7b2f";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "ahmadyakubuaya@gmail.com";

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to Postcraft-AI Sending!",
  })
  .then(console.log)
  .catch(console.error);