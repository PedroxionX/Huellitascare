import { useNavigate } from 'react-router';
import { Phone, MapPin, AlertTriangle } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireStep, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const STEPS = [
  'Mantén la calma. Tu mascota percibe tu ansiedad.',
  'Coloca a Luna en un lugar tranquilo y seguro.',
  'No le ofrezcas comida ni agua hasta evaluación veterinaria.',
  'Toma nota de: cuándo empezó, frecuencia del vómito y color.',
  'Llama a tu veterinario o clínica de emergencia.',
  'Trasládate con Luna envuelta en una manta para reducir estrés.',
];

export function A4_UrgentGuide() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Guía paso a paso (urgente)"
      screenNum={4}
      persona="angel"
      backPath="/angel/urgency"
      prevPath="/angel/urgency"
      nextPath="/angel/home-guide"
    >
      {/* Alert header */}
      <div className="mx-4 mt-4 mb-2 p-3 rounded-2xl flex items-center gap-3" style={{ backgroundColor: WF.angelLight, border: `1px solid ${WF.angelMid}` }}>
        <AlertTriangle size={22} style={{ color: WF.angel }} />
        <div>
          <p className="text-sm font-bold" style={{ color: WF.angel }}>Guía de emergencia · Luna 🐕</p>
          <p className="text-xs" style={{ color: WF.muted }}>Síntomas: Vómito · Letargo</p>
        </div>
      </div>

      {/* Steps */}
      <WireSection label="Sigue estos pasos en orden" />
      <WireCard>
        {STEPS.map((text, i) => (
          <WireStep key={i} num={i + 1} text={text} done={i < 2} />
        ))}
      </WireCard>

      {/* What to observe */}
      <WireSection label="Registra mientras esperas" />
      <WireCard>
        <div className="p-3 flex flex-col gap-2">
          {['Hora de inicio de síntomas', 'Frecuencia del vómito', 'Color y consistencia', 'Última comida / agua'].map((item) => (
            <div key={item} className="flex items-center gap-2 py-1.5">
              <div className="w-4 h-4 rounded border flex-shrink-0" style={{ borderColor: WF.border }} />
              <span className="text-sm" style={{ color: WF.text }}>{item}</span>
            </div>
          ))}
        </div>
      </WireCard>

      {/* Emergency contacts */}
      <WireSection label="Contactos de emergencia" />
      <WireCard>
        <div className="p-3 flex flex-col gap-2">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: WF.angel }}>
            <Phone size={18} className="text-white" />
            <p className="text-sm font-bold text-white">Llamar al veterinario ahora</p>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: WF.border }}>
            <MapPin size={18} style={{ color: WF.textSec }} />
            <p className="text-sm font-semibold" style={{ color: WF.text }}>Ver clínicas cercanas</p>
          </button>
        </div>
      </WireCard>

      <div className="px-4 pb-4">
        <WireBtn
          label="Registrar síntoma y finalizar"
          color={WF.text}
          variant="outline"
          onClick={() => navigate('/angel/confirmation')}
        />
      </div>
    </WireShell>
  );
}
