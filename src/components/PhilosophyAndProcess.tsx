import React from 'react';
import { Shield, Compass, Layers, CheckCircle } from 'lucide-react';

export const PhilosophyAndProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico Topográfico & Geotécnico',
      desc: 'Análise criteriosa do solo, sondagem, estudo de drenagem e insolação para garantir segurança total da fundação à cobertura.'
    },
    {
      num: '02',
      title: 'Compatibilização & Cálculo Estrutural',
      desc: 'Integração completa dos projetos de arquitetura, estrutura e instalações elétricas/hidráulicas sem margem para erros.'
    },
    {
      num: '03',
      title: 'Gestão de Obras sem Aditivos',
      desc: 'Orçamento transparente, planejamento de suprimentos rigoroso e cronograma físico-financeiro cumprido à risca.'
    },
    {
      num: '04',
      title: 'Execução & Chave na Mão',
      desc: 'Engenheiro residente acompanhando o canteiro diariamente. Entrega com rígido controle de qualidade e garantia técnica Vande.'
    }
  ];

  return (
    <section id="filosofia" className="py-28 bg-[#0A1128] relative border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <span className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_8px_#FF6B00]" />
            <span>Processo Construtivo Vande</span>
          </div>
          <h2 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#FFFFFF] mb-6">
            NOSSO <span className="text-orange-gradient">MÉTODO EXECUTIVO</span>
          </h2>
          <p className="text-slate-300 text-sm font-normal leading-relaxed">
            A Vande Construções elimina o estresse do cliente gerenciando todas as fases da obra com transparência, rigor técnico e excelência em acabamentos.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-[#101B3B] border border-[#FF6B00]/25 hover:border-[#FF6B00] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-montserrat text-4xl font-black text-[#FF6B00]/40 block mb-4">
                  {step.num}
                </span>

                <h3 className="font-montserrat text-xl font-bold uppercase text-[#FFFFFF] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2 text-[10px] text-[#FF6B00] uppercase tracking-widest font-mono font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Padrão Vande</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
