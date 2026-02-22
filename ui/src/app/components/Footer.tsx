import { Instagram } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  const legalBase = import.meta.env.BASE_URL;
  const headingClass = 'text-xs font-medium uppercase tracking-[0.14em]';
  const linkClass = 'text-sm leading-6 transition-colors hover:opacity-80';
  const iconLinkClass = 'flex w-fit items-center gap-2 text-sm leading-6 transition-colors hover:opacity-80';

  return (
    <footer className="mt-8 border-t bg-black/20" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10" style={{ fontFamily: 'var(--font-ui)' }}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div className="space-y-2">
            <p className="text-sm font-medium" style={{ color: 'var(--ui-text)' }}>
              Gata Azul Tattoo Studio
            </p>
            <p className="text-sm leading-6" style={{ color: 'var(--ui-text-muted)' }}>
              Custom tattooing, flash designs, and limited prints.
            </p>
          </div>

          <div className="space-y-2">
            <p className={headingClass} style={{ color: 'var(--ui-text)' }}>
              Contact
            </p>
            <a href="mailto:gata.azul.tattoo@gmail.com" className={linkClass} style={{ color: 'var(--ui-text-muted)' }}>
              gata.azul.tattoo@gmail.com
            </a>
            <p className="text-sm leading-6" style={{ color: 'var(--ui-text-muted)' }}>
              Mon-Sat 10:00-21:00
            </p>
          </div>

          <div className="space-y-2">
            <p className={headingClass} style={{ color: 'var(--ui-text)' }}>
              Legal
            </p>
            <div className="flex flex-col gap-1 md:gap-2">
              <a
                href={`${legalBase}legal/terms.html`}
                className={linkClass}
                style={{ color: 'var(--ui-text-muted)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
              <a
                href={`${legalBase}legal/privacy.html`}
                className={linkClass}
                style={{ color: 'var(--ui-text-muted)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <p className={headingClass} style={{ color: 'var(--ui-text)' }}>
              Social
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/gata_azul_tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClass}
                style={{ color: 'var(--ui-text-muted)' }}
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.8} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-6 border-t pt-4 text-xs md:flex md:items-center md:justify-between"
          style={{ borderColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--ui-text-muted)' }}
        >
          <p>{year} Gata Azul Tattoo Studio. All rights reserved.</p>
          <a
            href="https://ironsignalworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-[11px] tracking-[0.08em] opacity-65 transition-opacity hover:opacity-100 md:mt-0 md:text-[10px]"
            style={{ color: 'var(--ui-text-muted)' }}
            aria-label="Site by Iron Signal Works"
          >
            Site by Iron Signal Works
          </a>
        </div>
      </div>
    </footer>
  );
}
