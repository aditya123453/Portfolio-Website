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
      
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">ADITYA<span className="text-indigo-500">.</span></h3>
              <p className="text-slate-500 max-w-xs mx-auto md:mx-0 font-medium">
                Designing the future through data and innovation.
              </p>
            </div>
            
            <div className="flex justify-center gap-6">
              <a href="#hero" className="hover:text-white transition-colors font-bold text-sm uppercase tracking-widest">Home</a>
              <a href="#projects" className="hover:text-white transition-colors font-bold text-sm uppercase tracking-widest">Projects</a>
              <a href="#about" className="hover:text-white transition-colors font-bold text-sm uppercase tracking-widest">About</a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm font-black text-slate-500 uppercase tracking-widest mb-2">Based In</p>
              <p className="text-white font-bold">India & Remote</p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
              MADE BY <span className="text-indigo-500">ADITYA NANDAN</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}