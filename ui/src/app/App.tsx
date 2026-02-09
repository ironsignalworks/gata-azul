import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { PortfolioPage } from './components/PortfolioPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'store' | 'portfolio' | 'contact'>('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    }

    if (currentPage === 'portfolio') {
      return <PortfolioPage />;
    }

    const titles: Record<'store' | 'contact', string> = {
      store: 'Store',
      contact: 'Contact',
    };

    return (
      <section className="flex h-full items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl uppercase tracking-[0.2em] md:text-5xl">{titles[currentPage]}</h1>
        </div>
      </section>
    );
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-black text-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 overflow-hidden pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
