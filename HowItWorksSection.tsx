interface HowItWorksSectionProps {
  messages: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    cta: string;
    privacy: string;
  };
}

export default function HowItWorksSection({ messages }: HowItWorksSectionProps) {
  const icons = ['📝', '💑', '❤️'];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.title}</h1>
        <p className="text-xl text-gray-600">{messages.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {messages.steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="p-8 rounded-2xl h-full" style={{ backgroundColor: '#FAF7F2' }}>
              <div className="text-5xl mb-6">{icons[i]}</div>
              <div className="text-6xl font-bold mb-4 opacity-20" style={{ color: '#8B1A4A' }}>{step.number}</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {i < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <span className="text-3xl" style={{ color: '#C9A84C' }}>→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" 
          style={{ backgroundColor: '#8B1A4A20', color: '#8B1A4A' }}>
          🔒 {messages.privacy}
        </span>
      </div>

      <div className="text-center">
        <a
          href="#apply"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white transition-colors"
          style={{ backgroundColor: '#8B1A4A' }}
        >
          {messages.cta}
        </a>
      </div>
    </div>
  );
}
