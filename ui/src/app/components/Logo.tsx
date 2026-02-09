export function Logo() {
  const logoSrc = `${import.meta.env.BASE_URL}logo3.webp`;

  return (
    <div className="hero-populate mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
      <img
        src={logoSrc}
        alt="Gata Azul logo"
        className="hero-populate-media h-auto w-full max-w-[490px] object-contain md:max-w-[380px]"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <h2
        className="hero-populate-copy text-2xl md:text-4xl"
        style={{ color: '#e8aeff', fontFamily: 'var(--font-display)' }}
      >
        Psychedelic Traditional American Tattoo
      </h2>
    </div>
  );
}
