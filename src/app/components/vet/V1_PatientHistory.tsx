import { useNavigate } from 'react-router';
import { Calendar, Syringe, Pill, ChevronRight } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireRow } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function V1_PatientHistory() {
  const navigate = useNavigate();
  return (
    <WireShell
      title="Historial médico del paciente"
      screenNum={1}
      totalScreens={6}
      persona="vet"
      backPath="/"
      nextPath="/vet/diagnosis"
    >
      {/* Patient info */}
      <WireSection label="Datos del paciente" />
      <WireCard>
        <div className="p-4 flex items-start gap-3">
          <div className="w-16 h-16 rounded-full" style={{ backgroundColor: WF.placeholder }} />
          <div className="flex-1">
            <p className="font-bold" style={{ color: WF.text }}>Luna</p>
            <p className="text-sm" style={{ color: WF.textSec }}>Labrador • 3 años • 28 kg</p>
            <p className="text-xs mt-1" style={{ color: WF.muted }}>Dueño: Ángel Olivas</p>
          </div>
        </div>
      </WireCard>

      {/* Previous consultations */}
      <WireSection label="Consultas anteriores" />
      <WireCard>
        <WireRow
          icon={<Calendar size={16} style={{ color: WF.vet }} />}
          title="Revisión general"
          sub="28 Mar 2026 • Dr. García"
          badge="Normal"
          arrow
        />
        <WireRow
          icon={<Calendar size={16} style={{ color: WF.angel }} />}
          title="Emergencia digestiva"
          sub="12 Feb 2026 • Dra. López"
          badge="Urgencia"
          badgeColor={WF.angel}
          arrow
        />
        <WireRow
          icon={<Calendar size={16} style={{ color: WF.vet }} />}
          title="Vacunación anual"
          sub="05 Ene 2026 • Dr. García"
          badge="Preventiva"
          arrow
        />
      </WireCard>

      {/* Vaccines */}
      <WireSection label="Vacunas registradas" />
      <WireCard>
        <WireRow
          icon={<Syringe size={16} style={{ color: WF.ok }} />}
          title="Rabia"
          sub="Última: 05 Ene 2026"
          badge="Al día"
          badgeColor={WF.ok}
        />
        <WireRow
          icon={<Syringe size={16} style={{ color: WF.ok }} />}
          title="Parvovirus"
          sub="Última: 05 Ene 2026"
          badge="Al día"
          badgeColor={WF.ok}
        />
        <WireRow
          icon={<Syringe size={16} style={{ color: WF.warn }} />}
          title="Moquillo"
          sub="Última: 15 Jul 2025"
          badge="Vence pronto"
          badgeColor={WF.warn}
        />
      </WireCard>

      {/* Previous medications */}
      <WireSection label="Medicamentos previos" />
      <WireCard>
        <WireRow
          icon={<Pill size={16} style={{ color: WF.vet }} />}
          title="Metronidazol"
          sub="Feb 2026 • 7 días"
          badge="Completado"
        />
        <WireRow
          icon={<Pill size={16} style={{ color: WF.vet }} />}
          title="Antiparasitario"
          sub="Ene 2026 • Dosis única"
          badge="Completado"
        />
      </WireCard>

      {/* CTA */}
      <div className="px-4 mt-4">
        <button
          onClick={() => navigate('/vet/diagnosis')}
          className="w-full rounded-xl p-4 flex items-center justify-between"
          style={{ backgroundColor: WF.vet, color: '#fff' }}
        >
          <span className="font-bold">Iniciar consulta</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </WireShell>
  );
}
