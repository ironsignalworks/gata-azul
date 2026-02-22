import { useEffect, useRef, useState } from 'react';

const flashImages = [
  'flash/IMG_6480.jpeg',
  'flash/IMG_6596.jpeg',
  'flash/IMG_6598.jpeg',
  'flash/IMG_6594.jpeg',
  'flash/IMG_6597.jpeg',
  'flash/IMG_6595.jpeg',
].map((filename) => `${import.meta.env.BASE_URL}${filename}`);

export function FlashPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const modalTitleId = 'flash-modal-title';

  const goPrev = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + flashImages.length) % flashImages.length));
  };

  const goNext = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % flashImages.length));
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      if (event.key === 'ArrowRight') {
        goNext();
      }

      if (event.key === 'ArrowLeft') {
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') ?? null;

    document.title = 'Available Flash Tattoos | Gata Azul Tattoo';
    metaDescription?.setAttribute(
      'content',
      'Browse available flash tattoos by Gata Azul Tattoo. American Traditional and psychedelic flash designs open for booking.',
    );

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <section className="overflow-x-hidden px-6 pb-8 pt-4 md:px-8" aria-label="Flash catalog">
      <div className="mx-auto mb-4 w-full max-w-7xl">
        <h1
          className="text-sm uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--ui-text-muted)' }}
        >
          Available Flash
        </h1>
        <p className="mt-2 max-w-3xl text-xs leading-relaxed tracking-[0.06em]" style={{ color: 'var(--ui-text-muted)' }}>
          Select a flash design to preview full size. Swipe left or right on mobile, or use arrow keys on desktop.
        </p>
      </div>
      <div className="mx-auto w-full max-w-6xl columns-2 gap-4 md:gap-5" role="list">
        {flashImages.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            className="mb-4 inline-block w-full align-top [break-inside:avoid] rounded-md bg-black/25 p-2 transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:mb-5 md:p-3"
            aria-label={`Open flash design ${index + 1} of ${flashImages.length}`}
            role="listitem"
          >
            <img
              src={src}
              alt={`Available flash ${index + 1}`}
              className="block h-auto w-full rounded-sm bg-black/40 object-contain"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <section className="seo-content mx-auto mt-5 w-full max-w-7xl" aria-label="Flash SEO text">
        <h2 className="text-sm uppercase tracking-[0.16em]" style={{ color: 'var(--ui-text-muted)' }}>
          Flash Tattoos
        </h2>
        <p className="mt-2 text-xs leading-relaxed tracking-[0.06em]" style={{ color: 'var(--ui-text-muted)' }}>
          Available flash tattoos by Gata Azul. Designs available for booking, including custom adaptation and placement guidance.
        </p>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[120] bg-black/92 p-3 md:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedIndex(null);
            }
          }}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedIndex(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
        >
          <div className="mx-auto flex h-full w-full max-w-[96vw] min-w-[280px] flex-col md:max-w-[90vw]" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <button
                onClick={goPrev}
                className="text-xs uppercase tracking-[0.2em] transition-colors"
                style={{ color: 'var(--ui-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
                aria-label="Show previous flash image"
              >
                Prev
              </button>
              <p id={modalTitleId} className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--ui-text)' }}>
                Flash {selectedIndex + 1} / {flashImages.length}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={goNext}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
                  aria-label="Show next flash image"
                >
                  Next
                </button>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
                  aria-label="Close flash preview"
                >
                  Close
                </button>
              </div>
            </div>
            <div
              className="flex-1 overflow-y-auto overflow-x-hidden rounded-md bg-black/60 p-2"
              onTouchStart={(event) => {
                const touch = event.changedTouches[0];
                touchStartRef.current = { x: touch.clientX, y: touch.clientY };
              }}
              onTouchEnd={(event) => {
                if (!touchStartRef.current) {
                  return;
                }

                const touch = event.changedTouches[0];
                const deltaX = touch.clientX - touchStartRef.current.x;
                const deltaY = touch.clientY - touchStartRef.current.y;
                touchStartRef.current = null;

                const horizontalThreshold = 50;
                if (Math.abs(deltaX) < horizontalThreshold || Math.abs(deltaX) <= Math.abs(deltaY)) {
                  return;
                }

                if (deltaX < 0) {
                  goNext();
                } else {
                  goPrev();
                }
              }}
            >
              <img
                src={flashImages[selectedIndex]}
                alt={`Available flash ${selectedIndex + 1}`}
                className="mx-auto block h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
