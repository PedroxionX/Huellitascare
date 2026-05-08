import { useNavigate } from 'react-router';
import { FolderHeart, Calendar, FileText, ChevronRight, Syringe } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireRow, WireStat } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function P1_Dashboard() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Inicio / Dashboard"
      screenNum={1}
      persona="paola"
      backPath="/"
      nextPath="/paola/profile"
    >
      {/* Greeting */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-xs" style={{ color: WF.muted }}>Buenas noches,</p>
        <h2 className="text-lg font-bold" style={{ color: WF.text }}>Paola</h2>
      </div>

      {/* Main CTA — hero */}
      <div className="px-4 mb-3">
        <button
          onClick={() => navigate('/paola/calendar')}
          className="w-full rounded-2xl p-4 flex items-center gap-3 text-left"
          style={{ backgroundColor: WF.paola, color: '#fff' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <Calendar size={24} className="text-white" />
          </div>
          <div>
            <p className="font-bold" style={{ fontSize: '1rem' }}>Calendario de salud</p>
            <p className="text-xs mt-0.5 opacity-80">Ver vacunas y citas pendientes</p>
          </div>
          <ChevronRight size={20} className="ml-auto flex-shrink-0 opacity-70" />
        </button>
      </div>

      {/* Pet summary row */}
      <WireSection label="Mis mascotas" />
      <WireCard>
        <div className="p-3 flex gap-2">
          {['Luna 🐕', 'Milo 🐈', 'Rocky 🐶'].map((p) => (
            <div key={p} className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl" style={{ backgroundColor: WF.bg }}>
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: WF.placeholder }} />
              <p className="text-xs font-semibold" style={{ color: WF.text }}>{p}</p>
            </div>
          ))}
        </div>
      </WireCard>

      {/* Quick stats */}
      <WireSection label="Resumen de salud" />
      <div className="flex gap-2 px-4 mb-3">
        <WireStat value="2" label="Alertas" color={WF.angel} />
        <WireStat value="1" label="Próxima cita" color={WF.warn} />
        <WireStat value="3" label="Al día" color={WF.ok} />
      </div>

      {/* Quick access */}
      <WireSection label="Acceso rápido" />
      <WireCard>
        <WireRow icon={<Syringe size={16} style={{ color: WF.paola }} />} title="Vacunas pendientes" sub="Milo · Rabia" badge="1" badgeColor={WF.warn} arrow />
        <WireRow icon={<FileText size={16} style={{ color: WF.paola }} />} title="Historial de síntomas" sub="Ver registros anteriores" badge="Ver" arrow />
        <WireRow icon={<FolderHeart size={16} style={{ color: WF.ok }} />} title="Registrar nueva mascota" sub="Agregar perfil" badge="Nuevo" badgeColor={WF.paola} arrow />
      </WireCard>
    </WireShell>
  );
}
