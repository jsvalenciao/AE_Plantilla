
import React from 'react';
import { View } from '../types.ts';

interface Props {
  onNavigate: (view: View) => void;
}

const DecisionsView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <header className="flex items-center p-4 sticky top-0 z-10 border-b border-slate-200 dark:border-white/10 bg-white/80 backdrop-blur-md">
        {/* Fix: Using View.INICIO instead of non-existent View.HOME */}
        <button onClick={() => onNavigate(View.INICIO)} className="size-10 flex items-center justify-center rounded-full hover:bg-primary/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold ml-2">Decisiones Estratégicas</h1>
      </header>

      <main className="p-4">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Decisión principal</h2>
            <span className="text-[10px] font-bold text-primary uppercase">Prioridad Alta</span>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Enfoque 2024</p>
                  <h3 className="text-xl font-bold">Transformación Digital Core</h3>
                </div>
                <span className="text-[10px] text-slate-400">12 Oct 2023</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Implementación de arquitecturas de microservicios para reducir costos operativos en un 15% mediante automatización.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Avatar label="JD" />
                  <Avatar label="ML" color="primary" />
                  <Avatar label="+3" />
                </div>
                <button className="text-primary text-xs font-bold">Ver detalles →</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4">Historial</h3>
          <div className="grid grid-cols-2 gap-4">
            <HistoryCard status="Aprobada" title="Expansión LatAm" date="Sep 2023" color="green" icon="check_circle" />
            <HistoryCard status="Descartada" title="Legacy AS400" date="Ago 2023" color="red" icon="cancel" />
            <HistoryCard status="Nuevo" title="IA Generativa" date="Nov 2023" color="amber" icon="bolt" />
            <HistoryCard status="Progreso" title="Rediseño App" date="Dic 2023" color="slate" icon="pending" />
          </div>
        </section>
      </main>
    </div>
  );
};

const Avatar = ({ label, color }: any) => (
  <div className={`size-8 rounded-full border-2 border-white dark:border-background-dark ${color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-slate-200 text-slate-600'} flex items-center justify-center text-[10px] font-bold`}>
    {label}
  </div>
);

const HistoryCard = ({ status, title, date, color, icon }: any) => (
  <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
    <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded bg-${color === 'slate' ? 'slate-100' : color + '-100'} text-${color === 'slate' ? 'slate-600' : color + '-600'}`}>
      {status}
    </span>
    <h4 className="font-bold text-sm mt-2">{title}</h4>
    <div className="mt-4 flex justify-between items-center pt-2 border-t border-slate-100 dark:border-white/5">
      <span className="text-[10px] text-slate-400">{date}</span>
      <span className={`material-symbols-outlined text-sm text-${color === 'slate' ? 'slate-400' : color + '-500'}`}>{icon}</span>
    </div>
  </div>
);

export default DecisionsView;
