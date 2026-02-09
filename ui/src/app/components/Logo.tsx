export function Logo() {
  const logoSrc = `${import.meta.env.BASE_URL}logo3.webp`;

  return (
    <div className="hero-populate mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
      <img
        src={logoSrc}
        alt="Gata Azul logo"
        className="hero-populate-media h-auto w-full max-w-[380px] object-contain"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <h2
        className="hero-populate-copy text-xl md:text-4xl"
        style={{ color: '#e8aeff', fontFamily: 'var(--font-display)' }}
      >
        psychedelic traditional american tattoo
      </h2>
    </div>
  );
}
