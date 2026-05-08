import { useNavigate } from 'react-router';
import { CheckCircle2, TrendingUp, AlertCircle, Send, CheckCheck } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function V6_TreatmentGuide() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Guía de tratamiento"
      screenNum={6}
      totalScreens={6}
      persona="vet"
      backPath="/vet/prescription"
      nextPath="/"
    >
      {/* Treatment summary */}
      <WireSection label="Resumen del tratamiento" />
      <WireCard>
        <div className="p-4">
          <div className="p-3 rounded-lg" style={{ backgroundColor: WF.vetLight, borderLeft: `3px solid ${WF.vet}` }}>
            <p className="text-sm font-semibold mb-2" style={{ color: WF.text }}>
              Tratamiento para infección digestiva
            </p>
            <p className="text-xs leading-relaxed" style={{ color: WF.textSec }}>
              Duración total: 7 días de antibiótico + 10 días de probiótico<br />
              Dieta blanda por 5 días<br />
              Revisión de seguimiento: 15 May 2026
            </p>
          </div>
        </div>
      </WireCard>

      {/* Daily checklist */}
      <WireSection label="Pasos del tratamiento día a día" />
      <WireCard>
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded border-2 flex-shrink-0" style={{ borderColor: WF.vet }}>
              <CheckCircle2 size={14} style={{ color: WF.vet }} className="m-px" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: WF.text }}>Mañana (8:00 AM)</p>
              <p className="text-xs" style={{ color: WF.textSec }}>Metronidazol + probiótico con alimento</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded border-2 flex-shrink-0" style={{ borderColor: WF.vet }}>
              <CheckCircle2 size={14} style={{ color: WF.vet }} className="m-px" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: WF.text }}>Noche (8:00 PM)</p>
              <p className="text-xs" style={{ color: WF.textSec }}>Metronidazol con alimento</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded border-2 flex-shrink-0" style={{ borderColor: WF.border }} />
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: WF.text }}>Todo el día</p>
              <p className="text-xs" style={{ color: WF.textSec }}>Agua fresca disponible + dieta blanda</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-2">
            <div className="w-5 h-5 rounded border-2 flex-shrink-0" style={{ borderColor: WF.border }} />
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: WF.text }}>Observar</p>
              <p className="text-xs" style={{ color: WF.textSec }}>Frecuencia de evacuaciones y consistencia</p>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Improvement signals */}
      <WireSection label="Señales de mejoría (buenas)" />
      <WireCard>
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-3 p-2">
            <TrendingUp size={16} className="flex-shrink-0" style={{ color: WF.ok }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              No vómito por 24-48 horas
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <TrendingUp size={16} className="flex-shrink-0" style={{ color: WF.ok }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Evacuaciones más firmes y menos frecuentes
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <TrendingUp size={16} className="flex-shrink-0" style={{ color: WF.ok }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Recupera el apetito y energía normal
            </p>
          </div>
        </div>
      </WireCard>

      {/* Alarm signals */}
      <WireSection label="Señales de alarma (regresar a consulta)" />
      <WireCard>
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-3 p-2">
            <AlertCircle size={16} className="flex-shrink-0" style={{ color: WF.angel }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Vómito con sangre o continúa después de 48h
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <AlertCircle size={16} className="flex-shrink-0" style={{ color: WF.angel }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Diarrea severa o con sangre después de 3 días
            </p>
          </div>
          <div className="flex items-start gap-3 p-2">
            <AlertCircle size={16} className="flex-shrink-0" style={{ color: WF.angel }} />
            <p className="text-sm flex-1" style={{ color: WF.text }}>
              Letargo extremo o no quiere tomar agua
            </p>
          </div>
        </div>
      </WireCard>

      {/* Action buttons */}
      <div className="px-4 mt-4 flex gap-2">
        <button
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.vet, color: '#fff' }}
        >
          <Send size={16} />
          <span className="font-semibold">Enviar guía al dueño</span>
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.card, border: `1px solid ${WF.border}` }}
        >
          <CheckCheck size={16} style={{ color: WF.vet }} />
          <span className="text-sm font-semibold" style={{ color: WF.text }}>Finalizar consulta</span>
        </button>
      </div>
    </WireShell>
  );
}
