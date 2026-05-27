import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GithubActivity from './components/GithubActivity';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ParticleField from './components/ParticleField';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <CustomCursor />
      <ParticleField />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onSelect={setSelectedProject} />
        <Skills />
        <Experience />
        <Certifications />
        <GithubActivity />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default App;
