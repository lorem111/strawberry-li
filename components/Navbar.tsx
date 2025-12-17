"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Github } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'GitHub', href: 'https://github.com/lorem111/strawberry-voice' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--foreground)]/10 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image
              src="/logo.png"
              alt="Strawberry Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
              Strawberry
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium leading-6 text-[var(--foreground)]/70 transition-colors hover:text-[var(--foreground)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="/strawberry-voice-0.10.apk"
            download
            className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--background)] shadow-sm transition-transform hover:scale-105 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            Download APK
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--foreground)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2 border-b border-[var(--foreground)]/10 bg-[var(--background)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg py-2.5 text-base font-semibold leading-7 text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[var(--foreground)]/10">
              <a
                href="/strawberry-voice-0.10.apk"
                download
                className="block w-full rounded-lg bg-[var(--primary)] px-3.5 py-2.5 text-center text-sm font-semibold text-[var(--background)] shadow-sm hover:brightness-110"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download APK
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}