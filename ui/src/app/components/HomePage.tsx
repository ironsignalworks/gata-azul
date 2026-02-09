import { Logo } from './Logo';

export function HomePage() {
  return (
    <section className="flex h-full items-center justify-center px-8">
      <div className="flex w-full max-w-3xl -translate-y-[5%] flex-col items-center">
        <Logo />
      </div>
    </section>
  );
}
