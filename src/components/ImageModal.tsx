import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageModalProps {
  image: {
    src: string;
    alt: string;
    category: string;
  };
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 group"
      >
        <X className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Zoom Toggle */}
      <button
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute top-6 right-20 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 group"
      >
        {isZoomed ? (
          <ZoomOut className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        ) : (
          <ZoomIn className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        )}
      </button>

      {/* Category Badge */}
      <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 py-2 rounded-full font-medium">
        {image.category}
      </div>

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] overflow-hidden rounded-lg">
        <img
          src={image.src}
          alt={image.alt}
          className={`w-full h-full object-contain transition-transform duration-300 cursor-${isZoomed ? 'zoom-out' : 'zoom-in'}`}
          style={{
            transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
          }}
          onClick={() => setIsZoomed(!isZoomed)}
        />
      </div>

      {/* Image Info */}
      <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm rounded-lg p-4">
        <h3 className="text-white font-semibold text-lg mb-1">{image.alt}</h3>
        <p className="text-gray-300 text-sm">Cliquez sur l'image pour zoomer • Appuyez sur Échap pour fermer</p>
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
}