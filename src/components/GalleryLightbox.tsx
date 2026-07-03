import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  images: { url: string; label: string }[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({ images, initialIndex, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[70] p-2 hover:bg-white/10 transition-colors duration-300 rounded-lg"
        aria-label="Close"
      >
        <X size={24} className="text-white" strokeWidth={1.5} />
      </button>

      {/* Main image */}
      <div className="w-full max-w-4xl max-h-[80vh] flex flex-col items-center gap-4">
        <img
          src={currentImage.url}
          alt={currentImage.label}
          className="w-full h-full object-contain rounded-lg"
        />
        
        {/* Image info */}
        <div className="text-center">
          <p className="text-white/70 font-sans text-sm font-light tracking-[0.1em]">
            {currentImage.label}
          </p>
          <p className="text-white/40 font-sans text-xs mt-2">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-[70] p-3 hover:bg-white/10 transition-colors duration-300 rounded-lg"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} className="text-white" strokeWidth={1.5} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-[70] p-3 hover:bg-white/10 transition-colors duration-300 rounded-lg"
            aria-label="Next image"
          >
            <ChevronRight size={28} className="text-white" strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-lg px-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                idx === currentIndex ? 'border-gold-400' : 'border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
