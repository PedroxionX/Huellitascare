import { useNavigate } from 'react-router';
import { Bell, BellRing } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const PENDING = [
  { name: 'Antirrábica', overdue: true, days: 25, next: '10 abr 2026', last: '10 abr 2025' },
  { name: 'Desparasitación interna', overdue: true, days: 0, next: '5 may 2026', last: '5 feb 2026' },
  { name: 'Moquillo + Parvovirus', overdue: false, days: 41, next: '15 jun 2026', last: '15 jun 2025' },
];

export function P4_PendingAlert() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Alerta de pendiente / Recordatorio"
      screenNum={4}
      persona="paola"
      backPath="/paola/calendar"
      prevPath="/paola/calendar"
      nextPath="/paola/symptom-form"
    >
      {/* Alert banner */}
      <div className="mx-4 mt-4 mb-3 p-4 rounded-2xl" style={{ backgroundColor: WF.angelLight, border: `2px solid ${WF.angelMid}` }}>
        <div className="flex items-center gap-2 mb-1">
          <BellRing size={18} style={{ color: WF.angel }} />
          <p className="font-bold text-sm" style={{ color: WF.angel }}>Vacunas pendientes — Luna</p>
        </div>
        <p className="text-xs" style={{ color: WF.muted }}>Activa recordatorios para no olvidarlas</p>
      </div>

      {/* Pending list */}
      <WireSection label="Requieren atención" />
      {PENDING.map((item) => (
        <WireCard key={item.name}>
          <div className="p-3">
            {/* Status bar */}
            <div
              className="w-full py-1.5 px-3 rounded-t-xl -mx-0 -mt-0 mb-3 flex items-center gap-2"
              style={{ backgroundColor: item.overdue ? WF.angel : WF.warn }}
            >
              <span className="text-white text-xs font-semibold">
                {item.overdue
                  ? `Vencida hace ${item.days} días`
                  : `Vence en ${item.days} días`}
              </span>
            </div>

            <p className="font-bold text-sm mb-2" style={{ color: WF.text }}>{item.name}</p>
            <div className="flex gap-4 mb-3">
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Última</p>
                <p className="text-xs font-semibold" style={{ color: WF.text }}>{item.last}</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Fecha límite</p>
                <p className="text-xs font-semibold" style={{ color: item.overdue ? WF.angel : WF.warn }}>{item.next}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/paola/reminder')}
              className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm"
              style={{ backgroundColor: item.overdue ? WF.angel : WF.warn, color: '#fff' }}
            >
              <Bell size={15} />
              Activar recordatorio
            </button>
          </div>
        </WireCard>
      ))}

      <div className="px-4 pb-4">
        <WireBtn label="Agregar vacuna manualmente" color={WF.text} variant="ghost" />
      </div>
    </WireShell>
  );
}
