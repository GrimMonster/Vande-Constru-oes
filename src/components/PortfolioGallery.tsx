import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';
import { Maximize2, MapPin, Calendar, Layers, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenConsultationModal: (projectTitle?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenConsultationModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const filteredProjects = activeCategory === 'todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Todas as Obras' },
    { id: 'residencial', label: 'Residências de Alto Padrão' },
    { id: 'edificios', label: 'Edifícios & Empreendimentos' },
    { id: 'interiores', label: 'Interiores & Retrofit' },
    { id: 'corporativo', label: 'Obras Corporativas & Industriais' }
  ];

  const handleOpenLightbox = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const getProjectImages = (project: Project) => {
    return [project.imageUrl, ...(project.secondaryImages || [])];
  };

  return (
    <section id="portfolio" className="py-28 bg-[#0A1128] relative border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_8px_#FF6B00]" />
              <span>Acervo de Obras Vande</span>
            </div>
            <h2 className="font-montserrat text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#FFFFFF]">
              PORTFÓLIO DE <span className="text-orange-gradient">OBRAS ENTREGUES</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md font-normal leading-relaxed">
            Conheça algumas das obras executadas com a marca de qualidade Vande Construções. Rigor técnico, beleza arquitetônica e pontualidade exemplar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest font-bold transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#FF6B00] text-[#FFFFFF] shadow-[0_0_20px_rgba(255,107,0,0.35)]'
                  : 'bg-[#101B3B] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => handleOpenLightbox(project)}
              className={`group relative bg-[#101B3B] border border-[#FF6B00]/25 overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#FF6B00] flex flex-col ${
                idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Image with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B3B] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-none bg-[#0A1128]/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-[#FF6B00]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-slate-300 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF6B00]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FF6B00]" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-montserrat text-xl sm:text-2xl font-bold uppercase text-[#FFFFFF] mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal line-clamp-2 mb-4">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">
                  <span>Ver Detalhes da Obra</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-[#101B3B] border border-[#FF6B00]/50 max-w-5xl w-full my-8 relative shadow-[0_0_80px_rgba(255,107,0,0.25)] overflow-hidden">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-3 bg-black/70 rounded-none border border-white/20 text-white hover:text-[#FF6B00] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Gallery Image Slider */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden">
              <img
                src={getProjectImages(selectedProject)[activeImageIndex]}
                alt={selectedProject.title}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {getProjectImages(selectedProject).length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? getProjectImages(selectedProject).length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white hover:bg-[#FF6B00] transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === getProjectImages(selectedProject).length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white hover:bg-[#FF6B00] transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-xs text-slate-200 font-mono">
                {activeImageIndex + 1} / {getProjectImages(selectedProject).length}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold">
                    {selectedProject.category.toUpperCase()} • {selectedProject.area}
                  </span>
                  <h3 className="font-montserrat text-3xl font-black uppercase text-[#FFFFFF] mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-normal mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenConsultationModal(title);
                  }}
                  className="px-6 py-3 bg-[#FF6B00] text-[#FFFFFF] font-montserrat font-bold text-xs uppercase tracking-widest hover:bg-[#E05D00] transition-colors flex items-center gap-2 shadow-md"
                >
                  <span>Solicitar Obra Semelhante</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Description & Specs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Resumo do Projeto &amp; Execução
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4 bg-[#0A1128] p-6 border border-[#FF6B00]/30">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                    Especificações Técnicas
                  </h4>
                  <div className="space-y-3 text-xs text-slate-200">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-medium">Estrutura</span>
                      <span className="font-semibold">{selectedProject.specs.structure}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-medium">Prazo Vande</span>
                      <span className="font-semibold">{selectedProject.specs.timeline}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-medium">Diferencial</span>
                      <span className="font-bold text-[#FF6B00]">{selectedProject.specs.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
