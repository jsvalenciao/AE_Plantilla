
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const GapView: React.FC<Props> = ({ onNavigate }) => {
  const gaps = [
    { asis: 'Emisión manual en silos', tobe: 'Automatización 100% APIs', gap: 'Sin Middleware central', prio: 'Alta' },
    { asis: 'Deuda técnica siniestros', tobe: 'Cloud Native escalable', gap: 'Migración microservicios', prio: 'Media' },
    { asis: 'Notificaciones manuales', tobe: 'Omnicanalidad proactiva', gap: 'Motor de reglas', prio: 'Baja' },
    { asis: 'Datos duplicados 3 bases', tobe: 'MDM Unificado', gap: 'Gobierno de Datos', prio: 'Alta' }
  ];

  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <header className="sticky top-0 z-10 bg-background-light dark:bg-background-dark border-b border-primary/20 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Fix: Using View.INICIO instead of non-existent View.HOME */}
          <button onClick={() => onNavigate(View.INICIO)} className="p-2 hover:bg-primary/10 rounded-full">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">Análisis de Brechas (GAP)</h1>
        </div>
      </header>

      <main className="p-4 space-y-8">
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">compare_arrows</span>
            Comparativa de Estados
          </h2>
          <div className="overflow-hidden rounded-xl border border-primary/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-primary/5 dark:bg-primary/10">
                  <th className="p-3 text-xs font-semibold text-slate-500">AS-IS</th>
                  <th className="p-3 text-xs font-semibold text-slate-500">TO-BE</th>
                  <th className="p-3 text-xs font-semibold text-slate-500">Brecha</th>
                  <th className="p-3 text-xs font-semibold text-slate-500 text-center">Prioridad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {gaps.map((g, idx) => (
                  <tr key={idx} className="hover:bg-primary/5">
                    <td className="p-3 text-xs">{g.asis}</td>
                    <td className="p-3 text-xs font-medium">{g.tobe}</td>
                    <td className="p-3 text-xs text-primary italic">{g.gap}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        g.prio === 'Alta' ? 'bg-red-100 text-red-600' : 
                        g.prio === 'Media' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {g.prio}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6">
          <div className="rounded-xl bg-white dark:bg-white/5 border border-red-500/20 p-4">
            <h3 className="font-bold text-red-600 flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined">warning</span> Puntos Críticos
            </h3>
            <ul className="space-y-3">
              <InsightItem icon="error_outline" title="Latencia crítica" desc="+15s impacto cliente" />
              <InsightItem icon="security" title="Vulnerabilidades" desc="Riesgo cumplimiento legacy" />
            </ul>
          </div>
          <div className="rounded-xl bg-white dark:bg-white/5 border border-bolivar-green/20 p-4">
            <h3 className="font-bold text-bolivar-green flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined">rocket_launch</span> Ganancias Rápidas
            </h3>
            <ul className="space-y-3">
              <InsightItem icon="bolt" title="Auto-notificaciones" desc="15% ahorro carga op" />
              <InsightItem icon="grid_view" title="Rediseño Portal UI" desc="UX mejorada sin backend" />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

const InsightItem = ({ icon, title, desc }: any) => (
  <li className="flex gap-3">
    <span className="material-symbols-outlined shrink-0 text-xl">{icon}</span>
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </li>
);

export default GapView;
