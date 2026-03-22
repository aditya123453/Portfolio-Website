import { Code2, Boxes, Wrench, Users, Database, Globe } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Python', 'C', 'Java', 'SQL', 'PL/SQL'],
      gradient: 'from-blue-600 to-indigo-600',
      description: 'Core logic and development'
    },
    {
      title: 'Data Science',
      icon: Database,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'XGBoost'],
      gradient: 'from-purple-600 to-pink-600',
      description: 'Modeling and analysis'
    },
    {
      title: 'Tools & Cloud',
      icon: Wrench,
      skills: ['AWS', 'Docker', 'Tableau', 'PowerBI', 'Git', 'Jupyter', 'Databricks'],
      gradient: 'from-orange-600 to-red-600',
      description: 'Infrastructure and viz'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Collaboration', 'Problem Solving', 'Adaptability'],
      gradient: 'from-emerald-600 to-teal-600',
      description: 'Team and communication'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Expertise</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            A comprehensive toolkit for delivering end-to-end data-driven solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={`p-5 rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                <category.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                {category.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    className="px-4 py-1.5 text-xs font-bold bg-slate-50 text-slate-600 border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}