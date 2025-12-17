import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Strawberry - Open Source AI Voice Assistant",
    template: "%s | Strawberry",
  },
  description: "An open-source voice assistant with tool use, powered by the latest Gemini APIs. Build voice-controlled Android apps with AI capabilities.",
  keywords: ["voice assistant", "android", "ai", "gemini", "open source", "voice control", "tool use", "strawberry"],
  authors: [{ name: "Strawberry Team" }],
  creator: "Strawberry",
  metadataBase: new URL("https://strawberry.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strawberry.app",
    siteName: "Strawberry",
    title: "Strawberry - Open Source AI Voice Assistant",
    description: "An open-source voice assistant with tool use, powered by the latest Gemini APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strawberry - Open Source AI Voice Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strawberry - Open Source AI Voice Assistant",
    description: "An open-source voice assistant with tool use, powered by the latest Gemini APIs.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
