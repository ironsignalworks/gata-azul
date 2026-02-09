import { Logo } from './Logo';

export function HomePage() {
  return (
    <section className="flex h-full items-center justify-center px-8">
      <div className="w-full max-w-3xl">
        <Logo />
      </div>
    </section>
  );
}
