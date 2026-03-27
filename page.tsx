'use client';

import {useState} from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import EventsSection from '@/components/EventsSection';
import ApplySection from '@/components/ApplySection';
import ContactSection from '@/components/ContactSection';
import mnMessages from '../../messages/mn.json';
import enMessages from '../../messages/en.json';

const messagesMap = {
  mn: mnMessages,
  en: enMessages,
};

export default function HomePage() {
  const [locale, setLocale] = useState<'mn' | 'en'>('mn');
  const messages = messagesMap[locale];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} setLocale={setLocale} messages={messages.nav} />
      <main className="flex-grow">
        <section id="home">
          <Hero messages={messages.hero} />
        </section>
        
        <SocialProof messages={messages.socialProof} />
        
        <section id="about">
          <AboutSection messages={messages.about} />
        </section>
        
        <section id="how-it-works">
          <HowItWorksSection messages={messages.howItWorks} />
        </section>
        
        <section id="events">
          <EventsSection messages={messages.events} />
        </section>
        
        <section id="apply">
          <ApplySection messages={messages.apply} />
        </section>
        
        <section id="contact">
          <ContactSection messages={messages.contact} />
        </section>
      </main>
      <Footer messages={messages.footer} />
    </div>
  );
}
