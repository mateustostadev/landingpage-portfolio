import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/components/theme-provider";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Experiência", href: "#experience" },
  { name: "Serviços", href: "#services" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const { scrollY } = useScroll();

  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const blurValue = useTransform(scrollY, [0, 100], [0, 12]);
  const scaleValue = useTransform(scrollY, [0, 100], [1, 0.98]);

  // Otimização da detecção de seção ativa
  const detectActiveSection = useCallback(() => {
    const sections = menuItems.map((item) => ({
      id: item.href.replace("#", ""),
      element: document.getElementById(item.href.replace("#", "")),
    })).filter(section => section.element);

    // Encontrar a seção mais visível na viewport
    let mostVisibleSection = "home";
    let maxVisibleRatio = 0;

    sections.forEach(section => {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calcular a porção visível da seção
        const visibleHeight = Math.max(0, 
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
        );
        const sectionHeight = rect.height;
        const visibleRatio = sectionHeight > 0 ? visibleHeight / sectionHeight : 0;
        
        if (visibleRatio > maxVisibleRatio) {
          maxVisibleRatio = visibleRatio;
          mostVisibleSection = section.id;
        }
      }
    });

    setActiveSection(mostVisibleSection);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectActiveSection();
          
          const currentScrollPos = window.pageYOffset;
          // Melhorar a lógica de visibilidade da navbar
          const isScrollingUp = currentScrollPos < prevScrollPos;
          const isNearTop = currentScrollPos < 50;
          
          setVisible(isScrollingUp || isNearTop);
          setPrevScrollPos(currentScrollPos);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Detectar seção ativa inicialmente
    detectActiveSection();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, detectActiveSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Usar scroll suave nativo para melhor performance
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Atualizar seção ativa imediatamente
      setActiveSection(href.replace("#", ""));
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.5
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0 rounded-b-2xl"
        style={{
          backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)",
          opacity: backgroundOpacity,
          backdropFilter: `blur(${blurValue}px)`,
          WebkitBackdropFilter: `blur(${blurValue}px)`,
          scale: scaleValue,
        }}
      />
      <nav className="relative mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 font-medium transition-all duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                      : "text-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-card"
                  }`}
                  asChild
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                    {activeSection === item.href.replace("#", "") && (
                      <motion.div
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-green-600 dark:bg-green-400 rounded-full"
                        layoutId="underline"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </a>
                </Button>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 text-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-card"
            aria-label="Alternar tema"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground hover:text-green-600 dark:hover:text-green-400"
            aria-label="Alternar tema"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-green-600 dark:hover:text-green-400"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-16 bg-white dark:bg-background border-l border-gray-200 dark:border-border">
              <ul className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-base font-medium py-3 transition-colors ${
                        activeSection === item.href.replace("#", "")
                          ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                          : "text-foreground hover:text-green-600 dark:hover:text-green-400"
                      }`}
                      asChild
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.div>
  );
}
