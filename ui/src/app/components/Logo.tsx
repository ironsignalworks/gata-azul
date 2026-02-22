import { useEffect, useState } from 'react';

export function Logo() {
  const logoSrc = `${import.meta.env.BASE_URL}logo3.webp`;
  const [animateCopy, setAnimateCopy] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setAnimateCopy(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className="hero-populate mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
      <div className="relative w-full max-w-[576px] md:max-w-[456px]">
        <img
          src={logoSrc}
          alt="Gata Azul logo"
          className="hero-populate-media h-auto w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <h2
        className={`text-[clamp(1.2rem,5.4vw,1.8rem)] md:whitespace-nowrap md:text-[clamp(1.4rem,3vw,2.8rem)] ${
          animateCopy
            ? 'hero-populate-copy'
            : 'opacity-0 translate-y-[10px] scale-[0.985] [filter:blur(4px)]'
        }`}
        style={{ color: '#e8aeff', fontFamily: 'var(--font-display)' }}
      >
        <span className="md:hidden">
          Psychedelic Traditional
          <br />
          American Tattoo
        </span>
        <span className="hidden md:inline">Psychedelic Traditional American Tattoo</span>
      </h2>
    </div>
  );
}
