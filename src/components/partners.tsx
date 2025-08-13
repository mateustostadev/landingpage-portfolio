import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const partners = [
  {
    name: "Fabrício Ferreira",
    logo: "/assets/fabricio_ferreira.png",
  },
  {
    name: "Instituto Amadurecer",
    logo: "/assets/logo_amadurecer.webp",
  },
  {
    name: "ALCN Consultoria",
    logo: "/assets/alcn_logo.png",
  },
  {
    name: "LF Promotora",
    logo: "/assets/lf_logo.png",
  },
  {
    name: "Intactus Ambiental",
    logo: "/assets/intactus_logo.png",
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
      className="py-24 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20 
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
            Clientes Parceiros
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas e instituições que confiam no meu trabalho
          </p>
        </motion.div>
        <div className="relative w-full overflow-x-hidden">
          <div
            ref={containerRef}
            className="flex gap-12 items-center w-max select-none"
            style={{ willChange: "transform" }}
          >
            {logos.map((partner, i) => (
              <motion.div
                key={partner.name + i}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-md transition-all duration-300 w-52 h-40 mx-2"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center group">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 object-contain max-w-[90%] z-10"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-20">
                    <span className="text-base text-white font-semibold text-center px-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 