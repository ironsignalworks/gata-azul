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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/15 bg-black/95 px-6 py-4 backdrop-blur-sm md:px-8">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between"
        style={{ fontFamily: 'var(--font-ui)' }}
      >
        <button
          onClick={() => onNavigate('home')}
          className={`text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-100 ${
            currentPage === 'home' ? 'text-white opacity-100' : 'text-white/70 opacity-80'
          }`}
        >
          Home
        </button>
        <div className="flex items-center gap-6 md:gap-8">
          {rightItems.map((item) => (
            <span key={item.value}>
              <button
                onClick={() => onNavigate(item.value)}
                className={`text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-100 ${
                  currentPage === item.value ? 'text-white opacity-100' : 'text-white/70 opacity-80'
                }`}
              >
                {item.label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
