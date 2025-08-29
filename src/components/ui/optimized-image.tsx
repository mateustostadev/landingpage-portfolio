import { useState, useEffect } from 'react';
import { useImageFormatSupport } from '@/hooks/use-image-format-support';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '',
  loading = "lazy",
  ...props 
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const supportedFormat = useImageFormatSupport();

  useEffect(() => {
    // Construir caminho para imagem otimizada com base no formato suportado
    const basePath = src.replace(/\.[^/.]+$/, ""); // Remove extensão
    
    // Se for uma imagem de assets e tivermos suporte a formatos modernos
    if (src.includes('/assets/') && supportedFormat !== 'original') {
      // Para imagens já em WebP, não converter novamente
      if (src.endsWith('.webp') && supportedFormat === 'webp') {
        setImageSrc(src);
        return;
      }
      
      // Construir caminho para imagem otimizada
      const optimizedSrc = basePath.replace('/assets/', '/assets/optimized/') + 
                          (supportedFormat === 'avif' ? '.avif' : '.webp');
      setImageSrc(optimizedSrc);
    } else {
      setImageSrc(src);
    }
  }, [src, supportedFormat]);

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      loading={loading}
      onLoad={() => setImageLoaded(true)}
      {...props}
    />
  );
}