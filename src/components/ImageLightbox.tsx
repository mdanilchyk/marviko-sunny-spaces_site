import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
}

const ImageLightbox = ({ images, index, onClose }: ImageLightboxProps) => {
  const image = index !== null ? images[index] : undefined;

  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, onClose]);

  return (
    <AnimatePresence>
      {index !== null && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white"
            onClick={onClose}
            aria-label="Закрыть"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
