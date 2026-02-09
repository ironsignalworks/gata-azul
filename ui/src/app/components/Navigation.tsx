import { Instagram, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'store' | 'portfolio' | 'contact';
  onNavigate: (page: 'home' | 'store' | 'portfolio' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const rightItems: Array<{ label: string; value: 'store' | 'portfolio' | 'contact' }> = [
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Store', value: 'store' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 px-6 py-4 backdrop-blur-sm md:px-8">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between"
        style={{ fontFamily: 'var(--font-ui)' }}
      >
        <button
          onClick={() => onNavigate('home')}
          className={`text-xs uppercase tracking-[0.18em] transition-colors ${
            currentPage === 'home' ? 'opacity-100' : 'opacity-90'
          }`}
          style={{ color: currentPage === 'home' ? 'var(--ui-text)' : 'var(--ui-text-muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = currentPage === 'home' ? 'var(--ui-text)' : 'var(--ui-text-muted)')
          }
        >
          Home
        </button>
        <div className="flex items-center gap-5 md:gap-6">
          <div className="flex items-center gap-5 md:gap-6">
            {rightItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-xs uppercase tracking-[0.18em] transition-colors ${
                  currentPage === item.value ? 'opacity-100' : 'opacity-90'
                }`}
                style={{ color: currentPage === item.value ? 'var(--ui-text)' : 'var(--ui-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    currentPage === item.value ? 'var(--ui-text)' : 'var(--ui-text-muted)')
                }
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5 md:gap-6">
            <a
              href="https://www.instagram.com/gata_azul_tattoo/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors"
              aria-label="Instagram"
              title="Instagram"
              style={{ color: 'var(--ui-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text)')}
            >
              <Instagram size={20} strokeWidth={1.9} />
            </a>
            <a
              href="mailto:gata.azul.tattoo@gmail.com"
              className="transition-colors"
              aria-label="Email"
              title="Email"
              style={{ color: 'var(--ui-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text)')}
            >
              <Mail size={20} strokeWidth={1.9} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
