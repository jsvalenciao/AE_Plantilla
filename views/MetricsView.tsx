
import React from 'react';
import { View } from '../types.ts';

interface Props {
  onNavigate: (view: View) => void;
}

const MetricsView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <header className="sticky top-0 z-10 bg-background-light dark:bg-background-dark border-b border-primary/10 px-4 py-4">
        <h1 className="text-xl font-bold">Recomendación y KPIs</h1>
      </header>

      <main className="p-4 space-y-8">
        <section>
          <h2 className="text-lg font-bold mb-4">Recomendación del Arquitecto</h2>
          <div className="bg-white dark:bg-white/5 rounded-xl border border-primary/10 overflow-hidden shadow-lg">
             <div className="p-5 space-y-4">
                <RecoItem title="Optimizar latencia" desc="Mejorar pasarela de pagos" />
                <RecoItem title="Auto-scaling" desc="Absorber picos estacionales" />
                <RecoItem title="Seguridad Biométrica" desc="Transacciones de alto valor" />
             </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
             <h2 className="text-lg font-bold">Rendimiento Real</h2>
             <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded">30 Días</span>
          </div>
          <div className="space-y-4">
             <KPICard label="Conversión" val="85%" color="primary" />
             <KPICard label="Respuesta" val="1.2s" color="bolivar-green" />
             <KPICard label="Satisfacción" val="4.8/5" color="bolivar-yellow" />
          </div>
        </section>
      </main>
    </div>
  );
};

const RecoItem = ({ title, desc }: any) => (
  <div className="flex gap-3">
    <span className="material-symbols-outlined text-primary">check_circle</span>
    <div className="text-sm">
      <p className="font-bold">{title}</p>
      <p className="text-slate-500">{desc}</p>
    </div>
  </div>
);

const KPICard = ({ label, val, color }: any) => (
  <div className="bg-white dark:bg-white/5 p-5 rounded-xl border border-primary/5 shadow-sm">
    <div className="flex justify-between items-center">
       <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</span>
       <span className="text-2xl font-bold text-slate-800 dark:text-white">{val}</span>
    </div>
    <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
       <div className={`bg-primary h-full rounded-full`} style={{ width: '80%' }}></div>
    </div>
  </div>
);

export default MetricsView;
