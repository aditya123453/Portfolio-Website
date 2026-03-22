import { Award, ExternalLink, X, Maximize2, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Complete Guide to Problem Solving Skills',
      issuer: 'upGrad',
      image: '/certificates/upgrad.png',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Hardware and Operating Systems',
      issuer: 'IBM',
      link: 'https://coursera.org/verify/M0LX5VZ9L6HR',
      image: '/certificates/ibm.png',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'PL/SQL & Data Science Bootcamp',
      issuer: 'Lovely Professional University',
      image: '/certificates/lpu.png',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Systems Logic Gates',
      issuer: 'Universitat Autònoma de Barcelona',
      link: 'https://coursera.org/verify/5ZLY4LEG2J2D',
      image: '/certificates/uab.png',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Frontend Development',
      issuer: 'FreeCodeCamp',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="certifications" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-4"
          >
            Milestones
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight"
          >
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Expertise</span>.
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => cert.image && setSelectedImage(cert.image)}
              className={`bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200/60 hover:shadow-2xl hover:bg-white transition-all duration-500 group relative flex flex-col items-start text-left ${cert.image ? 'cursor-pointer' : ''}`}
            >
              <div className="flex justify-between items-start w-full mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Award className="h-7 w-7 text-indigo-600 group-hover:text-white" />
                </div>
                <div className="flex gap-2">
                  {cert.image && (
                    <button className="p-2 bg-white rounded-full border border-slate-100 text-slate-400 hover:text-indigo-600 transition-colors shadow-sm">
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  )}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-slate-100 text-slate-400 hover:text-indigo-600 transition-colors shadow-sm" onClick={e => e.stopPropagation()}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-auto italic">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-12" 
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full" 
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full backdrop-blur-md"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="bg-white rounded-[2rem] p-4 shadow-2xl flex items-center justify-center border-8 border-white/10">
                <img 
                  src={selectedImage} 
                  alt="Certificate" 
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f8fafc/64748b?text=Certificate+Preview';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}