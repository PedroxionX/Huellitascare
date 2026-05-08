import { Search, SlidersHorizontal } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection } from '../wire/WireElements';
import { WF } from '../wire/wf';

const FILTERS = ['Todos', 'Esta semana', 'Este mes', 'Grave'];

const HISTORY = [
  { date: '5 mayo 2026', pet: 'Luna 🐕', symptom: 'Vómito + Letargo', severity: 'Moderado', sevColor: WF.warn },
  { date: '22 abr 2026', pet: 'Milo 🐈', symptom: 'No come', severity: 'Leve', sevColor: WF.ok },
  { date: '10 mar 2026', pet: 'Luna 🐕', symptom: 'Diarrea', severity: 'Leve', sevColor: WF.ok },
  { date: '3 ene 2026', pet: 'Rocky 🐶', symptom: 'Cojera leve en pata trasera', severity: 'Moderado', sevColor: WF.warn },
];

export function P6_SymptomHistory() {
  return (
    <WireShell
      title="Historial de síntomas"
      screenNum={6}
      persona="paola"
      backPath="/paola/profile"
      prevPath="/paola/symptom-form"
      nextPath="/paola/reminder"
    >
      {/* Search + filter */}
      <div className="px-4 pt-4 pb-2 flex gap-2">
        <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <Search size={14} style={{ color: WF.muted }} />
          <span className="text-sm" style={{ color: WF.muted }}>Buscar síntoma...</span>
        </div>
        <button className="w-11 h-11 rounded-xl flex items-center justify-center border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <SlidersHorizontal size={16} style={{ color: WF.textSec }} />
        </button>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-4 pb-3 flex-wrap">
        {FILTERS.map((f, i) => (
          <span
            key={f}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold border"
            style={{
              backgroundColor: i === 0 ? WF.paola : WF.card,
              color: i === 0 ? '#fff' : WF.textSec,
              borderColor: i === 0 ? WF.paola : WF.border,
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Summary */}
      <div className="flex gap-2 px-4 mb-2">
        {['4 registros', '2 mascotas', '0 graves'].map((s, i) => (
          <div key={s} className="flex-1 text-center py-2 rounded-xl border" style={{ backgroundColor: WF.card, borderColor: WF.border }}>
            <p className="text-xs font-bold" style={{ color: i === 2 ? WF.ok : WF.text }}>{s.split(' ')[0]}</p>
            <p className="text-xs" style={{ color: WF.muted }}>{s.split(' ').slice(1).join(' ')}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <WireSection label="Registros" />
      <WireCard>
        {HISTORY.map((item, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3 border-b last:border-b-0" style={{ borderColor: WF.border }}>
            {/* Timeline dot */}
            <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.sevColor }} />
              {i < HISTORY.length - 1 && <div className="w-px flex-1 mt-1" style={{ backgroundColor: WF.border, minHeight: 24 }} />}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs" style={{ color: WF.muted }}>{item.date}</p>
                  <p className="text-sm font-bold mt-0.5" style={{ color: WF.text }}>{item.symptom}</p>
                  <p className="text-xs mt-0.5" style={{ color: WF.muted }}>{item.pet}</p>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                  style={{ backgroundColor: item.sevColor + '18', color: item.sevColor }}
                >
                  {item.severity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </WireCard>
    </WireShell>
  );
}
