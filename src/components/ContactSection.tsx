import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, Send } from 'lucide-react';

interface ContactSectionProps {
  initialContext?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialContext }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    area: '',
    projectType: 'Residencial de Luxo',
    message: initialContext ? `Contexto da simulação Vande: ${initialContext}` : ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-28 bg-[#0A1128] relative border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                <span className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_8px_#FF6B00]" />
                <span>Atendimento Direto</span>
              </div>
              <h2 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight text-[#FFFFFF] uppercase mb-6 leading-tight">
                INICIE SEU PROJETO <br />
                <span className="text-orange-gradient">COM A VANDE</span>
              </h2>
              <p className="text-slate-300 text-sm font-normal leading-relaxed">
                Agende uma conversa técnica com os engenheiros diretores da Vande Construções. Analisamos a viabilidade do seu terreno, prazos e estimativa de investimento com total transparência.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href="https://wa.me/5547997269774?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20obra%20com%20a%20Vande%20Construções."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#101B3B] border border-[#FF6B00]/40 hover:border-[#FF6B00] transition-all duration-300 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-[#0A1128] flex items-center justify-center text-[#FF6B00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold block">
                      WhatsApp &amp; Telefone Direto
                    </span>
                    <span className="text-xs text-slate-100 font-mono font-bold">
                      (47) 99726-9774
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#FF6B00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="p-4 bg-[#101B3B] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#0A1128] flex items-center justify-center text-[#FF6B00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block">
                    Atendimento Corporativo
                  </span>
                  <span className="text-xs text-slate-200 font-mono font-medium">
                    contato@vandeconstrucoes.com.br
                  </span>
                </div>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">
                Localização &amp; Atendimento
              </span>
              <div className="space-y-2.5 text-xs text-slate-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>Endereço:</strong> R. Cristiano Buch, 545 - Passa Três, Rio Negro - PR, 83880-000</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>Horário:</strong> Segunda a Sexta: 08:00 — 18:00</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>Atendimento:</strong> Rio Negro - PR, Mafra - SC e toda a região sul</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Minimalist Form */}
          <div className="lg:col-span-7 bg-[#101B3B] border border-[#FF6B00]/30 p-8 sm:p-12 relative shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-none bg-[#0A1128] border border-[#FF6B00] flex items-center justify-center mx-auto text-[#FF6B00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-montserrat text-2xl font-bold uppercase text-[#FFFFFF]">
                  ORÇAMENTO SOLICITADO COM SUCESSO
                </h3>

                <p className="text-sm text-slate-200 font-normal max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe de engenharia entrará em contato em breve para apresentar a melhor solução para sua obra.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-transparent border border-[#FF6B00] text-xs font-montserrat uppercase font-bold tracking-widest text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pb-4 border-b border-white/10">
                  <h3 className="font-montserrat text-xl font-bold uppercase text-[#FFFFFF]">
                    Formulário de Orçamento Vande
                  </h3>
                  <p className="text-xs text-slate-300 font-normal mt-1">
                    Preencha os detalhes para receber nosso atendimento técnico especializado.
                  </p>
                </div>

                {/* Single line inputs */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-slate-300 mb-1 font-bold">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-2 text-sm text-[#FFFFFF] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-slate-300 mb-1 font-bold">
                      E-mail ou WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="seu.email@dominio.com ou (11) 9..."
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-2 text-sm text-[#FFFFFF] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-slate-300 mb-1 font-bold">
                      Localização da Obra
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Cidade / Condomínio"
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-2 text-sm text-[#FFFFFF] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-slate-300 mb-1 font-bold">
                      Área Aprox. (m²)
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="Ex: 800 m²"
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-2 text-sm text-[#FFFFFF] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-slate-300 mb-1 font-bold">
                      Tipo de Serviço
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-2 text-sm text-[#FFFFFF] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Residencial de Luxo" className="bg-[#0A1128]">Construção Residencial</option>
                      <option value="Edifício Emblemático" className="bg-[#0A1128]">Edifício / Empreendimento</option>
                      <option value="Interiores Autorais" className="bg-[#0A1128]">Reforma &amp; Retrofit</option>
                      <option value="Obra Corporativa / Hotel" className="bg-[#0A1128]">Obra Corporativa / Comercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-slate-300 mb-1 font-bold">
                    Detalhes e Expectativa de Prazo
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos detalhes do projeto, prazos ou exigências específicas..."
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] py-2 text-sm text-[#FFFFFF] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF6B00] text-[#FFFFFF] font-montserrat font-bold text-xs uppercase tracking-widest hover:bg-[#E05D00] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,107,0,0.35)] mt-4"
                >
                  <span>Solicitar Reunião com Engenheiro Vande</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
