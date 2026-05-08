import { useNavigate } from 'react-router';
import { Pill, Send, FileSignature, CheckCircle2 } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireRow } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function V5_Prescription() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Receta / Prescripción digital"
      screenNum={5}
      totalScreens={6}
      persona="vet"
      backPath="/vet/diagnosis"
      nextPath="/vet/treatment"
    >
      {/* Header info */}
      <WireSection label="Datos de la receta" />
      <WireCard>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs mb-1" style={{ color: WF.muted }}>Paciente</p>
              <p className="text-sm font-semibold" style={{ color: WF.text }}>Luna (Labrador)</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: WF.muted }}>Dueño</p>
              <p className="text-sm font-semibold" style={{ color: WF.text }}>Ángel Olivas</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: WF.muted }}>Veterinario</p>
              <p className="text-sm font-semibold" style={{ color: WF.text }}>Dr. García</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: WF.muted }}>Fecha</p>
              <p className="text-sm font-semibold" style={{ color: WF.text }}>08 May 2026</p>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Medications */}
      <WireSection label="Medicamentos recetados" />
      <WireCard>
        <div className="p-4 space-y-3">
          {/* Med 1 */}
          <div className="p-3 rounded-lg border" style={{ borderColor: WF.border, backgroundColor: WF.bg }}>
            <div className="flex items-start gap-2 mb-2">
              <Pill size={16} className="mt-0.5" style={{ color: WF.vet }} />
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: WF.text }}>Metronidazol 250mg</p>
                <p className="text-xs mt-0.5" style={{ color: WF.textSec }}>Antibiótico para infección digestiva</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 pt-2" style={{ borderTop: `1px solid ${WF.border}` }}>
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Dosis</p>
                <p className="text-sm font-semibold" style={{ color: WF.text }}>1 tableta</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Frecuencia</p>
                <p className="text-sm font-semibold" style={{ color: WF.text }}>Cada 12h</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Duración</p>
                <p className="text-sm font-semibold" style={{ color: WF.text }}>7 días</p>
              </div>
            </div>
          </div>

          {/* Med 2 */}
          <div className="p-3 rounded-lg border" style={{ borderColor: WF.border, backgroundColor: WF.bg }}>
            <div className="flex items-start gap-2 mb-2">
              <Pill size={16} className="mt-0.5" style={{ color: WF.vet }} />
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: WF.text }}>Probiótico veterinario</p>
                <p className="text-xs mt-0.5" style={{ color: WF.textSec }}>Restaurar flora intestinal</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 pt-2" style={{ borderTop: `1px solid ${WF.border}` }}>
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Dosis</p>
                <p className="text-sm font-semibold" style={{ color: WF.text }}>1 sobre</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Frecuencia</p>
                <p className="text-sm font-semibold" style={{ color: WF.text }}>Cada 24h</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: WF.muted }}>Duración</p>
                <p className="text-sm font-semibold" style={{ color: WF.text }}>10 días</p>
              </div>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Additional instructions */}
      <WireSection label="Indicaciones adicionales" />
      <WireCard>
        <div className="p-4">
          <div className="p-3 rounded border" style={{ borderColor: WF.border, backgroundColor: WF.bg }}>
            <p className="text-sm" style={{ color: WF.text }}>
              Administrar con alimento. Dieta blanda (arroz + pollo hervido) durante 5 días.
              Mantener hidratación constante. Regresar si síntomas persisten más de 48h.
            </p>
          </div>
        </div>
      </WireCard>

      {/* Digital signature */}
      <WireSection label="Plantilla lista para firmar" />
      <div className="px-4">
        <div className="p-4 rounded-lg border-2 border-dashed" style={{ borderColor: WF.vet }}>
          <div className="text-center">
            <FileSignature size={32} className="mx-auto mb-2" style={{ color: WF.vet }} />
            <p className="text-sm font-semibold" style={{ color: WF.text }}>Dr. García Martínez</p>
            <p className="text-xs" style={{ color: WF.muted }}>Cédula: 1234567 • 08 May 2026 14:32</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 mt-4 flex gap-2">
        <button
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.vet, color: '#fff' }}
        >
          <Send size={16} />
          <span className="font-semibold">Enviar al dueño</span>
        </button>
        <button
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.card, border: `1px solid ${WF.border}` }}
        >
          <CheckCircle2 size={16} style={{ color: WF.vet }} />
          <span className="text-sm font-semibold" style={{ color: WF.text }}>Imprimir</span>
        </button>
      </div>
    </WireShell>
  );
}
