import { useEffect, useRef, useState } from 'react';

export function StorePage() {
  const products = ['p1.webp', 'p2.webp', 'p3.webp', 'p4.webp'].map((file, index) => ({
    id: index + 1,
    src: `${import.meta.env.BASE_URL}${file}`,
  }));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [buyProductIndex, setBuyProductIndex] = useState<number | null>(null);
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

  const closeModal = () => setSelectedIndex(null);
  const closeBuyForm = () => setBuyProductIndex(null);

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
    <section className="flex h-full flex-col px-6 pb-6 pt-4 md:px-8">
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

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-2 gap-3 overflow-y-auto md:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col">
            <button
              onClick={() => setSelectedIndex(product.id - 1)}
              className="block h-full min-h-0 w-full overflow-hidden rounded-md border bg-black/40 p-2"
              style={{ borderColor: 'var(--ui-separator)' }}
            >
              <img src={product.src} alt={`Store item ${product.id}`} className="h-full w-full object-contain" />
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
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
          onTouchStart={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="mx-auto flex w-fit max-w-[calc(100vw-2rem)] flex-col"
            onClick={(event) => event.stopPropagation()}
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
                <p
                  className="mb-2 text-center text-xs uppercase tracking-[0.2em]"
                  style={{ color: 'var(--ui-text)' }}
                >
                  {selectedIndex + 1} / {products.length}
                </p>
                <img
                  src={products[selectedIndex].src}
                  alt={`Store item ${selectedIndex + 1}`}
                  className="block h-auto w-auto max-h-[calc(100vh-12rem)] max-w-[calc(100vw-2rem)] object-contain md:max-w-[calc(100vw-5rem)]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {buyProductIndex !== null && (
        <div className="fixed inset-0 z-[120] bg-black/88 p-4 md:p-8" onClick={closeBuyForm}>
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
              <input
                required
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded border px-3 py-2 text-sm outline-none"
                style={{ borderColor: 'var(--ui-separator)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--ui-text)' }}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded border px-3 py-2 text-sm outline-none"
                style={{ borderColor: 'var(--ui-separator)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--ui-text)' }}
              />
              <input
                required
                type="text"
                placeholder="City / Country for shipping"
                value={formData.shippingLocation}
                onChange={(event) => setFormData((prev) => ({ ...prev, shippingLocation: event.target.value }))}
                className="w-full rounded border px-3 py-2 text-sm outline-none"
                style={{ borderColor: 'var(--ui-separator)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--ui-text)' }}
              />
              <textarea
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
