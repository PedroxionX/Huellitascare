import { useNavigate } from 'react-router';
import { Eye, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const MONITOR = [
  { label: 'Hidratación', desc: 'Verifica que beba agua normal', ok: true },
  { label: 'Apetito', desc: 'Ofrece pequeña porción en 2 horas', ok: false },
  { label: 'Frecuencia del vómito', desc: 'Cuenta episodios en las próximas horas', ok: false },
  { label: 'Temperatura', desc: 'Normal: 38–39°C en perros', ok: true },
  { label: 'Actitud general', desc: 'Letargo persistente = urgente', ok: false },
];

const RED_FLAGS = [
  'Más de 3 vómitos en 1 hora',
  'Sangre en el vómito o heces',
  'No puede ponerse de pie',
  'Dificultad para respirar',
  'Abdomen muy hinchado',
];

export function A5_HomeGuide() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Guía de observación en casa"
      screenNum={5}
      persona="angel"
      backPath="/angel/urgency"
      prevPath="/angel/urgent-guide"
      nextPath="/angel/vet-contact"
    >
      {/* Header info */}
      <div className="mx-4 mt-4 mb-2 p-3 rounded-2xl flex items-center gap-3" style={{ backgroundColor: WF.okLight, border: `1px solid #BBF7D0` }}>
        <Eye size={20} style={{ color: WF.ok }} />
        <div>
          <p className="text-sm font-bold" style={{ color: WF.ok }}>Observa a Luna en casa</p>
          <p className="text-xs" style={{ color: WF.muted }}>Monitoreo durante las próximas 4-6 horas</p>
        </div>
      </div>

      {/* Monitoring checklist */}
      <WireSection label="Qué observar" />
      <WireCard>
        {MONITOR.map((item) => (
          <div key={item.label} className="flex items-start gap-3 px-4 py-3 border-b last:border-b-0" style={{ borderColor: WF.border }}>
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: item.ok ? WF.ok : WF.placeholder }}
            >
              {item.ok && <span className="text-white text-xs">✓</span>}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: WF.text }}>{item.label}</p>
              <p className="text-xs" style={{ color: WF.muted }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </WireCard>

      {/* When to go urgently */}
      <WireSection label="Ve al veterinario de inmediato si..." />
      <WireCard>
        {RED_FLAGS.map((f) => (
          <div key={f} className="flex items-center gap-2 px-4 py-2.5 border-b last:border-b-0" style={{ borderColor: WF.border }}>
            <AlertTriangle size={14} style={{ color: WF.angel, flexShrink: 0 }} />
            <p className="text-sm" style={{ color: WF.text }}>{f}</p>
          </div>
        ))}
      </WireCard>

      {/* Reminder schedule */}
      <WireSection label="Recordatorio de revisión" />
      <WireCard>
        <div className="px-4 py-3 flex items-center gap-3">
          <Clock size={18} style={{ color: WF.warn }} />
          <div>
            <p className="text-sm font-semibold" style={{ color: WF.text }}>Reevaluar en 4 horas</p>
            <p className="text-xs" style={{ color: WF.muted }}>Hoy · 10:30 PM</p>
          </div>
          <button className="ml-auto px-3 py-1.5 rounded-xl text-xs font-semibold" style={{ backgroundColor: WF.warn, color: '#fff' }}>
            Activar
          </button>
        </div>
      </WireCard>

      <div className="px-4 pb-4 flex flex-col gap-2">
        <WireBtn label="Registrar síntoma" color={WF.text} onClick={() => navigate('/angel/confirmation')} />
        <WireBtn label="Buscar veterinario" color={WF.angel} variant="outline" onClick={() => navigate('/angel/vet-contact')} />
      </div>
    </WireShell>
  );
}
