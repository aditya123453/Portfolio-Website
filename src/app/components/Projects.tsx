import { ExternalLink, ShoppingCart, Users, CreditCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Sales Data Analysis',
      description: 'Comprehensive analysis of e-commerce transaction data',
      icon: ShoppingCart,
      achievements: [
        'Cleaned 50k+ transactions',
        'Performed EDA and trend analysis',
        'Improved forecasting accuracy by 30%'
      ],
      techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-400'
    },
    {
      title: 'Employee Attrition Prediction',
      description: 'ML-powered prediction system for HR analytics',
      icon: Users,
      achievements: [
        'Built ML models (Logistic Regression, Random Forest, SVM)',
        'Achieved 85% accuracy',
        'Identified key HR factors'
      ],
      techStack: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-400'
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Advanced fraud detection using machine learning',
      icon: CreditCard,
      achievements: [
        'Processed 280k+ transactions',
        'Used SMOTE for imbalance',
        'Achieved 92% detection accuracy'
      ],
      techStack: ['Python', 'Scikit-learn', 'SMOTE', 'Pandas'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-400'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of my recent data science work, highlighting end-to-end analytical pipelines and model deployments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border text-left border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col rounded-xl overflow-hidden">
              <CardHeader className="p-6 pb-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-5 border border-indigo-100">
                  <project.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl mb-2 font-bold text-slate-900">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 font-normal leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow p-6 pt-0">
                <div className="space-y-3 mb-6">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-slate-700">{achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full text-sm font-medium border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}