import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { Handshake } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const partners = [
  {
    name: "Fabrício Ferreira",
    logo: "/assets/optimized/fabricio_ferreira.webp",
  },
  {
    name: "Instituto Amadurecer",
    logo: "/assets/logo_amadurecer.webp",
  },
  {
    name: "ALCN Consultoria",
    logo: "/assets/optimized/alcn_logo.webp",
  },
  {
    name: "LF Promotora",
    logo: "/assets/optimized/lf_logo.webp",
  },
  {
    name: "Intactus Ambiental",
    logo: "/assets/optimized/intactus_logo.webp",
  },
];

// Duplicar a lista para efeito de loop
const logos = [...partners, ...partners];

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current -= (delta / 1000) * 60; // velocidade em px/s (reduzida para melhor experiência)
      const width = containerRef.current.scrollWidth / 2;
      if (Math.abs(x.current) >= width) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section
      id="partners"
      className="py-12 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionBadge icon={<Handshake className="w-4 h-4" />} title="Clientes Parceiros" />
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mt-4"
        >
          Empresas e instituições que confiam no meu trabalho
        </motion.p>
        
        {/* Container do carrossel com overflow hidden */}
        <div className="relative w-full overflow-hidden mt-16">
          {/* Efeito de fade nas extremidades do carrossel */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-background to-transparent/0 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-background to-transparent/0 z-10 pointer-events-none"></div>
          
          <div
            ref={containerRef}
            className="flex gap-12 items-center w-max select-none py-4"
            style={{ willChange: "transform" }}
          >
            {logos.map((partner, i) => (
              <motion.div
                key={partner.name + i}
                className="flex flex-col items-center justify-center bg-transparent dark:bg-transparent rounded-xl p-6 shadow-none border-0 transition-all duration-300 w-48 h-36 mx-2"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <OptimizedImage
                    src={partner.logo}
                    alt={partner.name}
                    className={`h-24 object-contain max-w-[85%] z-10 relative brightness-0 dark:invert dark:brightness-0 ${
                      partner.name.includes('ALCN') ? 'h-52' : ''
                    }`}
                    loading="lazy"
                    width={partner.name.includes('ALCN') ? 280 : 160}
                    height={partner.name.includes('ALCN') ? 200 : 96}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners; 