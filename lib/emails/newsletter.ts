export function newsletterEmail(): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for Subscribing - VoiceAssist</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050507; font-family: system-ui, -apple-system, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #050507; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px;">
          <tr>
            <td style="background-color: #171717; padding: 40px; border-radius: 16px; border: 1px solid rgba(115,115,115,0.2);">
              <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #DC2626, #FB7185); border-radius: 12px; margin-bottom: 24px;"></div>
              <h1 style="color: #FAFAFA; font-size: 24px; font-weight: bold; margin: 0 0 16px 0;">
                You're Subscribed!
              </h1>
              <p style="color: #737373; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                Thanks for subscribing to Strawberry updates. You'll be the first to know about:
              </p>
              <ul style="color: #FAFAFA; font-size: 14px; line-height: 1.8; margin: 0 0 24px 0; padding-left: 20px;">
                <li>New feature releases</li>
                <li>Gemini API integrations</li>
                <li>Community contributions</li>
                <li>Development updates</li>
              </ul>
              <a href="https://github.com/lorem111/strawberry-voice/releases"
                 style="display: inline-block; background-color: #DC2626; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Download the App
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px; text-align: center;">
              <p style="color: #737373; font-size: 12px; margin: 0;">
                Strawberry - Open Source Voice AI for Android
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
