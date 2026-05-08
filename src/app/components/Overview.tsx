import { useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { WF, ANGEL_SCREENS, PAOLA_SCREENS, VET_SCREENS } from './wire/wf';

export function Overview() {
  const navigate = useNavigate();

  // Combine all screens with persona labels
  const allScreens = [
    ...ANGEL_SCREENS.map(s => ({ ...s, persona: 'Ángel', personaShort: 'A' })),
    ...PAOLA_SCREENS.map(s => ({ ...s, persona: 'Paola', personaShort: 'P' })),
    ...VET_SCREENS.map(s => ({ ...s, persona: 'Angélica', personaShort: 'V' })),
  ];

  return (
    <div className="min-h-full" style={{ backgroundColor: WF.bg }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-6" style={{ backgroundColor: WF.header }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl"></span>
          <h1 className="text-white font-bold" style={{ fontSize: '1.3rem' }}>Huellitas Care</h1>
        </div>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}></p>
      </div>

      {/* All screens list */}
      <div className="px-4 py-5">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          {/* Info box */}
          <div className="p-4" style={{ backgroundColor: WF.bg, borderBottom: `1px solid ${WF.border}` }}>
            <p className="text-xs text-center" style={{ color: WF.muted }}>Wireframes
            </p>
          </div>

          {/* Screen list */}
          <div className="divide-y" style={{ borderColor: WF.border }}>
            {allScreens.map((s, idx) => (
              <button
                key={s.path}
                onClick={() => navigate(s.path)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:opacity-80 transition-opacity"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: WF.bg, color: WF.text }}
                >
                  {s.personaShort}{s.num}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: WF.text }}>{s.label}</p>
                  <p className="text-xs" style={{ color: WF.muted }}>{s.persona}</p>
                </div>
                <ChevronRight size={14} style={{ color: WF.muted }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
