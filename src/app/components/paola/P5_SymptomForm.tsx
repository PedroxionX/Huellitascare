import { useNavigate } from 'react-router';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireInput, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const SEVERITY = ['Leve', 'Moderado', 'Grave'];
const PETS = ['Luna 🐕', 'Milo 🐈', 'Rocky 🐶'];

export function P5_SymptomForm() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Formulario de síntoma"
      screenNum={5}
      persona="paola"
      backPath="/paola/profile"
      prevPath="/paola/alert"
      nextPath="/paola/symptom-history"
    >
      {/* Pet selector */}
      <WireSection label="¿Para qué mascota?" />
      <div className="flex gap-2 px-4 mb-1">
        {PETS.map((p, i) => (
          <div
            key={p}
            className="flex-1 py-2 text-center rounded-xl text-xs font-semibold border"
            style={{
              backgroundColor: i === 0 ? WF.paola : WF.card,
              color: i === 0 ? '#fff' : WF.textSec,
              borderColor: i === 0 ? WF.paola : WF.border,
            }}
          >
            {p}
          </div>
        ))}
      </div>

      {/* Form */}
      <WireSection label="Describe el síntoma" />
      <WireCard>
        <div className="p-4">
          <WireInput label="Síntoma principal" placeholder="Ej: vómito, diarrea, no come..." />
          <WireInput label="Fecha y hora" placeholder="5 mayo 2026 · 6:32 PM" type="datetime-local" />

          {/* Severity */}
          <div className="mb-3">
            <label className="text-xs font-semibold mb-2 block" style={{ color: WF.textSec }}>
              Severidad
            </label>
            <div className="flex gap-2">
              {SEVERITY.map((s, i) => (
                <div
                  key={s}
                  className="flex-1 py-2 text-center rounded-xl text-xs font-semibold border"
                  style={{
                    backgroundColor: i === 1 ? WF.warn : WF.bg,
                    color: i === 1 ? '#fff' : WF.textSec,
                    borderColor: i === 1 ? WF.warn : WF.border,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: WF.textSec }}>
              Descripción / Notas
            </label>
            <div
              className="w-full px-3 py-2 rounded-xl border"
              style={{ height: 72, borderColor: WF.border, backgroundColor: WF.bg }}
            >
              <span className="text-xs" style={{ color: WF.muted }}>Describe lo que observaste con detalle...</span>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Photo attachment */}
      <WireSection label="Adjuntar foto (opcional)" />
      <WireCard>
        <div className="p-3 flex gap-2 items-center">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center border-2 border-dashed" style={{ borderColor: WF.border }}>
            <span className="text-2xl">+</span>
          </div>
          <p className="text-xs" style={{ color: WF.muted }}>Toca para adjuntar una foto del síntoma</p>
        </div>
      </WireCard>

      <div className="px-4 pb-4 flex flex-col gap-2 mt-2">
        <WireBtn label="Guardar síntoma" color={WF.paola} onClick={() => navigate('/paola/symptom-history')} />
        <WireBtn label="Cancelar" color={WF.text} variant="ghost" />
      </div>
    </WireShell>
  );
}
