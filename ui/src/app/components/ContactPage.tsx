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
              Phone
            </p>
            <a
              href="tel:+15125550123"
              className="transition-colors"
              style={{ color: 'var(--ui-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text)')}
            >
              +1 (512) 555-0123
            </a>
          </div>

          <div>
            <p className="mb-2 uppercase tracking-[0.18em]" style={{ color: 'var(--ui-text-muted)' }}>
              Hours
            </p>
            <p style={{ color: 'var(--ui-text)' }}>Tue-Sat 12:00-20:00</p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-2 uppercase tracking-[0.18em]" style={{ color: 'var(--ui-text-muted)' }}>
              Address
            </p>
            <p style={{ color: 'var(--ui-text)' }}>123 Ink Street, Austin, TX</p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-2 uppercase tracking-[0.18em]" style={{ color: 'var(--ui-text-muted)' }}>
              Booking Notes
            </p>
            <p style={{ color: 'var(--ui-text)' }}>
              Walk-ins welcome when available. For larger custom work, DM on Instagram or email references.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
