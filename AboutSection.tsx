interface AboutSectionProps {
  messages: {
    title: string;
    subtitle: string;
    story: string;
    mission: {
      title: string;
      text: string;
    };
    values: {
      title: string;
      items: Array<{
        title: string;
        desc: string;
      }>;
    };
    team: {
      title: string;
      members: Array<{
        name: string;
        role: string;
        bio: string;
      }>;
    };
  };
}

export default function AboutSection({ messages }: AboutSectionProps) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.title}</h1>
        <p className="text-xl text-gray-600">{messages.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{messages.story}</p>
        </div>
        <div className="order-1 md:order-2 relative h-80 rounded-2xl overflow-hidden" style={{ backgroundColor: '#FAF7F2' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">💕</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FAF7F2' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#8B1A4A' }}>{messages.mission.title}</h3>
          <p className="text-gray-600">{messages.mission.text}</p>
        </div>
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#8B1A4A' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#C9A84C' }}>{messages.values.title}</h3>
          <div className="space-y-4">
            {messages.values.items.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-12" style={{ color: '#8B1A4A' }}>{messages.team.title}</h2>
        <div className="flex justify-center">
          <div className="p-8 rounded-2xl max-w-sm" style={{ backgroundColor: '#FAF7F2' }}>
            <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl" style={{ backgroundColor: '#8B1A4A' }}>👤</div>
            <h3 className="text-xl font-bold" style={{ color: '#8B1A4A' }}>{messages.team.members[0].name}</h3>
            <p className="font-medium mb-2" style={{ color: '#C9A84C' }}>{messages.team.members[0].role}</p>
            <p className="text-gray-600 text-sm">{messages.team.members[0].bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
