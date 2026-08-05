import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SocialProofAndStats: React.FC = () => {
  return (
    <section className="py-28 bg-[#0A1128] relative border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Impact Banner */}
        <div className="bg-[#101B3B] border border-[#FF6B00]/50 p-10 sm:p-16 mb-20 relative overflow-hidden text-center shadow-[0_0_50px_rgba(255,107,0,0.2)]">
          <div className="absolute inset-0 bg-mesh-dark opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B00] font-bold block mb-4">
              Reconhecimento &amp; Qualidade
            </span>

            <h2 className="font-montserrat text-3xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] tracking-tight leading-tight uppercase mb-6">
              MAIS DE <span className="text-orange-gradient">500.000 M²</span> CONSTRUÍDOS COM EXCELÊNCIA
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Cada obra executada pela Vande Construções reflete nossa busca incessante por precisão orçamentária, segurança estrutural irrestrita e satisfação do cliente.
            </p>
          </div>
        </div>

        {/* Testimonials Header with Google Business Badge */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em]">
              <Quote className="w-4 h-4 text-[#FF6B00]" />
              <span>Avaliações Reais no Google My Business</span>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#101B3B] border border-[#FF6B00]/40 rounded-none">
              <span className="text-xl font-black text-amber-400 font-montserrat">5,0</span>
              <div className="flex flex-col">
                <span className="text-amber-400 text-xs font-bold tracking-widest">⭐⭐⭐⭐⭐</span>
                <span className="text-[10px] text-slate-300 font-medium">4 avaliações no Google • Rio Negro, PR</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 bg-[#101B3B] border border-[#FF6B00]/25 hover:border-[#FF6B00] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#FF6B00]/40 mb-4" />
                  <p className="text-xs sm:text-sm text-slate-200 font-normal italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-montserrat font-bold text-sm text-[#FFFFFF]">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#FF6B00] font-semibold">
                    {t.role}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {t.location} • {t.projectRef}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Certifications */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Sustentabilidade', val: 'Práticas Eco-Eficientes' },
            { label: 'Tecnologia em Obra', val: 'Gestão 100% Digital' },
            { label: 'Garantia Estrutural', val: 'Garantia de Engenharia' },
            { label: 'Transparência', val: 'Sem Custos Ocultos' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-[#101B3B] border border-[#FF6B00]/20">
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-medium">
                {item.label}
              </span>
              <span className="font-montserrat text-sm font-bold text-[#FF6B00]">
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
