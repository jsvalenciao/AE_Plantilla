
import React, { useState } from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

interface OptionData {
  id: string;
  name: string;
  category: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  verdict: string;
}

const AlternativesView: React.FC<Props> = () => {
  const [selectedOption, setSelectedOption] = useState<string>('A');

  const options: Record<string, OptionData> = {
    'A': {
      id: 'A',
      name: 'Opción A',
      category: 'Categoría',
      description: 'Descripción de la opción A y su propuesta de valor.',
      advantages: ['Ventaja 1', 'Ventaja 2', 'Ventaja 3'],
      disadvantages: ['Desventaja 1', 'Desventaja 2'],
      verdict: 'Veredicto o recomendación sobre esta opción.'
    },
    'B': {
      id: 'B',
      name: 'Opción B',
      category: 'Categoría',
      description: 'Arquitectura basada en nube híbrida con foco en resiliencia de datos críticos.',
      advantages: ['Escalabilidad', 'Seguridad mejorada', 'Baja latencia'],
      disadvantages: ['Costo inicial alto', 'Complejidad operativa'],
      verdict: 'Es una opción viable para el mediano plazo bajo el esquema actual.'
    },
    'C': {
      id: 'C',
      name: 'Opción C',
      category: 'Categoría',
      description: 'Modelo de servicios gestionados por terceros para optimización de OPEX.',
      advantages: ['Bajo OPEX inicial', 'Mantenimiento externo especializado'],
      disadvantages: ['Dependencia de terceros (Vendor Lock-in)', 'Menor control sobre el roadmap técnico'],
      verdict: 'No se recomienda para el núcleo de negocio debido a riesgos de soberanía de datos.'
    }
  };

  const current = options[selectedOption];

  return (
    <div className="animate-in fade-in duration-500 max-w-[1400px] mx-auto pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Análisis de Alternativas</h1>
        <p className="text-slate-500 text-lg mt-2 font-medium">Benchmark comparativo de opciones evaluadas</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Options List - Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-3 shrink-0">
          {Object.keys(options).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedOption(key)}
              className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-200 ${
                selectedOption === key
                  ? 'bg-bolivar-green text-white border-bolivar-green shadow-lg shadow-bolivar-green/20'
                  : 'bg-white text-slate-700 border-slate-100 hover:border-bolivar-green/30 hover:shadow-md'
              }`}
            >
              <span className="font-extrabold text-sm">Opción {key}</span>
              <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                selectedOption === key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
              }`}>
                Categoría
              </span>
            </button>
          ))}
        </div>

        {/* Right Content Area - Detailed Panel */}
        <div className="flex-1 bg-white rounded-[32px] border border-slate-200 p-10 shadow-sm min-h-[600px] flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1 pr-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">{current.name}</h2>
              <p className="text-slate-500 text-lg mt-4 font-medium leading-relaxed">{current.description}</p>
            </div>
            <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shrink-0">
              {current.category}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Advantages Box */}
            <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-3xl p-8">
              <div className="flex items-center gap-3 text-emerald-700 font-black mb-6">
                <span className="material-symbols-outlined text-2xl">thumb_up</span>
                <span className="text-base uppercase tracking-wider">Ventajas</span>
              </div>
              <ul className="space-y-4">
                {current.advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 text-sm font-medium">
                    <span className="text-emerald-500 text-xl leading-none">•</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disadvantages Box */}
            <div className="bg-[#fff1f2] border border-[#ffe4e6] rounded-3xl p-8">
              <div className="flex items-center gap-3 text-red-700 font-black mb-6">
                <span className="material-symbols-outlined text-2xl">thumb_down</span>
                <span className="text-base uppercase tracking-wider">Desventajas</span>
              </div>
              <ul className="space-y-4">
                {current.disadvantages.map((dis, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 text-sm font-medium">
                    <span className="text-red-500 text-xl leading-none">•</span>
                    <span>{dis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict Box */}
          <div className="mt-10 bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center justify-center gap-4 text-slate-700">
            <span className="material-symbols-outlined text-2xl text-bolivar-green">lightbulb</span>
            <span className="text-sm font-bold">{current.verdict}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativesView;
