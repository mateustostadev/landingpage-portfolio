import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Experience from "./experience";
import Expertise from "./expertise";
import { Partners } from "./partners";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ThemeProvider } from "@/components/theme-provider";

function Home() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-background">
        <FloatingNavbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Expertise />
        <Partners />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default Home;
