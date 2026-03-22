import { Trophy, Users, Code, BookOpen, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Leadership',
      description: 'Led a team to 80% project completion in a high-stakes competitive coding hackathon.',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Strategic Collaboration',
      description: 'Successfully managed cross-functional teams for data science initiatives and research.',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Code,
      title: 'Algorithmic Mastery',
      description: 'Consistently solved complex algorithmic challenges in competitive programming platforms.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Advocacy',
      description: 'Contributed to technical documentation and shared insights with the developer community.',
      gradient: 'from-emerald-400 to-teal-500'
    }
  ];

  return (
    <section id="achievements" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4"
          >
            Recognition
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight"
          >
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Code</span>.
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={`p-5 rounded-2xl bg-gradient-to-br ${achievement.gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                <achievement.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                {achievement.title}
              </h3>
              <p className="text-slate-500 font-bold leading-relaxed mb-6">
                {achievement.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-200/60 w-full flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}