import { useNavigate } from 'react-router';
import { Syringe, Bug, Plus } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireStat, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const RECORDS = [
  { name: 'Antirrábica', type: 'vaccine', last: '10 abr 2025', next: '10 abr 2026', status: 'overdue' },
  { name: 'Desparasitación interna', type: 'deworming', last: '5 feb 2026', next: '5 may 2026', status: 'overdue' },
  { name: 'Moquillo + Parvovirus', type: 'vaccine', last: '15 jun 2025', next: '15 jun 2026', status: 'upcoming' },
  { name: 'Bordetella', type: 'vaccine', last: '1 nov 2025', next: '1 nov 2026', status: 'ok' },
];

const STATUS_MAP = {
  overdue: { label: 'Vencida', color: WF.angel },
  upcoming: { label: 'Próxima', color: WF.warn },
  ok: { label: 'Al día', color: WF.ok },
};

export function P3_HealthCalendar() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Calendario de salud"
      screenNum={3}
      persona="paola"
      backPath="/paola/profile"
      prevPath="/paola/profile"
      nextPath="/paola/alert"
    >
      {/* Status summary */}
      <WireSection label="Estado general — Luna" />
      <div className="flex gap-2 px-4 mb-2">
        <WireStat value="2" label="Vencidas" color={WF.angel} />
        <WireStat value="1" label="Próximas" color={WF.warn} />
        <WireStat value="1" label="Al día" color={WF.ok} />
      </div>

      {/* Alert shortcut */}
      <div className="mx-4 mb-3">
        <button
          onClick={() => navigate('/paola/alert')}
          className="w-full p-3 rounded-2xl flex items-center justify-between"
          style={{ backgroundColor: WF.angelLight, border: `1px solid ${WF.angelMid}` }}
        >
          <p className="text-sm font-bold" style={{ color: WF.angel }}>⚠ 2 vacunas requieren atención</p>
          <span className="text-xs font-semibold" style={{ color: WF.angel }}>Ver alertas →</span>
        </button>
      </div>

      {/* Records */}
      <WireSection label="Todos los registros" />
      <WireCard>
        {RECORDS.map((r) => {
          const st = STATUS_MAP[r.status as keyof typeof STATUS_MAP];
          return (
            <div key={r.name} className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0" style={{ borderColor: WF.border }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: st.color + '18' }}>
                {r.type === 'vaccine'
                  ? <Syringe size={14} style={{ color: st.color }} />
                  : <Bug size={14} style={{ color: st.color }} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: WF.text }}>{r.name}</p>
                <p className="text-xs" style={{ color: WF.muted }}>Próxima: {r.next}</p>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                style={{ backgroundColor: st.color + '18', color: st.color }}
              >
                {st.label}
              </span>
            </div>
          );
        })}
      </WireCard>

      <div className="px-4 pb-4">
        <WireBtn label="+ Agregar vacuna / desparasitación" color={WF.paola} variant="outline" />
      </div>
    </WireShell>
  );
}
