import React, { useState } from 'react';
import { WORKS_MEDIA } from '../data/mockData';
import { WorkMedia } from '../types';
import { Maximize2, ArrowUpRight, X, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenConsultationModal: (projectTitle?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenConsultationModal }) => {
  const [selectedMedia, setSelectedMedia] = useState<WorkMedia | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);

  const handleOpenMediaLightbox = (media: WorkMedia, index: number) => {
    setSelectedMedia(media);
    setSelectedMediaIndex(index);
  };

  const handlePrevMedia = () => {
    const newIdx = selectedMediaIndex === 0 ? WORKS_MEDIA.length - 1 : selectedMediaIndex - 1;
    setSelectedMediaIndex(newIdx);
    setSelectedMedia(WORKS_MEDIA[newIdx]);
  };

  const handleNextMedia = () => {
    const newIdx = selectedMediaIndex === WORKS_MEDIA.length - 1 ? 0 : selectedMediaIndex + 1;
    setSelectedMediaIndex(newIdx);
    setSelectedMedia(WORKS_MEDIA[newIdx]);
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
              GALERIA DE <span className="text-orange-gradient">FOTOS E VÍDEOS</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md font-normal leading-relaxed">
            Confira os registros reais das obras e construções executadas com a marca de qualidade Vande Construções.
          </p>
        </div>

        {/* Unified Gallery of Media Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {WORKS_MEDIA.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenMediaLightbox(item, idx)}
              className="group relative bg-[#101B3B] border border-white/10 hover:border-[#FF6B00] cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-md"
            >
              {/* Thumbnail / Google Drive Preview Frame */}
              <div className="relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={item.thumbnailUrl}
                  alt="Foto / Vídeo de Obra Vande Construções"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Play/Expand Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Minimal Clean Subtitle */}
              <div className="p-3 bg-[#101B3B] border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-300 font-mono truncate">
                  {item.location}
                </span>
                <Maximize2 className="w-3.5 h-3.5 text-[#FF6B00] opacity-80 group-hover:opacity-100 flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Drive Media Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-[#101B3B] border border-[#FF6B00]/60 max-w-4xl w-full my-8 relative shadow-[0_0_90px_rgba(255,107,0,0.3)] overflow-hidden">
            {/* Close */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-30 p-3 bg-black/80 border border-white/20 text-white hover:text-[#FF6B00] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Player Frame */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
              <iframe
                src={selectedMedia.embedUrl}
                title="Visualização de Mídia - Vande Construções"
                className="w-full h-full border-0"
                allow="autoplay"
              />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrevMedia}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 text-white hover:bg-[#FF6B00] transition-all border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextMedia}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 text-white hover:bg-[#FF6B00] transition-all border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="bg-black/80 backdrop-blur-md px-3 py-1 text-xs text-slate-200 font-mono border border-white/10">
                  {selectedMediaIndex + 1} de {WORKS_MEDIA.length}
                </div>
              </div>
            </div>

            {/* Details Footer */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
                  VANDE CONSTRUÇÕES • {selectedMedia.location}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={selectedMedia.originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-[#0A1128] border border-white/20 hover:border-[#FF6B00] text-slate-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <span>Abrir no Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF6B00]" />
                </a>

                <button
                  onClick={() => {
                    setSelectedMedia(null);
                    onOpenConsultationModal('Obra Vande Construções');
                  }}
                  className="px-5 py-2.5 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-xs font-montserrat font-bold uppercase tracking-widest flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

