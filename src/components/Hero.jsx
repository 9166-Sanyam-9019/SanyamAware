/* eslint-disable no-unused-vars */
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

function RotatingBox() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.6 * delta;
    ref.current.rotation.y += 0.4 * delta;
  });
  return (
    <mesh ref={ref} scale={1.4}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00fff7" metalness={0.6} roughness={0.1} />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-14">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Sanyam Aware
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00fff7] to-[#a259ff]"> — Automation & UI</span>
        </h1>
        <p className="text-slate-300 max-w-xl">
          I design automation systems that remove repetitive work, and craft futuristic interfaces that make complex systems feel effortless.
        </p>
        <a href="#projects" className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-white/5 transition">
          View Projects
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-slate-800 shadow-lg backdrop-blur-md"
      >
        <div className="h-64 rounded-lg overflow-hidden">
          <Suspense fallback={<div className="flex items-center justify-center h-full">Loading 3D...</div>}>
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} />
              <RotatingBox />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Html position={[0, -1.4, 0]} center>
                <div className="text-xs text-slate-400">Interactive 3D hero — replace with full scene</div>
              </Html>
            </Canvas>
          </Suspense>
        </div>
      </motion.div>
    </section>
  );
}
