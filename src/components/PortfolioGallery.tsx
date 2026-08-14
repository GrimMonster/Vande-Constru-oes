import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal, Hand } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenConsultationModal?: (projectTitle?: string) => void;
}

// Real high-resolution project & construction imagery from Vande Construções
const SHOWCASE_IMAGES = [
  {
    id: 'proj-1',
    src: 'https://lh3.googleusercontent.com/d/10PonwKPwY2XgNej8fkYn_6ipehcEAKB1',
    alt: 'Obra Vande Construções - Residencial de Alto Padrão'
  },
  {
    id: 'proj-2',
    src: 'https://lh3.googleusercontent.com/d/1CZrVvUCIH_gx-lKeGK3C4QMZsN1B2oFQ',
    alt: 'Obra Vande Construções - Casa Alvenaria'
  },
  {
    id: 'proj-3',
    src: 'https://lh3.googleusercontent.com/d/1tIQy8xAq1fdyLM-LdXHtuI-0cXn4PU7w',
    alt: 'Obra Vande Construções - Edifício Comercial Irmãos Rodrigues'
  },
  {
    id: 'proj-4',
    src: 'https://lh3.googleusercontent.com/d/1nvnEanV_FPLgjTsJdWky4-vg-e-ZLPDq',
    alt: 'Obra Vande Construções - Condomínio Jardim América'
  },
  {
    id: 'proj-5',
    src: 'https://lh3.googleusercontent.com/d/18GFApJ-k80VtNnz6xVzVtH0gO6e3XKd0',
    alt: 'Obra Vande Construções - Detalhes Estruturais'
  },
  {
    id: 'proj-6',
    src: 'https://lh3.googleusercontent.com/d/1KSWy0aAzmCri_tjY01DiGTk2EKW5aeKR',
    alt: 'Obra Vande Construções - Acabamentos e Interiores'
  },
  {
    id: 'proj-7',
    src: 'https://lh3.googleusercontent.com/d/1tiz9Gbdr4kafxhkOj9Aps6EQc3ujV3PI',
    alt: 'Obra Vande Construções - Estrutura Comercial'
  },
  {
    id: 'proj-8',
    src: 'https://lh3.googleusercontent.com/d/1Bqv8zGJ_20lvgC6rbJ3CqMN5hip45AxS',
    alt: 'Obra Vande Construções - Engenharia e Execução'
  },
  {
    id: 'proj-9',
    src: 'https://lh3.googleusercontent.com/d/1sSpNtotDQXb22743JJaZ59vbWNmT9eXf',
    alt: 'Obra Vande Construções - Infraestrutura'
  },
  {
    id: 'proj-10',
    src: 'https://lh3.googleusercontent.com/d/1yHlXX9PQcf3UeQ_THxKpDEMcLi3b5Rf7',
    alt: 'Obra Vande Construções - Espaço Comercial'
  }
];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMouseDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);

  // Center a slide by index
  const scrollToItem = useCallback((index: number, smooth: boolean = true) => {
    const container = containerRef.current;
    const targetItem = itemRefs.current[index];
    if (!container || !targetItem) return;

    const containerCenter = container.clientWidth / 2;
    const itemCenter = targetItem.offsetLeft + targetItem.offsetWidth / 2;
    const targetScrollLeft = itemCenter - containerCenter;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: smooth ? 'smooth' : 'auto'
    });
    setActiveIndex(index);
  }, []);

  // Calculate the active centered slide dynamically based on scroll offset
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial position to center the first item properly
    const timeout = setTimeout(() => {
      scrollToItem(0, false);
      handleScroll();
    }, 100);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeout);
    };
  }, [handleScroll, scrollToItem]);

  // Mouse Drag (Desktop)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    isMouseDownRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
    dragDistanceRef.current = 0;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownRef.current) return;
    const container = containerRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.35;
    dragDistanceRef.current = Math.abs(walk);

    if (Math.abs(walk) > 6) {
      setIsDragging(true);
      setHasInteracted(true);
    }

    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    if (!isMouseDownRef.current) return;
    isMouseDownRef.current = false;

    // Smoothly snap to the closest centered item
    setTimeout(() => {
      setIsDragging(false);
      const container = containerRef.current;
      if (!container) return;

      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      scrollToItem(closestIndex, true);
    }, 20);
  };

  const handleMouseLeave = () => {
    if (isMouseDownRef.current) {
      handleMouseUp();
    }
  };

  // Previous & Next navigation
  const handlePrev = () => {
    setHasInteracted(true);
    const nextIdx = activeIndex === 0 ? SHOWCASE_IMAGES.length - 1 : activeIndex - 1;
    scrollToItem(nextIdx, true);
  };

  const handleNext = () => {
    setHasInteracted(true);
    const nextIdx = activeIndex === SHOWCASE_IMAGES.length - 1 ? 0 : activeIndex + 1;
    scrollToItem(nextIdx, true);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <section 
      id="portfolio" 
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="py-24 sm:py-32 bg-[#0A1128] relative border-t border-[#FF6B00]/20 overflow-hidden select-none focus:outline-none"
    >
      {/* Background Ambience Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#FF6B00]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-12 w-96 h-96 bg-[#004488]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.25em] mb-3 font-mono">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_10px_#FF6B00]" />
              <span>Portfólio de Obras</span>
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#FFFFFF] uppercase">
              Projetos que <span className="text-[#FF6B00]">falam por nós</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal mt-3 max-w-xl leading-relaxed">
              Conheça alguns dos trabalhos realizados pela Vande Construções.
            </p>
          </div>

          {/* Controls & Interaction Guide */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {!hasInteracted && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#101B3B]/90 backdrop-blur-md border border-white/10 rounded-full text-slate-300 text-xs font-mono animate-pulse">
                <Hand className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Arraste para o lado</span>
              </div>
            )}

            {/* Desktop Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Projeto anterior"
                className="w-12 h-12 rounded-full bg-[#101B3B] border border-white/15 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Próximo projeto"
                className="w-12 h-12 rounded-full bg-[#101B3B] border border-white/15 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CAROUSEL (WITH OVERFLOW PREVIEW OF PREVIOUS & NEXT CARDS) */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`
            flex items-center gap-5 sm:gap-8 overflow-x-auto py-8 sm:py-12
            cursor-grab active:cursor-grabbing select-none
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          `}
          style={{
            paddingLeft: 'calc(50vw - 160px)',
            paddingRight: 'calc(50vw - 160px)',
            scrollSnapType: isDragging ? 'none' : 'x mandatory'
          }}
        >
          {SHOWCASE_IMAGES.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                onClick={() => {
                  if (dragDistanceRef.current < 6) {
                    scrollToItem(index, true);
                  }
                }}
                style={{ scrollSnapAlign: 'center' }}
                className={`
                  flex-none w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px]
                  aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden
                  transition-all duration-500 ease-out cursor-pointer relative
                  ${
                    isActive
                      ? 'scale-100 sm:scale-105 z-20 opacity-100 ring-2 ring-[#FF6B00]/80 shadow-[0_20px_60px_rgba(255,107,0,0.25),0_15px_35px_rgba(0,0,0,0.85)]'
                      : 'scale-90 sm:scale-92 z-10 opacity-35 hover:opacity-70 blur-[0.3px] hover:blur-none shadow-md'
                  }
                `}
              >
                {/* Visual Image Container - STRICTLY NO TEXT OVERLAY OR LABELS */}
                <div className="w-full h-full bg-[#101B3B] overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className={`
                      w-full h-full object-cover transition-transform duration-700 ease-out pointer-events-none
                      ${isActive ? 'scale-100' : 'scale-100'}
                    `}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Subtle Elegant Dark Edge Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />

                  {/* Highlight Border when Active */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[#FF6B00]/50 pointer-events-none" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PAGINATION INDICATORS & SUBTLE COUNTER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-6 sm:mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Gesture Reminder */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <MoveHorizontal className="w-4 h-4 text-[#FF6B00]" />
            <span>Deslize ou arraste para explorar todas as fotos</span>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center gap-2">
            {SHOWCASE_IMAGES.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => scrollToItem(index, true)}
                aria-label={`Ir para foto ${index + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-300 focus:outline-none
                  ${
                    activeIndex === index
                      ? 'w-8 bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }
                `}
              />
            ))}
          </div>

          {/* Slide Numeric Indicator */}
          <div className="text-xs font-mono text-slate-400">
            <span className="text-[#FF6B00] font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="mx-1">/</span>
            <span>{String(SHOWCASE_IMAGES.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
