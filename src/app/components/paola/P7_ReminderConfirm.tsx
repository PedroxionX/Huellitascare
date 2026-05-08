import { useNavigate } from 'react-router';
import { Bell, CheckCircle2, Calendar, Plus } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function P7_ReminderConfirm() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Confirmación de recordatorio"
      screenNum={7}
      persona="paola"
      backPath="/paola/alert"
      prevPath="/paola/symptom-history"
      nextPath="/paola/new-pet"
    >
      {/* Success icon */}
      <div className="flex flex-col items-center pt-8 pb-4 px-4">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: WF.okLight }}>
          <CheckCircle2 size={40} style={{ color: WF.ok }} />
        </div>
        <h2 className="text-center font-bold" style={{ fontSize: '1.2rem', color: WF.text }}>
          Recordatorio configurado
        </h2>
        <p className="text-center text-sm mt-1" style={{ color: WF.muted }}>
          Te notificaremos antes de que venza la vacuna de Luna
        </p>
      </div>

      {/* What was set */}
      <WireSection label="Resumen del recordatorio" />
      <WireCard>
        <div className="p-4 flex flex-col gap-3">
          {[
            { label: 'Mascota', val: 'Luna 🐕' },
            { label: 'Vacuna', val: 'Antirrábica' },
            { label: 'Fecha límite', val: '10 abr 2026' },
            { label: 'Recordatorio', val: '3 días antes' },
            { label: 'Notificación', val: 'Push + correo' },
          ].map((row) => (
            <div key={row.label} className="flex justify-between">
              <span className="text-xs font-semibold" style={{ color: WF.muted }}>{row.label}</span>
              <span className="text-sm font-bold" style={{ color: WF.text }}>{row.val}</span>
            </div>
          ))}
        </div>
      </WireCard>

      {/* Notification preview */}
      <WireSection label="Así se verá tu notificación" />
      <WireCard>
        <div className="p-3 m-1 rounded-xl" style={{ backgroundColor: WF.bg, border: `1px solid ${WF.border}` }}>
          <div className="flex items-start gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: WF.paola }}>
              <Bell size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: WF.text }}>Huellitas Care</p>
              <p className="text-xs mt-0.5" style={{ color: WF.textSec }}>
                Recuerda vacunar a Luna contra la Rabia en 3 días (7 abr 2026)
              </p>
              <p className="text-xs mt-1" style={{ color: WF.muted }}>Hace un momento</p>
            </div>
          </div>
        </div>
      </WireCard>

      <div className="px-4 pb-4 mt-2 flex flex-col gap-2">
        <WireBtn
          label="Agregar otro recordatorio"
          icon={<Plus size={16} />}
          color={WF.paola}
        />
        <WireBtn
          label="Ir al inicio"
          color={WF.text}
          variant="ghost"
          onClick={() => navigate('/paola')}
        />
      </div>
    </WireShell>
  );
}
