import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
          You&apos;re All Set!
        </h1>

        <p className="text-[var(--muted)] mb-8">
          Thank you for subscribing to Strawberry updates. We&apos;ll keep you informed about new features and releases.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full px-6 py-3 bg-[var(--primary)] text-[var(--background)] rounded-full font-semibold hover:brightness-110 transition-all"
          >
            Back to Home
          </Link>

          <a
            href="https://github.com/lorem111/strawberry-voice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full px-6 py-3 border border-[var(--muted)]/30 text-[var(--foreground)] rounded-full font-semibold hover:bg-[var(--foreground)]/5 transition-all"
          >
            Star us on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
