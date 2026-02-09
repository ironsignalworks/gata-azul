import { useState } from 'react';

export function StorePage() {
  const products = ['p1.webp', 'p2.webp', 'p3.webp', 'p4.webp'].map((file, index) => ({
    id: index + 1,
    src: `${import.meta.env.BASE_URL}${file}`,
  }));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const closeModal = () => {
    setSelectedIndex(null);
    setZoom(1);
  };

  return (
    <section className="flex h-full flex-col px-6 pb-6 pt-4 md:px-8">
      <div className="mx-auto mb-4 w-full max-w-7xl">
        <h1
          className="text-sm uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--ui-text-muted)' }}
        >
          Store
        </h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-2 gap-3 overflow-hidden md:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-md border bg-black/40"
            style={{ borderColor: 'var(--ui-separator)' }}
          >
            <button onClick={() => setSelectedIndex(product.id - 1)} className="block h-full w-full">
              <img
                src={product.src}
                alt={`Store item ${product.id}`}
                className="h-full w-full object-cover"
              />
            </button>
          </article>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[110] bg-black/90 p-4 md:p-8"
          onClick={closeModal}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--ui-text-muted)' }}>
                Item {selectedIndex + 1} / {products.length}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text)' }}
                >
                  -
                </button>
                <button
                  onClick={() => setZoom(1)}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text)' }}
                >
                  100%
                </button>
                <button
                  onClick={() => setZoom((z) => Math.min(4, z + 0.2))}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text)' }}
                >
                  +
                </button>
                <button
                  onClick={closeModal}
                  className="text-xs uppercase tracking-[0.2em] transition-colors"
                  style={{ color: 'var(--ui-text)' }}
                >
                  Close
                </button>
              </div>
            </div>
            <div
              className="flex-1 overflow-auto rounded-md border bg-black/60 p-2 md:p-4"
              style={{ borderColor: 'var(--ui-separator)' }}
              onWheel={(event) => {
                event.preventDefault();
                const nextZoom = zoom + (event.deltaY < 0 ? 0.1 : -0.1);
                setZoom(Math.min(4, Math.max(1, nextZoom)));
              }}
            >
              <img
                src={products[selectedIndex].src}
                alt={`Store item ${selectedIndex + 1}`}
                className="mx-auto block h-auto w-auto max-w-none object-contain"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: 'center center',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
