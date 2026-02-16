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
    <div className="hero-populate mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
      <div className="relative w-full max-w-[480px] md:max-w-[380px]">
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
        className={`text-2xl md:text-4xl ${
          animateCopy
            ? 'hero-populate-copy'
            : 'opacity-0 translate-y-[10px] scale-[0.985] [filter:blur(4px)]'
        }`}
        style={{ color: '#e8aeff', fontFamily: 'var(--font-display)' }}
      >
        Psychedelic Traditional American Tattoo
      </h2>
    </div>
  );
}
