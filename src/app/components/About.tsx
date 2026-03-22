import { Brain, BarChart3, Lightbulb } from 'lucide-react';

export function About() {
  const interests = [
    { icon: Brain, label: 'Machine Learning', color: 'from-blue-500 to-cyan-400', bgColor: 'bg-gradient-to-br from-blue-100 to-cyan-50' },
    { icon: BarChart3, label: 'Data Analysis', color: 'from-purple-500 to-pink-400', bgColor: 'bg-gradient-to-br from-purple-100 to-pink-50' },
    { icon: Lightbulb, label: 'Problem Solving', color: 'from-orange-500 to-yellow-400', bgColor: 'bg-gradient-to-br from-orange-100 to-yellow-50' }
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <div className="space-y-4">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hello! I am a passionate Data Science and Machine Learning student dedicated to unlocking the hidden value in complex datasets. My journey into data science began with a deep fascination for statistics and programming, which naturally led me into the world of predictive modeling, advanced analytics, and artificial intelligence.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I specialize in designing scalable data pipelines, performing rigorous exploratory data analysis (EDA), and building machine learning models that solve practical, real-world problems. While continuously learning the latest advancements in AI and collaborating on open-source projects, I firmly believe that properly structured data is the most powerful tool for driving meaningful business decisions.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <interest.icon className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {interest.label}
              </h3>
              <p className="text-slate-600 text-sm">
                Passionate about leveraging {interest.label.toLowerCase()} techniques to solve real-world problems.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}