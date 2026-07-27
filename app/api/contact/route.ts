import nodemailer from "nodemailer";

import { PROFILE } from "@/common/constants/profile";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** Honeypot — real users never fill this. */
  website?: string;
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = payload.subject?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  // Silently accept honeypot submissions so bots do not learn they failed.
  if (payload.website) return Response.json({ success: true });

  if (!name || !message || !isEmail(email)) {
    return Response.json(
      { message: "Name, a valid email, and a message are required." },
      { status: 400 },
    );
  }

  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;

  if (!user || !pass) {
    return Response.json(
      {
        message:
          "Email delivery is not configured on the server. Please email me directly.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const mailSubject = subject || `New message from ${name}`;

  try {
    await transporter.sendMail({
      from: `"${name} (portfolio)" <${user}>`,
      to: process.env.MAIL_TO ?? PROFILE.email,
      replyTo: `"${name}" <${email}>`,
      subject: mailSubject,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(mailSubject)}</p>
        <hr />
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { message: "Failed to send the message. Please try again later." },
      { status: 500 },
    );
  }
}
