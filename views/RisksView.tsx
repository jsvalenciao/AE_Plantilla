
import React from 'react';
import { View } from '../types.ts';

interface Props {
  onNavigate: (view: View) => void;
}

const RisksView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 p-4 flex items-center gap-4">
        {/* Fix: Using View.INICIO instead of non-existent View.HOME */}
        <button onClick={() => onNavigate(View.INICIO)} className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100">
           <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold">Riesgos y Gestión del Cambio</h1>
      </header>

      <main className="p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4">Análisis de Riesgos</h2>
          <div className="space-y-4">
            <RiskCard level="Crítico" title="Brecha Seguridad Core" color="red" />
            <RiskCard level="Alto" title="Retraso Proveedor Cloud" color="orange" />
            <RiskCard level="Medio" title="Curva Aprendizaje Dev" color="yellow" />
          </div>
        </section>

        <section className="bg-white dark:bg-white/5 rounded-xl p-6 border border-slate-200">
           <h2 className="text-xl font-bold mb-6">Gestión del Cambio</h2>
           <div className="space-y-8 relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/20">
              <Step icon="campaign" label="Comunicación" items={["Boletines", "Town Halls"]} />
              <Step icon="school" label="Capacitación" items={["Talleres", "Manuales"]} active />
           </div>
        </section>
      </main>
    </div>
  );
};

const RiskCard = ({ level, title, color }: any) => (
  <div className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4 shadow-sm">
     <div className="flex justify-between mb-2">
        <span className={`text-[10px] font-bold uppercase text-${color === 'yellow' ? 'yellow-600' : color + '-600'}`}>Impacto {level}</span>
        <span className={`bg-${color === 'yellow' ? 'yellow-500' : color + '-500'} text-white px-2 py-0.5 rounded text-[10px] font-bold`}>{level.toUpperCase()}</span>
     </div>
     <h3 className="font-bold">{title}</h3>
  </div>
);

const Step = ({ icon, label, items, active }: any) => (
  <div className="relative pl-12">
     <div className={`absolute left-0 top-0 size-10 rounded-full flex items-center justify-center ${active ? 'bg-primary text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
        <span className="material-symbols-outlined">{icon}</span>
     </div>
     <h4 className={`font-bold ${active ? 'text-primary' : 'text-slate-500'}`}>{label}</h4>
     <ul className="mt-2 text-xs text-slate-400">
        {items.map((i: any) => <li key={i}>• {i}</li>)}
     </ul>
  </div>
);

export default RisksView;
