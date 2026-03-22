import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
      
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-8 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-medium mb-4 md:mb-0">
            © {new Date().getFullYear()} Aditya Nandan. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}