import React from 'react';

export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">About Me</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 text-slate-300">
          <p className="mb-4">I recently completed my Master of IT at QUT and worked on real-world automation and full-stack projects.</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
            <li>Python · Automation · Office integration</li>
            <li>React · Three.js · Framer Motion</li>
            <li>Power Automate · Microsoft Graph</li>
            <li>Docker · SQL · Azure</li>
          </ul>
        </div>
        <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-slate-800">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00fff7] to-[#a259ff] p-1 mb-3">
            <img src="/avatar-placeholder.png" alt="avatar" className="w-full h-full rounded-full object-cover bg-[#071029]" />
          </div>
          <div className="text-sm text-slate-300">Open to work — Brisbane</div>
          <a className="mt-3 text-xs px-3 py-2 rounded bg-white/2 border border-slate-700">Download CV</a>
        </div>
      </div>
    </section>
  );
}
