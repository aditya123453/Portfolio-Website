import { Briefcase, Database, Brain } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Experience & Training
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl hover:shadow-3xl transition-all">
            <div className="flex items-start mb-8">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-5 rounded-2xl mr-6 shadow-xl">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-gray-800 mb-3">
                  PL/SQL & Data Science Bootcamp
                </h3>
                <p className="text-blue-600 font-bold text-lg mb-2">
                  Lovely Professional University
                </p>
              </div>
            </div>
            
            <div className="space-y-5 ml-24">
              <div className="flex items-start bg-gradient-to-r from-blue-100 to-cyan-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg mr-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  Built comprehensive database systems with triggers, stored procedures, and functions
                </p>
              </div>
              
              <div className="flex items-start bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  Developed and deployed machine learning models for predictive analytics
                </p>
              </div>
              
              <div className="flex items-start bg-gradient-to-r from-indigo-100 to-purple-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg mr-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  Integrated ML pipelines with structured databases for real-time data processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}