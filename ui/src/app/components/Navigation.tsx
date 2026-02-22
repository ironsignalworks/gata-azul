import { Instagram, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'store' | 'portfolio' | 'flash' | 'contact' | 'bio';
  onNavigate: (page: 'home' | 'store' | 'portfolio' | 'flash' | 'contact' | 'bio') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const rightItems: Array<{ label: string; value: 'store' | 'portfolio' | 'flash' | 'contact' | 'bio' }> = [
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Flash', value: 'flash' },
    { label: 'Store', value: 'store' },
    { label: 'Contact', value: 'contact' },
    { label: 'BIO', value: 'bio' },
  ];

  const navButtonClass = (isActive: boolean, mobile = false) =>
    `${mobile ? 'w-full text-left' : ''} relative text-xs uppercase tracking-[0.18em] transition-colors ${
      isActive ? 'text-[var(--ui-hover)]' : 'text-[var(--ui-text)] hover:text-[var(--ui-hover)]'
    }`;

  const triggerMeltGlyphs = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const charNodes = target.querySelectorAll<HTMLElement>('[data-melt-char]');
    if (!charNodes.length) {
      return;
    }

    const bubbleRadius = 90;
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    charNodes.forEach((charNode) => {
      charNode.style.transitionDuration = '260ms';
      const rect = charNode.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = centerX - cursorX;
      const dy = centerY - cursorY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const clampedDistance = Math.min(distance, bubbleRadius);
      const influence = 1 - clampedDistance / bubbleRadius;
      if (influence <= 0) {
        charNode.style.transform = '';
      } else {
        const pushX = (dx / bubbleRadius) * -6 * influence;
        const pushY = 9 * influence;
        const stretchY = 1 + 0.12 * influence;
        const squeezeX = 1 - 0.05 * influence;
        charNode.style.transform = `translate(${pushX}px, ${pushY}px) scale(${squeezeX}, ${stretchY})`;
      }
    });

    window.setTimeout(() => {
      charNodes.forEach((charNode) => {
        charNode.style.transform = '';
        charNode.style.transitionDuration = '';
      });
    }, 420);
  };

  const renderAnimatedLabel = (label: string) => (
    <>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="md:hidden">
        {label}
      </span>
      <span aria-hidden="true" className="hero-melt-desktop hidden md:inline-flex">
        {label.split('').map((char, index) => (
          <span
            key={`${label}-${char}-${index}`}
            data-melt-char="true"
            className={`hero-melt-char ${char === ' ' ? 'hero-melt-space' : ''}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </>
  );

  return (
    <nav
      className="relative z-50 px-6 py-6 md:px-8 md:py-4"
      aria-label="Primary navigation"
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between"
        style={{ fontFamily: 'var(--font-ui)' }}
      >
        <button
          onClick={(event) => {
            triggerMeltGlyphs(event);
            onNavigate('home');
            setIsMobileMenuOpen(false);
          }}
          className={navButtonClass(currentPage === 'home')}
          aria-current={currentPage === 'home' ? 'page' : undefined}
          aria-label="Home"
        >
          {renderAnimatedLabel('Home')}
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
                onClick={(event) => {
                  triggerMeltGlyphs(event);
                  onNavigate(item.value);
                }}
                className={navButtonClass(currentPage === item.value)}
                aria-current={currentPage === item.value ? 'page' : undefined}
                aria-label={item.label}
              >
                {renderAnimatedLabel(item.label)}
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
        <div id="mobile-nav-panel" className="absolute left-0 right-0 top-full bg-black px-6 py-4 md:hidden">
          <div className="flex w-full flex-col gap-3">
            {rightItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={navButtonClass(currentPage === item.value, true)}
                aria-current={currentPage === item.value ? 'page' : undefined}
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
