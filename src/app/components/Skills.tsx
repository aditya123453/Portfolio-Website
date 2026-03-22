import { Code2, Boxes, Wrench, Users } from 'lucide-react';
import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Python', 'C', 'Java', 'SQL', 'PL/SQL'],
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/10',
      badgeColor: 'bg-blue-500 text-white hover:bg-blue-600'
    },
    {
      title: 'Libraries & Frameworks',
      icon: Boxes,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'XGBoost'],
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/10',
      badgeColor: 'bg-purple-500 text-white hover:bg-purple-600'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['AWS', 'Docker', 'Tableau', 'PowerBI', 'Git', 'Jupyter', 'Databricks'],
      color: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-500/10 to-rose-600/10',
      badgeColor: 'bg-pink-500 text-white hover:bg-pink-600'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Collaboration', 'Problem Solving', 'Adaptability'],
      color: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-500/10 to-amber-600/10',
      badgeColor: 'bg-orange-500 text-white hover:bg-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My technical toolkit for building end-to-end data science and machine learning solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100 mr-4">
                  <category.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    variant="outline"
                    className="px-3 py-1 text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}