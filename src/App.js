import './App.css';
import Contact from './component/Contact/Contact';
import Education from './component/Education/Education';
import HeroSection from './component/HeroSection/Herosection';
import Navbar from './component/Navbar/Navbar';
import Projects from './component/Projects/Projects';
import SkillsSection from './component/SkillsSection/SkillsSection';
import WorkExperience from './component/WorkExperience/WorkExperience';

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
        <Projects />
      </div>
      <div className="section-container">
        <WorkExperience />
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
