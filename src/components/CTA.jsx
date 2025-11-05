import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="register" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-cyan-200">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">Coming Soon • Save your spot</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Join the Summit</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Be the first to receive updates on tickets, speaker reveals, hackathon challenges, and exclusive workshops.
        </p>

        <form
          className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full flex-1 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-400 outline-none ring-cyan-400/30 transition focus:ring"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-400"
          >
            Get Updates
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> E‑Cell Campus</span>
          <span className="opacity-40">•</span>
          <span>Winter 2025</span>
        </div>
      </div>
    </section>
  );
}
