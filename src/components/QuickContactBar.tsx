import React from 'react';
import { Phone, MapPin, Clock, Star, ArrowRight, MessageSquare } from 'lucide-react';

export const QuickContactBar: React.FC = () => {
  return (
    <section className="bg-[#101B3B] border-y border-[#FF6B00]/30 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/5547997269774?text=Olá!%20Vim%20pelo%20site%20da%20Vande%20Construções%20e%20gostaria%20de%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3 bg-[#0A1128] border border-[#FF6B00]/40 hover:border-[#FF6B00] transition-all group shadow-sm"
          >
            <div className="w-10 h-10 bg-[#FF6B00] flex items-center justify-center text-white shrink-0 font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF6B00] block">
                Atendimento Direto
              </span>
              <span className="text-sm font-bold text-white font-mono group-hover:text-[#FF6B00] transition-colors">
                (47) 99726-9774
              </span>
            </div>
          </a>

          {/* Location / Address */}
          <a
            href="https://maps.google.com/?q=R.+Cristiano+Buch,+545+-+Passa+Tres,+Rio+Negro+-+PR,+83880-000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3 bg-[#0A1128] border border-white/10 hover:border-[#FF6B00]/50 transition-all group"
          >
            <div className="w-10 h-10 bg-[#101B3B] border border-white/20 flex items-center justify-center text-[#FF6B00] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">
                Rio Negro - PR
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block group-hover:text-white transition-colors">
                R. Cristiano Buch, 545
              </span>
            </div>
          </a>

          {/* Rating */}
          <div className="flex items-center gap-3.5 p-3 bg-[#0A1128] border border-white/10">
            <div className="w-10 h-10 bg-[#101B3B] border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 font-bold">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                Google Reviews
              </span>
              <span className="text-xs font-bold text-slate-200 block">
                5,0 ★★★★★ <span className="text-slate-400 font-normal">(4 avaliações)</span>
              </span>
            </div>
          </div>

          {/* Hours & Direct Action */}
          <a
            href="https://wa.me/5547997269774?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vande%20Construções."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-[#FF6B00] text-white hover:bg-[#E05D00] transition-all font-bold text-xs uppercase tracking-wider shadow-md"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Solicitar Orçamento Rápido</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </div>
    </section>
  );
};
