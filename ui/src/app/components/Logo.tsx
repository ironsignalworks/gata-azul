export function Logo() {
  const logoSrc = `${import.meta.env.BASE_URL}logo3.webp`;
  const headline = 'Psychedelic Traditional American Tattoo';
  const words = headline.split(' ');

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
      <div className="relative mt-[20px] w-full max-w-[548px] md:max-w-[433px]">
        <img
          src={logoSrc}
          alt="Gata Azul logo"
          className="h-auto w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <h2
        className="text-[clamp(1.2rem,5.4vw,1.8rem)] md:whitespace-nowrap md:text-[clamp(1.4rem,3vw,2.8rem)]"
        aria-label={headline}
        style={{ color: '#e8aeff', fontFamily: 'var(--font-display)' }}
      >
        <span className="sr-only">{headline}</span>
        <span aria-hidden="true" className="md:hidden">
          <span className="inline-flex">
            {words[0]}
          </span>
          {' '}
          <span className="inline-flex">
            {words[1]}
          </span>
          <br />
          <span className="inline-flex">
            {words[2]}
          </span>
          {' '}
          <span className="inline-flex">
            {words[3]}
          </span>
        </span>
        <span aria-hidden="true" className="hidden md:inline-flex whitespace-nowrap">
          {words.map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className={`inline-flex ${wordIndex < words.length - 1 ? 'mr-[0.28em]' : ''}`}
            >
              {word.split('').map((char, charIndex) => (
                <span
                  key={`${word}-${char}-${charIndex}`}
                  className="inline-block"
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
