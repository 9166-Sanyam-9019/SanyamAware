import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="mb-24">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-slate-800">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your name" className="w-full px-4 py-3 rounded bg-transparent border border-slate-700 placeholder:text-slate-500" />
            <input placeholder="Email" className="w-full px-4 py-3 rounded bg-transparent border border-slate-700 placeholder:text-slate-500" />
            <textarea placeholder="Message" rows="5" className="w-full px-4 py-3 rounded bg-transparent border border-slate-700 placeholder:text-slate-500" />
            <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-[#00fff7] to-[#a259ff] text-black font-semibold">Send message</button>
          </form>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-slate-800 flex flex-col justify-center">
          <div className="text-slate-300 mb-3">Or reach me via:</div>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <div>LinkedIn: <span className="text-slate-100">(add link)</span></div>
            <div>GitHub: <span className="text-slate-100">(add link)</span></div>
            <div>Email: <span className="text-slate-100">your.name@example.com</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
