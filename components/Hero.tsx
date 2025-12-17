import React from 'react';
import Image from 'next/image';

const VoiceAssistHero: React.FC = () => {
  return (
    <div 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans"
      style={{
        '--primary': '#3B82F6',
        '--accent': '#A855F7',
        '--background': '#050507',
        '--foreground': '#FAFAFA',
        '--muted': '#737373',
      } as React.CSSProperties}
    >
      {/* Background & Ambient Glow */}
      <div className="absolute inset-0 bg-[var(--background)] z-0" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--primary)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[var(--accent)] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--muted) 1px, transparent 1px), linear-gradient(to bottom, var(--muted) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Phone Mockup */}
      <div
        className="absolute right-[-10%] lg:right-[2%] top-1/2 -translate-y-1/2 w-[350px] md:w-[420px] lg:w-[500px] opacity-15 lg:opacity-25 pointer-events-none hidden sm:block"
        style={{
          perspective: '1000px',
        }}
      >
        <div
          style={{
            transform: 'rotateY(-15deg) rotateX(5deg) rotateZ(2deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <Image
            src="/demo-screen.png"
            alt="Strawberry App Demo"
            width={380}
            height={820}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col items-center text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--muted)]/30 bg-[var(--muted)]/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-[var(--foreground)] opacity-80 uppercase">v1.0 Now Available</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[var(--foreground)] leading-[1.1]">
          Intelligent Voice, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
            Powered by Gemini
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed font-light">
          The open-source Android assistant that actually does things. 
          Leverage advanced tool execution and Gemini APIs for a truly agentic voice experience.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto pt-4 justify-center">
          <a href="/strawberry-voice-0.10.apk" download className="group relative px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_var(--primary)] flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0225 3.503c-1.766-.8077-3.7296-1.2585-5.8016-1.2585-2.072 0-4.0356.4508-5.8017 1.2585l-2.0224-3.503a.417.417 0 00-.5677-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h22.665c-.3432-4.1021-2.6889-7.5743-4.7835-9.4396" />
            </svg>
            Download APK
          </a>

          <a
            href="https://github.com/lorem111/strawberry-voice"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-[var(--muted)]/40 text-[var(--foreground)] font-medium text-sm transition-all hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/50 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>

          <a
            href="https://discord.gg/EfDjdZCF"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full bg-[#5865F2] text-white font-semibold text-sm transition-all hover:scale-105 hover:brightness-110 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Discord
          </a>
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-12 flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase border-b border-transparent hover:border-[var(--primary)] hover:text-[var(--primary)] cursor-default transition-colors">Google Gemini API</span>
          <span className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase border-b border-transparent hover:border-[var(--primary)] hover:text-[var(--primary)] cursor-default transition-colors">Android Native</span>
          <span className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase border-b border-transparent hover:border-[var(--primary)] hover:text-[var(--primary)] cursor-default transition-colors">Tool Calling</span>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistHero;