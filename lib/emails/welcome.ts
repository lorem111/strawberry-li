export function welcomeEmail(name?: string): string {
  const greeting = name ? `Hi ${name}` : "Hi there";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to VoiceAssist</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050507; font-family: system-ui, -apple-system, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #050507; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px;">
          <tr>
            <td style="background: linear-gradient(135deg, #DC2626, #FB7185); padding: 40px; border-radius: 16px;">
              <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; margin: 0 0 16px 0;">
                ${greeting}!
              </h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                Welcome to Strawberry - the open-source AI voice assistant powered by Gemini.
              </p>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                You're now part of a community building the future of voice AI. We'll keep you updated on new features, releases, and ways to contribute.
              </p>
              <a href="https://github.com/lorem111/strawberry-voice"
                 style="display: inline-block; background-color: #ffffff; color: #050507; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                View on GitHub
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px; text-align: center;">
              <p style="color: #737373; font-size: 12px; margin: 0;">
                Strawberry - Open Source Voice AI
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
