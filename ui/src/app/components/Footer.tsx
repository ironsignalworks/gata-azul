export function Footer() {
  return (
    <footer className="px-6 py-2 md:px-8">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between text-[8px] uppercase tracking-[0.2em] md:text-[10px]"
        style={{ color: 'var(--ui-text)' }}
      >
        <span>Gata Azul Tattoo Studio 2026</span>
        <a
          href="https://ironsignalworks.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:opacity-80"
        >
          Site by Iron Signal Works
        </a>
      </div>
    </footer>
  );
}
