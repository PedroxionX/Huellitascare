import { useNavigate } from 'react-router';
import { CheckCircle2, AlertTriangle, Send, FileText } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function V4_OwnerEducation() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Educación al dueño"
      screenNum={4}
      totalScreens={6}
      persona="vet"
      backPath="/vet/communication"
      nextPath="/vet/prescription"
    >
      {/* Treatment importance */}
      <WireSection label="Importancia del tratamiento completo" />
      <WireCard>
        <div className="p-4">
          <div className="p-3 rounded-lg" style={{ backgroundColor: WF.vetLight, borderLeft: `3px solid ${WF.vet}` }}>
            <p className="text-sm font-semibold mb-2" style={{ color: WF.text }}>
              ¿Por qué es importante completar los 7 días?
            </p>
            <p className="text-xs leading-relaxed" style={{ color: WF.textSec }}>
              Aunque Luna se sienta mejor en 2-3 días, es crucial completar el ciclo completo
              de medicación para eliminar toda la infección y evitar recaídas o resistencia a antibióticos.
            </p>
          </div>
        </div>
      </WireCard>

      {/* Key treatment points */}
      <WireSection label="Puntos clave del tratamiento" />
      <WireCard>
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded flex-shrink-0" style={{ backgroundColor: WF.vet }}>
              <CheckCircle2 size={16} className="text-white m-0.5" />
            </div>
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Administrar medicamento cada 12 horas con alimento
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded flex-shrink-0" style={{ backgroundColor: WF.vet }}>
              <CheckCircle2 size={16} className="text-white m-0.5" />
            </div>
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Mantener hidratación constante
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded flex-shrink-0" style={{ backgroundColor: WF.vet }}>
              <CheckCircle2 size={16} className="text-white m-0.5" />
            </div>
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Dieta blanda por 5 días (arroz + pollo)
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded flex-shrink-0" style={{ backgroundColor: WF.vet }}>
              <CheckCircle2 size={16} className="text-white m-0.5" />
            </div>
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Completar los 7 días aunque mejore antes
            </p>
          </div>
        </div>
      </WireCard>

      {/* Warning signs */}
      <WireSection label="Señales de alerta si abandona tratamiento" />
      <WireCard>
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-3 p-2">
            <AlertTriangle size={16} className="flex-shrink-0" style={{ color: WF.angel }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Reaparición de vómito o diarrea en 3-5 días
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <AlertTriangle size={16} className="flex-shrink-0" style={{ color: WF.angel }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Infección más severa que requiere tratamiento más fuerte
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <AlertTriangle size={16} className="flex-shrink-0" style={{ color: WF.angel }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Desarrollo de resistencia a antibióticos
            </p>
          </div>
        </div>
      </WireCard>

      {/* Action buttons */}
      <div className="px-4 mt-4 flex gap-2">
        <button
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.card, border: `1px solid ${WF.border}` }}
        >
          <CheckCircle2 size={16} style={{ color: WF.vet }} />
          <span className="text-sm font-semibold" style={{ color: WF.text }}>Confirmar comprensión</span>
        </button>
        <button
          onClick={() => navigate('/vet/treatment')}
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.vet, color: '#fff' }}
        >
          <Send size={16} />
          <span className="font-semibold">Enviar guía</span>
        </button>
      </div>
    </WireShell>
  );
}
