import { useEffect, useState } from 'react';

const flashImages = [
  'flash/IMG_6480.jpeg',
  'flash/IMG_6594.jpeg',
  'flash/IMG_6595.jpeg',
  'flash/IMG_6596.jpeg',
  'flash/IMG_6597.jpeg',
  'flash/IMG_6598.jpeg',
].map((filename) => `${import.meta.env.BASE_URL}${filename}`);

export function FlashPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section className="flex h-full flex-col px-6 pb-6 pt-4 md:px-8">
      <div className="mx-auto mb-4 w-full max-w-7xl">
        <h1
          className="text-sm uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--ui-text-muted)' }}
        >
          Available Flash
        </h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-2 gap-3 overflow-y-auto md:grid-cols-5">
        {flashImages.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-md border"
            style={{ borderColor: 'var(--ui-separator)' }}
          >
            <img src={src} alt={`Available flash ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[120] bg-black/92 p-3 md:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedIndex(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Flash image preview"
        >
          <div className="mx-auto flex h-full w-full max-w-[96vw] min-w-[280px] flex-col md:max-w-[48vw]">
            <div className="mb-3 flex justify-end">
              <button
                onClick={() => setSelectedIndex(null)}
                className="text-xs uppercase tracking-[0.2em] transition-colors"
                style={{ color: 'var(--ui-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto rounded-md border bg-black/60 p-2" style={{ borderColor: 'var(--ui-separator)' }}>
              <img
                src={flashImages[selectedIndex]}
                alt={`Available flash ${selectedIndex + 1}`}
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
