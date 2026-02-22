import { useEffect, useRef, useState } from 'react';

export function StorePage() {
  const products = ['p1.webp', 'p2.webp', 'p3.webp', 'p4.webp'].map((file, index) => ({
    id: index + 1,
    src: `${import.meta.env.BASE_URL}${file}`,
  }));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [buyProductIndex, setBuyProductIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shippingLocation: '',
    note: '',
  });

  const goPrev = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + products.length) % products.length));
  };

  const goNext = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % products.length));
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

  useEffect(() => {
    setZoom(1);
  }, [selectedIndex]);

  const closeModal = () => setSelectedIndex(null);
  const closeBuyForm = () => setBuyProductIndex(null);
  const minZoom = 1;
  const maxZoom = 3;
  const zoomStep = 0.25;
  const changeZoom = (delta: number) => {
    setZoom((previous) => {
      const next = previous + delta;
      if (next < minZoom) {
        return minZoom;
      }
      if (next > maxZoom) {
        return maxZoom;
      }
      return Number(next.toFixed(2));
    });
  };

  const submitOrderEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (buyProductIndex === null) {
      return;
    }

    const productNumber = buyProductIndex + 1;
    const subject = `Order Request - Limited Print #${productNumber}`;
    const body = [
      'Hello Gata Azul Tattoo Studio,',
      '',
      `I want to buy limited print #${productNumber}.`,
      'Edition: Signed and numbered, limited to 50.',
      'Format: A3 printed on heavy watercolor paper.',
      'Price: 15 EUR + shipping.',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Shipping Location: ${formData.shippingLocation}`,
      `Note: ${formData.note || '-'}`,
    ].join('\n');

    const mailto = `mailto:gata.azul.tattoo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    closeBuyForm();
  };

  return (
    <section className="overflow-x-hidden px-6 pb-8 pt-4 md:px-8">
      <div className="mx-auto mb-4 w-full max-w-7xl">
        <h1
          className="text-sm uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--ui-text-muted)' }}
        >
          Store
        </h1>
        <p className="mt-2 text-xs leading-relaxed tracking-[0.06em]" style={{ color: 'var(--ui-text-muted)' }}>
          Limited edition fine art prints. Each piece is signed and numbered in an edition of 50, printed in A3
          format on heavy watercolor paper. Price: 15 EUR + shipping.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col">
            <button
              onClick={() => setSelectedIndex(product.id - 1)}
              className="block w-full rounded-md bg-black/40 p-2"
            >
              <img src={product.src} alt={`Store item ${product.id}`} className="block h-auto w-full object-contain" />
            </button>
            <div className="space-y-1 px-1 pt-2">
              <p className="text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ui-text-muted)' }}>
                Print #{product.id} - Limited edition
              </p>
              <button
                onClick={() => setBuyProductIndex(product.id - 1)}
                className="inline-flex w-fit rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.16em] transition-colors"
                style={{
                  color: 'var(--ui-text-muted)',
                  borderColor: 'var(--ui-separator)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ui-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ui-text-muted)')}
              >
                Buy Print
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[110] bg-black/90 p-4 md:p-8"
          onClick={(event) => {
            const target = event.target as HTMLElement;
            if (!target.closest('[data-modal-panel]')) {
              closeModal();
            }
          }}
          onPointerDown={(event) => {
            const target = event.target as HTMLElement;
            if (!target.closest('[data-modal-panel]')) {
              closeModal();
            }
          }}
          onTouchStart={(event) => {
            const target = event.target as HTMLElement;
            if (!target.closest('[data-modal-panel]')) {
              closeModal();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Store image viewer"
        >
          <div
            data-modal-panel
            className="mx-auto flex w-fit max-w-[calc(100vw-2rem)] flex-col"
          >
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
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeZoom(-zoomStep)}
                  className="rounded border px-2 py-1 text-[10px] uppercase tracking-[0.14em] transition-colors disabled:opacity-50"
                  style={{ color: 'var(--ui-text-muted)', borderColor: 'var(--ui-separator)' }}
                  disabled={zoom <= minZoom}
                  aria-label="Zoom out"
                >
                  -
                </button>
                <p className="text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--ui-text-muted)' }}>
                  {Math.round(zoom * 100)}%
                </p>
                <button
                  onClick={() => changeZoom(zoomStep)}
                  className="rounded border px-2 py-1 text-[10px] uppercase tracking-[0.14em] transition-colors disabled:opacity-50"
                  style={{ color: 'var(--ui-text-muted)', borderColor: 'var(--ui-separator)' }}
                  disabled={zoom >= maxZoom}
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  onClick={() => setZoom(1)}
                  className="rounded border px-2 py-1 text-[10px] uppercase tracking-[0.14em] transition-colors disabled:opacity-50"
                  style={{ color: 'var(--ui-text-muted)', borderColor: 'var(--ui-separator)' }}
                  disabled={zoom === 1}
                  aria-label="Reset zoom"
                >
                  Reset
                </button>
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
              <div className="mx-auto w-full max-w-[min(92vw,1100px)] bg-black/60 p-2 md:p-4">
                <p
                  className="mb-2 text-center text-xs uppercase tracking-[0.2em]"
                  style={{ color: 'var(--ui-text)' }}
                >
                  {selectedIndex + 1} / {products.length}
                </p>
                <div className="overflow-auto">
                  <img
                    src={products[selectedIndex].src}
                    alt={`Store item ${selectedIndex + 1}`}
                    className="block h-auto max-w-none object-contain transition-[width] duration-200"
                    style={{
                      width: `${zoom * 100}%`,
                      minWidth: '100%',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {buyProductIndex !== null && (
        <div
          className="fixed inset-0 z-[120] bg-black/88 p-4 md:p-8"
          onClick={closeBuyForm}
          role="dialog"
          aria-modal="true"
          aria-label="Purchase request form"
        >
          <div
            className="mx-auto w-full max-w-xl rounded-md border bg-black/90 p-4 md:p-6"
            style={{ borderColor: 'var(--ui-separator)' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--ui-text)' }}>
                Buy Print #{buyProductIndex + 1}
              </p>
              <button
                onClick={closeBuyForm}
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: 'var(--ui-text-muted)' }}
              >
                Close
              </button>
            </div>

            <form onSubmit={submitOrderEmail} className="space-y-3">
              <label htmlFor="buyer-name" className="sr-only">
                Name
              </label>
              <input
                id="buyer-name"
                required
                type="text"
                placeholder="Name"
                autoComplete="name"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded border px-3 py-2 text-sm outline-none"
                style={{ borderColor: 'var(--ui-separator)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--ui-text)' }}
              />
              <label htmlFor="buyer-email" className="sr-only">
                Email
              </label>
              <input
                id="buyer-email"
                required
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded border px-3 py-2 text-sm outline-none"
                style={{ borderColor: 'var(--ui-separator)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--ui-text)' }}
              />
              <label htmlFor="buyer-shipping" className="sr-only">
                City and Country for shipping
              </label>
              <input
                id="buyer-shipping"
                required
                type="text"
                placeholder="City / Country for shipping"
                autoComplete="address-level2"
                value={formData.shippingLocation}
                onChange={(event) => setFormData((prev) => ({ ...prev, shippingLocation: event.target.value }))}
                className="w-full rounded border px-3 py-2 text-sm outline-none"
                style={{ borderColor: 'var(--ui-separator)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--ui-text)' }}
              />
              <label htmlFor="buyer-note" className="sr-only">
                Optional note
              </label>
              <textarea
                id="buyer-note"
                placeholder="Optional note"
                value={formData.note}
                onChange={(event) => setFormData((prev) => ({ ...prev, note: event.target.value }))}
                className="h-24 w-full resize-none rounded border px-3 py-2 text-sm outline-none"
                style={{ borderColor: 'var(--ui-separator)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--ui-text)' }}
              />
              <button
                type="submit"
                className="w-full rounded border px-3 py-2 text-xs uppercase tracking-[0.2em]"
                style={{ borderColor: 'var(--ui-separator)', color: 'var(--ui-text)' }}
              >
                Send Purchase Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
