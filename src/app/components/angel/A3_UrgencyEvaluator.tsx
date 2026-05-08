import { useNavigate } from 'react-router';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function A3_UrgencyEvaluator() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Evaluador de urgencia"
      screenNum={3}
      persona="angel"
      backPath="/angel/symptoms"
      prevPath="/angel/symptoms"
      nextPath="/angel/urgent-guide"
    >
      {/* Symptoms received */}
      <WireSection label="Síntomas reportados — Luna 🐕" />
      <WireCard>
        <div className="px-4 py-3 flex flex-wrap gap-2">
          {['Vómito', 'Letargo'].map((s) => (
            <span key={s} className="text-xs px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: WF.angelLight, color: WF.angel }}>
              {s}
            </span>
          ))}
        </div>
      </WireCard>

      {/* Urgency meter */}
      <WireSection label="Nivel de urgencia detectado" />
      <WireCard>
        <div className="p-4">
          {/* Bar visual */}
          <div className="flex gap-1 mb-3 h-3 rounded-full overflow-hidden">
            <div className="flex-1 rounded-l-full" style={{ backgroundColor: WF.ok }} />
            <div className="flex-1" style={{ backgroundColor: WF.warn }} />
            <div className="flex-1 rounded-r-full" style={{ backgroundColor: WF.angel }} />
          </div>
          {/* Indicator */}
          <div className="flex justify-between text-xs mb-4" style={{ color: WF.muted }}>
            <span>Leve</span>
            <span>Moderado</span>
            <span>Urgente</span>
          </div>

          {/* Result */}
          <div
            className="rounded-xl p-4 flex items-center gap-3"
            style={{ backgroundColor: WF.warnLight, border: `2px solid ${WF.warn}` }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: WF.warn }}
            >
              <Clock size={24} className="text-white" />
            </div>
            <div>
              <p className="font-bold" style={{ color: WF.warn, fontSize: '1.1rem' }}>MODERADO</p>
              <p className="text-xs mt-0.5" style={{ color: WF.textSec }}>
                Requiere atención hoy. Observa en casa y prepárate para ir al veterinario.
              </p>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Decision tree */}
      <WireSection label="¿Qué hacer ahora?" />
      <WireCard>
        <div className="p-3 flex flex-col gap-2">
          <button
            onClick={() => navigate('/angel/urgent-guide')}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-left"
            style={{ backgroundColor: WF.angelLight, border: `1px solid ${WF.angelMid}` }}
          >
            <AlertTriangle size={20} style={{ color: WF.angel }} />
            <div>
              <p className="text-sm font-semibold" style={{ color: WF.angel }}>Llevar al veterinario ahora</p>
              <p className="text-xs" style={{ color: WF.muted }}>Guía de emergencia paso a paso</p>
            </div>
          </button>
          <button
            onClick={() => navigate('/angel/home-guide')}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-left"
            style={{ backgroundColor: WF.okLight, border: `1px solid #BBF7D0` }}
          >
            <CheckCircle size={20} style={{ color: WF.ok }} />
            <div>
              <p className="text-sm font-semibold" style={{ color: WF.ok }}>Observar en casa primero</p>
              <p className="text-xs" style={{ color: WF.muted }}>Guía de vigilancia domiciliaria</p>
            </div>
          </button>
        </div>
      </WireCard>

      {/* Context note */}
      <div className="mx-4 mb-4 p-3 rounded-xl" style={{ backgroundColor: WF.bg }}>
        <p className="text-xs" style={{ color: WF.muted }}>
          ⚠️ Recuerda que esta evaluación es orientativa. Siempre consulta a un veterinario profesional ante dudas.
        </p>
      </div>
    </WireShell>
  );
}
