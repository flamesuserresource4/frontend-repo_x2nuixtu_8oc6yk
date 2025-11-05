import React from 'react';
import { Rocket, Cpu, Bot, Globe } from 'lucide-react';

export default function Tracks() {
  const tracks = [
    {
      icon: <Cpu className="h-5 w-5" />,
      name: 'AI Forge',
      desc: 'Build intelligent systems that thrive in harsh environments with on-device and edge AI.'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      name: 'Metaverse Tundra',
      desc: 'AR/VR experiences that blend folklore, dragons, and data into immersive stories.'
    },
    {
      icon: <Bot className="h-5 w-5" />,
      name: 'Robotics on Ice',
      desc: 'Autonomous machines, swarm coordination, and bio-inspired designs.'
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      name: "Dragon's Den Pitch",
      desc: 'Startup showcase with fiery feedback from founders, investors, and operators.'
    }
  ];

  return (
    <section id="tracks" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Event Tracks</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Dive into focused realms designed to sharpen skills, spark ideas, and ship projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {tracks.map((t, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-cyan-300">
                {t.icon}
                <span className="text-sm">Track</span>
              </div>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-slate-300/90">{t.desc}</p>
              <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
