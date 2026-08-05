import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickContactBar } from './components/QuickContactBar';
import { ServicesBento } from './components/ServicesBento';
import { PortfolioGallery } from './components/PortfolioGallery';
import { InvestmentEstimator } from './components/InvestmentEstimator';
import { PhilosophyAndProcess } from './components/PhilosophyAndProcess';
import { SocialProofAndStats } from './components/SocialProofAndStats';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

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

  const handleSelectService = (service: ServiceItem) => {
    setSelectedContext(`Interesse específico no serviço: ${service.title}.`);
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8FAFC] selection:bg-[#FF6B00]/30 selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Main Top Navigation */}
      <Navbar onOpenConsultationModal={() => handleOpenConsultationModal()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenConsultationModal={() => handleOpenConsultationModal()} />

        {/* Quick Contact & Info Bar */}
        <QuickContactBar />

        {/* Services */}
        <ServicesBento onSelectService={handleSelectService} />

        {/* Portfolio Section */}
        <PortfolioGallery onOpenConsultationModal={(title) => handleOpenConsultationModal(title ? `Interesse no projeto: ${title}` : undefined)} />

        {/* Interactive Estimator & AI Brief Generator */}
        <InvestmentEstimator onOpenConsultationModal={(briefContext) => handleOpenConsultationModal(briefContext)} />

        {/* Method & Process */}
        <PhilosophyAndProcess />

        {/* Social Proof & Google Reviews */}
        <SocialProofAndStats />

        {/* Direct Contact & Form */}
        <ContactSection initialContext={selectedContext} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

