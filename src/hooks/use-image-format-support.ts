import { useState, useEffect } from 'react';

type ImageFormat = 'webp' | 'avif' | 'original';

export function useImageFormatSupport(): ImageFormat {
  const [supportedFormat, setSupportedFormat] = useState<ImageFormat>('original');

  useEffect(() => {
    const checkFormatSupport = async () => {
      try {
        // Verificar suporte a WebP
        if (typeof window !== 'undefined') {
          const canvas = document.createElement('canvas');
          canvas.width = 1;
          canvas.height = 1;
          
          // Testar WebP
          const webpSupport = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
          if (webpSupport) {
            setSupportedFormat('webp');
            return;
          }
          
          // Testar AVIF (se o navegador suportar)
          // @ts-ignore
          const avifSupport = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
          if (avifSupport) {
            setSupportedFormat('avif');
            return;
          }
        }
      } catch (error) {
        console.debug('Erro ao verificar suporte a formatos de imagem:', error);
      }
      
      setSupportedFormat('original');
    };

    checkFormatSupport();
  }, []);

  return supportedFormat;
}