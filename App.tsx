import React, { useState, useEffect } from 'react';
import { View } from './types.ts';

// Importamos TODAS las vistas
import DecisionsView from './views/DecisionsView.tsx';
import AsIsView from './views/AsIsView.tsx';
import GapView from './views/GapView.tsx';
import ToBeView from './views/ToBeView.tsx';
import CapabilitiesView from './views/CapabilitiesView.tsx';
import AlternativesView from './views/AlternativesView.tsx';
import ScorecardView from './views/ScorecardView.tsx';
import RecommendationsView from './views/RecommendationsView.tsx';
import RisksView from './views/RisksView.tsx';
import RoadmapView from './views/RoadmapView.tsx';
import HomeView from './views/HomeView.tsx';
import logoSb from './SBLogo.png';

console.log('📦 App.tsx cargado correctamente.');

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.INICIO);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View;
      if (Object.values(View).includes(hash)) {
        setCurrentView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.location.hash = view;
    setIsMobileMenuOpen(false);
    window.scrollTo(0,0);
  };

  const navItems = [
    { view: View.INICIO, label: "Inicio" },
    { view: View.DECISIONES, label: "Decisiones" },
    { view: View.AS_IS, label: "AS-IS" },
    { view: View.GAPS, label: "GAP" },
    { view: View.TO_BE, label: "TO-BE" },
    { view: View.CAPACIDADES, label: "Capacidades" },
    { view: View.ALTERNATIVAS, label: "Alternativas" },
    { view: View.SCORECARD, label: "Scorecard" },
    { view: View.RECOMENDACIONES, label: "Recomendación" },
    { view: View.RIESGOS, label: "Riesgos" },
    { view: View.ROADMAP, label: "Hoja de Ruta" },
  ];

  // Función para renderizar una vista específica (usada en navegación normal)
  const renderView = (view: View) => {
    switch (view) {
      case View.INICIO: return <HomeView onNavigate={navigateTo} />;
      case View.DECISIONES: return <DecisionsView onNavigate={navigateTo} />;
      case View.AS_IS: return <AsIsView onNavigate={navigateTo} />;
      case View.GAPS: return <GapView onNavigate={navigateTo} />;
      case View.TO_BE: return <ToBeView onNavigate={navigateTo} />;
      case View.CAPACIDADES: return <CapabilitiesView onNavigate={navigateTo} />;
      case View.ALTERNATIVAS: return <AlternativesView onNavigate={navigateTo} />;
      case View.SCORECARD: return <ScorecardView onNavigate={navigateTo} />;
      case View.RECOMENDACIONES: return <RecommendationsView onNavigate={navigateTo} />;
      case View.RIESGOS: return <RisksView onNavigate={navigateTo} />;
      case View.ROADMAP: return <RoadmapView onNavigate={navigateTo} />;
      default: return <HomeView onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-canvas-bg font-sans">
      
      {/* HEADER: Se oculta al imprimir (print:hidden) */}
      <header className="print:hidden sticky top-0 z-50 bg-white border-b border-slate-200 h-20 shrink-0 shadow-sm">
        <div className="max-w-[1800px] mx-auto h-full flex items-center px-6">
          <div className="flex items-center gap-4 shrink-0 mr-8 cursor-pointer" onClick={() => navigateTo(View.INICIO)}>
            {/* LOGO ACTUALIZADO: Asegúrate de subir 'logo_sb.png' a la raíz de tu repo */}
            <img 
              src="./SBLogo.png" 
              alt="Seguros Bolívar" 
              className="h-12 w-auto object-contain"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/100x40?text=Bolivar"; }}
            />
            <div className="h-10 w-[1px] bg-slate-200"></div>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-black text-[#004A3B] uppercase tracking-tight">Arquitectura</span>
              <span className="text-[13px] font-black text-[#004A3B] uppercase tracking-tight">Empresarial</span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center h-full flex-1 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <NavPill 
                key={item.view}
                active={currentView === item.view} 
                label={item.label} 
                onClick={() => navigateTo(item.view)} 
              />
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-4">
             <button 
                onClick={() => window.print()}
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#004A3B] text-white rounded-xl text-xs font-black hover:bg-[#00382D] transition-all shadow-md active:scale-95"
             >
                <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                GENERAR PDF
             </button>
          </div>
        </div>
      </header>

      {/* MAIN VIEW: Vista interactiva normal (se oculta al imprimir) */}
      <main className="flex-1 overflow-y-auto bg-canvas-bg scrollbar-thin print:hidden">
        <div className="standard-view-container max-w-[1800px] mx-auto p-6 md:p-10">
          {renderView(currentView)}
        </div>
      </main>

      {/* PRINT VIEW: Solo visible al imprimir. Renderiza TODAS las vistas en orden */}
      <div className="hidden print:block print:p-8 bg-white">
        <div className="mb-10 border-b-2 border-[#004A3B] pb-4">
           <img src="./SBLogo.png" className="h-16 w-auto mb-4" />
           <h1 className="text-4xl font-black text-[#004A3B]">Reporte de Arquitectura Empresarial</h1>
           <p className="text-slate-500">Generado automáticamente</p>
        </div>
        
        {navItems.filter(i => i.view !== View.INICIO).map((item) => (
          <div key={item.view} className="break-before-page mb-12 border-b border-slate-100 pb-12">
            <div className="mb-6">
               <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A056]">{item.label}</span>
            </div>
            {renderView(item.view)}
          </div>
        ))}
        
        <div className="text-center text-xs text-slate-400 mt-10">
           Documento confidencial - Seguros Bolívar
        </div>
      </div>

    </div>
  );
};

const NavPill = ({ active, label, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`h-full px-4 text-[11px] font-extrabold transition-all flex items-center justify-center text-center leading-tight whitespace-nowrap border-b-4 ${
      active 
        ? 'text-[#004A3B] border-[#004A3B] bg-slate-50' 
        : 'text-slate-400 border-transparent hover:text-slate-600 hover:bg-slate-50'
    }`}
  >
    {label}
  </button>
);

export default App;
