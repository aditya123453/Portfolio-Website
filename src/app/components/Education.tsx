import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech Computer Science',
      specialization: 'Data Science',
      institution: 'Lovely Professional University',
      year: '2022 - Present',
      status: 'In Progress',
      gradient: 'from-blue-600 to-indigo-600',
      description: 'Focusing on advanced algorithms, machine learning, and statistical computing.'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Amity International School',
      year: '2020 - 2022',
      percentage: '74%',
      gradient: 'from-purple-600 to-pink-600',
      description: 'Major in Physics, Chemistry, and Mathematics.'
    },
    {
      degree: 'Matriculation',
      institution: 'Aditya Vidyashram',
      year: '2019 - 2020',
      percentage: '80%',
      gradient: 'from-orange-600 to-red-600',
      description: 'Foundational secondary education with a focus on science and mathematics.'
    }
  ];

  return (
    <section id="education" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4"
          >
            Academic Path
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight"
          >
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Journey</span>.
          </motion.h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full">
                  <div className={`bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 group relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full hidden md:block z-20 ${index % 2 === 0 ? '-right-[2.25rem]' : '-left-[2.25rem]'}`}></div>
                    
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">{edu.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-bold text-slate-600 mb-4">{edu.institution}</p>
                    <p className="text-slate-500 leading-relaxed mb-6 italic">{edu.description}</p>
                    
                    <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {edu.specialization && (
                        <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold ring-1 ring-indigo-100">
                          {edu.specialization}
                        </span>
                      )}
                      {edu.status && (
                        <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold ring-1 ring-emerald-100 italic">
                          {edu.status}
                        </span>
                      )}
                      {edu.percentage && (
                        <span className="px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-xs font-bold ring-1 ring-amber-100">
                          Result: {edu.percentage}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                    <GraduationCap className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}