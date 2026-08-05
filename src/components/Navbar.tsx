import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, HardHat, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Vande', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Obras', href: '#portfolio' },
    { name: 'Diferenciais', href: '#filosofia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#0A1128]/95 backdrop-blur-md border-b border-[#FF6B00]/20 shadow-2xl'
          : 'py-6 bg-gradient-to-b from-[#0A1128]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-none bg-[#0F1C3F] border border-[#FF6B00]/50 flex items-center justify-center group-hover:border-[#FF6B00] transition-colors duration-300 shadow-md">
            <HardHat className="w-5 h-5 text-[#FF6B00] group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-montserrat text-xl font-black tracking-wider text-[#FFFFFF] group-hover:text-orange-gradient transition-colors">
              VANDE <span className="text-[#FF6B00]">CONSTRUÇÕES</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-300 font-semibold">
              Engenharia &amp; Construção
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-slate-300 hover:text-[#FF6B00] transition-colors duration-200 font-semibold relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/5547997269774?text=Olá,%20gostaria%20de%20falar%20com%20a%20equipe%20da%20Vande%20Construções%20sobre%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-none bg-[#101B3B] border border-white/10 text-slate-200 hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all duration-300"
            title="WhatsApp (47) 99726-9774"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          {/* Vande Orange CTA Button */}
          <button
            onClick={onOpenConsultationModal}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-none bg-[#FF6B00] border border-[#FF6B00] text-xs font-bold uppercase tracking-widest text-[#FFFFFF] overflow-hidden transition-all duration-300 hover:bg-[#E05D00] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-200 hover:text-[#FF6B00] focus:outline-none"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A1128]/98 backdrop-blur-xl border-b border-[#FF6B00]/20 px-6 py-8 shadow-2xl flex flex-col space-y-5 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-slate-200 hover:text-[#FF6B00] transition-colors py-2 border-b border-white/10 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-3 bg-[#FF6B00] text-[#FFFFFF] font-montserrat font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-[#E05D00]"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
