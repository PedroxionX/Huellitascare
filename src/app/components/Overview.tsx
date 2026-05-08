import { useNavigate } from 'react-router';
import { ChevronRight, AlertTriangle, FolderHeart, Stethoscope } from 'lucide-react';
import { WF, ANGEL_SCREENS, PAOLA_SCREENS, VET_SCREENS } from './wire/wf';

function FlowCard({
  persona,
  name,
  role,
  icon,
  color,
  lightColor,
  pov,
  screens,
  startPath,
}: {
  persona: string;
  name: string;
  role: string;
  icon: React.ReactNode;
  color: string;
  lightColor: string;
  pov: string;
  screens: typeof ANGEL_SCREENS;
  startPath: string;
}) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: color }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            {icon}
          </div>
          <div>
            <p className="font-bold text-white" style={{ fontSize: '1rem' }}>{name}</p>
            <p className="text-white/70 text-xs">{role}</p>
          </div>
        </div>
        <p className="text-white/80 text-xs leading-relaxed">{pov}</p>
      </div>

      {/* Screen list */}
      <div className="divide-y" style={{ borderColor: WF.border }}>
        {screens.map((s) => (
          <button
            key={s.path}
            onClick={() => navigate(s.path)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:opacity-80 transition-opacity"
          >
            <span
              className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: lightColor, color: color }}
            >
              {s.num}
            </span>
            <span className="text-sm flex-1" style={{ color: WF.text }}>{s.label}</span>
            <ChevronRight size={13} style={{ color: WF.muted }} />
          </button>
        ))}
      </div>

      {/* Start CTA */}
      <div className="p-3">
        <button
          onClick={() => navigate(startPath)}
          className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-white"
          style={{ backgroundColor: color }}
        >
          Ver flujo completo →
        </button>
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <div className="min-h-full" style={{ backgroundColor: WF.bg }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-6" style={{ backgroundColor: WF.header }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🐾</span>
          <h1 className="text-white font-bold" style={{ fontSize: '1.3rem' }}>Huellitas Care</h1>
        </div>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Prototipo de media fidelidad · 22 pantallas</p>

        {/* Legend */}
        <div className="flex gap-2 mt-4 flex-wrap">
          <span className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ backgroundColor: WF.angel, color: '#fff' }}>
            Ángel — Emergencias
          </span>
          <span className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ backgroundColor: WF.paola, color: '#fff' }}>
            Paola — Historial
          </span>
          <span className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ backgroundColor: WF.vet, color: '#fff' }}>
            Angélica — Veterinaria
          </span>
        </div>
      </div>

      {/* Flows */}
      <div className="px-4 py-5 flex flex-col gap-4">
        {/* Ángel flow */}
        <FlowCard
          persona="angel"
          name="Ángel Olivas"
          role="Dueño de mascota"
          icon={<AlertTriangle size={18} className="text-white" />}
          color={WF.angel}
          lightColor={WF.angelLight}
          pov="Necesita orientación en emergencias porque no tiene conocimiento médico y en situaciones urgentes siente inseguridad."
          screens={ANGEL_SCREENS}
          startPath="/angel"
        />

        {/* Paola flow */}
        <FlowCard
          persona="paola"
          name="Paola Martínez"
          role="Dueña de mascota"
          icon={<FolderHeart size={18} className="text-white" />}
          color={WF.paola}
          lightColor={WF.paolaLight}
          pov="Necesita organizar y recordar la información médica de sus mascotas porque depende de su memoria y eso le genera inseguridad."
          screens={PAOLA_SCREENS}
          startPath="/paola"
        />

        {/* Angélica flow */}
        <FlowCard
          persona="vet"
          name="Angélica Camacho"
          role="Médica veterinaria"
          icon={<Stethoscope size={18} className="text-white" />}
          color={WF.vet}
          lightColor={WF.vetLight}
          pov="Necesita información confiable para diagnóstico, mantener comunicación post-consulta y asegurar que los dueños completen el tratamiento."
          screens={VET_SCREENS}
          startPath="/vet"
        />

        {/* Footer note */}
        <div className="rounded-xl p-3 border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <p className="text-xs text-center" style={{ color: WF.muted }}>
            Prototipo navegable de media fidelidad · Huellitas Care · Mayo 2026
          </p>
          <p className="text-xs text-center mt-0.5" style={{ color: WF.muted }}>
            Toca cada pantalla o usa "Siguiente / Anterior" para navegar el flujo
          </p>
        </div>
      </div>
    </div>
  );
}
