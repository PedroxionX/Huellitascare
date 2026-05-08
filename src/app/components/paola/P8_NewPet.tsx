import { useNavigate } from 'react-router';
import { Camera } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, WireInput, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const SPECIES = ['🐕 Perro', '🐈 Gato', '🐇 Conejo', '🦜 Ave'];

export function P8_NewPet() {
  const navigate = useNavigate();

  return (
    <WireShell
      title="Registro de nueva mascota"
      screenNum={8}
      persona="paola"
      backPath="/paola"
      prevPath="/paola/reminder"
    >
      {/* Photo upload */}
      <WireSection label="Foto de perfil" />
      <div className="flex justify-center py-3">
        <div
          className="w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 border-dashed gap-1"
          style={{ borderColor: WF.paola, backgroundColor: WF.paolaLight }}
        >
          <Camera size={22} style={{ color: WF.paola }} />
          <span className="text-xs font-semibold" style={{ color: WF.paola }}>Agregar</span>
        </div>
      </div>

      {/* Basic info */}
      <WireSection label="Información básica" />
      <WireCard>
        <div className="p-4">
          <WireInput label="Nombre *" placeholder="Ej: Luna" />
          <WireInput label="Apodo / Sobrenombre" placeholder="Opcional" />
        </div>
      </WireCard>

      {/* Species */}
      <WireSection label="Especie *" />
      <div className="flex flex-wrap gap-2 px-4 mb-1">
        {SPECIES.map((s, i) => (
          <div
            key={s}
            className="px-4 py-2 rounded-xl text-xs font-semibold border"
            style={{
              backgroundColor: i === 0 ? WF.paola : WF.card,
              color: i === 0 ? '#fff' : WF.textSec,
              borderColor: i === 0 ? WF.paola : WF.border,
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Details */}
      <WireSection label="Detalles" />
      <WireCard>
        <div className="p-4">
          <WireInput label="Raza" placeholder="Ej: Golden Retriever" />
          <div className="flex gap-3">
            <div className="flex-1">
              <WireInput label="Edad" placeholder="3 años" />
            </div>
            <div className="flex-1">
              <WireInput label="Peso" placeholder="28 kg" />
            </div>
          </div>
          <WireInput label="Fecha de nacimiento" placeholder="15 / mar / 2023" type="date" />
        </div>
      </WireCard>

      {/* Vet info */}
      <WireSection label="Veterinario" />
      <WireCard>
        <div className="p-4">
          <WireInput label="Nombre del veterinario" placeholder="Dr. Rodríguez" />
          <WireInput label="Clínica / Hospital" placeholder="Clínica Animalitos" />
          <WireInput label="Alergias conocidas" placeholder="Ninguna / Especificar..." />
        </div>
      </WireCard>

      <div className="px-4 pb-6 flex flex-col gap-2 mt-2">
        <WireBtn
          label="Guardar mascota"
          color={WF.paola}
          onClick={() => navigate('/paola')}
        />
        <WireBtn label="Cancelar" color={WF.text} variant="ghost" />
      </div>
    </WireShell>
  );
}
