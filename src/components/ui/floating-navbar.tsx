import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Experiência", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const { scrollY } = useScroll();

  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);

  const blurValue = useTransform(scrollY, [0, 100], [0, 10]);

  const buttonBgOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.href.replace("#", ""),
        top:
          document.getElementById(item.href.replace("#", ""))?.offsetTop || 0,
      }));

      const currentPosition = window.scrollY + 100;

      const currentSection = sections.reduce((acc, section) => {
        return currentPosition >= section.top ? section.id : acc;
      }, sections[0].id);

      setActiveSection(currentSection);

      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: theme === "dark" ? "#000" : "#fff",
          opacity: backgroundOpacity,
          backdropFilter: `blur(${blurValue}px)`,
          WebkitBackdropFilter: `blur(${blurValue}px)`,
        }}
      />
      <nav className="relative mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 mx-auto">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-green-600 dark:text-green-400"
                      : "text-foreground hover:text-green-600 dark:hover:text-green-400"
                  }`}
                  style={{
                    backgroundColor: `rgba(var(--background), ${buttonBgOpacity})`,
                  }}
                  asChild
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                    {activeSection === item.href.replace("#", "") && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 dark:bg-green-400"
                        layoutId="underline"
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
            className="ml-2 text-foreground hover:text-green-600 dark:hover:text-green-400"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground hover:text-green-600 dark:hover:text-green-400"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-green-600 dark:hover:text-green-400"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-16">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-lg ${
                        activeSection === item.href.replace("#", "")
                          ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                          : "text-foreground"
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
