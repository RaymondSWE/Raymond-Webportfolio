import './App.css';
import Contact from './component/Contact/Contact';
import Education from './component/Education/Education';
import HeroSection from './component/HeroSection/Herosection';
import Navbar from './component/Navbar/Navbar';
import ProjectsSection from './component/ProjectsSection/ProjectsSection';
import SkillsSection from './component/SkillsSection/SkillsSection';

function App() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <HeroSection />
      </div>
      <div className="section-container">
        <SkillsSection />
      </div>
      <div className="section-container">
        <ProjectsSection />
      </div>
      <div className="section-container">
        <Education />
      </div>
      <div className="section-container">
        <Contact />
      </div>
    </>
  );
}

export default App;
