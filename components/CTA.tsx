import React from 'react';
import Link from 'next/link';

const VoiceAssistCTA: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-[var(--accent)] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Reclaim your voice.
          </h2>
          <p className="mt-1 text-sm font-medium text-white/90 md:text-base">
            Experience the privacy-first, open-source intelligence.
          </p>
        </div>
        <a
          href="/download"
          download
          className="group flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-white/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-95"
          aria-label="Download Strawberry APK"
        >
          <span>Download APK</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default VoiceAssistCTA;