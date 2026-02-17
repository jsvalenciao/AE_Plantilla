
import React from 'react';
import { View } from '../types.ts';

interface Props {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<Props> = ({ onNavigate }) => {
  // Capturamos la URL exacta para que el QR funcione en GitHub Pages
  const currentAppUrl = typeof window !== 'undefined' ? window.location.href : '';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentAppUrl)}&color=004A3B&bgcolor=FFFFFF&qzone=2`;

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] bg-[#004A3B] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4A056] shadow-[0_0_8px_#D4A056]"></span>
          <span className="text-[12px] font-bold text-white uppercase tracking-widest opacity-90">
            Análisis AE — Versión Digital Interactiva
          </span>
        </div>

        {/* Titles */}
        <h2 className="text-white text-5xl md:text-8xl font-black mb-0 tracking-tight leading-none drop-shadow-lg">
          Transformación de
        </h2>
        <h1 className="text-[#D4A056] text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none drop-shadow-xl">
          Seguros Bolívar
        </h1>

        {/* Description */}
        <p className="text-white/60 text-lg md:text-xl max-w-3xl font-medium leading-relaxed mb-16 px-4">
          Framework estratégico e interactivo para la visualización del ecosistema de arquitectura empresarial.
        </p>

        {/* QR Code and Mobile Access Card */}
        <div className="no-print absolute bottom-12 right-12 hidden lg:flex flex-col items-center bg-white p-6 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 transition-transform z-20">
            <p className="text-[10px] font-black text-[#004A3B] uppercase mb-4 tracking-widest">Acceso Móvil</p>
            <div className="bg-white p-3 rounded-2xl border border-slate-100 mb-4 shadow-inner">
                <img 
                  src={qrCodeUrl} 
                  alt="QR Access" 
                  className="w-32 h-32 block"
                  loading="eager"
                />
            </div>
            <p className="text-[10px] font-bold text-slate-500 max-w-[140px] leading-tight text-center">Escanea para abrir en cualquier dispositivo móvil</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-20 px-4">
          <MetricBox icon="layers" label="CAPACIDADES" />
          <MetricBox icon="groups" label="STAKEHOLDERS" />
          <MetricBox icon="settings_input_component" label="TECNOLOGÍA" />
          <MetricBox icon="domain" label="DOMINIOS" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg relative z-10">
          <button 
            onClick={() => onNavigate(View.AS_IS)}
            className="flex-1 bg-[#D4A056] hover:bg-[#C28C42] text-[#004A3B] px-8 py-5 rounded-2xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-3 shadow-2xl"
          >
            Ver Estado Actual
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
          <button 
            onClick={() => onNavigate(View.ROADMAP)}
            className="flex-1 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-5 rounded-2xl font-black text-sm transition-all active:scale-95 flex items-center justify-center"
          >
            Ver Hoja de Ruta
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="no-print absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30">
          <span className="material-symbols-outlined text-4xl animate-bounce">keyboard_arrow_down</span>
        </div>

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-bolivar-yellow/5 rounded-full blur-[120px]"></div>
      </section>
    </div>
  );
};

const MetricBox = ({ icon, label }: { icon: string; label: string }) => (
  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col items-center justify-center transition-all hover:bg-white/[0.08] hover:-translate-y-1">
    <span className="material-symbols-outlined text-[#D4A056] text-4xl mb-4">
      {icon}
    </span>
    <div className="w-12 h-[2px] bg-white/20 mb-4 rounded-full"></div>
    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{label}</span>
  </div>
);

export default HomeView;
