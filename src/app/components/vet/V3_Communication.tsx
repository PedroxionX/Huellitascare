import { useNavigate } from 'react-router';
import { MessageCircle, Send, Bell } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireRow } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function V3_Communication() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Canal de comunicación"
      screenNum={3}
      totalScreens={6}
      persona="vet"
      backPath="/vet/diagnosis"
      nextPath="/vet/education"
    >
      {/* Owner info */}
      <WireSection label="Datos del dueño" />
      <WireCard>
        <div className="p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: WF.placeholder }} />
          <div className="flex-1">
            <p className="font-bold" style={{ color: WF.text }}>Ángel Olivas</p>
            <p className="text-sm" style={{ color: WF.textSec }}>+52 555 123 4567</p>
            <p className="text-xs" style={{ color: WF.muted }}>angel.olivas@email.com</p>
          </div>
        </div>
      </WireCard>

      {/* Recent messages */}
      <WireSection label="Mensajes recientes" />
      <WireCard>
        <div className="p-4 space-y-3">
          {/* Owner message */}
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: WF.placeholder }} />
            <div className="flex-1">
              <div className="p-3 rounded-lg" style={{ backgroundColor: WF.bg }}>
                <p className="text-sm" style={{ color: WF.text }}>
                  Luna ya no vomitó hoy, ¿debo seguir con la medicación?
                </p>
              </div>
              <p className="text-xs mt-1" style={{ color: WF.muted }}>Hace 2 horas</p>
            </div>
          </div>

          {/* Vet message */}
          <div className="flex gap-2 justify-end">
            <div className="flex-1" style={{ maxWidth: '80%' }}>
              <div className="p-3 rounded-lg ml-auto" style={{ backgroundColor: WF.vetLight, borderLeft: `3px solid ${WF.vet}` }}>
                <p className="text-sm" style={{ color: WF.text }}>
                  Excelente. Sí, completa el tratamiento de 7 días aunque mejore.
                </p>
              </div>
              <p className="text-xs mt-1 text-right" style={{ color: WF.muted }}>Hace 1 hora</p>
            </div>
          </div>

          {/* Owner message */}
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: WF.placeholder }} />
            <div className="flex-1">
              <div className="p-3 rounded-lg" style={{ backgroundColor: WF.bg }}>
                <p className="text-sm" style={{ color: WF.text }}>
                  ¿Cuándo debo agendar la siguiente revisión?
                </p>
              </div>
              <p className="text-xs mt-1" style={{ color: WF.muted }}>Hace 30 min</p>
            </div>
          </div>
        </div>
      </WireCard>

      {/* Message input */}
      <WireSection label="Escribir mensaje" />
      <div className="px-4">
        <div className="p-3 rounded-lg border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <p className="text-sm" style={{ color: WF.muted }}>Escribe tu mensaje...</p>
        </div>
      </div>

      {/* Auto follow-up toggle */}
      <div className="px-4 mt-3">
        <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: WF.card, border: `1px solid ${WF.border}` }}>
          <div className="flex items-center gap-2">
            <Bell size={16} style={{ color: WF.vet }} />
            <span className="text-sm font-semibold" style={{ color: WF.text }}>Seguimiento automático</span>
          </div>
          <div className="w-10 h-6 rounded-full" style={{ backgroundColor: WF.vet }}>
            <div className="w-5 h-5 rounded-full bg-white m-0.5 ml-auto" />
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
          <span className="font-semibold">Enviar mensaje</span>
        </button>
        <button
          onClick={() => navigate('/vet/education')}
          className="flex-1 rounded-xl p-3 flex items-center justify-center gap-2"
          style={{ backgroundColor: WF.card, border: `1px solid ${WF.border}` }}
        >
          <MessageCircle size={16} style={{ color: WF.vet }} />
          <span className="text-sm font-semibold" style={{ color: WF.text }}>Programar recordatorio</span>
        </button>
      </div>
    </WireShell>
  );
}
