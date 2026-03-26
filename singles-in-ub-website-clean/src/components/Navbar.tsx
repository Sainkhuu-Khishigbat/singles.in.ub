'use client';

import {useState} from 'react';

interface NavbarProps {
  locale: 'mn' | 'en';
  setLocale: (locale: 'mn' | 'en') => void;
  messages: {
    home: string;
    about: string;
    howItWorks: string;
    events: string;
    apply: string;
    contact: string;
  };
}

export default function Navbar({ locale, setLocale, messages }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: messages.home },
    { href: '#about', label: messages.about },
    { href: '#how-it-works', label: messages.howItWorks },
    { href: '#events', label: messages.events },
    { href: '#contact', label: messages.contact },
  ];

  const otherLocale = locale === 'mn' ? 'en' : 'mn';

  return (
    <nav className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold" style={{ color: '#8B1A4A' }}>
          Singles.in.UB
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium transition-colors hover:text-rose"
              style={{ color: '#333' }}
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="#apply"
            className="px-6 py-2 rounded-full font-semibold text-white transition-colors"
            style={{ backgroundColor: '#8B1A4A' }}
          >
            {messages.apply}
          </a>

          <button
            onClick={() => setLocale(otherLocale)}
            className="px-3 py-1 rounded-full text-sm font-medium border-2"
            style={{ borderColor: '#8B1A4A', color: '#8B1A4A' }}
          >
            {otherLocale.toUpperCase()}
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 shadow-lg" style={{ backgroundColor: '#FAF7F2' }}>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium py-2"
                style={{ color: '#333' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="#apply"
              className="px-6 py-3 rounded-full font-semibold text-white text-center"
              style={{ backgroundColor: '#8B1A4A' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {messages.apply}
            </a>

            <button
              onClick={() => {
                setLocale(otherLocale);
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-full text-sm font-medium border-2 text-center"
              style={{ borderColor: '#8B1A4A', color: '#8B1A4A' }}
            >
              {locale === 'mn' ? 'Switch to English' : 'Монгол хэл рүү шилжих'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
