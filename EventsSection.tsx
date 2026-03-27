interface EventsSectionProps {
  messages: {
    title: string;
    subtitle: string;
    upcoming: {
      title: string;
      events: Array<{
        title: string;
        date: string;
        time: string;
        location: string;
        spots: string;
        price: string;
      }>;
    };
    past: {
      title: string;
    };
    cta: string;
  };
}

export default function EventsSection({ messages }: EventsSectionProps) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.title}</h1>
        <p className="text-xl text-gray-600">{messages.subtitle}</p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#8B1A4A' }}>{messages.upcoming.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {messages.upcoming.events.map((event, index) => (
            <div key={index} className="p-8 rounded-2xl border-2 transition-shadow hover:shadow-lg" 
              style={{ backgroundColor: 'white', borderColor: '#FAF7F2' }}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold" style={{ color: '#8B1A4A' }}>{event.title}</h3>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" 
                  style={{ backgroundColor: '#C9A84C20', color: '#C9A84C' }}>{event.price}</span>
              </div>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">📅 <span className="ml-2">{event.date}</span></div>
                <div className="flex items-center">🕐 <span className="ml-2">{event.time}</span></div>
                <div className="flex items-center">📍 <span className="ml-2">{event.location}</span></div>
                <div className="flex items-center">🎫 <span className="ml-2">{event.spots}</span></div>
              </div>
              
              <button className="mt-8 w-full py-3 rounded-full font-semibold text-white transition-colors"
                style={{ backgroundColor: '#8B1A4A' }}>{messages.cta}</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#8B1A4A' }}>{messages.past.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="aspect-square rounded-2xl overflow-hidden relative" 
              style={{ backgroundColor: 'white' }}>
              <div className="absolute inset-0 flex items-center justify-center text-4xl">📸</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
