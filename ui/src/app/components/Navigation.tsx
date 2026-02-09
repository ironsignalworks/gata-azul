import { Instagram, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'store' | 'portfolio' | 'contact';
  onNavigate: (page: 'home' | 'store' | 'portfolio' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const rightItems: Array<{ label: string; value: 'store' | 'portfolio' | 'contact' }> = [
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Store', value: 'store' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-8 md:py-4"
      aria-label="Primary navigation"
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between"
        style={{ fontFamily: 'var(--font-ui)' }}
      >
        <button
          onClick={() => {
            onNavigate('home');
            setIsMobileMenuOpen(false);
          }}
          className="text-xs uppercase tracking-[0.18em] transition-colors"
          style={{ color: 'var(--ui-text)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text)')}
          aria-current={currentPage === 'home' ? 'page' : undefined}
        >
          Home
        </button>
        <button
          className="md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          style={{ color: 'var(--ui-text)' }}
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={1.9} /> : <Menu size={22} strokeWidth={1.9} />}
        </button>
        <div className="hidden items-center gap-5 md:flex md:gap-6">
          <div className="flex items-center gap-5 md:gap-6">
            {rightItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className="text-xs uppercase tracking-[0.18em] transition-colors"
                style={{ color: 'var(--ui-text)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text)')}
                aria-current={currentPage === item.value ? 'page' : undefined}
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
      {isMobileMenuOpen && (
        <div id="mobile-nav-panel" className="mt-4 pt-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {rightItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-xs uppercase tracking-[0.18em] transition-colors"
                style={{ color: 'var(--ui-text)' }}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-1 flex items-center gap-4">
              <a
                href="https://www.instagram.com/gata_azul_tattoo/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors"
                aria-label="Instagram"
                title="Instagram"
                style={{ color: 'var(--ui-text)' }}
              >
                <Instagram size={20} strokeWidth={1.9} />
              </a>
              <a
                href="mailto:gata.azul.tattoo@gmail.com"
                className="transition-colors"
                aria-label="Email"
                title="Email"
                style={{ color: 'var(--ui-text)' }}
              >
                <Mail size={20} strokeWidth={1.9} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
