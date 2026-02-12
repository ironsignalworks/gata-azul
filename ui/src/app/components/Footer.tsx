export function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-30 px-6 py-2 md:px-8"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-center text-[8px] uppercase tracking-[0.2em] md:justify-start md:text-[10px]"
        style={{ color: 'var(--ui-text)' }}
      >
        <span>Gata Azul Tattoo Studio 2026</span>
      </div>
    </footer>
  );
}
