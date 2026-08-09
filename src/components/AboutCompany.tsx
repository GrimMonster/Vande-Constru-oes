import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Target, Eye, Award, CheckCircle2, Phone, Mail, MapPin, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export const AboutCompany: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0A1128] relative border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <span className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_8px_#FF6B00]" />
            <span>Perfil Institucional &amp; Portfólio</span>
          </div>
          <h2 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#FFFFFF] mb-6">
            SOBRE A <span className="text-orange-gradient">VANDE CONSTRUÇÕES</span>
          </h2>
          <p className="text-slate-300 text-sm font-normal leading-relaxed">
            A empresa <strong className="text-white">{COMPANY_INFO.legalName}</strong> é uma construtora fundada em{' '}
            <span className="text-[#FF6B00] font-semibold">{COMPANY_INFO.foundedDate}</span> para atender com rigor e excelência clientes públicos e privados em Rio Negro/PR, Mafra/SC e região.
          </p>
        </div>

        {/* Info Grid: Founder & Summary Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-[#101B3B] border border-[#FF6B00]/30 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-4">
                <Building2 className="w-5 h-5" />
                <span>Tradição &amp; Qualidade Total</span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold uppercase text-white mb-4">
                Engenharia de Excelência sob Liderança Técnica
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {COMPANY_INFO.summary} Trabalhamos com colaboradores altamente treinados e motivados, operando sob um sistema rigoroso de qualidade em todas as etapas executivas.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Fundador &amp; Responsável</span>
                <span className="font-bold text-white text-sm">{COMPANY_INFO.founder}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Fundada em</span>
                <span className="font-bold text-[#FF6B00]">{COMPANY_INFO.foundedDate}</span>
              </div>
            </div>
          </div>

          {/* Contact Fast Card */}
          <div className="lg:col-span-5 bg-[#101B3B] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold block mb-4">
                Informações de Contato Direto
              </div>
              <ul className="space-y-4 text-xs text-slate-200 font-mono">
                <li className="flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Responsável Técnico</span>
                    <span className="font-semibold text-white">{COMPANY_INFO.founder}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Telefones</span>
                    <span className="font-semibold text-white">{COMPANY_INFO.phone} • {COMPANY_INFO.mobilePhone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">E-mail Oficial</span>
                    <span className="font-semibold text-white">{COMPANY_INFO.email}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Endereço Principal</span>
                    <span className="font-semibold text-white">{COMPANY_INFO.address}, CEP {COMPANY_INFO.cep} — {COMPANY_INFO.cityState}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#FF6B00] hover:bg-[#E05D00] text-white font-montserrat font-bold text-xs uppercase tracking-widest transition-colors"
              >
                <span>Chamar no WhatsApp ({COMPANY_INFO.mobilePhone})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Objective Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-[#101B3B] p-8 border border-white/10 hover:border-[#FF6B00] transition-all duration-300">
            <div className="w-12 h-12 bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="font-montserrat text-lg font-bold uppercase text-white mb-3">
              Missão
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              "{COMPANY_INFO.mission}"
            </p>
          </div>

          {/* Visão */}
          <div className="bg-[#101B3B] p-8 border border-white/10 hover:border-[#FF6B00] transition-all duration-300">
            <div className="w-12 h-12 bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="font-montserrat text-lg font-bold uppercase text-white mb-3">
              Visão
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

          {/* Objetivos */}
          <div className="bg-[#101B3B] p-8 border border-white/10 hover:border-[#FF6B00] transition-all duration-300">
            <div className="w-12 h-12 bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-montserrat text-lg font-bold uppercase text-white mb-3">
              Objetivos
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              "{COMPANY_INFO.objective}"
            </p>
          </div>
        </div>

        {/* Areas of Operation Box */}
        <div className="bg-[#101B3B] p-8 sm:p-10 border border-[#FF6B00]/30">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />
            <h3 className="font-montserrat text-xl font-black uppercase text-white">
              Áreas de Atuação Especializadas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANY_INFO.areasOfOperation.map((area, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#0A1128] border border-white/10 hover:border-[#FF6B00]/50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium leading-normal">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
