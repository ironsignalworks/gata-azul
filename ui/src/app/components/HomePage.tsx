import { Logo } from './Logo';

export function HomePage() {
  return (
    <section className="flex h-full items-start justify-center px-8 pt-10 md:pt-2">
      <div className="mt-4 flex w-full max-w-4xl flex-col items-center md:-mt-6">
        <Logo />
      </div>
    </section>
  );
}
