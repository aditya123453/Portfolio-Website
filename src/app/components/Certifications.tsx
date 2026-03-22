import { Award, ExternalLink, X, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Complete Guide to Problem Solving Skills',
      issuer: 'upGrad',
      image: '/certificates/upgrad.png'
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      issuer: 'IBM',
      link: 'https://coursera.org/verify/M0LX5VZ9L6HR',
      image: '/certificates/ibm.png'
    },
    {
      title: 'CodeQuery: The Ultimate PL/SQL & Data Science Bootcamp',
      issuer: 'Lovely Professional University (LPU)',
      image: '/certificates/lpu.png'
    },
    {
      title: 'Digital Systems: From Logic Gates to Processors',
      issuer: 'Universitat Autònoma de Barcelona',
      link: 'https://coursera.org/verify/5ZLY4LEG2J2D',
      image: '/certificates/uab.png'
    },
    {
      title: 'Frontend Development',
      issuer: 'FreeCodeCamp'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            Certifications & Courses
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional qualifications and continuous learning achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const CardContent = (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Award className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                  </div>
                  <div className="flex gap-3">
                    {cert.image && (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedImage(cert.image!);
                        }}
                        className="p-1 text-slate-400 hover:text-indigo-600 transition-colors"
                        title="View Certificate"
                      >
                        <Maximize2 className="h-5 w-5" />
                      </button>
                    )}
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-1 text-slate-400 hover:text-indigo-600 transition-colors" title="Verify Link">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  {cert.issuer}
                </p>
              </>
            );

            return (
              <div 
                key={index}
                onClick={(e) => {
                  if (cert.image) {
                    setSelectedImage(cert.image);
                  }
                }}
                className={`bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group text-left relative ${cert.image ? 'cursor-pointer' : ''}`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for full screen image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white rounded-xl p-2 shadow-2xl flex items-center justify-center min-h-[300px]">
              <img 
                src={selectedImage} 
                alt="Certificate" 
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f8fafc/64748b?text=Please+save+your+image+in+the+public/certificates+folder';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}