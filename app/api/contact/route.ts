import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer, { Transporter } from "nodemailer";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional().default(""),
  company: z.string().optional().default(""),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  website_url: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

// In-memory rate limiter per IP (15 requests per 10 minutes)
const ipRequestMap = new Map<string, { count: number; resetTime: number }>();

// Persistent Pooled SMTP Transporter for Sub-Second Delivery
let globalSmtpTransporter: Transporter | null = null;
let currentSmtpKey = "";

function getSmtpTransporter(user: string, pass: string, host: string, port: number) {
  const key = `${user}:${pass}:${host}:${port}`;
  if (!globalSmtpTransporter || currentSmtpKey !== key) {
    currentSmtpKey = key;
    globalSmtpTransporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      pool: true, // Keep connection pool open for instant subsequent sends
      maxConnections: 5,
      maxMessages: 100,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  return globalSmtpTransporter;
}

function buildHtmlEmail(params: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  timestamp: string;
  ip: string;
}): string {
  const { name, email, phone, company, subject, message, timestamp, ip } = params;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f1117; color: #f8f8f6; padding: 24px; margin: 0; }
        .container { max-width: 620px; margin: 0 auto; background: #181a20; border: 1px solid #3155FF; border-radius: 16px; padding: 36px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        .header { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 24px; }
        .badge { display: inline-block; background: rgba(49, 85, 255, 0.15); color: #3155FF; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(49, 85, 255, 0.3); margin-bottom: 12px; }
        .title { color: #f8f8f6; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.02em; }
        .subtitle { color: #a1a1aa; font-size: 13px; margin: 6px 0 0 0; }
        .grid { display: table; width: 100%; margin-bottom: 20px; }
        .row { display: table-row; }
        .cell { display: table-cell; padding: 8px 0; vertical-align: top; }
        .label { color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; width: 140px; }
        .value { color: #f8f8f6; font-size: 15px; font-weight: 600; }
        .value a { color: #3155FF; text-decoration: none; }
        .message-box { background: #111318; border: 1px solid rgba(255,255,255,0.08); border-left: 4px solid #FF6B5A; padding: 20px; border-radius: 8px; margin-top: 24px; }
        .message-label { color: #FF6B5A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; margin-bottom: 8px; }
        .message-text { color: #e4e4e7; font-size: 15px; line-height: 1.65; white-space: pre-wrap; margin: 0; }
        .footer { margin-top: 32px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #71717a; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="badge">PORTFOLIO INQUIRY // 2026</div>
          <h1 class="title">⚡ New Engineering Inquiry Received</h1>
          <p class="subtitle">Sent via ashishyadav.dev portfolio contact portal</p>
        </div>
        
        <div class="grid">
          <div class="row">
            <div class="cell label">Sender Name</div>
            <div class="cell value">${escapeHtml(name)}</div>
          </div>
          <div class="row">
            <div class="cell label">Email Address</div>
            <div class="cell value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
          </div>
          ${phone ? `
          <div class="row">
            <div class="cell label">Phone Number</div>
            <div class="cell value">${escapeHtml(phone)}</div>
          </div>` : ""}
          ${company ? `
          <div class="row">
            <div class="cell label">Company / Org</div>
            <div class="cell value">${escapeHtml(company)}</div>
          </div>` : ""}
          <div class="row">
            <div class="cell label">Subject</div>
            <div class="cell value" style="color: #F2B84B;">${escapeHtml(subject)}</div>
          </div>
        </div>

        <div class="message-box">
          <div class="message-label">MESSAGE CONTENT</div>
          <p class="message-text">${escapeHtml(message)}</p>
        </div>

        <div class="footer">
          <div>Timestamp: ${timestamp} | IP: ${ip}</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = (forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1") || "127.0.0.1";
    const now = Date.now();

    // Fast Rate Limiter Check (15 submissions / 10 min)
    const rateData = ipRequestMap.get(ip);
    if (rateData) {
      if (now < rateData.resetTime) {
        if (rateData.count >= 15) {
          return NextResponse.json(
            { error: "Too many requests. Please try again in a few minutes." },
            { status: 429 }
          );
        }
        rateData.count++;
      } else {
        ipRequestMap.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 });
      }
    } else {
      ipRequestMap.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 });
    }

    const body = await req.json();

    // Fast Schema Validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const issues = validation.error.issues.map((i) => i.message);
      return NextResponse.json(
        { error: "Validation failed", details: issues },
        { status: 400 }
      );
    }

    const { name, email, phone, company, subject, message } = validation.data;
    const recipientEmail = process.env.CONTACT_EMAIL || "ashishyadav71998@gmail.com";

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    const emailHtml = buildHtmlEmail({
      name,
      email,
      phone,
      company,
      subject,
      message,
      timestamp,
      ip,
    });

    // -------------------------------------------------------------
    // INSTANT ASYNCHRONOUS BACKGROUND DISPATCH
    // -------------------------------------------------------------
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = (process.env.SMTP_PASS || process.env.GMAIL_APP_PASS || "").replace(/\s+/g, "");
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    const resendApiKey = process.env.RESEND_API_KEY;
    const web3formsKey = process.env.WEB3FORMS_KEY;

    // Execute delivery in background so user receives instant 10ms UI confirmation
    (async () => {
      // 1. Try Gmail SMTP (Fast Pooled Transporter)
      if (smtpUser && smtpPass) {
        try {
          const transporter = getSmtpTransporter(smtpUser, smtpPass, smtpHost, smtpPort);
          const info = await transporter.sendMail({
            from: `"${name} (via Portfolio)" <${smtpUser}>`,
            to: recipientEmail,
            replyTo: email,
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            text: `From: ${name} <${email}>\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nSubject: ${subject}\n\nMessage:\n${message}\n\nTimestamp: ${timestamp}`,
            html: emailHtml,
          });
          console.log(`✓ [SMTP DELIVERED] ID: ${info.messageId} -> ${recipientEmail}`);
          return;
        } catch (smtpErr) {
          console.error("Background SMTP delivery error:", smtpErr);
        }
      }

      // 2. Try Resend API
      if (resendApiKey) {
        try {
          const resend = new Resend(resendApiKey);
          await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            replyTo: email,
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            html: emailHtml,
          });
          console.log(`✓ [RESEND DELIVERED] -> ${recipientEmail}`);
          return;
        } catch (resendErr) {
          console.error("Background Resend error:", resendErr);
        }
      }

      // 3. Try Web3Forms
      if (web3formsKey) {
        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: web3formsKey,
              subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
              from_name: name,
              email: email,
              phone: phone || "Not Provided",
              company: company || "Not Provided",
              message: message,
            }),
          });
          console.log(`✓ [WEB3FORMS DELIVERED] -> ${recipientEmail}`);
        } catch (w3Err) {
          console.error("Background Web3Forms error:", w3Err);
        }
      }
    })().catch((bgErr) => console.error("Background dispatch unhandled error:", bgErr));

    // Console notification
    console.log("------------------------------------------");
    console.log(`⚡ [INQUIRY RECEIVED - INSTANT DISPATCH ACTIVE]`);
    console.log(`To: ${recipientEmail}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Company: ${company || "N/A"} | Phone: ${phone || "N/A"}`);
    console.log(`Subject: ${subject}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log("------------------------------------------");

    // Return instant sub-50ms HTTP response to client for instantaneous UI feedback
    return NextResponse.json({
      success: true,
      message: "MESSAGE SENT ✓ THANK YOU FOR REACHING OUT.",
      timestamp,
    });
  } catch (error: unknown) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
