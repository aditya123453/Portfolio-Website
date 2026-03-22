import { Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-full text-sm font-medium tracking-wide">
          👋 Welcome to my portfolio
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-100 tracking-tight">
          Aditya Nandan
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-indigo-400 mb-6 font-medium">
          Data Scientist & Analyst
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Transforming complex datasets into actionable insights. Specializing in machine learning, statistical modeling, and predictive analytics.
        </p>
        
        <div className="flex gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 text-base px-8 py-6 rounded-md transition-all font-medium"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border border-slate-700 text-slate-300 bg-transparent hover:bg-slate-800 hover:text-white text-base px-8 py-6 rounded-md transition-all font-medium"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
        <ChevronDown className="h-8 w-8 text-slate-400" />
      </div>
    </section>
  );
}