import { motion } from 'motion/react';
import { Target, Zap, Award, BookOpen } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Target },
    { label: 'Models Trained', value: '100+', icon: Zap },
    { label: 'Certifications', value: '12', icon: Award },
    { label: 'Years of Exp', value: '2+', icon: BookOpen }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-6">
              The Story
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">curiosity</span>, powered by data.
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I am a passionate <span className="text-indigo-600 font-bold">Data Scientist</span> dedicated to uncovering the patterns that drive the world. My approach combines rigorous statistical analysis with cutting-edge machine learning to deliver insights that matter.
            </p>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Based in India, I've spent the last few years mastering the art of data manipulation, predictive modeling, and visualization. I believe that every dataset tells a story, and I'm here to translate that story into strategic action.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="h-5 w-5 text-indigo-600" />
                    <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Data visualization setup" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 to-transparent"></div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-indigo-50 rounded-[3rem] -z-10 rotate-3"></div>
            <div className="absolute -bottom-10 -left-10 w-1/2 h-1/2 bg-violet-50 rounded-full -z-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}