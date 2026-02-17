
import React from 'react';
import { View } from '../types.ts';

interface Props {
  onNavigate: (view: View) => void;
}

const ScorecardView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Scorecard de Arquitectura</h1>
        <p className="text-slate-500 text-sm mt-1">Indicadores clave de salud y rendimiento estratégico.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard label="Disponibilidad" value="99.9%" progress={99} color="bg-emerald-500" />
        <MetricCard label="Seguridad" value="A+" progress={95} color="bg-blue-500" />
        <MetricCard label="Agilidad (TTR)" value="2.1h" progress={80} color="bg-bolivar-yellow" />
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Desempeño por Dominio</h2>
        <div className="space-y-6">
          <DomainProgress label="Core Business" val={85} />
          <DomainProgress label="Infraestructura" val={72} />
          <DomainProgress label="Datos y Analítica" val={45} />
          <DomainProgress label="Seguridad" val={92} />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, progress, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <h3 className="text-3xl font-black text-slate-800 mt-2 mb-4">{value}</h3>
    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
      <div className={`${color} h-full`} style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

const DomainProgress = ({ label, val }: any) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <span className="text-sm font-bold text-slate-400">{val}%</span>
    </div>
    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
      <div className="bg-bolivar-green h-full" style={{ width: `${val}%` }}></div>
    </div>
  </div>
);

export default ScorecardView;
