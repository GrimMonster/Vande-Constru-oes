import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-mesh-dark border-b border-[#FF6B00]/20">
      {/* Background Hero Image with Dark Editorial Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-35 grayscale hover:grayscale-0 transition-all duration-1000">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=2000&q=90"
          alt="Canteiro de obras e engenharia civil de alto padrão Vande Construções"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Gradients to blend seamless into navy background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-transparent to-[#0A1128]" />
        
        {/* Editorial Frame Line Watermark */}
        <div className="absolute inset-8 border border-[#FF6B00]/10 pointer-events-none flex items-center justify-center">
          <div className="w-[85%] h-[75%] border border-dashed border-[#FF6B00]/15 flex items-center justify-center italic text-[#FF6B00]/20 text-[10px] tracking-[0.4em] uppercase font-mono">
            VANDE CONSTRUÇÕES — ENGENHARIA DE EXCELÊNCIA
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12">
        {/* Editorial Eyebrow & Google Rating Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <p className="text-[#FF6B00] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" />
            <span>Vande Construções • Rio Negro, Paraná</span>
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101B3B] border border-[#FF6B00]/40 rounded-none text-xs font-bold text-amber-400">
            <span>⭐⭐⭐⭐⭐ 5,0 no Google</span>
            <span className="text-slate-400 font-normal text-[10px]">(4 avaliações)</span>
          </div>
        </div>

        {/* Main Headline Reveal */}
        <div className="max-w-5xl">
          <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-black tracking-tight uppercase text-[#FFFFFF] leading-[0.92] mb-8">
            CONSTRUÍMOS COM <br />
            <span className="text-transparent stroke-orange drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]">
              EXCELÊNCIA &amp; RIGOR
            </span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 mb-12">
            {/* Magnetic Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultationModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF6B00] border border-[#FF6B00] text-[#FFFFFF] text-xs uppercase tracking-[0.25em] font-extrabold hover:bg-[#E05D00] transition-all duration-300 shadow-[0_0_25px_rgba(255,107,0,0.3)]"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#101B3B] border border-[#FF6B00]/40 hover:border-[#FF6B00] text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 hover:text-[#FF6B00] transition-all duration-300"
              >
                <span>Ver Nossas Obras</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed border-l-2 border-[#FF6B00] pl-4">
              "Construtora com vasta experiência, juntando o custo e qualidade ideal para o cliente."
              <span className="block text-[11px] text-slate-400 font-mono tracking-wider mt-2 uppercase">
                • Mais de 18 anos de tradição em Rio Negro, PR e região
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
