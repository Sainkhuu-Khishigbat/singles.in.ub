interface SocialProofProps {
  messages: {
    title: string;
    testimonials: Array<{
      quote: string;
      author: string;
      role: string;
    }>;
  };
}

export default function SocialProof({ messages }: SocialProofProps) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#8B1A4A' }}>
            {messages.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {messages.testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl transition-shadow hover:shadow-lg"
              style={{ backgroundColor: 'white' }}
            >
              <div className="text-4xl mb-6">💬</div>
              <blockquote className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4" 
                  style={{ backgroundColor: '#8B1A4A' }}
                >
                  👤
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#8B1A4A' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
