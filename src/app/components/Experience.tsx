import { Briefcase, Database, Brain, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'PL/SQL & Data Science Bootcamp',
      company: 'Lovely Professional University',
      period: 'Intensive Training',
      icon: Briefcase,
      color: 'from-blue-600 to-indigo-600',
      highlights: [
        { icon: Database, text: 'Built comprehensive database systems with triggers and stored procedures' },
        { icon: Brain, text: 'Developed machine learning models for predictive analytics' },
        { icon: Sparkles, text: 'Integrated ML pipelines with structured databases' }
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4"
          >
            Professional Growth
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight"
          >
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Training</span>.
          </motion.h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-200/60 shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative background blur */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <exp.icon className="h-10 w-10" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-8">
                    <h3 className="text-3xl font-black text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                      <p className="text-xl font-bold text-slate-500">{exp.company}</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden md:block"></span>
                      <p className="text-sm font-black text-indigo-500 uppercase tracking-widest">{exp.period}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {exp.highlights.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-white transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-indigo-100 transition-colors">
                          <item.icon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <p className="text-slate-600 font-bold leading-relaxed flex-1">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}