import React from 'react';
import Spline from '@splinetool/react-spline';
import { Snowflake, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8mWjQ3QzF0JpIh4b/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and noise overlay that doesn't block scene interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-36">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-cyan-200">
          <Snowflake className="h-4 w-4" />
          <span className="text-sm tracking-wide">Winter of Innovation</span>
        </div>

        <h1 className="font-extrabold leading-tight tracking-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl">E‑Summit of E‑Cell</span>
          <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">
            Fantasy, Dragons, Winter & Tech
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base text-slate-200/90 sm:text-lg">
          Enter a frost‑kissed realm where visionary founders forge ideas in dragon fire, AI whispers through winter winds, and brave builders launch what’s next.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-400"
          >
            Register Now
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#tracks"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/60 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:border-slate-600 hover:bg-slate-900"
          >
            Explore Tracks
          </a>
        </div>
      </div>
    </section>
  );
}
