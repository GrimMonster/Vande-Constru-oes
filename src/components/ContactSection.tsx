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
          Entre em contato diretamente com Vanderlei Kurz para tirar dúvidas, solicitar orçamentos ou agendar uma reunião técnica para sua obra.
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-4 bg-[#101B3B] border border-white/10">
            <span className="text-[10px] uppercase font-bold text-[#FF6B00] block tracking-wider">Contato Responsável</span>
            <span className="text-sm font-bold text-white block mt-1">Vanderlei Kurz</span>
            <span className="text-xs text-slate-400 block font-mono mt-0.5">Cel: (47) 99726-9774</span>
          </div>
          <div className="p-4 bg-[#101B3B] border border-white/10">
            <span className="text-[10px] uppercase font-bold text-[#FF6B00] block tracking-wider">Telefone Fixo &amp; E-mail</span>
            <span className="text-xs font-bold text-white block mt-1 font-mono">Fixo: (47) 3642-5620</span>
            <span className="text-[11px] text-slate-300 block font-mono truncate mt-0.5">vandeconstrucoes2016@gmail.com</span>
          </div>
          <div className="p-4 bg-[#101B3B] border border-white/10">
            <span className="text-[10px] uppercase font-bold text-[#FF6B00] block tracking-wider">Endereço Principal</span>
            <span className="text-xs font-bold text-white block mt-1">Rua Cristiano Buch, 545</span>
            <span className="text-xs text-slate-400 block font-mono mt-0.5">Bairro Bom Jesus • CEP 83880-000 • Rio Negro - PR</span>
          </div>
        </div>

        {/* Single Main WhatsApp Direct Button */}
        <div className="flex justify-center mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-5 bg-[#FF6B00] hover:bg-[#E05D00] text-white font-montserrat text-sm uppercase tracking-[0.2em] font-extrabold transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.35)]"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Falar no WhatsApp com Vanderlei Kurz</span>
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
