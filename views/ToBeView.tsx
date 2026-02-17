
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const ToBeView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <header className="sticky top-0 z-10 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-primary/20 px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            {/* Fix: Using View.INICIO instead of non-existent View.HOME */}
            <button onClick={() => onNavigate(View.INICIO)}>
              <span className="material-symbols-outlined text-primary text-2xl">arrow_back</span>
            </button>
            <h1 className="text-xl font-bold tracking-tight">Estado Deseado (TO-BE)</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500">search</span>
            <span className="material-symbols-outlined text-slate-500">notifications</span>
          </div>
        </div>
        <p className="text-sm font-medium text-bolivar-green dark:text-primary/80 px-1">Visión de la arquitectura objetivo</p>
      </header>

      <main className="p-4">
        <section className="mb-6">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-bolivar-green to-green-800 p-6 text-white shadow-lg">
            <div className="relative z-10">
              <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">visibility</span>
                Visión Estratégica
              </h2>
              <p className="text-sm leading-relaxed opacity-90">
                Consolidar una arquitectura digital resiliente, escalable y centrada en el cliente que habilite la agilidad organizacional y la innovación continua en Seguros Bolívar para el 2025.
              </p>
            </div>
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/10 blur-2xl"></div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Pilares Estratégicos</h2>
          <div className="grid grid-cols-3 gap-3">
            <Pillar icon="target" label="Objetivos" sub="Enfoque claro" />
            <Pillar icon="rocket_launch" label="Velocidad" sub="Innovación" />
            <Pillar icon="flag" label="Liderazgo" sub="Digital" />
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Beneficios Esperados</h2>
            <span className="text-primary text-xs font-bold">Ver todos</span>
          </div>
          <div className="space-y-3">
            <BenefitItem title="Eficiencia Operativa" desc="Reducción del 30% en tiempos." />
            <BenefitItem title="Escalabilidad Técnica" desc="Manejo de x10 tráfico actual." />
            <BenefitItem title="Mejor CX (Experiencia)" desc="Interfaces intuitivas." />
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-xl border-2 border-dashed border-primary/20 p-6 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-2">map</span>
            <p className="text-sm font-bold">¿Cómo llegamos allí?</p>
            <p className="text-xs text-slate-500 mt-1">Explora la ruta de implementación estratégica.</p>
            <button 
              onClick={() => onNavigate(View.ROADMAP)}
              className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95"
            >
              Ver Hoja de Ruta
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

const Pillar = ({ icon, label, sub }: any) => (
  <div className="flex flex-col items-center rounded-xl bg-white dark:bg-primary/5 p-4 text-center shadow-sm border border-slate-100 dark:border-primary/10">
    <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <p className="text-xs font-bold mb-1">{label}</p>
    <p className="text-[10px] text-slate-500 leading-tight">{sub}</p>
  </div>
);

const BenefitItem = ({ title, desc }: any) => (
  <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-white/5 p-4 border border-slate-100 dark:border-white/10 shadow-sm">
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-bolivar-green/10 text-bolivar-green">
      <span className="material-symbols-outlined text-xl">check_circle</span>
    </div>
    <div className="flex-1">
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);

export default ToBeView;
