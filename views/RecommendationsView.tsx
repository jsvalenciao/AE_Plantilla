
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const RecommendationsView: React.FC<Props> = () => {
  return (
    <div className="animate-in fade-in duration-500 space-y-16 pb-20 max-w-6xl mx-auto">
      
      {/* Header section */}
      <div>
        <h1 className="text-4xl font-black text-[#004A3B] tracking-tight">Recomendación Estratégica</h1>
        <p className="text-slate-500 text-lg mt-2 font-medium">Análisis final y ruta de éxito sugerida por el equipo de arquitectura.</p>
      </div>

      {/* KPIs Section - Exact match to second reference image */}
      <section className="space-y-10">
        <div className="flex items-center gap-3 text-[#004A3B]">
          <span className="material-symbols-outlined text-3xl font-bold">trending_up</span>
          <h2 className="text-2xl font-black tracking-tight uppercase">KPIs — Indicadores Clave de Éxito</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <KPICard 
            title="KPI 1" 
            desc="Descripción del indicador clave" 
            val="—%" 
            accentColor="border-emerald-700" 
            icon="trending_up" 
            iconColor="text-emerald-700" 
          />
          <KPICard 
            title="KPI 2" 
            desc="Descripción del indicador clave" 
            val="—" 
            accentColor="border-[#D4A056]" 
            icon="payments" 
            iconColor="text-[#D4A056]" 
          />
          <KPICard 
            title="KPI 3" 
            desc="Descripción del indicador clave" 
            val="—%" 
            accentColor="border-slate-100" 
            icon="lock" 
            iconColor="text-slate-100" 
          />
        </div>
      </section>

      {/* Strategic Actions Section */}
      <section className="space-y-8 pt-8 border-t border-slate-100">
        <div className="flex items-center gap-3 text-slate-400">
          <span className="material-symbols-outlined text-3xl">lightbulb</span>
          <h2 className="text-2xl font-black tracking-tight uppercase">Acciones Recomendadas</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RecommendationItem 
            title="Modernización del Core de Vida" 
            priority="Crítica" 
            desc="Migración prioritaria del sistema de suscripción hacia microservicios en Azure para reducir el Time-to-Market de nuevos productos en un 40%." 
          />
          <RecommendationItem 
            title="Implementación de MDM" 
            priority="Alta" 
            desc="Consolidación de los datos maestros de clientes para habilitar una visión 360 y mejorar la eficacia de las campañas de venta cruzada." 
          />
        </div>
      </section>
    </div>
  );
};

// KPICard matches the second image perfectly
const KPICard = ({ title, desc, val, accentColor, icon, iconColor }: any) => (
  <div className={`bg-white border-2 border-slate-50 border-l-4 ${accentColor} rounded-2xl p-8 shadow-sm flex justify-between items-center transition-all hover:shadow-md`}>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className={`material-symbols-outlined text-2xl ${iconColor}`}>{icon}</span>
        <h3 className="font-extrabold text-[#004A3B] uppercase tracking-widest text-[14px]">{title}</h3>
      </div>
      <p className="text-slate-400 text-sm font-medium">{desc}</p>
    </div>
    <div className={`text-4xl font-black tracking-tighter ${iconColor === 'text-slate-100' ? 'text-slate-100' : 'text-[#004A3B]'}`}>
      {val}
    </div>
  </div>
);

const RecommendationItem = ({ title, priority, desc }: any) => (
  <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm flex flex-col hover:shadow-xl hover:shadow-slate-100 transition-all">
    <div className="flex items-center justify-between mb-8">
      <span className={`text-[10px] font-black uppercase px-4 py-2 rounded-full ${
        priority === 'Crítica' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-[#D4A056]/10 text-[#004A3B] border border-[#D4A056]/20'
      }`}>
        Prioridad {priority}
      </span>
      <span className="material-symbols-outlined text-[#D4A056] text-3xl">verified</span>
    </div>
    <h3 className="text-2xl font-black text-[#004A3B] mb-6 leading-tight">{title}</h3>
    <p className="text-base text-slate-500 leading-relaxed font-medium mb-10">{desc}</p>
    <div className="mt-auto pt-8 border-t border-slate-50">
      <button className="text-[#004A3B] text-sm font-black flex items-center gap-3 group">
        LEER ANÁLISIS COMPLETO 
        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </div>
  </div>
);

export default RecommendationsView;
