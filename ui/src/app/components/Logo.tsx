import { useEffect, useState } from 'react';

export function Logo() {
  const logoSrc = `${import.meta.env.BASE_URL}logo3.webp`;
  const headline = 'Psychedelic Traditional American Tattoo';
  const mobileHeadline = ['Psychedelic Traditional', 'American Tattoo'];
  const [animateCopy, setAnimateCopy] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setAnimateCopy(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  const updateMeltGlyphs = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const target = event.currentTarget;
    const charNodes = target.querySelectorAll<HTMLElement>('[data-melt-char]');
    if (!charNodes.length) {
      return;
    }

    const bubbleRadius = 120;
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    charNodes.forEach((charNode) => {
      const rect = charNode.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = centerX - cursorX;
      const dy = centerY - cursorY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > bubbleRadius) {
        charNode.style.transform = '';
        return;
      }

      const influence = 1 - distance / bubbleRadius;
      const pushX = (dx / bubbleRadius) * -10 * influence;
      const pushY = 14 * influence;
      const stretchY = 1 + 0.18 * influence;
      const squeezeX = 1 - 0.08 * influence;
      charNode.style.transform = `translate(${pushX}px, ${pushY}px) scale(${squeezeX}, ${stretchY})`;
    });
  };

  const resetMeltGlyphs = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.currentTarget.querySelectorAll<HTMLElement>('[data-melt-char]').forEach((charNode) => {
      charNode.style.transform = '';
    });
  };

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
        className={`hero-melt-target text-[clamp(1.2rem,5.4vw,1.8rem)] md:whitespace-nowrap md:text-[clamp(1.4rem,3vw,2.8rem)] ${
          animateCopy
            ? 'hero-populate-copy'
            : 'opacity-0 translate-y-[10px] scale-[0.985] [filter:blur(4px)]'
        }`}
        onMouseEnter={updateMeltGlyphs}
        onMouseMove={updateMeltGlyphs}
        onMouseLeave={resetMeltGlyphs}
        aria-label={headline}
        style={{ color: '#e8aeff', fontFamily: 'var(--font-display)' }}
      >
        <span className="sr-only">{headline}</span>
        <span aria-hidden="true" className="md:hidden">
          {mobileHeadline[0]}
          <br />
          {mobileHeadline[1]}
        </span>
        <span aria-hidden="true" className="hero-melt-desktop hidden md:inline-flex">
          {headline.split('').map((char, index) => (
            <span
              key={`${char}-${index}`}
              data-melt-char="true"
              className={`hero-melt-char ${char === ' ' ? 'hero-melt-space' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </h2>
    </div>
  );
}
