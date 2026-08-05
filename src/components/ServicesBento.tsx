import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { Layers, PenTool, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesBentoProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FF6B00]" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-[#FF6B00]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF6B00]" />;
      default:
        return <Layers className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#0A1128] relative border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_8px_#FF6B00]" />
              <span>Especialidades Vande</span>
            </div>
            <h2 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#FFFFFF]">
              SOLUÇÕES EM <span className="text-orange-gradient">ENGENHARIA E CONSTRUÇÃO</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md font-normal leading-relaxed">
            Do planejamento de fundações e cálculo estrutural até a gestão completa e entrega da chave na mão, a Vande garante qualidade máxima e pontualidade.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedServiceForModal(service)}
              className={`group relative p-8 bg-[#101B3B] border border-[#FF6B00]/25 hover:border-[#FF6B00] transition-all duration-500 rounded-none cursor-pointer overflow-hidden flex flex-col justify-between ${
                service.span || 'md:col-span-1'
              }`}
            >
              {/* Subtle Orange Accent Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-[#0A1128] border border-[#FF6B00]/40 group-hover:border-[#FF6B00] transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  
                  {/* Editorial Boxed Number Badge */}
                  <div className="w-8 h-8 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] font-mono text-xs font-bold group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="font-montserrat text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] mb-3 group-hover:text-[#FF6B00] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#FF6B00]/20 flex items-center justify-between mt-auto">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6B00] font-bold flex items-center gap-1">
                  Especificações do Serviço
                </span>
                <div className="w-8 h-8 rounded-none border border-[#FF6B00]/40 flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-[#FFFFFF] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-slate-200 group-hover:text-[#FFFFFF]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Specification Drawer Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#101B3B] border border-[#FF6B00]/50 max-w-2xl w-full p-8 sm:p-10 relative shadow-[0_0_50px_rgba(255,107,0,0.2)]">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#0A1128] border border-[#FF6B00]/40">
                {getIcon(selectedServiceForModal.iconName)}
              </div>
              <h3 className="font-montserrat text-2xl font-bold uppercase text-[#FFFFFF]">
                {selectedServiceForModal.title}
              </h3>
            </div>

            <p className="text-sm text-slate-200 font-normal leading-relaxed mb-6">
              {selectedServiceForModal.fullDesc}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
              Diferenciais &amp; Entregáveis Vande:
            </h4>

            <ul className="space-y-3 mb-8">
              {selectedServiceForModal.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="px-5 py-2.5 text-xs uppercase tracking-widest text-slate-400 hover:text-white"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  const service = selectedServiceForModal;
                  setSelectedServiceForModal(null);
                  onSelectService(service);
                }}
                className="px-6 py-2.5 bg-[#FF6B00] text-[#FFFFFF] text-xs font-montserrat font-bold uppercase tracking-widest hover:bg-[#E05D00] transition-colors shadow-md"
              >
                Solicitar Diagnóstico Vande
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
