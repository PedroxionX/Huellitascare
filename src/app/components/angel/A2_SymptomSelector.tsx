import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const SYMPTOM_CATEGORIES = {
  digestivo: ['Vómito', 'Diarrea', 'No come', 'No bebe agua', 'Hinchazón abdominal'],
  respiratorio: ['Dificultad al respirar', 'Tos', 'Estornudos', 'Secreción nasal'],
  conducta: ['Letargo', 'Agresividad', 'Desorientación', 'Temblores'],
  piel: ['Rascado excesivo', 'Pérdida de pelo', 'Heridas', 'Erupciones'],
  otros: ['Convulsiones', 'Sangrado', 'Cojea', 'Secreción ocular', 'Fiebre'],
};

const CATEGORY_LABELS = {
  digestivo: 'Digestivo',
  respiratorio: 'Respiratorio',
  conducta: 'Conducta',
  piel: 'Piel y pelaje',
  otros: 'Otros síntomas',
};

const PETS = ['Luna 🐕', 'Milo 🐈', 'Rocky 🐶'];

export function A2_SymptomSelector() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['Vómito', 'Letargo']);
  const [pet, setPet] = useState('Luna 🐕');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['digestivo', 'conducta']);

  const toggle = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const toggleCategory = (cat: string) =>
    setExpandedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  return (
    <WireShell
      title="Selector de síntoma"
      screenNum={2}
      persona="angel"
      backPath="/angel"
      prevPath="/angel"
      nextPath="/angel/urgency"
    >
      {/* Pet selector */}
      <WireSection label="¿Para qué mascota?" />
      <div className="flex gap-2 px-4 mb-1">
        {PETS.map((p) => (
          <button
            key={p}
            onClick={() => setPet(p)}
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all"
            style={{
              backgroundColor: pet === p ? WF.angel : WF.card,
              color: pet === p ? '#fff' : WF.textSec,
              borderColor: pet === p ? WF.angel : WF.border,
            }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl border"
          style={{ borderColor: WF.border, backgroundColor: WF.bg }}
        >
          <Search size={14} style={{ color: WF.muted }} />
          <span className="text-sm" style={{ color: WF.muted }}>Buscar síntoma...</span>
        </div>
      </div>

      {/* Categorized symptoms */}
      <WireSection label="Selecciona los síntomas que notas" />
      <div className="px-4 pb-3 space-y-2">
        {Object.entries(SYMPTOM_CATEGORIES).map(([category, symptoms]) => (
          <WireCard key={category}>
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between p-3"
              style={{ backgroundColor: WF.card }}
            >
              <span className="font-semibold text-sm" style={{ color: WF.text }}>
                {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
              </span>
              {expandedCategories.includes(category) ? (
                <ChevronUp size={16} style={{ color: WF.muted }} />
              ) : (
                <ChevronDown size={16} style={{ color: WF.muted }} />
              )}
            </button>

            {expandedCategories.includes(category) && (
              <div className="px-3 pb-3 flex flex-wrap gap-2">
                {symptoms.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggle(s)}
                    className="px-3 py-2 rounded-xl text-xs font-semibold border transition-all"
                    style={{
                      backgroundColor: selected.includes(s) ? WF.angel : WF.card,
                      color: selected.includes(s) ? '#fff' : WF.textSec,
                      borderColor: selected.includes(s) ? WF.angel : WF.border,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </WireCard>
        ))}
      </div>

      {/* Selected summary */}
      {selected.length > 0 && (
        <WireCard>
          <div className="p-3">
            <p className="text-xs font-semibold mb-2" style={{ color: WF.muted }}>
              {selected.length} síntoma{selected.length > 1 ? 's' : ''} seleccionado{selected.length > 1 ? 's' : ''}
            </p>
            <div className="flex flex-wrap gap-1">
              {selected.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: WF.angelLight, color: WF.angel }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </WireCard>
      )}

      <div className="px-4 pb-4">
        <WireBtn label="Evaluar síntomas →" color={WF.angel} onClick={() => navigate('/angel/urgency')} />
      </div>
    </WireShell>
  );
}
