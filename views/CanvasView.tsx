
import React from 'react';

const CanvasView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 no-print">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[3px] bg-bolivar-green rounded-full"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-bolivar-green">Seguros Bolívar • AE</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Business Architecture Canvas</h1>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl font-medium leading-relaxed">Framework estratégico para el análisis y alineación de capacidades, drivers y activos de arquitectura empresarial.</p>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-3 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="size-11 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center text-[11px] font-black text-slate-400">SB</div>
            ))}
          </div>
          <div className="pr-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado Canvas</p>
            <p className="text-sm font-black text-bolivar-green">V 3.4 • En Revisión</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* ROW 1 */}
        <CanvasBlock title="Stakeholders" icon="groups" color="#7c3aed" bg="#f5f3ff">
          <CanvasItem title="Asegurados" tags={["Core"]} desc="Clientes buscando experiencias digitales ágiles." />
          <CanvasItem title="Fuerza Ventas" tags={["Canales"]} desc="Agentes e intermediarios a nivel nacional." />
          <CanvasItem title="Accionistas" tags={["Gobierno"]} desc="Maximizar rentabilidad y solvencia." />
        </CanvasBlock>

        <CanvasBlock title="Drivers" icon="troubleshoot" color="#2563eb" bg="#eff6ff">
          <CanvasItem title="Transformación" tags={["Digital"]} desc="Aceleración de servicios 100% online." />
          <CanvasItem title="Cumplimiento" tags={["Legal"]} desc="Nuevas regulaciones de la SFC." />
        </CanvasBlock>

        <CanvasBlock title="Goals" icon="stars" color="#059669" bg="#ecfdf5">
          <CanvasItem title="Eficiencia" tags={["2025"]} desc="Reducción del 25% en costos operativos." />
          <CanvasItem title="CX Liderazgo" tags={["Marca"]} desc="NPS superior a 75 puntos." />
        </CanvasBlock>

        <CanvasBlock title="Outcomes" icon="flag" color="#db2777" bg="#fdf2f8">
          <CanvasItem title="TTR reducido" tags={["Servicio"]} desc="Respuesta a siniestros en tiempo real." />
          <CanvasItem title="Cloud Native" tags={["TI"]} desc="Infraestructura escalable y resiliente." />
        </CanvasBlock>

        <CanvasBlock title="Value Streams" icon="account_tree" color="#d97706" bg="#fffbeb">
          <CanvasItem title="Venta Omnicanal" tags={["Proceso"]} desc="Ciclo unificado de cotización a emisión." />
          <CanvasItem title="Atención" tags={["Siniestros"]} desc="Desde aviso hasta pago de indemnización." />
        </CanvasBlock>

        {/* ROW 2 */}
        <CanvasBlock title="Capabilities" icon="hub" color="#047857" bg="#f1f8f1">
          <CanvasItem title="Underwriting AI" tags={["L3"]} desc="Suscripción automatizada basada en ML." />
          <CanvasItem title="Data Analytics" tags={["L2"]} desc="Visión 360 del cliente Bolívar." />
        </CanvasBlock>

        <CanvasBlock title="Information" icon="database" color="#475569" bg="#f8fafc">
          <CanvasItem title="Maestro Cliente" tags={["Data"]} desc="Base de datos unificada de asegurados." />
          <CanvasItem title="Póliza Digital" tags={["Asset"]} desc="Definición técnica centralizada." />
        </CanvasBlock>

        <CanvasBlock title="Applications" icon="apps" color="#4f46e5" bg="#eef2ff">
          <CanvasItem title="App Bolívar" tags={["Mobile"]} desc="Interfaz principal para autogestión." />
          <CanvasItem title="Core Seguros" tags={["ERP"]} desc="Sistema central de administración." />
        </CanvasBlock>

        <CanvasBlock title="Technology" icon="router" color="#0f172a" bg="#f1f5f9">
          <CanvasItem title="Azure Cloud" tags={["Cloud"]} desc="Hosting principal de plataformas." />
          <CanvasItem title="API Gateway" tags={["Infra"]} desc="Gestión de microservicios." />
        </CanvasBlock>

        <CanvasBlock title="Metrics" icon="monitoring" color="#334155" bg="#f8fafc">
          <CanvasItem title="Uptime" tags={["99.9%"]} desc="Disponibilidad de servicios críticos." />
          <CanvasItem title="Error Rate" tags={["Salud"]} desc="Monitoreo de fallos en producción." />
        </CanvasBlock>

        {/* ROW 3 (Wider) */}
        <div className="md:col-span-2 lg:col-span-4 xl:col-span-5">
          <CanvasBlock title="Risks & Policies" icon="gpp_maybe" color="#dc2626" bg="#fef2f2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <CanvasItem title="Habeas Data" tags={["Legal"]} desc="Protección estricta de datos personales." />
              <CanvasItem title="Obsolescencia" tags={["Riesgo"]} desc="Sistemas legados sin soporte oficial." />
              <CanvasItem title="Continuidad" tags={["Política"]} desc="Planes de recuperación ante desastres." />
              <CanvasItem title="Cyber-resiliencia" tags={["Seg"]} desc="Defensa activa contra ataques." />
            </div>
          </CanvasBlock>
        </div>
      </div>
    </div>
  );
};

const CanvasBlock = ({ title, icon, color, bg, children }: any) => (
  <div className="bg-white border border-slate-200 rounded-[28px] overflow-hidden shadow-sm flex flex-col h-full min-h-[380px] group transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: color }}>
      <div className="flex items-center gap-3 text-white">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
        <h3 className="text-[11px] font-black uppercase tracking-[0.15em]">{title}</h3>
      </div>
      <button className="text-white/40 hover:text-white transition-colors">
        <span className="material-symbols-outlined text-xl">add_circle</span>
      </button>
    </div>
    <div className="p-5 flex-1 overflow-y-auto space-y-5" style={{ backgroundColor: bg }}>
       {children}
    </div>
  </div>
);

const CanvasItem = ({ title, tags, desc }: any) => (
  <div className="bg-white p-5 rounded-[22px] border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-bolivar-green/20 transition-all cursor-pointer group/item relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1.5 h-0 bg-bolivar-green group-hover/item:h-full transition-all duration-300"></div>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((t: string) => (
        <span key={t} className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-50 text-slate-400 rounded-lg border border-slate-100">
          {t}
        </span>
      ))}
    </div>
    <h4 className="font-extrabold text-[15px] text-slate-800 mb-2 group-hover/item:text-bolivar-green transition-colors leading-tight">{title}</h4>
    <p className="text-[11px] text-slate-500 leading-normal font-medium">{desc}</p>
  </div>
);

export default CanvasView;
