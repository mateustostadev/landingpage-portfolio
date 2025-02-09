import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Experience from "./experience";
import { FloatingNavbar } from "@/components/ui/floating-navbar";

function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <FloatingNavbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
