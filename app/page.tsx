'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [projectDetails, setProjectDetails] = useState('');

  const modes = [
    { id: 'ai-native', label: 'AI Native' },
    { id: 'agent-guide', label: 'Agent Guide' },
    { id: 'deep-plan', label: 'Deep Plan Mode' },
  ];

  const toggleMode = (modeId: string) => {
    setSelectedModes(prev =>
      prev.includes(modeId)
        ? prev.filter(id => id !== modeId)
        : [...prev, modeId]
    );
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 py-12 overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-glow floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-glow floating" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Headline Section */}
        <div className="mt-16 mb-24 text-center">
          <div className="inline-block glass-strong aura-strong rounded-3xl px-12 py-8 hover-lift">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Build Beyond
              <br />
              <span className="text-glow">Imagination</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-cyan-100/80 font-light">
              The next evolution in no-code full-stack development
            </p>
          </div>
        </div>

        {/* Project Details Input Section */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="glass aura rounded-3xl p-8 hover-lift transition-all duration-500">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />

            <div className="relative">
              <label htmlFor="project-details" className="block text-lg font-medium text-cyan-100/90 mb-4">
                Describe Your Vision
              </label>

              <div className="relative group">
                <textarea
                  id="project-details"
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Tell us about your app idea... Our AI agents will transform it into reality."
                  className="w-full h-64 bg-slate-900/50 border border-cyan-500/20 rounded-2xl px-6 py-4 text-cyan-50 placeholder-cyan-300/30 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none backdrop-blur-sm"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.02), rgba(6, 182, 212, 0.02))',
                  }}
                />

                {/* Animated border effect on focus */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>

              {/* Mode Toggles */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {modes.map((mode) => {
                  const isSelected = selectedModes.includes(mode.id);
                  return (
                    <button
                      key={mode.id}
                      onClick={() => toggleMode(mode.id)}
                      className={`
                        relative px-6 py-2.5 rounded-full text-sm font-medium
                        transition-all duration-300 hover:scale-105 active:scale-95
                        ${isSelected
                          ? 'glass-strong aura text-cyan-100 shadow-lg'
                          : 'glass text-cyan-200/60 hover:text-cyan-100'
                        }
                      `}
                    >
                      {/* Active glow effect */}
                      {isSelected && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse" />
                      )}

                      <span className="relative z-10 flex items-center gap-2">
                        {isSelected && (
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                        )}
                        {mode.label}
                      </span>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-full bg-cyan-500/0 hover:bg-cyan-500/10 transition-colors duration-300" />
                    </button>
                  );
                })}
              </div>

              {/* Submit Button */}
              <div className="mt-10 flex justify-center">
                <button
                  className="group relative px-12 py-4 glass-strong aura rounded-full text-lg font-semibold text-cyan-100 hover-lift overflow-hidden"
                  onClick={() => {
                    console.log('Project Details:', projectDetails);
                    console.log('Selected Modes:', selectedModes);
                  }}
                >
                  {/* Animated background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-shimmer"
                       style={{ backgroundSize: '200% 100%' }} />

                  <span className="relative z-10 flex items-center gap-3">
                    Start Building
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </main>
  );
}
