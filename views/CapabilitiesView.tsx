
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const CapabilitiesView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 py-4">
        <div className="flex items-center gap-3">
          {/* Fix: Using View.INICIO instead of non-existent View.HOME */}
          <button onClick={() => onNavigate(View.INICIO)} className="p-1 rounded-lg hover:bg-primary/10">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">Capacidades — Cobertura</h1>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div className="flex gap-4 p-3 bg-white dark:bg-white/5 rounded-xl border border-primary/5 shadow-sm text-xs font-medium">
           <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-bolivar-green"></span> Cubierto</div>
           <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-bolivar-yellow"></span> Parcial</div>
           <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500"></span> Gap</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {[1, 2, 3, 4].map(d => (
             <div key={d} className="bg-white dark:bg-white/5 rounded-xl border border-primary/10 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-primary/5 flex justify-between items-center bg-primary/5">
                   <h2 className="font-bold">Dominio {d}</h2>
                   <span className="text-[10px] text-red-500 font-bold">0% Cobertura</span>
                </div>
                <div className="p-4 space-y-2">
                   <Capability cap={`Capacidad ${d}.1`} status="Gap" />
                   <Capability cap={`Capacidad ${d}.2`} status="Gap" />
                </div>
             </div>
           ))}
        </div>
      </main>
    </div>
  );
};

const Capability = ({ cap, status }: any) => (
  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 dark:bg-black/20">
    <span className="text-xs font-medium">{cap}</span>
    <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] font-bold uppercase">{status}</span>
  </div>
);

export default CapabilitiesView;
