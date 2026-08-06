import React from 'react';
import { MessageSquare, ArrowUpRight, MapPin } from 'lucide-react';

interface ContactSectionProps {
  initialContext?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialContext }) => {
  const whatsappUrl = `https://wa.me/5547997269774?text=${encodeURIComponent(
    initialContext ? `Olá! ${initialContext}` : 'Olá! Vim pelo site da Vande Construções e gostaria de um orçamento.'
  )}`;

  return (
    <section id="contato" className="py-24 bg-[#0A1128] relative border-t border-[#FF6B00]/20 text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs uppercase tracking-[0.25em] text-[#FF6B00] font-bold block mb-3">
          Atendimento Rápido &amp; Direto
        </span>

        <h2 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight text-[#FFFFFF] uppercase mb-4">
          FALE COM A <span className="text-transparent stroke-orange">VANDE CONSTRUÇÕES</span>
        </h2>

        <p className="text-slate-300 text-sm max-w-lg mx-auto mb-10 font-normal leading-relaxed">
          Entre em contato diretamente pelo WhatsApp para tirar dúvidas, solicitar um orçamento ou agendar uma reunião técnica.
        </p>

        {/* Single Main WhatsApp Direct Button */}
        <div className="flex justify-center mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-5 bg-[#FF6B00] hover:bg-[#E05D00] text-white font-montserrat text-sm uppercase tracking-[0.2em] font-extrabold transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.35)]"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Falar no WhatsApp da Vande</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Minimal Location Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <MapPin className="w-4 h-4 text-[#FF6B00]" />
          <span>Rio Negro - PR • R. Cristiano Buch, 545 • (47) 99726-9774</span>
        </div>
      </div>
    </section>
  );
};
