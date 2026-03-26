interface HeroProps {
  messages: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
    stats: {
      events: string;
      people: string;
      marriages: string;
    };
  };
}

export default function Hero({ messages }: HeroProps) {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">💕</div>
        <div className="absolute top-40 right-20 text-4xl">❤️</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">💝</div>
        <div className="absolute top-1/2 right-10 text-3xl">💘</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" 
            style={{ backgroundColor: '#8B1A4A20', color: '#8B1A4A' }}>
            🔒 {messages.badge}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6" 
          style={{ color: '#8B1A4A' }}
        >
          {messages.title}
        </h1>

        <p className="text-xl md:text-2xl text-center text-gray-600 max-w-3xl mx-auto mb-10">
          {messages.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#apply"
            className="px-8 py-4 rounded-full font-semibold text-white text-center text-lg transition-colors"
            style={{ backgroundColor: '#8B1A4A' }}
          >
            {messages.ctaPrimary}
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-full font-semibold text-center text-lg transition-colors border-2"
            style={{ borderColor: '#8B1A4A', color: '#8B1A4A' }}
          >
            {messages.ctaSecondary}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {['events', 'people', 'marriages'].map((key) => (
            <div key={key} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#8B1A4A' }}>
                {messages.stats[key as keyof typeof messages.stats].split(' ')[0]}
              </p>
              <p className="text-sm text-gray-600">
                {messages.stats[key as keyof typeof messages.stats].split(' ').slice(1).join(' ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
