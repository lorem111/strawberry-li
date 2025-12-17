interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams): Promise<{ success: boolean; id?: string; error?: string }> {
  // Mock email for v1 - just log to console
  console.log("[Mock Email] Would send to:", to);
  console.log("[Mock Email] Subject:", subject);
  return { success: true, id: "mock-" + Date.now() };
}

export const isMockEmail = true;
