import { useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, ImgPlaceholder, WireRow } from '../wire/WireElements';
import { WF } from '../wire/wf';

export function P2_PetProfile() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Perfil de mascota"
      screenNum={2}
      persona="paola"
      backPath="/paola"
      prevPath="/paola"
      nextPath="/paola/calendar"
    >
      {/* Pet hero */}
      <div className="px-4 pt-4 pb-2">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: WF.border }}>
          <ImgPlaceholder h={110} label="Foto de Luna" />
          <div className="p-3 flex items-start justify-between" style={{ backgroundColor: WF.card }}>
            <div>
              <h2 className="font-bold" style={{ fontSize: '1.2rem', color: WF.text }}>Luna 🐕</h2>
              <p className="text-sm" style={{ color: WF.muted }}>Golden Retriever · 3 años · 28 kg</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: WF.angelLight, color: WF.angel }}>
              2 alertas
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mx-4 mb-1 p-1 rounded-xl gap-1" style={{ backgroundColor: WF.bg }}>
        {['Datos generales', 'Historial médico'].map((t, i) => (
          <div
            key={t}
            className="flex-1 text-center py-2 rounded-lg text-xs font-semibold"
            style={{ backgroundColor: i === 0 ? WF.card : 'transparent', color: i === 0 ? WF.text : WF.muted }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* General data */}
      <WireSection label="Información" />
      <WireCard>
        {[
          { label: 'Especie', val: 'Perro' },
          { label: 'Raza', val: 'Golden Retriever' },
          { label: 'Edad', val: '3 años' },
          { label: 'Peso', val: '28 kg' },
          { label: 'Veterinario', val: 'Dr. Rodríguez' },
          { label: 'Alergias', val: 'Ninguna conocida' },
        ].map((row) => (
          <div key={row.label} className="flex justify-between items-center px-4 py-2.5 border-b last:border-b-0" style={{ borderColor: WF.border }}>
            <span className="text-xs font-semibold" style={{ color: WF.muted }}>{row.label}</span>
            <span className="text-sm font-semibold" style={{ color: WF.text }}>{row.val}</span>
          </div>
        ))}
      </WireCard>

      {/* Quick actions */}
      <WireSection label="Acciones rápidas" />
      <WireCard>
        <WireRow title="Ver vacunas y desparasitaciones" sub="2 pendientes" badge="›" badgeColor={WF.paola} arrow />
        <button onClick={() => navigate('/paola/symptom-form')} className="w-full">
          <WireRow title="Registrar síntoma" sub="Agregar observación" badge="›" arrow />
        </button>
        <button onClick={() => navigate('/paola/symptom-history')} className="w-full">
          <WireRow title="Ver historial de síntomas" sub="4 registros guardados" badge="›" arrow />
        </button>
      </WireCard>
    </WireShell>
  );
}
