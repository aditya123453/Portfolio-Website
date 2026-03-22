import { Trophy, Users, Code, BookOpen } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Team Leader',
      description: 'Led a team to 80% project completion in competitive coding hackathon',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      bgGradient: 'from-yellow-100 to-orange-100'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built and managed collaborative project teams for data science initiatives',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bgGradient: 'from-blue-100 to-indigo-100'
    },
    {
      icon: Code,
      title: 'Competitive Programming',
      description: 'Active participation in coding challenges and algorithmic problem solving',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-100 to-pink-100'
    },
    {
      icon: BookOpen,
      title: 'Tech Writing',
      description: 'Contributing to technical documentation and knowledge sharing',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-100 to-emerald-100'
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Achievements & Activities
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${achievement.bgGradient} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-4 border-white hover:scale-105`}
            >
              <div className="flex items-start">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.gradient} mr-5 flex-shrink-0 shadow-lg`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-base">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}