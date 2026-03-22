import { Download, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#030213] relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-fuchsia-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 backdrop-blur-md text-indigo-300 border border-white/10 rounded-full text-sm font-semibold tracking-wide shadow-2xl"
          >
            <Sparkles className="h-4 w-4" />
            <span>Available for new opportunities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tight leading-[0.9]"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">Intelligent</span> Futures.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-3xl text-slate-300 mb-8 font-medium max-w-2xl"
          >
            I'm <span className="text-white font-bold">Aditya Nandan</span>, a Data Scientist transforming complex datasets into actionable insights.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl font-light leading-relaxed"
          >
            Specializing in Deep Learning, Statistical Modeling, and Predictive Analytics to solve real-world problems through data.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 text-base px-10 py-7 rounded-2xl transition-all font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] group"
            >
              Explore My Work
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block ml-2"
              >
                →
              </motion.span>
            </Button>
            <a 
              href="/Aditya_Nandan_CV.pdf" 
              download="Aditya_Nandan_CV.pdf"
              className="inline-flex items-center justify-center border-2 border-white/10 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 text-base px-10 py-7 rounded-2xl transition-all font-bold group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Get CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-fuchsia-600 rounded-3xl rotate-6 blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-slate-900 border-4 border-white/20 rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden group">
              <img 
                src="/profile.jpg" 
                alt="Aditya Nandan" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-black uppercase tracking-widest mb-1">Aditya Nandan</p>
                  <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">Data Scientist</p>
                </div>
              </div>
            </div>
              {/* Floating elements inside the hero box */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
              >
                <div className="w-8 h-2 bg-indigo-500 rounded-full mb-2"></div>
                <div className="w-12 h-2 bg-white/20 rounded-full"></div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
              >
                <div className="w-10 h-2 bg-fuchsia-500 rounded-full mb-2"></div>
                <div className="w-6 h-2 bg-white/20 rounded-full"></div>
              </motion.div>
            </div>
        </motion.div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        onClick={scrollToProjects}
      >
        <ChevronDown className="h-10 w-10 text-slate-400 group-hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
}