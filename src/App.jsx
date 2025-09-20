import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';

const PROJECT_SAMPLE = [
  { id: 1, short: 'NBC', title: 'Payslip Automator', desc: 'Automated payslip creation & distribution using Python + Office merge', link: '#', demo: '#', tag: 'Internship' },
  { id: 2, short: 'QLD', title: 'Legal Advice Hub', desc: 'Email processing → Word → SharePoint using Power Automate', link: '#', demo: '#', tag: 'Industry' },
  { id: 3, short: 'S&S', title: 'E-commerce improvements', desc: 'Frontend fixes & small backend improvements for a florist', link: '#', demo: '#', tag: 'Freelance' }
];

export default function App() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f0f15] text-white p-8 md:p-16 space-y-16">
      <Hero />
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECT_SAMPLE.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
      <About />
      <Contact />
      <footer className="mt-24 text-center text-slate-500 text-sm">© {year} Sanyam Aware</footer>
    </div>
  );
}
