import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { PortfolioPage } from './components/PortfolioPage';
import { PsychedelicShaderBackground } from './components/PsychedelicShaderBackground';
import { ContactPage } from './components/ContactPage';
import { StorePage } from './components/StorePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'store' | 'portfolio' | 'contact'>('home');

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

    return <StorePage />;
  };

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-black" style={{ color: 'var(--ui-text)' }}>
      <PsychedelicShaderBackground />
      <div className="absolute inset-0 z-10 bg-black/35" />
      <div className="relative z-20 flex h-screen flex-col overflow-hidden">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1 overflow-hidden pt-16">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}
