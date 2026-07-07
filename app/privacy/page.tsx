import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Strawberry Voice Assistant",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="border-b border-[var(--muted)]/10 px-6 py-4">
        <Link href="/" className="text-[var(--foreground)] font-semibold hover:text-[var(--primary)]">
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">Privacy Policy</h1>
        <p className="text-[var(--muted)] mb-12">Last updated: December 18, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[var(--foreground)]/90">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Introduction</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Strawberry (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is an open-source voice assistant for Android.
              This Privacy Policy explains how we handle your information when you use our application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Information We Collect</h2>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-2">Account Information</h3>
            <p className="text-[var(--muted)] leading-relaxed">
              When you sign in with Google, we receive and store your basic profile information including:
            </p>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-2 mt-2">
              <li>Email address</li>
              <li>Display name</li>
              <li>Profile picture</li>
            </ul>
            <p className="text-[var(--muted)] leading-relaxed mt-2">
              This information is used to identify your account and provide personalized service.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-2">Voice Data</h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Strawberry uses your device&apos;s microphone to capture voice input when you interact with the assistant.
              This voice data is processed to convert your speech to text and respond to your requests.
              We do not store or retain the content of your conversations.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-2">API Key</h3>
            <p className="text-[var(--muted)] leading-relaxed">
              You provide your own Google Gemini API key to use the app. This key is stored locally on your device
              and is never transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">How We Use Your Information</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Voice input is sent directly to the Google Gemini API using your personal API key to process
              your requests and generate responses. We do not store, log, or retain your voice data or
              conversation history on any servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Third-Party Services</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Strawberry uses the Google Gemini API to process voice requests. When you use the app, your
              voice input is sent to Google&apos;s servers for processing. Please review{" "}
              <a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                Google&apos;s AI Terms of Service
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                Privacy Policy
              </a>{" "}
              for information on how Google handles your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Data Storage</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              All app settings and your API key are stored locally on your device. Conversation history may
              be stored locally on your device for your convenience and can be deleted at any time through the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Usage Logging</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We collect limited, anonymized logging information to prevent abuse and monitor app stability.
              This may include:
            </p>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-2 mt-4">
              <li>API usage metrics (e.g., token/credit consumption)</li>
              <li>Error reports and crash data</li>
              <li>General usage patterns (non-personally identifiable)</li>
            </ul>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              This data does not include the content of your conversations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Permissions</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Strawberry requires the following permissions:
            </p>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
              <li><strong className="text-[var(--foreground)]">Microphone:</strong> Required to capture voice input for the voice assistant functionality</li>
              <li><strong className="text-[var(--foreground)]">Internet:</strong> Required to communicate with the Google Gemini API</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Children&apos;s Privacy</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Strawberry is not directed at children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you are a parent or guardian and believe
              your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Open Source</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Strawberry is open-source software released under the MIT License. You can review our source
              code on{" "}
              <a href="https://github.com/lorem111/strawberry-voice" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                GitHub
              </a>{" "}
              to verify our privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Changes to This Policy</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Contact Us</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              If you have any questions about this Privacy Policy, please reach out via our{" "}
              <a href="https://discord.gg/WFVZnBMzdc" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                Discord server
              </a>{" "}
              or open an issue on{" "}
              <a href="https://github.com/lorem111/strawberry-voice" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                GitHub
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
