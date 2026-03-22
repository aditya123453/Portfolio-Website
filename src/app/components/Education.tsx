import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      specialization: 'Data Science',
      institution: 'Lovely Professional University',
      year: 'Present',
      status: 'In Progress',
      gradient: 'from-blue-500 to-purple-500',
      borderColor: 'border-blue-500'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Amity International School',
      year: '2022',
      percentage: '74%',
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500'
    },
    {
      degree: 'Matriculation',
      institution: 'Aditya Vidyashram',
      year: '2020',
      percentage: '80%',
      gradient: 'from-pink-500 to-orange-500',
      borderColor: 'border-pink-500'
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`bg-white p-10 rounded-2xl border-l-8 ${edu.borderColor} hover:shadow-2xl transition-all shadow-xl hover:scale-105`}
            >
              <div className="flex items-start">
                <div className={`bg-gradient-to-r ${edu.gradient} p-4 rounded-xl mr-6 shadow-lg`}>
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className={`text-xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mt-1`}>
                          Specialization: {edu.specialization}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      {edu.status && (
                        <span className={`inline-block px-6 py-2 bg-gradient-to-r ${edu.gradient} text-white rounded-full text-base font-bold mb-2 shadow-md`}>
                          {edu.status}
                        </span>
                      )}
                      <p className="text-gray-700 font-bold text-lg">{edu.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 text-xl mb-2 font-semibold">
                    {edu.institution}
                  </p>
                  {edu.percentage && (
                    <p className={`text-xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                      Score: {edu.percentage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}