import { lazy, Suspense } from "react";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ThemeProvider } from "@/components/theme-provider";

// Lazy load dos componentes da página inicial
const Hero = lazy(() => import("./hero"));
const About = lazy(() => import("./about"));
const Skills = lazy(() => import("./skills"));
const Projects = lazy(() => import("./projects"));
const Contact = lazy(() => import("./contact"));
const Experience = lazy(() => import("./experience"));
const Services = lazy(() => import("./expertise"));
const Partners = lazy(() => import("./partners"));

function Home() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-background scroll-smooth">
        <FloatingNavbar />
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <Partners />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><p className="text-lg">Carregando seção...</p></div>}>
          <Contact />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default Home;
