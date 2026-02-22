import { useEffect, useRef, useState } from 'react';

export function Logo() {
  const logoSrc = `${import.meta.env.BASE_URL}logo3.webp`;
  const headline = 'Psychedelic Traditional American Tattoo';
  const words = headline.split(' ');
  const [animateCopy, setAnimateCopy] = useState(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setAnimateCopy(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!animateCopy || !headingRef.current) {
      return;
    }

    const headingNode = headingRef.current;
    const applyMeltAt = (cursorX: number, cursorY: number, intensity = 1) => {
      const bubbleRadius = 120;
      const charNodes = headingNode.querySelectorAll<HTMLElement>('[data-melt-char]');
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

        const rawInfluence = 1 - distance / bubbleRadius;
        const smoothInfluence = rawInfluence * rawInfluence * (3 - 2 * rawInfluence);
        const influence = smoothInfluence * intensity;
        const pushX = (dx / bubbleRadius) * -8 * influence;
        const pushY = 11 * influence;
        const stretchY = 1 + 0.14 * influence;
        const squeezeX = 1 - 0.06 * influence;
        charNode.style.transform = `translate(${pushX}px, ${pushY}px) scale(${squeezeX}, ${stretchY})`;
      });
    };

    const startTime = performance.now();
    const duration = 900;
    let rafId = 0;

    const animateEntrance = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      const rect = headingNode.getBoundingClientRect();
      const sweepX = rect.left + rect.width * (0.08 + 0.84 * easedProgress);
      const sweepY = rect.top + rect.height * (0.4 + Math.sin(easedProgress * Math.PI * 1.2) * 0.05);
      const intensity = 0.9 - easedProgress * 0.25;
      applyMeltAt(sweepX, sweepY, intensity);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(animateEntrance);
      } else {
        window.setTimeout(() => {
          headingNode.querySelectorAll<HTMLElement>('[data-melt-char]').forEach((charNode) => {
            charNode.style.transform = '';
          });
        }, 180);
      }
    };

    rafId = window.requestAnimationFrame(animateEntrance);
    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [animateCopy]);

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

      const rawInfluence = 1 - distance / bubbleRadius;
      const influence = rawInfluence * rawInfluence * (3 - 2 * rawInfluence);
      const pushX = (dx / bubbleRadius) * -8 * influence;
      const pushY = 11 * influence;
      const stretchY = 1 + 0.14 * influence;
      const squeezeX = 1 - 0.06 * influence;
      charNode.style.transform = `translate(${pushX}px, ${pushY}px) scale(${squeezeX}, ${stretchY})`;
    });
  };

  const resetMeltGlyphs = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.currentTarget.querySelectorAll<HTMLElement>('[data-melt-char]').forEach((charNode) => {
      charNode.style.transform = '';
    });
  };

  const getWordMotionClass = (wordIndex: number) =>
    `inline-flex transition-all duration-700 [transition-timing-function:cubic-bezier(0.2,0.9,0.2,1)] ${
      animateCopy ? 'opacity-100 [filter:blur(0px)]' : 'opacity-0 [filter:blur(4px)]'
    }`;

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
        ref={headingRef}
        className="hero-melt-target text-[clamp(1.2rem,5.4vw,1.8rem)] md:whitespace-nowrap md:text-[clamp(1.4rem,3vw,2.8rem)]"
        onMouseEnter={updateMeltGlyphs}
        onMouseMove={updateMeltGlyphs}
        onMouseLeave={resetMeltGlyphs}
        aria-label={headline}
        style={{ color: '#e8aeff', fontFamily: 'var(--font-display)' }}
      >
        <span className="sr-only">{headline}</span>
        <span aria-hidden="true" className="md:hidden">
          <span className={getWordMotionClass(0)} style={{ transitionDelay: '0ms' }}>
            {words[0]}
          </span>
          {' '}
          <span className={getWordMotionClass(1)} style={{ transitionDelay: '110ms' }}>
            {words[1]}
          </span>
          <br />
          <span className={getWordMotionClass(2)} style={{ transitionDelay: '220ms' }}>
            {words[2]}
          </span>
          {' '}
          <span className={getWordMotionClass(3)} style={{ transitionDelay: '330ms' }}>
            {words[3]}
          </span>
        </span>
        <span aria-hidden="true" className="hero-melt-desktop hidden md:inline-flex">
          {words.map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className={`${getWordMotionClass(wordIndex)} ${wordIndex < words.length - 1 ? 'mr-[0.28em]' : ''}`}
              style={{ transitionDelay: `${wordIndex * 110}ms` }}
            >
              {word.split('').map((char, charIndex) => (
                <span
                  key={`${word}-${char}-${charIndex}`}
                  data-melt-char="true"
                  className="hero-melt-char"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>
      </h2>
    </div>
  );
}
