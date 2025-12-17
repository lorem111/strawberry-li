# Strawberry

An open-source AI voice assistant for Android with tool use capabilities, powered by the latest Gemini APIs.

## Quick Start

```bash
npm install
cp .env.example .env.local  # fill in values
npm run dev
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| OPENROUTER_API_KEY | Yes | Gemini API via OpenRouter (for design generation) |
| RESEND_API_KEY | No | Resend API key for transactional emails |
| DATABASE_PATH | No | SQLite database path (defaults to ./data/voiceassist.db) |

## Scripts

- `npm run dev` - development server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - run ESLint

## Project Structure

```
voiceassistant_site/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── subscribe/     # Newsletter subscription
│   ├── blog/              # Blog pages
│   ├── download/          # APK download page
│   └── success/           # Success confirmation page
├── components/            # React components
│   ├── Hero.tsx          # Landing hero section
│   ├── Features.tsx      # Features grid
│   ├── CTA.tsx           # Call-to-action banner
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer with newsletter
├── content/              # Markdown content
│   └── posts/            # Blog posts
├── lib/                  # Utility libraries
│   ├── blog.ts          # Blog post utilities
│   ├── db.ts            # SQLite database
│   ├── email.ts         # Resend email client
│   └── emails/          # Email templates
├── public/              # Static assets
│   ├── logo.svg         # App logo
│   └── favicon.svg      # Favicon
├── scripts/             # Build scripts
│   ├── gemini_bridge.py # Gemini API client
│   ├── init-db.ts       # Database initialization
│   └── preflight.ts     # Environment checker
└── types/               # TypeScript declarations
```

## Features

- Landing page with hero, features, and CTA sections
- Blog with markdown support and SEO optimization
- Newsletter subscription with email confirmation
- SQLite database for leads management
- Responsive design with Tailwind CSS
- Dark theme with custom brand colors

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: SQLite via sql.js
- **Email**: Resend
- **Design**: Gemini API via OpenRouter

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Manual

```bash
npm run build
npm run start
```

## Development

### Generating Design Assets

The `scripts/gemini_bridge.py` script uses the Gemini API to generate design assets:

```bash
# Generate text
python3 scripts/gemini_bridge.py "Your prompt" -t text

# Generate SVG
python3 scripts/gemini_bridge.py "Your prompt" -t svg -o output.svg

# Generate JSON
python3 scripts/gemini_bridge.py "Your prompt" -t json
```

### Database

The project uses SQLite for storing leads and user data. The database is automatically created on first access.

Tables:
- `users` - User accounts
- `leads` - Newsletter subscribers
- `purchases` - Purchase records (for future monetization)

## License

MIT License - see LICENSE file for details.
