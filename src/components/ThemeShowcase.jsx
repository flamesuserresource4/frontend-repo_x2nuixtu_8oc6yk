import React from 'react';
import { Sparkles, Cpu, Shield, Snowflake } from 'lucide-react';

export default function ThemeShowcase() {
  const features = [
    {
      icon: <Snowflake className="h-5 w-5" />,
      title: 'Frozen Frontiers',
      desc: 'Explore breakthroughs forged in the cold: quantum leaps, edge AI, and resilient systems built for extremes.'
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: 'Mythic Machines',
      desc: 'From bio-inspired robotics to dragon-scale materials — see how fantasy fuels real-world engineering.'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Guardians of the Grid',
      desc: 'Cyber defense tournaments and live red-team battles to protect our digital kingdoms.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Spellbound Builders',
      desc: 'Hands-on workshops where code, art, and narrative combine into immersive prototypes.'
    }
  ];

  return (
    <section id="theme" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Winter of Innovation</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
            A celebration of imagination and industry: where winter meets wonder and technology breathes fire.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/50 p-5 backdrop-blur transition hover:border-cyan-400/40 hover:bg-slate-900/70"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-800/60 p-2 text-cyan-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
