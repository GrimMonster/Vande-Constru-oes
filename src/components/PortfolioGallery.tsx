import React, { useState, useRef, useEffect, useCallback } from 'react';
import { WORK_PHOTOS, WORK_VIDEOS } from '../data/mockData';
import {
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
  Hand,
  X,
  Maximize2,
  Camera,
  Video,
  Layers,
  ImageOff
} from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenConsultationModal?: (projectTitle?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'photos' | 'videos'>('both');

  // --- PHOTO CAROUSEL STATE ---
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [isDraggingPhoto, setIsDraggingPhoto] = useState<boolean>(false);
  const [hasInteractedPhoto, setHasInteractedPhoto] = useState<boolean>(false);
  const [modalPhotoIdx, setModalPhotoIdx] = useState<number | null>(null);
  const [failedPhotos, setFailedPhotos] = useState<Record<string, boolean>>({});

  const photoContainerRef = useRef<HTMLDivElement>(null);
  const photoItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMouseDownPhoto = useRef<boolean>(false);
  const startXPhoto = useRef<number>(0);
  const scrollLeftPhoto = useRef<number>(0);
  const dragDistPhoto = useRef<number>(0);

  // --- VIDEO CAROUSEL STATE ---
  const [activeVideoIdx, setActiveVideoIdx] = useState<number>(0);
  const [isDraggingVideo, setIsDraggingVideo] = useState<boolean>(false);
  const [hasInteractedVideo, setHasInteractedVideo] = useState<boolean>(false);
  const [modalVideo, setModalVideo] = useState<{ embedUrl: string; title: string } | null>(null);

  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMouseDownVideo = useRef<boolean>(false);
  const startXVideo = useRef<number>(0);
  const scrollLeftVideo = useRef<number>(0);
  const dragDistVideo = useRef<number>(0);

  // PHOTO CAROUSEL: Center slide by index
  const scrollToPhoto = useCallback((index: number, smooth: boolean = true) => {
    const container = photoContainerRef.current;
    const targetItem = photoItemRefs.current[index];
    if (!container || !targetItem) return;

    const containerCenter = container.clientWidth / 2;
    const itemCenter = targetItem.offsetLeft + targetItem.offsetWidth / 2;
    const targetScrollLeft = itemCenter - containerCenter;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: smooth ? 'smooth' : 'auto'
    });
    setActivePhotoIdx(index);
  }, []);

  const handlePhotoScroll = useCallback(() => {
    const container = photoContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    photoItemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActivePhotoIdx(closestIndex);
  }, []);

  // VIDEO CAROUSEL: Center slide by index
  const scrollToVideo = useCallback((index: number, smooth: boolean = true) => {
    const container = videoContainerRef.current;
    const targetItem = videoItemRefs.current[index];
    if (!container || !targetItem) return;

    const containerCenter = container.clientWidth / 2;
    const itemCenter = targetItem.offsetLeft + targetItem.offsetWidth / 2;
    const targetScrollLeft = itemCenter - containerCenter;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: smooth ? 'smooth' : 'auto'
    });
    setActiveVideoIdx(index);
  }, []);

  const handleVideoScroll = useCallback(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    videoItemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveVideoIdx(closestIndex);
  }, []);

  // Mount & Resize listeners
  useEffect(() => {
    const pContainer = photoContainerRef.current;
    const vContainer = videoContainerRef.current;

    const initTimeout = setTimeout(() => {
      if (pContainer) {
        scrollToPhoto(activePhotoIdx, false);
      }
      if (vContainer) {
        scrollToVideo(activeVideoIdx, false);
      }
    }, 80);

    if (pContainer) {
      pContainer.addEventListener('scroll', handlePhotoScroll, { passive: true });
    }
    if (vContainer) {
      vContainer.addEventListener('scroll', handleVideoScroll, { passive: true });
    }

    const onResize = () => {
      handlePhotoScroll();
      handleVideoScroll();
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(initTimeout);
      if (pContainer) pContainer.removeEventListener('scroll', handlePhotoScroll);
      if (vContainer) vContainer.removeEventListener('scroll', handleVideoScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [handlePhotoScroll, handleVideoScroll, scrollToPhoto, scrollToVideo, activeTab]);

  // Global keyboard support when modals are open
  useEffect(() => {
    if (modalPhotoIdx === null && modalVideo === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalPhotoIdx(null);
        setModalVideo(null);
      } else if (modalPhotoIdx !== null) {
        if (e.key === 'ArrowLeft') {
          setModalPhotoIdx((prev) =>
            prev === null ? null : prev === 0 ? WORK_PHOTOS.length - 1 : prev - 1
          );
        } else if (e.key === 'ArrowRight') {
          setModalPhotoIdx((prev) =>
            prev === null ? null : prev === WORK_PHOTOS.length - 1 ? 0 : prev + 1
          );
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalPhotoIdx, modalVideo]);

  // PHOTO DRAG HANDLERS
  const handleMouseDownPhoto = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = photoContainerRef.current;
    if (!container) return;
    isMouseDownPhoto.current = true;
    startXPhoto.current = e.pageX - container.offsetLeft;
    scrollLeftPhoto.current = container.scrollLeft;
    dragDistPhoto.current = 0;
    setIsDraggingPhoto(false);
  };

  const handleMouseMovePhoto = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownPhoto.current) return;
    const container = photoContainerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXPhoto.current) * 1.35;
    dragDistPhoto.current = Math.abs(walk);
    if (Math.abs(walk) > 6) {
      setIsDraggingPhoto(true);
      setHasInteractedPhoto(true);
    }
    container.scrollLeft = scrollLeftPhoto.current - walk;
  };

  const handleMouseUpPhoto = () => {
    if (!isMouseDownPhoto.current) return;
    isMouseDownPhoto.current = false;
    setTimeout(() => {
      setIsDraggingPhoto(false);
      const container = photoContainerRef.current;
      if (!container) return;
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let min = Infinity;
      photoItemRefs.current.forEach((item, index) => {
        if (!item) return;
        const dist = Math.abs(containerCenter - (item.offsetLeft + item.offsetWidth / 2));
        if (dist < min) {
          min = dist;
          closest = index;
        }
      });
      scrollToPhoto(closest, true);
    }, 20);
  };

  // VIDEO DRAG HANDLERS
  const handleMouseDownVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = videoContainerRef.current;
    if (!container) return;
    isMouseDownVideo.current = true;
    startXVideo.current = e.pageX - container.offsetLeft;
    scrollLeftVideo.current = container.scrollLeft;
    dragDistVideo.current = 0;
    setIsDraggingVideo(false);
  };

  const handleMouseMoveVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownVideo.current) return;
    const container = videoContainerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXVideo.current) * 1.35;
    dragDistVideo.current = Math.abs(walk);
    if (Math.abs(walk) > 6) {
      setIsDraggingVideo(true);
      setHasInteractedVideo(true);
    }
    container.scrollLeft = scrollLeftVideo.current - walk;
  };

  const handleMouseUpVideo = () => {
    if (!isMouseDownVideo.current) return;
    isMouseDownVideo.current = false;
    setTimeout(() => {
      setIsDraggingVideo(false);
      const container = videoContainerRef.current;
      if (!container) return;
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let min = Infinity;
      videoItemRefs.current.forEach((item, index) => {
        if (!item) return;
        const dist = Math.abs(containerCenter - (item.offsetLeft + item.offsetWidth / 2));
        if (dist < min) {
          min = dist;
          closest = index;
        }
      });
      scrollToVideo(closest, true);
    }, 20);
  };

  const activeModalPhoto = modalPhotoIdx !== null ? WORK_PHOTOS[modalPhotoIdx] : null;

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#0A1128] relative border-t border-[#FF6B00]/20 overflow-hidden select-none"
    >
      {/* Background Ambience Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#FF6B00]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[700px] h-[500px] bg-[#004488]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header + Media Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-[0.25em] mb-2 font-mono">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_10px_#FF6B00]" />
              <span>Acervo Audiovisual de Engenharia</span>
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#FFFFFF] uppercase">
              Projetos que <span className="text-[#FF6B00]">falam por nós</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal mt-2 max-w-xl leading-relaxed">
              Conheça alguns dos trabalhos realizados pela Vande Construções em fotos de obras e vídeos reais de execução.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-2 bg-[#101B3B] p-1.5 rounded-full border border-white/10 self-start lg:self-end">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'both'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Ver Todos</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'photos'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Imagens ({WORK_PHOTOS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'videos'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Vídeos ({WORK_VIDEOS.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. CARROSSEL DE IMAGENS (FOTOS) */}
      {/* ========================================================================= */}
      {(activeTab === 'both' || activeTab === 'photos') && (
        <div
          className="mb-20 last:mb-0 focus:outline-none"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              setHasInteractedPhoto(true);
              const prev = activePhotoIdx === 0 ? WORK_PHOTOS.length - 1 : activePhotoIdx - 1;
              scrollToPhoto(prev, true);
            } else if (e.key === 'ArrowRight') {
              setHasInteractedPhoto(true);
              const next = activePhotoIdx === WORK_PHOTOS.length - 1 ? 0 : activePhotoIdx + 1;
              scrollToPhoto(next, true);
            }
          }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] mb-1">
                  <Camera className="w-4 h-4" />
                  <span>Galeria de Imagens</span>
                </div>
                <h3 className="font-montserrat text-2xl sm:text-3xl font-black uppercase text-white">
                  Fotos de <span className="text-[#FF6B00]">Projetos &amp; Acabamentos</span>
                </h3>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {!hasInteractedPhoto && (
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#101B3B] border border-white/10 rounded-full text-slate-300 text-xs font-mono animate-pulse">
                    <Hand className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Arraste para o lado</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setHasInteractedPhoto(true);
                      const prev = activePhotoIdx === 0 ? WORK_PHOTOS.length - 1 : activePhotoIdx - 1;
                      scrollToPhoto(prev, true);
                    }}
                    aria-label="Foto anterior"
                    className="w-11 h-11 rounded-full bg-[#101B3B] border border-white/15 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all flex items-center justify-center shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setHasInteractedPhoto(true);
                      const next = activePhotoIdx === WORK_PHOTOS.length - 1 ? 0 : activePhotoIdx + 1;
                      scrollToPhoto(next, true);
                    }}
                    aria-label="Próxima foto"
                    className="w-11 h-11 rounded-full bg-[#101B3B] border border-white/15 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all flex items-center justify-center shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Carousel Container */}
          <div className="relative w-full overflow-hidden">
            <div
              ref={photoContainerRef}
              onMouseDown={handleMouseDownPhoto}
              onMouseMove={handleMouseMovePhoto}
              onMouseUp={handleMouseUpPhoto}
              onMouseLeave={() => {
                if (isMouseDownPhoto.current) handleMouseUpPhoto();
              }}
              onTouchStart={() => {
                dragDistPhoto.current = 0;
                setHasInteractedPhoto(true);
              }}
              className="flex items-center gap-5 sm:gap-8 overflow-x-auto py-6 sm:py-10 cursor-grab active:cursor-grabbing select-none px-[calc(50%-140px)] sm:px-[calc(50%-190px)] md:px-[calc(50%-240px)] lg:px-[calc(50%-280px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{
                scrollSnapType: isDraggingPhoto ? 'none' : 'x mandatory'
              }}
            >
              {WORK_PHOTOS.map((item, index) => {
                const isActive = activePhotoIdx === index;
                const hasFailed = Boolean(failedPhotos[item.id]);

                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      photoItemRefs.current[index] = el;
                    }}
                    onClick={() => {
                      if (dragDistPhoto.current < 8) {
                        if (isActive) {
                          setModalPhotoIdx(index);
                        } else {
                          scrollToPhoto(index, true);
                        }
                      }
                    }}
                    style={{ scrollSnapAlign: 'center' }}
                    className={`
                      flex-none w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px]
                      aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden
                      transition-all duration-500 ease-out cursor-pointer relative bg-[#101B3B]
                      ${
                        isActive
                          ? 'scale-100 sm:scale-105 z-20 opacity-100 ring-2 ring-[#FF6B00]/90 shadow-[0_20px_60px_rgba(255,107,0,0.25),0_15px_35px_rgba(0,0,0,0.85)]'
                          : 'scale-90 sm:scale-92 z-10 opacity-35 hover:opacity-70 blur-[0.2px] hover:blur-none shadow-md'
                      }
                    `}
                  >
                    <div className="w-full h-full bg-[#101B3B] overflow-hidden relative flex items-center justify-center">
                      {hasFailed ? (
                        <div className="flex flex-col items-center justify-center text-slate-400 gap-2">
                          <ImageOff className="w-8 h-8 text-[#FF6B00]/60" />
                          <span className="text-xs font-mono">Imagem indisponível</span>
                        </div>
                      ) : (
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out pointer-events-none"
                          onError={() => {
                            setFailedPhotos((prev) => ({ ...prev, [item.id]: true }));
                          }}
                        />
                      )}

                      {/* Subtle Edge Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />

                      {/* Active Zoom Trigger Icon */}
                      {isActive && !hasFailed && (
                        <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalPhotoIdx(index);
                            }}
                            className="p-2.5 bg-black/75 hover:bg-[#FF6B00] text-white rounded-full border border-white/20 transition-all duration-200 shadow-lg"
                            title="Ampliar imagem"
                            aria-label="Ampliar imagem"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* Active Border */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[#FF6B00]/50 pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photo Pagination Dots */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MoveHorizontal className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Arraste para explorar todas as fotos</span>
              </div>
              <div className="flex items-center gap-2">
                {WORK_PHOTOS.map((photo, index) => (
                  <button
                    key={`photo-dot-${photo.id}`}
                    type="button"
                    onClick={() => scrollToPhoto(index, true)}
                    aria-label={`Ir para foto ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activePhotoIdx === index
                        ? 'w-8 bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs font-mono text-slate-400">
                <span className="text-[#FF6B00] font-bold">{String(activePhotoIdx + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(WORK_PHOTOS.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. CARROSSEL DE VÍDEOS */}
      {/* ========================================================================= */}
      {(activeTab === 'both' || activeTab === 'videos') && (
        <div
          className={`${activeTab === 'both' ? 'mt-16 sm:mt-24 pt-16 border-t border-white/10' : ''} focus:outline-none`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              setHasInteractedVideo(true);
              const prev = activeVideoIdx === 0 ? WORK_VIDEOS.length - 1 : activeVideoIdx - 1;
              scrollToVideo(prev, true);
            } else if (e.key === 'ArrowRight') {
              setHasInteractedVideo(true);
              const next = activeVideoIdx === WORK_VIDEOS.length - 1 ? 0 : activeVideoIdx + 1;
              scrollToVideo(next, true);
            }
          }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] mb-1">
                  <Video className="w-4 h-4" />
                  <span>Registros em Vídeo</span>
                </div>
                <h3 className="font-montserrat text-2xl sm:text-3xl font-black uppercase text-white">
                  Vídeos de <span className="text-[#FF6B00]">Obras em Execução</span>
                </h3>
              </div>

              {/* Video Controls */}
              <div className="flex items-center gap-3">
                {!hasInteractedVideo && (
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#101B3B] border border-white/10 rounded-full text-slate-300 text-xs font-mono animate-pulse">
                    <Hand className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Arraste para o lado</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setHasInteractedVideo(true);
                      const prev = activeVideoIdx === 0 ? WORK_VIDEOS.length - 1 : activeVideoIdx - 1;
                      scrollToVideo(prev, true);
                    }}
                    aria-label="Vídeo anterior"
                    className="w-11 h-11 rounded-full bg-[#101B3B] border border-white/15 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all flex items-center justify-center shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setHasInteractedVideo(true);
                      const next = activeVideoIdx === WORK_VIDEOS.length - 1 ? 0 : activeVideoIdx + 1;
                      scrollToVideo(next, true);
                    }}
                    aria-label="Próximo vídeo"
                    className="w-11 h-11 rounded-full bg-[#101B3B] border border-white/15 text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all flex items-center justify-center shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Carousel Container */}
          <div className="relative w-full overflow-hidden">
            <div
              ref={videoContainerRef}
              onMouseDown={handleMouseDownVideo}
              onMouseMove={handleMouseMoveVideo}
              onMouseUp={handleMouseUpVideo}
              onMouseLeave={() => {
                if (isMouseDownVideo.current) handleMouseUpVideo();
              }}
              onTouchStart={() => {
                dragDistVideo.current = 0;
                setHasInteractedVideo(true);
              }}
              className="flex items-center gap-6 sm:gap-10 overflow-x-auto py-6 sm:py-10 cursor-grab active:cursor-grabbing select-none px-[calc(50%-150px)] sm:px-[calc(50%-210px)] md:px-[calc(50%-260px)] lg:px-[calc(50%-310px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{
                scrollSnapType: isDraggingVideo ? 'none' : 'x mandatory'
              }}
            >
              {WORK_VIDEOS.map((media, index) => {
                const isActive = activeVideoIdx === index;

                return (
                  <div
                    key={media.id}
                    ref={(el) => {
                      videoItemRefs.current[index] = el;
                    }}
                    onClick={() => {
                      if (dragDistVideo.current < 8 && !isActive) {
                        scrollToVideo(index, true);
                      }
                    }}
                    style={{ scrollSnapAlign: 'center' }}
                    className={`
                      flex-none w-[300px] sm:w-[420px] md:w-[520px] lg:w-[620px]
                      aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden
                      transition-all duration-500 ease-out cursor-pointer relative bg-black
                      ${
                        isActive
                          ? 'scale-100 sm:scale-105 z-20 opacity-100 ring-2 ring-[#FF6B00] shadow-[0_25px_70px_rgba(255,107,0,0.35),0_15px_35px_rgba(0,0,0,0.95)]'
                          : 'scale-90 sm:scale-92 z-10 opacity-40 hover:opacity-75 blur-[0.2px] hover:blur-none shadow-md'
                      }
                    `}
                  >
                    <div className="w-full h-full bg-[#101B3B] overflow-hidden relative">
                      {/* Underlying preview frame while iframe initializes */}
                      <img
                        src={media.thumbnailUrl}
                        alt={media.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
                      />

                      {/* Real Google Drive video player */}
                      <iframe
                        src={media.embedUrl}
                        title={media.title}
                        className="relative z-10 w-full h-full border-0 pointer-events-auto"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />

                      {/* Click interceptor for non-active cards so user can center by clicking */}
                      {!isActive && (
                        <div
                          className="absolute inset-0 bg-black/25 z-20 cursor-pointer"
                          title="Clique para centralizar este vídeo"
                        />
                      )}

                      {/* Fullscreen Video Modal Button */}
                      {isActive && (
                        <div className="absolute bottom-3 right-3 z-30 pointer-events-auto">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalVideo({ embedUrl: media.embedUrl, title: media.title });
                            }}
                            className="p-2.5 bg-black/80 hover:bg-[#FF6B00] text-white rounded-full border border-white/20 transition-all duration-200 shadow-lg"
                            title="Expandir vídeo em tela cheia"
                            aria-label="Expandir vídeo em tela cheia"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* Active Border */}
                      {isActive && (
                        <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border border-[#FF6B00]/70 pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Pagination Dots */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MoveHorizontal className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Reproduza diretamente no player ou alterne entre os vídeos</span>
              </div>
              <div className="flex items-center gap-2">
                {WORK_VIDEOS.map((video, index) => (
                  <button
                    key={`video-dot-${video.id}`}
                    type="button"
                    onClick={() => scrollToVideo(index, true)}
                    aria-label={`Ir para vídeo ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeVideoIdx === index
                        ? 'w-8 bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs font-mono text-slate-400">
                <span className="text-[#FF6B00] font-bold">{String(activeVideoIdx + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(WORK_VIDEOS.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODALS */}
      {/* ========================================================================= */}

      {/* Modal Photo Zoom */}
      {activeModalPhoto && (
        <div
          onClick={() => setModalPhotoIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#101B3B] border border-[#FF6B00]/70 max-w-5xl w-full relative shadow-[0_0_90px_rgba(255,107,0,0.4)] rounded-2xl overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setModalPhotoIdx(null)}
              aria-label="Fechar foto"
              className="absolute top-4 right-4 z-30 p-2.5 bg-black/80 border border-white/20 text-white hover:text-[#FF6B00] hover:border-[#FF6B00] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() =>
                setModalPhotoIdx((prev) =>
                  prev === null ? null : prev === 0 ? WORK_PHOTOS.length - 1 : prev - 1
                )
              }
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-black/80 border border-white/20 text-white hover:text-[#FF6B00] hover:border-[#FF6B00] rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() =>
                setModalPhotoIdx((prev) =>
                  prev === null ? null : prev === WORK_PHOTOS.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-black/80 border border-white/20 text-white hover:text-[#FF6B00] hover:border-[#FF6B00] rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative max-h-[85vh] bg-black overflow-hidden flex items-center justify-center p-2">
              <img
                src={activeModalPhoto.thumbnailUrl}
                alt={activeModalPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal Fullscreen Video Lightbox */}
      {modalVideo && (
        <div
          onClick={() => setModalVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#101B3B] border border-[#FF6B00]/70 max-w-5xl w-full relative shadow-[0_0_90px_rgba(255,107,0,0.4)] rounded-2xl overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setModalVideo(null)}
              aria-label="Fechar vídeo"
              className="absolute top-4 right-4 z-30 p-2.5 bg-black/80 border border-white/20 text-white hover:text-[#FF6B00] hover:border-[#FF6B00] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
              <iframe
                src={modalVideo.embedUrl}
                title={modalVideo.title}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
