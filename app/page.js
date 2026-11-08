import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResearchSection from "./components/ResearchSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Socials />
    </>
  );
}
