import { useNavigate } from 'react-router';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function A8_SymptomConfirm() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Confirmación / Síntoma registrado"
      screenNum={8}
      persona="angel"
      backPath="/angel/home-guide"
      prevPath="/angel/care-info"
    >
      {/* Success icon */}
      <div className="flex flex-col items-center pt-8 pb-4 px-4">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: WF.okLight }}>
          <CheckCircle2 size={40} style={{ color: WF.ok }} />
        </div>
        <h2 className="text-center font-bold" style={{ fontSize: '1.2rem', color: WF.text }}>
          Síntoma registrado
        </h2>
        <p className="text-center text-sm mt-1" style={{ color: WF.muted }}>
          Se guardó en el historial médico de Luna
        </p>
      </div>

      {/* Summary */}
      <WireSection label="Resumen del registro" />
      <WireCard>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-xs font-semibold" style={{ color: WF.muted }}>Mascota</span>
            <span className="text-sm font-bold" style={{ color: WF.text }}>Luna 🐕</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-semibold" style={{ color: WF.muted }}>Síntomas</span>
            <span className="text-sm font-bold" style={{ color: WF.text }}>Vómito · Letargo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-semibold" style={{ color: WF.muted }}>Urgencia</span>
            <span className="text-sm font-bold" style={{ color: WF.warn }}>Moderado</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-semibold" style={{ color: WF.muted }}>Fecha</span>
            <span className="text-sm font-bold" style={{ color: WF.text }}>5 mayo 2026 · 6:32 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-semibold" style={{ color: WF.muted }}>Acción tomada</span>
            <span className="text-sm font-bold" style={{ color: WF.text }}>Observación en casa</span>
          </div>
        </div>
      </WireCard>

      {/* Next steps */}
      <WireSection label="Próximas acciones" />
      <WireCard>
        <div className="p-3 flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2.5 rounded-xl" style={{ backgroundColor: WF.warnLight }}>
            <ArrowRight size={14} style={{ color: WF.warn }} />
            <p className="text-xs font-semibold" style={{ color: WF.warn }}>
              Recordatorio programado: 10:30 PM
            </p>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-xl" style={{ backgroundColor: WF.bg }}>
            <ArrowRight size={14} style={{ color: WF.muted }} />
            <p className="text-xs" style={{ color: WF.textSec }}>
              Si empeora, ir a Clínica Animalitos
            </p>
          </div>
        </div>
      </WireCard>

      <div className="px-4 pb-4 flex flex-col gap-2 mt-2">
        <WireBtn label="Ver historial de síntomas" color={WF.text} />
        <WireBtn
          label="Volver al inicio"
          color={WF.text}
          variant="ghost"
          onClick={() => navigate('/angel')}
        />
      </div>
    </WireShell>
  );
}
