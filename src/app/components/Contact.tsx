import { Mail, Phone, Github, Linkedin, Download, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#030213] text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-fuchsia-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md text-indigo-300 border border-white/10 rounded-full text-sm font-bold mb-6"
            >
              Get in Touch
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight"
            >
              Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">something</span> great.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed"
            >
              I'm always open to discussing data science projects, analytics opportunities, and strategic collaborations.
            </motion.p>
            
            <div className="space-y-6">
              <motion.a 
                href="mailto:adityanandan450@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                  <Mail className="h-6 w-6 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">adityanandan450@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="tel:+917717341716"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:border-fuchsia-500 transition-all duration-300">
                  <Phone className="h-6 w-6 text-fuchsia-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Call Me</p>
                  <p className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">+91-7717341716</p>
                </div>
              </motion.a>
            </div>
          </div>
          
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-indigo-400" />
                Quick Links
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.a 
                  href="https://github.com/aditya123453" 
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/10 hover:border-indigo-500/50 transition-all"
                >
                  <Github className="h-8 w-8 text-white" />
                  <span className="font-bold">GitHub</span>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/aditya-nandan345" 
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/10 hover:border-blue-500/50 transition-all"
                >
                  <Linkedin className="h-8 w-8 text-white" />
                  <span className="font-bold">LinkedIn</span>
                </motion.a>
              </div>
              
              <a 
                href="/Aditya_Nandan_CV.pdf" 
                download="Aditya_Nandan_CV.pdf"
                className="w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white flex items-center justify-center rounded-2xl transition-all font-black shadow-lg shadow-indigo-500/20 group text-lg"
              >
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Download Resume (PDF)
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}