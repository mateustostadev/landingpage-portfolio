import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Experience from "./experience";
import Services from "./expertise";
import { Partners } from "./partners";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ThemeProvider } from "@/components/theme-provider";

function Home() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-background scroll-smooth">
        <FloatingNavbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Partners />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default Home;
