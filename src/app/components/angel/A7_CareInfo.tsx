import { Search, BookOpen, ChevronRight } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, ImgPlaceholder } from '../wire/WireElements';
import { WF } from '../wire/wf';

const CATEGORIES = ['Nutrición', 'Ejercicio', 'Higiene', 'Vacunas', 'Comportamiento', 'Primeros auxilios'];

const ARTICLES = [
  { title: 'Qué hacer si tu perro vomita', tag: 'Primeros auxilios', read: '3 min' },
  { title: 'Señales de alerta en gatos: cuándo actuar', tag: 'Salud', read: '4 min' },
  { title: 'Guía de alimentación para perros adultos', tag: 'Nutrición', read: '5 min' },
  { title: 'Cómo identificar deshidratación en mascotas', tag: 'Primeros auxilios', read: '2 min' },
];

export function A7_CareInfo() {
  return (
    <WireShell
      title="Información de cuidados básicos"
      screenNum={7}
      persona="angel"
      backPath="/angel/vet-contact"
      prevPath="/angel/vet-contact"
      nextPath="/angel/confirmation"
    >
      {/* Search */}
      <div className="px-4 pt-4 pb-1">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <Search size={14} style={{ color: WF.muted }} />
          <span className="text-sm" style={{ color: WF.muted }}>Buscar guías, síntomas, cuidados...</span>
        </div>
      </div>

      {/* Categories */}
      <WireSection label="Categorías" />
      <div className="px-4 pb-2 flex flex-wrap gap-2">
        {CATEGORIES.map((c, i) => (
          <span
            key={c}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold border"
            style={{
              backgroundColor: i === 5 ? WF.angelLight : WF.card,
              color: i === 5 ? WF.angel : WF.textSec,
              borderColor: i === 5 ? WF.angelMid : WF.border,
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Featured */}
      <WireSection label="Destacado" />
      <div className="px-4 mb-2">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: WF.border, backgroundColor: WF.card }}>
          <ImgPlaceholder h={100} label="Imagen artículo destacado" />
          <div className="p-3">
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: WF.angelLight, color: WF.angel }}>
              Primeros auxilios
            </span>
            <p className="text-sm font-bold mt-1.5" style={{ color: WF.text }}>Manual de primeros auxilios para mascotas en casa</p>
            <p className="text-xs mt-1" style={{ color: WF.muted }}>Guía completa · 8 min lectura</p>
          </div>
        </div>
      </div>

      {/* Articles list */}
      <WireSection label="Más artículos" />
      <WireCard>
        {ARTICLES.map((a) => (
          <div key={a.title} className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0" style={{ borderColor: WF.border }}>
            <div className="w-12 h-12 rounded-xl flex-shrink-0" style={{ backgroundColor: WF.placeholder }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: WF.text }}>{a.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs" style={{ color: WF.muted }}>{a.tag}</span>
                <span className="text-xs" style={{ color: WF.muted }}>· {a.read}</span>
              </div>
            </div>
            <ChevronRight size={14} style={{ color: WF.muted, flexShrink: 0 }} />
          </div>
        ))}
      </WireCard>
    </WireShell>
  );
}
