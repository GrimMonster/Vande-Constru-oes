import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickContactBar } from './components/QuickContactBar';
import { AboutCompany } from './components/AboutCompany';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedContext, setSelectedContext] = useState<string>('');

  const handleOpenConsultationModal = (contextMessage?: string) => {
    if (contextMessage) {
      setSelectedContext(contextMessage);
    }
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8FAFC] selection:bg-[#FF6B00]/30 selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      {/* Main Top Navigation */}
      <Navbar onOpenConsultationModal={() => handleOpenConsultationModal()} />

      <main>
        {/* Hero */}
        <Hero onOpenConsultationModal={() => handleOpenConsultationModal()} />

        {/* Quick Contact Bar */}
        <QuickContactBar />

        {/* Institucional / Sobre a Empresa com Missão, Visão, Objetivos e Obras */}
        <AboutCompany />

        {/* Obras & Fotos / Portfolio Section */}
        <PortfolioGallery onOpenConsultationModal={(title) => handleOpenConsultationModal(title ? `Interesse no projeto: ${title}` : undefined)} />

        {/* Contato Direct & Form */}
        <ContactSection initialContext={selectedContext} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


