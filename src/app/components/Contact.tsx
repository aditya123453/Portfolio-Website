import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing data science projects, analytics opportunities, and collaborations.
          </p>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a 
              href="mailto:adityanandan450@gmail.com"
              className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-all flex items-center group"
            >
              <div className="bg-indigo-50 p-4 rounded-lg mr-5 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Mail className="h-6 w-6 text-indigo-600 group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1 font-semibold uppercase tracking-wider">Email</p>
                <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">adityanandan450@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+917717341716"
              className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-all flex items-center group"
            >
              <div className="bg-indigo-50 p-4 rounded-lg mr-5 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Phone className="h-6 w-6 text-indigo-600 group-hover:text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1 font-semibold uppercase tracking-wider">Phone</p>
                <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">+91-7717341716</p>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://github.com/aditya123453" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-nandan345" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 text-base px-8 py-6 rounded-md transition-all font-medium"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </div>
      </div>
    </section>
  );
}