import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/contexts/LanguageContext";

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.experience'), href: "#experience" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const { scrollY } = useScroll();

  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const blurValue = useTransform(scrollY, [0, 100], [0, 12]);
  const scaleValue = useTransform(scrollY, [0, 100], [1, 0.98]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < 50) {
      setVisible(true);
      return;
    }

    const previous = scrollY.getPrevious();
    if (current > previous && current > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(visibleEntries[0].target.id);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [menuItems]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(href.replace("#", ""));
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
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
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="relative pointer-events-auto">
        <motion.div
          className="absolute inset-0 rounded-b-2xl bg-white dark:bg-black"
          style={{
            opacity: backgroundOpacity,
            backdropFilter: `blur(${blurValue}px)`,
            WebkitBackdropFilter: `blur(${blurValue}px)`,
            scale: scaleValue,
          }}
        />
        <nav className="relative mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-1 mx-auto">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Button
                    variant="ghost"
                    className={`relative px-4 py-2 font-medium transition-all duration-200 ${activeSection === item.href.replace("#", "")
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

            <div className="flex items-center ml-4 border-l border-gray-200 dark:border-border pl-4 gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="text-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-card w-12"
                aria-label="Alternar idioma"
              >
                <div className="flex items-center gap-1 font-semibold text-xs">
                  <Globe className="h-[1.1rem] w-[1.1rem]" />
                  {language === 'pt' ? 'PT-BR' : 'EN'}
                </div>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-card"
                aria-label="Alternar tema"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-1 ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-foreground hover:text-green-600 dark:hover:text-green-400  gap-1 px-2"
              aria-label="Alternar idioma"
            >
              <Globe className="h-[1.1rem] w-[1.1rem]" />
              <span className="font-semibold text-xs">{language === 'pt' ? 'PT-BR' : 'EN'}</span>
            </Button>

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
                        className={`w-full justify-start text-base font-medium py-3 transition-colors ${activeSection === item.href.replace("#", "")
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
      </div>
    </motion.div>
  );
}
