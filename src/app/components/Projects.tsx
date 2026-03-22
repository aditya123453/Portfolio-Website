import { ExternalLink, ShoppingCart, Users, CreditCard, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Sales Analysis',
      description: 'Comprehensive analysis of e-commerce transaction data to identify growth opportunities.',
      icon: ShoppingCart,
      achievements: [
        'Cleaned 50k+ transactions',
        'Performed EDA and trend analysis',
        'Improved forecasting accuracy by 30%'
      ],
      techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
      accent: 'blue'
    },
    {
      title: 'Employee Attrition Prediction',
      description: 'ML-powered prediction system for HR analytics to reduce turnover rates.',
      icon: Users,
      achievements: [
        'Built ML models (Random Forest, SVM)',
        'Achieved 85% accuracy',
        'Identified key HR factors'
      ],
      techStack: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
      gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
      accent: 'purple'
    },
    {
      title: 'Fraud Detection System',
      description: 'Advanced fraud detection using machine learning for financial security.',
      icon: CreditCard,
      achievements: [
        'Processed 280k+ transactions',
        'Used SMOTE for imbalance',
        '92% detection accuracy'
      ],
      techStack: ['Python', 'Scikit-learn', 'SMOTE', 'Pandas'],
      gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
      accent: 'orange'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-4"
            >
              My Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
            >
              Real World <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Impact</span> through Data.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-500 max-w-sm"
          >
            A curated selection of my data science work, highlighting end-to-end analytical pipelines.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group h-full bg-white border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col rounded-[2.5rem] overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="p-8 pb-4 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <project.icon className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-6 w-6 text-slate-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3 font-black text-slate-900 leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-base font-normal leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow p-8 pt-0 relative z-10">
                  <div className="w-full h-px bg-slate-100 mb-6"></div>
                  <div className="space-y-4 mb-8">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-indigo-600 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:bg-white transition-colors duration-300"></div>
                        </div>
                        <p className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors font-medium">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1 text-xs font-bold bg-slate-100/80 text-slate-600 group-hover:bg-white group-hover:text-indigo-600 transition-all border-0 rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-8 pt-0 relative z-10">
                  <Button className="w-full h-14 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Case Study
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}