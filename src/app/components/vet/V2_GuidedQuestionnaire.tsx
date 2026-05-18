import { useNavigate } from 'react-router';
import { AlertTriangle, Check } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function V2_GuidedQuestionnaire() {
  const navigate = useNavigate();
  const progress = 60; // 3 of 5 answered

  return (
    <WireShell
      title="Cuestionario guiado"
      screenNum={2}
      totalScreens={7}
      persona="vet"
      backPath="/vet"
      nextPath="/vet/diagnosis"
    >
      {/* Alert banner */}
      <div className="mx-4 mt-4 mb-3 p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: WF.warnLight, border: `1px solid ${WF.warn}` }}>
        <AlertTriangle size={20} style={{ color: WF.warn }} className="flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-bold text-sm mb-1" style={{ color: WF.warn }}>Información incompleta</p>
          <p className="text-xs" style={{ color: WF.textSec }}>
            Completa estos datos antes del diagnóstico
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold" style={{ color: WF.textSec }}>Progreso</p>
          <p className="text-xs font-bold" style={{ color: WF.ok }}>{progress}%</p>
        </div>
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: WF.placeholder }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ backgroundColor: WF.ok, width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <WireSection label="Datos clave del paciente" />

      {/* Q1 - Completed */}
      <WireCard>
        <div className="p-4 border-b" style={{ borderColor: WF.border }}>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: WF.ok }}>
              <Check size={14} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1" style={{ color: WF.text }}>
                ¿Cuándo fue su última comida?
              </p>
              <p className="text-sm" style={{ color: WF.ok }}>
                Hace 6 horas (arroz con pollo)
              </p>
            </div>
          </div>
        </div>

        {/* Q2 - Completed */}
        <div className="p-4 border-b" style={{ borderColor: WF.border }}>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: WF.ok }}>
              <Check size={14} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1" style={{ color: WF.text }}>
                ¿Está tomando algún medicamento actualmente?
              </p>
              <p className="text-sm" style={{ color: WF.ok }}>
                No
              </p>
            </div>
          </div>
        </div>

        {/* Q3 - Completed */}
        <div className="p-4 border-b" style={{ borderColor: WF.border }}>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: WF.ok }}>
              <Check size={14} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1" style={{ color: WF.text }}>
                ¿Vacunas al corriente?
              </p>
              <p className="text-sm" style={{ color: WF.ok }}>
                Sí, última vacuna: Ene 2026
              </p>
            </div>
          </div>
        </div>

        {/* Q4 - Pending */}
        <div className="p-4 border-b" style={{ borderColor: WF.border, backgroundColor: WF.bg }}>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2" style={{ borderColor: WF.muted }}>
              <span className="text-xs font-bold" style={{ color: WF.muted }}>4</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold mb-2" style={{ color: WF.text }}>
                ¿Cuándo iniciaron los síntomas?
              </p>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2 px-3 rounded-lg text-xs font-semibold border-2" style={{ borderColor: WF.vet, backgroundColor: WF.vetLight, color: WF.vet }}>
                  Hoy
                </button>
                <button className="py-2 px-3 rounded-lg text-xs font-semibold border" style={{ borderColor: WF.border, color: WF.textSec }}>
                  Ayer
                </button>
                <button className="py-2 px-3 rounded-lg text-xs font-semibold border" style={{ borderColor: WF.border, color: WF.textSec }}>
                  2-3 días
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Q5 - Pending */}
        <div className="p-4" style={{ backgroundColor: WF.bg }}>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2" style={{ borderColor: WF.muted }}>
              <span className="text-xs font-bold" style={{ color: WF.muted }}>5</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold mb-2" style={{ color: WF.text }}>
                ¿Han dado remedios caseros?
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2 px-3 rounded-lg text-xs font-semibold border" style={{ borderColor: WF.border, color: WF.textSec }}>
                  Sí
                </button>
                <button className="py-2 px-3 rounded-lg text-xs font-semibold border" style={{ borderColor: WF.border, color: WF.textSec }}>
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Action buttons */}
      <div className="px-4 mt-4 flex gap-2">
        <button
          onClick={() => navigate('/vet/diagnosis')}
          className="flex-1 py-3 px-4 rounded-xl font-semibold text-white"
          style={{ backgroundColor: WF.ok }}
        >
          Continuar al diagnóstico
        </button>
        <button
          onClick={() => navigate('/vet/diagnosis')}
          className="px-4 py-3 rounded-xl font-semibold border"
          style={{ borderColor: WF.border, color: WF.textSec }}
        >
          Omitir
        </button>
      </div>
    </WireShell>
  );
}
