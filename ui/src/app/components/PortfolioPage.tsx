import { useEffect, useState } from 'react';

const images = ['/t1.jpeg', '/t2.jpeg', '/t3.jpeg', '/t4.jpeg', '/t5.jpeg', '/t6.jpeg', '/t7.jpeg'];

export function PortfolioPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) {
        return;
      }

      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) => {
          if (prev === null) {
            return 0;
          }
          return (prev + 1) % images.length;
        });
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) => {
          if (prev === null) {
            return 0;
          }
          return (prev - 1 + images.length) % images.length;
        });
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
        <h1 className="text-sm uppercase tracking-[0.2em] text-white/75" style={{ fontFamily: 'var(--font-ui)' }}>
          Portfolio
        </h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-2 gap-3 overflow-hidden md:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-md border border-white/10"
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
        <div className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8">
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
            <div className="mb-3 flex items-center justify-between">
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length))
                }
                className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white"
              >
                Prev
              </button>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                {selectedIndex + 1} / {images.length}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
                  }
                  className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white"
                >
                  Next
                </button>
                <button
                  onClick={closeModal}
                  className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto rounded-md border border-white/15 bg-black/60 p-2 md:p-4">
              <img
                src={images[selectedIndex]}
                alt={`Tattoo work ${selectedIndex + 1}`}
                className="mx-auto h-auto w-full max-w-4xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
