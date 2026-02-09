export function ContactPage() {
  return (
    <section className="flex h-full items-center justify-center px-6 py-6 md:px-8">
      <div className="w-full max-w-3xl border p-6 md:p-8" style={{ borderColor: 'var(--ui-separator)' }}>
        <h1
          className="mb-8 text-3xl uppercase tracking-[0.2em] md:text-4xl"
          style={{ color: 'var(--ui-text)', fontFamily: 'var(--font-display)' }}
        >
          Contact
        </h1>
        <p className="-mt-4 mb-8 text-sm tracking-[0.14em]" style={{ color: 'var(--ui-text-muted)' }}>
          Angie Izquierdo de la Flor
        </p>

        <div className="grid gap-6 text-sm md:grid-cols-2" style={{ fontFamily: 'var(--font-ui)' }}>
          <div>
            <p className="mb-2 uppercase tracking-[0.18em]" style={{ color: 'var(--ui-text-muted)' }}>
              Email
            </p>
            <a
              href="mailto:gata.azul.tattoo@gmail.com"
              className="break-all transition-colors"
              style={{ color: 'var(--ui-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text)')}
            >
              gata.azul.tattoo@gmail.com
            </a>
          </div>

          <div>
            <p className="mb-2 uppercase tracking-[0.18em]" style={{ color: 'var(--ui-text-muted)' }}>
              Instagram
            </p>
            <a
              href="https://www.instagram.com/gata_azul_tattoo/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors"
              style={{ color: 'var(--ui-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text)')}
            >
              @gata_azul_tattoo
            </a>
          </div>

          <div>
            <p className="mb-2 uppercase tracking-[0.18em]" style={{ color: 'var(--ui-text-muted)' }}>
              Hours
            </p>
            <p style={{ color: 'var(--ui-text)' }}>Mon-Sat 10:00-21:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
