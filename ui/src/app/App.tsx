import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { PortfolioPage } from './components/PortfolioPage';
import { PsychedelicShaderBackground } from './components/PsychedelicShaderBackground';
import { ContactPage } from './components/ContactPage';
import { StorePage } from './components/StorePage';
import { BioPage } from './components/BioPage';
import { FlashPage } from './components/FlashPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'store' | 'portfolio' | 'flash' | 'contact' | 'bio'>('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    }

    if (currentPage === 'portfolio') {
      return <PortfolioPage />;
    }

    if (currentPage === 'contact') {
      return <ContactPage />;
    }

    if (currentPage === 'flash') {
      return <FlashPage />;
    }

    if (currentPage === 'bio') {
      return <BioPage />;
    }

    return <StorePage />;
  };

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-black" style={{ color: 'var(--ui-text)' }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-black focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <PsychedelicShaderBackground />
      <div className="absolute inset-0 z-10 bg-black/35" />
      <div className="relative z-20 flex h-screen flex-col overflow-hidden">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main id="main-content" className="flex-1 overflow-hidden pt-24 md:pt-16">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}
