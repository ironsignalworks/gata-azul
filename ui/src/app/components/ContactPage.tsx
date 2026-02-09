export function ContactPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-black tracking-wider mb-6" style={{ color: 'var(--foreground)' }}>
          CONTACT
        </h1>
        <div className="space-y-4 mt-12">
          <p className="text-sm tracking-widest">
            <a 
              href="mailto:studio@inkwell.com"
              className="transition-colors hover:text-[var(--tattoo-red)]"
            >
              studio@inkwell.com
            </a>
          </p>
          <p className="text-sm tracking-widest opacity-60">
            123 Main Street, Downtown
          </p>
          <p className="text-sm tracking-widest opacity-60">
            Open by appointment only
          </p>
        </div>
      </div>
    </div>
  );
}
