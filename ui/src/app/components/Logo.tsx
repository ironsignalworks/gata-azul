export function Logo() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.webp`;

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
      <img
        src={logoSrc}
        alt="Gata Azul logo"
        className="h-auto w-full max-w-[350px] object-contain"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <h2
        className="text-3xl text-white/85 md:text-4xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        psychedelic traditional american tattoo
      </h2>
    </div>
  );
}
