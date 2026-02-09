import { useEffect, useRef, useState } from 'react';

const images = ['t1.jpeg', 't2.jpeg', 't3.jpeg', 't4.jpeg', 't5.jpeg', 't6.jpeg', 't7.jpeg', 't8.jpeg'].map(
  (filename) => `${import.meta.env.BASE_URL}${filename}`,
);

export function PortfolioPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const goPrev = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
  };

  const goNext = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) {
        return;
      }

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

  const closeModal = () => setSelectedIndex(null);

  return (
    <section className="flex h-full flex-col px-6 pb-6 pt-4 md:px-8">
      <div className="mx-auto mb-4 w-full max-w-7xl">
        <h1
          className="text-sm uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--ui-text-muted)' }}
        >
          Portfolio
        </h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-2 gap-3 overflow-hidden md:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-md border"
            style={{ borderColor: 'var(--ui-separator)' }}
          >
            <img
              src={src}
              alt={`Tattoo work ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8"
          onClick={closeModal}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <button
                onClick={goPrev}
                className="text-xs uppercase tracking-[0.2em] transition-colors"
                style={{ color: 'var(--ui-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
              >
                Prev
              </button>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--ui-text)' }}>
                {selectedIndex + 1} / {images.length}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={goNext}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
                >
                  Next
                </button>
                <button
                  onClick={closeModal}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
                >
                  Close
                </button>
              </div>
            </div>
            <div
              className="flex-1 overflow-auto"
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
              <div className="mx-auto w-fit rounded-md border bg-black/60 p-2 md:p-4" style={{ borderColor: 'var(--ui-separator)' }}>
                <img
                  src={images[selectedIndex]}
                  alt={`Tattoo work ${selectedIndex + 1}`}
                  className="block h-auto w-auto max-h-[calc(100vh-12rem)] max-w-[calc(100vw-2rem)] object-contain md:max-w-[calc(100vw-5rem)]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
