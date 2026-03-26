'use client';

import {useState} from 'react';

interface ContactSectionProps {
  messages: {
    title: string;
    subtitle: string;
    info: {
      email: { label: string; value: string };
      phone: { label: string; value: string };
      address: { label: string; value: string };
    };
    social: {
      title: string;
      follow: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
  };
}

export default function ContactSection({ messages }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.title}</h1>
        <p className="text-xl text-gray-600">{messages.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#8B1A4A' }}>
                <span className="text-xl">📧</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{messages.info.email.label}</h3>
                <p className="text-gray-600">{messages.info.email.value}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#8B1A4A' }}>
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{messages.info.phone.label}</h3>
                <p className="text-gray-600">{messages.info.phone.value}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#8B1A4A' }}>
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{messages.info.address.label}</h3>
                <p className="text-gray-600">{messages.info.address.value}</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#8B1A4A' }}>{messages.social.title}</h3>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'TikTok'].map((platform) => (
                <a key={platform} href="#" className="px-6 py-3 rounded-full font-medium transition-colors"
                  style={{ backgroundColor: '#FAF7F2', color: '#8B1A4A' }}
                >{platform}</a>
              ))}
            </div>
          </div>

          <div className="mt-12 h-64 rounded-2xl overflow-hidden relative" style={{ backgroundColor: '#FAF7F2' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Ulaanbaatar, Mongolia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FAF7F2' }}>
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#8B1A4A' }}>{messages.form.success}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{messages.form.name}</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
                  style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.name} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{messages.form.email}</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
                  style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.email} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{messages.form.message}</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
                  style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.message} />
              </div>

              <button type="submit" className="w-full py-4 rounded-full font-semibold text-white transition-colors"
                style={{ backgroundColor: '#8B1A4A' }}
              >{messages.form.submit}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
