
import React from 'react';
import { View } from '../types.ts';

interface Props {
  onNavigate: (view: View) => void;
}

const RoadmapView: React.FC<Props> = ({ onNavigate }) => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="flex-1 pb-32 overflow-y-auto animate-in fade-in duration-500">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 mb-12">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate(View.INICIO)} className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-[#004A3B]">arrow_back</span>
            </button>
            <div>
              <h1 className="text-2xl font-black text-[#004A3B] tracking-tight">Hoja de Ruta Estratégica</h1>
              <p className="text-slate-500 text-sm font-medium">Cronograma de ejecución y metas a futuro.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 no-print">
            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-black rounded-full border border-emerald-100">EJECUCIÓN: 45%</span>
          </div>
        </div>
      </header>

      <main className="px-6 max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-100"></div>
          
          <RoadmapPhase 
            number="01" 
            title="Diagnóstico & AS-IS" 
            status="Completado" 
            color="emerald-600"
            items={["Mapeo de arquitectura actual", "Identificación de deuda técnica", "Workshop con stakeholders"]}
          />

          <RoadmapPhase 
            number="02" 
            title="Integración Core & API" 
            status="En progreso" 
            color="amber-500"
            active
            items={["Implementación de nuevo API Gateway", "Migración de base de datos modular", "Pruebas de latencia"]}
          />

          <RoadmapPhase 
            number="03" 
            title="Transformación Digital" 
            status="Pendiente" 
            color="slate-300"
            items={["Lanzamiento portal unificado", "IA aplicada a suscripción", "Cierre de brechas críticas"]}
          />

          {/* Goal Section */}
          <section className="relative pl-16 mt-20">
            <div className="absolute left-6 -translate-x-1/2 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#004A3B] text-white shadow-xl border-4 border-white">
              <span className="material-symbols-outlined text-xl">flag</span>
            </div>
            <div className="bg-[#004A3B] rounded-[32px] p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Estado Objetivo Alcanzado</h3>
                <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                    Al finalizar la hoja de ruta, Seguros Bolívar contará con una arquitectura elástica, modular y centrada en el dato, permitiendo una respuesta inmediata a los cambios del mercado.
                </p>
                <div className="grid grid-cols-3 gap-6">
                    <GoalMini label="Resiliencia" val="100%" />
                    <GoalMini label="Time-to-Market" val="-40%" />
                    <GoalMini label="NPS Digital" val="8.5" />
                </div>
            </div>
          </section>

          {/* Footer Actions - The Download Button */}
          <section className="mt-24 pt-12 border-t border-slate-100 flex flex-col items-center no-print">
              <div className="text-center mb-10">
                  <h4 className="text-xl font-black text-[#004A3B] mb-2 uppercase tracking-tight">Fin del Análisis AE</h4>
                  <p className="text-slate-400 text-sm font-medium">Exporta este análisis completo para presentaciones corporativas.</p>
              </div>
              <button 
                onClick={handleDownloadPDF}
                className="group flex items-center gap-4 bg-[#D4A056] hover:bg-[#C28C42] text-[#004A3B] px-12 py-5 rounded-2xl font-black text-base shadow-2xl shadow-[#D4A056]/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                  <span className="material-symbols-outlined text-2xl group-hover:animate-bounce">download</span>
                  DESCARGAR PRESENTACIÓN (PDF)
              </button>
              <p className="mt-8 text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">Seguros Bolívar • 2024 • Todos los derechos reservados</p>
          </section>
        </div>
      </main>
    </div>
  );
};

const RoadmapPhase = ({ number, title, status, color, items, active }: any) => (
  <section className="relative pl-16 mb-16 group">
    <div className={`absolute left-6 -translate-x-1/2 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-slate-100 z-10 transition-all group-hover:scale-110 shadow-sm ${active ? 'ring-4 ring-amber-500/10' : ''}`}>
      <span className={`w-2.5 h-2.5 rounded-full bg-${color}`}></span>
    </div>
    <div className={`p-8 rounded-[28px] border transition-all ${active ? 'bg-white border-amber-200 shadow-xl' : 'bg-slate-50 border-slate-100 shadow-sm'}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Fase {number}</span>
          <h3 className="text-xl font-black text-[#004A3B] tracking-tight">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
          status === 'Completado' ? 'bg-emerald-50 text-emerald-600' : 
          status === 'En progreso' ? 'bg-amber-50 text-amber-600 animate-pulse' : 'bg-slate-100 text-slate-400'
        }`}>
          {status}
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <span className={`material-symbols-outlined text-base ${status === 'Completado' ? 'text-emerald-500' : 'text-slate-300'}`}>
              {status === 'Completado' ? 'check_circle' : 'circle'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const GoalMini = ({ label, val }: any) => (
  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center">
    <p className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">{label}</p>
    <p className="text-xl font-black text-[#D4A056]">{val}</p>
  </div>
);

export default RoadmapView;
