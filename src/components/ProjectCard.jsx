/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/6 border border-slate-800 backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00fff7] to-[#a259ff] flex items-center justify-center font-bold">{project.short}</div>
        <div>
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-slate-300">{project.desc}</p>
          <div className="mt-3 flex gap-2">
            <a href={project.link} className="text-xs px-2 py-1 rounded bg-white/3 border border-slate-700">View repo</a>
            <a href={project.demo} className="text-xs px-2 py-1 rounded bg-white/2 border border-slate-700">Live demo</a>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 top-4 text-xs text-slate-500 rotate-6">{project.tag}</div>
    </motion.article>
  );
}
