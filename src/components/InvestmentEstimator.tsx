import React, { useState } from 'react';
import { Sparkles, Calculator, ArrowUpRight, CheckCircle2, Loader2, Compass, Cpu } from 'lucide-react';
import { AiBriefResult } from '../types';

interface InvestmentEstimatorProps {
  onOpenConsultationModal: (briefContext?: string) => void;
}

export const InvestmentEstimator: React.FC<InvestmentEstimatorProps> = ({ onOpenConsultationModal }) => {
  const [area, setArea] = useState<number>(850);
  const [projectType, setProjectType] = useState<string>('Residência Unifamiliar de Luxo');
  const [finishGrade, setFinishGrade] = useState<string>('Autoral Brutalista');
  const [location, setLocation] = useState<string>('São Paulo / Alphaville');
  const [vision, setVision] = useState<string>('Mansão minimalista com balanço de concreto de 12 metros, caixilharia de piso a teto e integração total com a mata nativa.');
  
  const [loadingAi, setLoadingAi] = useState<boolean>(false);
  const [aiBrief, setAiBrief] = useState<AiBriefResult | null>(null);

  // Dynamic cost calculation
  const getBaseRate = () => {
    switch (finishGrade) {
      case 'Exclusivo Vande':
        return { min: 6500, max: 8500 };
      case 'Padrão Vande Superior':
        return { min: 8500, max: 12000 };
      case 'Alto Padrão / Estrutura Complexa':
        return { min: 12000, max: 18500 };
      default:
        return { min: 8500, max: 12000 };
    }
  };

  const rate = getBaseRate();
  const minCost = area * rate.min;
  const maxCost = area * rate.max;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  const handleGenerateAiBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingAi(true);
    setAiBrief(null);

    try {
      const response = await fetch('/api/ai-architect-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType,
          areaM2: area,
          location,
          stylePreference: finishGrade,
          visionDescription: vision
        })
      });

      const data = await response.json();
      if (data && data.brief) {
        setAiBrief(data.brief);
      }
    } catch (err) {
      console.error("AI Brief error:", err);
      // Fallback response if offline/error
      setAiBrief({
        title: `Diretriz de Engenharia Vande: ${projectType}`,
        estimatedInvestment: `${formatCurrency(minCost)} - ${formatCurrency(maxCost)}`,
        structuralHighlight: "Estrutura autoportante em concreto armado com balanços e soluções em aço de alta resistência.",
        sustainabilityFactor: "Planejamento térmico e acústico com reaproveitamento hídrico e eficiência energética.",
        executionTimeline: "12 a 16 meses com acompanhamento técnico contínuo.",
        recommendedMaterials: ["Concreto Aparente", "Caixilharia de Alumínio Anodizado", "Vidro Laminado Duplo", "Revestimentos Portobello"],
        curatorMessage: "O conceito possui viabilidade executiva garantida. Agende uma reunião presencial ou online com o diretor de obras da Vande Construções."
      });
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <section id="calculadora" className="py-28 bg-[#0A1128] relative border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <Cpu className="w-4 h-4 text-[#FF6B00]" />
            <span>Simulador de Orçamento Inteligente</span>
          </div>
          <h2 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#FFFFFF] mb-4">
            ESTIMATIVA &amp; <span className="text-orange-gradient">DIRETRIZ TÉCNICA IA</span>
          </h2>
          <p className="text-slate-300 text-sm font-normal leading-relaxed">
            Simule parâmetros de investimento e obtenha um parecer preliminar de viabilidade de engenharia gerado por nossa inteligência técnica da Vande Construções.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-[#101B3B] border border-[#FF6B00]/30 p-8 sm:p-10 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-montserrat text-xl font-bold uppercase text-[#FFFFFF] flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#FF6B00]" />
                <span>Parâmetros da Obra</span>
              </h3>
              <span className="text-[10px] text-[#FF6B00] uppercase tracking-widest bg-[#0A1128] px-2.5 py-1 border border-[#FF6B00]/40 font-bold">
                Simulação On-line
              </span>
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2 font-bold">
                Tipo de Obra
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#0A1128] border border-white/20 text-sm text-[#FFFFFF] px-4 py-3 rounded-none focus:outline-none focus:border-[#FF6B00] transition-colors cursor-pointer"
              >
                <option value="Residência Unifamiliar de Luxo">Residência Unifamiliar de Luxo</option>
                <option value="Edifício Emblemático / Residencial">Edifício Emblemático / Residencial</option>
                <option value="Loft / Interiores Autorais de Luxo">Loft / Interiores Autorais de Luxo</option>
                <option value="Sede Corporativa / Hotel Boutique">Sede Corporativa / Hotel Boutique</option>
              </select>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                  Área Construída Pretendida (m²)
                </label>
                <span className="font-montserrat text-lg font-black text-[#FF6B00]">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={4000}
                step={50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#FF6B00] bg-[#0A1128] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>200 m²</span>
                <span>2.000 m²</span>
                <span>4.000 m²</span>
              </div>
            </div>

            {/* Finish Grade */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2 font-bold">
                Padrão Construtivo e Complexidade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Exclusivo Vande', label: 'Exclusivo' },
                  { id: 'Padrão Vande Superior', label: 'Superior' },
                  { id: 'Alto Padrão / Estrutura Complexa', label: 'Alto Padrão' },
                ].map((grade) => (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => setFinishGrade(grade.id)}
                    className={`py-3 px-3 text-xs uppercase tracking-wider font-bold transition-all border ${
                      finishGrade === grade.id
                        ? 'bg-[#FF6B00] text-[#FFFFFF] border-[#FF6B00]'
                        : 'bg-[#0A1128] text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {grade.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2 font-bold">
                Cidade ou Condomínio
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ex: Alphaville SP, Jardins SP, Quinta da Baroneza, Leblon RJ..."
                className="w-full bg-[#0A1128] border border-white/20 text-sm text-[#FFFFFF] px-4 py-3 rounded-none focus:outline-none focus:border-[#FF6B00] transition-colors"
              />
            </div>

            {/* Vision Prompt */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2 font-bold">
                Visão Inicial da Obra (Análise IA Vande)
              </label>
              <textarea
                rows={3}
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                placeholder="Descreva particularidades do terreno, vãos desejados, piscina suspensa, acabamentos..."
                className="w-full bg-[#0A1128] border border-white/20 text-sm text-[#FFFFFF] p-4 rounded-none focus:outline-none focus:border-[#FF6B00] transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleGenerateAiBrief}
              disabled={loadingAi}
              className="w-full py-4 bg-[#FF6B00] text-[#FFFFFF] font-montserrat font-bold text-xs uppercase tracking-widest hover:bg-[#E05D00] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,107,0,0.35)] disabled:opacity-50"
            >
              {loadingAi ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analisando Engenharia Vande Construções...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Gerar Parecer e Diretriz Técnica IA</span>
                </>
              )}
            </button>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-[#101B3B] border border-[#FF6B00]/40 p-8 sm:p-10 flex flex-col justify-between min-h-[560px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B00]/15 to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Estimativa &amp; Parecer de Engenharia
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {area}m² • {finishGrade}
                </span>
              </div>

              {/* Main Estimated Cost Card */}
              <div className="p-6 bg-[#0A1128] border border-[#FF6B00]/30 mb-6">
                <span className="text-xs text-slate-300 uppercase tracking-widest block mb-1 font-semibold">
                  Faixa de Investimento Estimada
                </span>
                <div className="font-montserrat text-2xl sm:text-3xl font-black text-orange-gradient tracking-tight">
                  {formatCurrency(minCost)} — {formatCurrency(maxCost)}
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  * Estimativa completa para projeto executivo, gestão de obra, engenharia estrutural, fundações e acabamentos.
                </p>
              </div>

              {/* AI Brief Response */}
              {aiBrief ? (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <div className="border-l-2 border-[#FF6B00] pl-4 py-1">
                    <h4 className="font-montserrat text-lg font-bold uppercase text-[#FFFFFF]">
                      {aiBrief.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-normal mt-1">
                      Prazo Estimado de Execução: <strong className="text-white">{aiBrief.executionTimeline}</strong>
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-200">
                    <div className="bg-[#0A1128] p-3 border border-white/10">
                      <span className="text-[10px] text-[#FF6B00] uppercase font-bold block mb-1">
                        Análise de Engenharia Estrutural:
                      </span>
                      <p>{aiBrief.structuralHighlight}</p>
                    </div>

                    <div className="bg-[#0A1128] p-3 border border-white/10">
                      <span className="text-[10px] text-[#FF6B00] uppercase font-bold block mb-1">
                        Sustentabilidade &amp; Eficiência:
                      </span>
                      <p>{aiBrief.sustainabilityFactor}</p>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-300 uppercase font-bold block mb-1">
                        Materiais Recomendados:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {aiBrief.recommendedMaterials.map((mat, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-[#0A1128] border border-white/15 text-[10px] text-slate-200">
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A1128] border border-[#FF6B00]/40 flex items-center justify-center mx-auto text-[#FF6B00]">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto font-normal">
                    Clique em <strong>"Gerar Parecer e Diretriz Técnica IA"</strong> para receber uma análise técnica preliminar da Vande Construções.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <button
                onClick={() => {
                  const briefContext = `Simulação Vande para ${area}m² em ${location}. Faixa estimada: ${formatCurrency(minCost)} - ${formatCurrency(maxCost)}.`;
                  onOpenConsultationModal(briefContext);
                }}
                className="w-full py-3.5 bg-[#FF6B00] text-[#FFFFFF] text-xs font-montserrat font-bold uppercase tracking-widest hover:bg-[#E05D00] transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <span>Enviar Orçamento para Diretoria Vande</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
