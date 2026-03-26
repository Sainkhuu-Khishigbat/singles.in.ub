'use client';

import {useState} from 'react';

interface ApplySectionProps {
  messages: {
    title: string;
    subtitle: string;
    privacy: string;
    form: {
      name: string;
      email: string;
      phone: string;
      age: string;
      gender: string;
      genderOptions: {
        male: string;
        female: string;
        other: string;
      };
      occupation: string;
      about: string;
      lookingFor: string;
      submit: string;
      submitting: string;
      success: string;
    };
  };
}

export default function ApplySection({ messages }: ApplySectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center">
        <div className="p-12 rounded-2xl" style={{ backgroundColor: '#FAF7F2' }}>
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.form.success}</h2>
          <p className="text-gray-600">{messages.privacy}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{messages.subtitle}</p>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" 
          style={{ backgroundColor: '#8B1A4A20', color: '#8B1A4A' }}>
          🔒 {messages.privacy}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">{messages.form.name} *</label>
            <input type="text" required className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
              style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.name} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{messages.form.email} *</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
              style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.email} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">{messages.form.phone} *</label>
            <input type="tel" required className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
              style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.phone} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{messages.form.age} *</label>
            <input type="number" required min="18" max="80" 
              className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
              style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.age} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">{messages.form.gender} *</label>
            <select required className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose bg-white" 
              style={{ borderColor: '#e5e7eb' }}>
              <option value="">{messages.form.gender}</option>
              <option value="male">{messages.form.genderOptions.male}</option>
              <option value="female">{messages.form.genderOptions.female}</option>
              <option value="other">{messages.form.genderOptions.other}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{messages.form.occupation}</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
              style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.occupation} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{messages.form.about} *</label>
          <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
            style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.about} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{messages.form.lookingFor} *</label>
          <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-rose" 
            style={{ borderColor: '#e5e7eb' }} placeholder={messages.form.lookingFor} />
        </div>

        <button type="submit" disabled={loading} 
          className="w-full py-4 rounded-full font-semibold text-white transition-colors disabled:opacity-70"
          style={{ backgroundColor: '#8B1A4A' }}
        >{loading ? messages.form.submitting : messages.form.submit}</button>
      </form>
    </div>
  );
}
