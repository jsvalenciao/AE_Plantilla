
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const AsIsView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 print-break-inside-avoid">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black">Estado Actual (AS-IS)</h1>
          <p className="text-slate-500 mt-1">Diagnóstico situacional de la arquitectura tecnológica actual de Seguros Bolívar.</p>
        </div>
        <div className="flex items-center gap-2">
           <button className="px-4 py-2 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-50">
             <span className="material-symbols-outlined text-sm">filter_list</span>
             Filtrar Módulos
           </button>
           <button className="px-4 py-2 bg-bolivar-green text-white rounded-xl text-sm font-bold shadow-lg">
             Editar Análisis
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Capability Map */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-bolivar-green">account_tree</span>
              Mapa de Módulos Core
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 1, name: 'Suscripción Individual', icon: 'border_color', health: '85%' },
                { id: 2, name: 'Gestión Siniestros', icon: 'car_crash', health: '45%' },
                { id: 3, name: 'Cobranza Legacy', icon: 'payments', health: '30%' },
                { id: 4, name: 'Portal Intermediarios', icon: 'groups', health: '70%' },
                { id: 5, name: 'Gateway Pagos', icon: 'credit_score', health: '95%' },
                { id: 6, name: 'Notificaciones Push', icon: 'notifications_active', health: '60%' },
              ].map(m => (
                <div key={m.id} className="p-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 hover:border-bolivar-green transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm text-bolivar-green group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">{m.icon}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${parseInt(m.health) < 50 ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                      {m.health} Salud
                    </span>
                  </div>
                  <p className="font-bold text-sm">{m.name}</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Módulo 0{m.id}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
             <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-bolivar-green">verified</span>
                Principales Fortalezas
             </h2>
             <div className="space-y-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl flex items-center gap-4">
                   <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                   <div>
                      <p className="font-bold text-sm">Integración con Centrales de Riesgo</p>
                      <p className="text-xs text-slate-500">API Gateway robusto con tiempos de respuesta &lt; 200ms.</p>
                   </div>
                </div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl flex items-center gap-4">
                   <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                   <div>
                      <p className="font-bold text-sm">Escalabilidad de Infraestructura</p>
                      <p className="text-xs text-slate-500">Auto-scaling configurado para el 80% de servicios críticos.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Side Panel Analysis */}
        <div className="space-y-8">
           <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-red-500">warning</span>
                Brechas (Gaps) Críticas
              </h2>
              <div className="space-y-3">
                 <AsIsGapItem title="Obsolescencia Core Vida" prio="Crítica" desc="Versión sin soporte desde 2022." />
                 <AsIsGapItem title="Silos de Datos Clientes" prio="Alta" desc="Duplicidad de info entre ramos." />
                 <AsIsGapItem title="Deuda Técnica UI" prio="Media" desc="Módulos web no responsivos." />
              </div>
              <button 
                // Fix: Using View.GAPS instead of non-existent View.GAP
                onClick={() => onNavigate(View.GAPS)}
                className="w-full mt-6 py-4 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-xs font-bold text-slate-400 hover:border-bolivar-green hover:text-bolivar-green transition-all"
              >
                Analizar más brechas →
              </button>
           </div>

           <div className="bg-bolivar-yellow/5 p-8 rounded-3xl border border-bolivar-yellow/20">
              <h3 className="font-black text-bolivar-green mb-2">Resumen Operativo</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                 La arquitectura actual presenta un nivel de deuda técnica del 42%, concentrada principalmente en el ramo de Vida y Cobranzas.
              </p>
              <div className="flex items-center gap-2 text-bolivar-green font-bold text-sm">
                 <span className="material-symbols-outlined">analytics</span>
                 Score de Eficiencia: 6.8/10
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const AsIsGapItem = ({ title, prio, desc }: any) => {
  const prioColors: any = {
    'Crítica': 'bg-red-600 text-white',
    'Alta': 'bg-orange-500 text-white',
    'Media': 'bg-bolivar-yellow text-bolivar-green',
  };
  return (
    <div className="p-4 border border-slate-100 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
       <div className="flex items-center justify-between mb-1">
          <p className="font-bold text-sm">{title}</p>
          <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${prioColors[prio] || 'bg-slate-200'}`}>
             {prio}
          </span>
       </div>
       <p className="text-xs text-slate-500">{desc}</p>
    </div>
  );
}

export default AsIsView;
