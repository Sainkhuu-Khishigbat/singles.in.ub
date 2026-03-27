interface FooterProps {
  messages: {
    tagline: string;
    links: {
      company: string;
      legal: string;
      connect: string;
    };
    copyright: string;
  };
}

export default function Footer({ messages }: FooterProps) {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#8B1A4A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold mb-4 block" style={{ color: '#C9A84C' }}>
              Singles.in.UB
            </a>
            <p className="text-white/80">{messages.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#C9A84C' }}>{messages.links.company}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white">How It Works</a></li>
              <li><a href="#events" className="text-white/80 hover:text-white">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#C9A84C' }}>{messages.links.connect}</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
              <li><a href="#apply" className="text-white/80 hover:text-white">Apply</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">{messages.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
