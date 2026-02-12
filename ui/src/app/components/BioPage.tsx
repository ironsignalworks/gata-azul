export function BioPage() {
  return (
    <section className="h-full overflow-y-auto px-6 py-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl space-y-8 border p-6 md:p-8" style={{ borderColor: 'var(--ui-separator)' }}>
        <h1
          className="text-3xl uppercase tracking-[0.2em] md:text-4xl"
          style={{ color: 'var(--ui-text)', fontFamily: 'var(--font-display)' }}
        >
          BIO
        </h1>

        <section className="seo-content" aria-hidden="false">
          <h2 className="mb-4 text-lg tracking-[0.08em]" style={{ color: 'var(--ui-text)' }}>
            English
          </h2>
          <p className="mb-4 text-sm leading-relaxed tracking-[0.04em]" style={{ color: 'var(--ui-text-muted)' }}>
            Based in Sevilla, I have been tattooing for over a decade. My work is rooted in American Traditional
            tattooing, reinterpreted through a psychedelic lens and infused with subtle esoteric symbolism.
          </p>
          <p className="mb-4 text-sm leading-relaxed tracking-[0.04em]" style={{ color: 'var(--ui-text-muted)' }}>
            Bold linework, saturated color, and timeless motifs define my style, while spiritual and surreal
            undertones give each piece a distinct identity. I’m open to collaborations, guest spots, and international
            travel, and available for custom tattoos and commissioned artwork.
          </p>
          <p className="text-sm leading-relaxed tracking-[0.04em]" style={{ color: 'var(--ui-text-muted)' }}>
            I specialize in American Traditional tattoos in Sevilla, custom flash designs, psychedelic tattoo art, and
            esoteric-inspired pieces.
          </p>
        </section>

        <section className="seo-content">
          <h2 className="mb-4 text-lg tracking-[0.08em]" style={{ color: 'var(--ui-text)' }}>
            Español
          </h2>
          <p className="mb-4 text-sm leading-relaxed tracking-[0.04em]" style={{ color: 'var(--ui-text-muted)' }}>
            Con base en Sevilla, llevo más de una década tatuando. Mi trabajo se fundamenta en el tatuaje American
            Traditional, reinterpretado desde una mirada psicodélica y con sutiles influencias esotéricas.
          </p>
          <p className="mb-4 text-sm leading-relaxed tracking-[0.04em]" style={{ color: 'var(--ui-text-muted)' }}>
            Líneas sólidas, colores saturados y motivos atemporales definen mi estilo, mientras que matices
            espirituales y surrealistas aportan una identidad única a cada pieza. Estoy abierta a colaboraciones,
            guest spots y proyectos internacionales, y realizo tatuajes personalizados y encargos artísticos.
          </p>
          <p className="text-sm leading-relaxed tracking-[0.04em]" style={{ color: 'var(--ui-text-muted)' }}>
            Me especializo en tatuajes American Traditional en Sevilla, diseño de flash personalizado, tatuaje
            psicodélico y piezas de inspiración esotérica.
          </p>
        </section>
      </div>
    </section>
  );
}
