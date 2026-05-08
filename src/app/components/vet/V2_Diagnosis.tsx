import { useNavigate } from 'react-router';
import { FileText, Pill, Calendar } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireRow } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function V2_Diagnosis() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Diagnóstico y consulta"
      screenNum={2}
      totalScreens={6}
      persona="vet"
      backPath="/vet"
      nextPath="/vet/communication"
    >
      {/* Reported symptoms summary */}
      <WireSection label="Síntomas reportados por el dueño" />
      <WireCard>
        <div className="p-4">
          <div className="p-3 rounded-lg" style={{ backgroundColor: WF.angelLight, borderLeft: `3px solid ${WF.angel}` }}>
            <p className="text-sm font-semibold" style={{ color: WF.text }}>Vómito y diarrea</p>
            <p className="text-xs mt-1" style={{ color: WF.textSec }}>Desde hace 2 días • Reportado: 08 May 2026</p>
            <p className="text-xs mt-2" style={{ color: WF.muted }}>
              "No quiere comer, ha vomitado 3 veces y tiene diarrea líquida"
            </p>
          </div>
        </div>
      </WireCard>

      {/* Diagnosis notes */}
      <WireSection label="Notas de diagnóstico" />
      <WireCard>
        <div className="p-4">
          <div className="p-3 rounded border" style={{ borderColor: WF.border, backgroundColor: WF.bg }}>
            <p className="text-xs mb-2" style={{ color: WF.muted }}>Escribe tus observaciones...</p>
            <div className="h-20" style={{ borderTop: `1px solid ${WF.border}`, paddingTop: '8px' }}>
              <p className="text-sm" style={{ color: WF.textSec }}>
                [Área de texto para diagnóstico]
              </p>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Treatment */}
      <WireSection label="Tratamiento indicado" />
      <WireCard>
        <div className="p-4">
          <div className="p-3 rounded border" style={{ borderColor: WF.border, backgroundColor: WF.bg }}>
            <p className="text-xs mb-2" style={{ color: WF.muted }}>Indica el tratamiento...</p>
            <div className="h-16" style={{ borderTop: `1px solid ${WF.border}`, paddingTop: '8px' }}>
              <p className="text-sm" style={{ color: WF.textSec }}>
                [Área de texto para tratamiento]
              </p>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Consultation type */}
      <WireSection label="Tipo de consulta" />
      <div className="px-4 flex gap-2">
        <div className="flex-1 p-3 rounded-lg border-2 text-center" style={{ borderColor: WF.vet, backgroundColor: WF.vetLight }}>
          <p className="text-xs font-semibold" style={{ color: WF.vet }}>Urgencia</p>
        </div>
        <div className="flex-1 p-3 rounded-lg border text-center" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <p className="text-xs" style={{ color: WF.textSec }}>Preventiva</p>
        </div>
        <div className="flex-1 p-3 rounded-lg border text-center" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <p className="text-xs" style={{ color: WF.textSec }}>Seguimiento</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 mt-4 flex gap-2">
        <button
          onClick={() => navigate('/vet/prescription')}
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.card, border: `1px solid ${WF.border}` }}
        >
          <Pill size={16} style={{ color: WF.vet }} />
          <span className="text-sm font-semibold" style={{ color: WF.text }}>Emitir receta</span>
        </button>
        <button
          onClick={() => navigate('/vet/communication')}
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.card, border: `1px solid ${WF.border}` }}
        >
          <Calendar size={16} style={{ color: WF.vet }} />
          <span className="text-sm font-semibold" style={{ color: WF.text }}>Programar seguimiento</span>
        </button>
      </div>
    </WireShell>
  );
}
