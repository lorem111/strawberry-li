"use client";

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="w-full bg-[var(--secondary)] text-[var(--foreground)] border-t border-[var(--muted)]/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & License */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[var(--primary)] rounded-full" />
              <span className="text-xl font-bold tracking-tight">Strawberry</span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              Architecting the next generation of open-source voice interfaces. Minimal latency, maximum privacy.
            </p>
            <div className="inline-flex items-center px-2.5 py-1 rounded border border-[var(--muted)]/20 bg-[var(--muted)]/5 w-fit">
              <span className="text-[10px] font-medium tracking-wider uppercase text-[var(--muted)]">MIT License</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">Platform</h4>
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium hover:text-[var(--primary)] transition-colors duration-200 w-fit">Features</a>
              <a href="/download" className="text-sm font-medium hover:text-[var(--primary)] transition-colors duration-200 w-fit">Download</a>
              <a href="https://github.com/lorem111/strawberry-voice" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[var(--primary)] transition-colors duration-200 w-fit">GitHub</a>
              <a href="/blog" className="text-sm font-medium hover:text-[var(--primary)] transition-colors duration-200 w-fit">Blog</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">Stay Updated</h4>
            {status === 'success' ? (
              <p className="text-sm text-green-400">Thanks for subscribing!</p>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@domain.com"
                  className="w-full bg-transparent border border-[var(--muted)]/20 rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/40 focus:outline-none focus:border-[var(--primary)] transition-all"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[var(--foreground)] text-[var(--secondary)] hover:bg-[var(--primary)] font-semibold text-sm px-4 py-2.5 rounded-md transition-colors duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-red-400">Something went wrong. Try again.</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--muted)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--muted)]">
          <span>&copy; {currentYear} Strawberry. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;