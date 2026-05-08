import { useNavigate } from 'react-router';
import { AlertTriangle, Bell, BookOpen, ChevronRight, Syringe } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireRow, WireStat, ImgPlaceholder } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function A1_Dashboard() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Inicio / Dashboard"
      screenNum={1}
      persona="angel"
      backPath="/"
      nextPath="/angel/symptoms"
    >
      {/* Greeting */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-xs" style={{ color: WF.muted }}>Buenas noches,</p>
        <h2 className="text-lg font-bold" style={{ color: WF.text }}>Ángel</h2>
      </div>

      {/* Emergency CTA — hero */}
      <div className="px-4 mb-3">
        <button
          onClick={() => navigate('/angel/symptoms')}
          className="w-full rounded-2xl p-4 flex items-center gap-3 text-left"
          style={{ backgroundColor: WF.angel, color: '#fff' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <AlertTriangle size={24} className="text-white" />
          </div>
          <div>
            <p className="font-bold" style={{ fontSize: '1rem' }}>¿Tu mascota tiene síntomas?</p>
            <p className="text-xs mt-0.5 opacity-80">Evalúa ahora · Guía paso a paso</p>
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
        <WireRow icon={<Bell size={16} style={{ color: WF.angel }} />} title="Emergencias recientes" sub="Luna · hace 3 días" badge="Ver" arrow />
        <WireRow icon={<BookOpen size={16} style={{ color: WF.paola }} />} title="Cuidados básicos" sub="Guías y consejos" badge="Nuevo" badgeColor={WF.paola} arrow />
        <WireRow icon={<Syringe size={16} style={{ color: WF.ok }} />} title="Vacunas pendientes" sub="Milo · Rabia" badge="1" badgeColor={WF.warn} arrow />
      </WireCard>
    </WireShell>
  );
}
