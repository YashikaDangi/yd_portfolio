import Contact from "@/components/Contact";
import { ExperienceSection } from "@/components/Experience";
import Header, { ThemeProvider } from "@/components/Header";
import { About } from "@/components/About";
import Projects from "@/components/Projects";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <ThemeProvider>
        <Header />
        <HeroSection />
        <About />
        <ExperienceSection />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div>
  );
}
