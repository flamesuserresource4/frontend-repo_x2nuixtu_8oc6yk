import React from 'react';
import Hero from './components/Hero.jsx';
import ThemeShowcase from './components/ThemeShowcase.jsx';
import Tracks from './components/Tracks.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Hero />
      <ThemeShowcase />
      <Tracks />
      <CTA />
      <footer className="w-full bg-slate-950 py-10 text-center text-sm text-slate-400">
        <p>E‑Summit of E‑Cell • Winter of Innovation</p>
        <p className="mt-1">Crafted with imagination — dragons welcomed.</p>
      </footer>
    </div>
  );
}

export default App;
