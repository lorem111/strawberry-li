import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Strawberry - Free Android Voice Assistant",
  description: "Download Strawberry, the open-source AI voice assistant for Android. Powered by Gemini APIs with tool use capabilities.",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="border-b border-[var(--muted)]/10 px-6 py-4">
        <Link href="/" className="text-[var(--foreground)] font-semibold hover:text-[var(--primary)]">
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--muted)]/30 bg-[var(--muted)]/10 mb-6">
            <span className="text-xs font-medium text-[var(--muted)]">v0.11b • Android 8.0+</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
            Download Strawberry
          </h1>

          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
            The open-source AI voice assistant that uses Gemini APIs for intelligent conversations and tool execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/strawberry-voice-0.11b.apk"
              download
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0225 3.503c-1.766-.8077-3.7296-1.2585-5.8016-1.2585-2.072 0-4.0356.4508-5.8017 1.2585l-2.0224-3.503a.417.417 0 00-.5677-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h22.665c-.3432-4.1021-2.6889-7.5743-4.7835-9.4396" />
              </svg>
              Download APK
            </a>

            <a
              href="https://github.com/lorem111/strawberry-voice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[var(--muted)]/40 text-[var(--foreground)] rounded-full font-semibold hover:bg-[var(--foreground)]/5 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Build from Source
            </a>
          </div>
        </div>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-[var(--secondary)] border border-[var(--muted)]/10">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Android Version</h3>
              <p className="text-[var(--muted)]">Android 8.0 (Oreo) or higher</p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--secondary)] border border-[var(--muted)]/10">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Gemini API Key</h3>
              <p className="text-[var(--muted)]">Free API key from Google AI Studio</p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--secondary)] border border-[var(--muted)]/10">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Storage</h3>
              <p className="text-[var(--muted)]">~50MB free space</p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--secondary)] border border-[var(--muted)]/10">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Permissions</h3>
              <p className="text-[var(--muted)]">Microphone, Internet, Storage</p>
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Installation</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] text-[var(--background)] flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Download the APK</h3>
                <p className="text-[var(--muted)]">Click the download button above to get the latest version from GitHub releases.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] text-[var(--background)] flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Enable Unknown Sources</h3>
                <p className="text-[var(--muted)]">Go to Settings → Security → Enable &quot;Install unknown apps&quot; for your browser.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] text-[var(--background)] flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Install the APK</h3>
                <p className="text-[var(--muted)]">Open the downloaded file and tap Install.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] text-[var(--background)] flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Add Your API Key</h3>
                <p className="text-[var(--muted)]">Get a free Gemini API key from <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Google AI Studio</a> and enter it in the app.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">What&apos;s Included</h2>
          <ul className="space-y-3">
            {[
              "Voice-activated AI assistant powered by Gemini 3",
              "Tool use capabilities (web search, app control, file management)",
              "Privacy-first: your API key stays on your device",
              "Customizable wake words and voice settings",
              "Open source - view and modify the code",
              "No subscription required - use your own API key",
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--muted)]">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
