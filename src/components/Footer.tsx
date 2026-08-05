import React from 'react';
import { Compass, Instagram, Linkedin, Globe, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1128] text-[#FFFFFF] border-t border-[#FF6B00]/20 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-none bg-[#FF6B00] flex items-center justify-center font-montserrat font-black text-[#FFFFFF] text-xl tracking-tighter">
                VC
              </div>
              <div>
                <span className="font-montserrat text-xl font-black tracking-wider text-[#FFFFFF] block leading-none uppercase">
                  VANDE CONSTRUÇÕES
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6B00] font-bold block mt-1">
                  ENGENHARIA &amp; ALTO PADRÃO
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-normal max-w-sm leading-relaxed">
              Empresa de engenharia e construção civil de alto padrão. Especialistas em obras residenciais, comerciais, reformas e gerenciamento técnico rigoroso.
            </p>

            <div className="pt-2 text-[11px] text-[#FF6B00] font-mono italic font-semibold">
              "Construindo sonhos com solidez, precisão e compromisso absoluto."
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold block mb-3">
              Navegação
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-[#FF6B00] transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-[#FF6B00] transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-[#FF6B00] transition-colors">Obras Realizadas</a></li>
              <li><a href="#calculadora" className="hover:text-[#FF6B00] transition-colors">Simulador de Orçamento</a></li>
              <li><a href="#filosofia" className="hover:text-[#FF6B00] transition-colors">Método Executivo</a></li>
              <li><a href="#contato" className="hover:text-[#FF6B00] transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold block mb-3">
              Redes &amp; Contato
            </span>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#101B3B] border border-white/10 hover:border-[#FF6B00] text-slate-300 hover:text-[#FF6B00] transition-all"
                title="Instagram Vande Construções"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#101B3B] border border-white/10 hover:border-[#FF6B00] text-slate-300 hover:text-[#FF6B00] transition-all"
                title="LinkedIn Vande Construções"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5547997269774?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20Vande%20Construções."
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#101B3B] border border-white/10 hover:border-[#FF6B00] text-slate-300 hover:text-[#FF6B00] transition-all"
                title="WhatsApp (47) 99726-9774"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[10px] text-slate-300 space-y-1 font-mono">
              <div>📍 R. Cristiano Buch, 545 - Passa Três, Rio Negro - PR</div>
              <div>📞 (47) 99726-9774 • CREA-PR Registrado</div>
              <div>⭐ 5,0 Avaliação Máxima no Google (4 Avaliações)</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Vande Construções. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer">Termos de Uso</span>
            <span className="hover:text-slate-200 cursor-pointer">Política de Privacidade</span>
            <span className="text-[#FF6B00] font-bold">Vande Construções</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
