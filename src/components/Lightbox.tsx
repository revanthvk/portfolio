import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  titles?: string[];
}

export const Lightbox = ({ images, currentIndex, isOpen, onClose, titles }: LightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
          break;
        case 'ArrowRight':
          setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const nextImage = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl max-h-full p-4 flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-portfolio-surface/80 text-foreground hover:bg-portfolio-surface transition-colors"
        >
          <X size={24} />
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 z-20 p-2 rounded-full bg-portfolio-surface/80 text-foreground hover:bg-portfolio-surface transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 z-20 p-2 rounded-full bg-portfolio-surface/80 text-foreground hover:bg-portfolio-surface transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image */}
        <div className="flex flex-col items-center">
          <img
            src={images[index]}
            alt={titles?.[index] || `Image ${index + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
          
          {/* Title */}
          {titles?.[index] && (
            <h3 className="mt-4 text-xl font-bold text-foreground text-center">
              {titles[index]}
            </h3>
          )}
          
          {/* Image Counter */}
          {images.length > 1 && (
            <div className="mt-2 text-portfolio-text-dim">
              {index + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};