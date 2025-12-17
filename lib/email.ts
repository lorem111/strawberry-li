import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams): Promise<{ success: boolean; id?: string; error?: string }> {
  if (!resend) {
    console.log("[Mock Email] Would send to:", to);
    console.log("[Mock Email] Subject:", subject);
    return { success: true, id: "mock-" + Date.now() };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Strawberry <noreply@strawberry.app>",
      to,
      subject,
      html,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}

export const isMockEmail = !resend;
