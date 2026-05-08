import { Phone, MessageCircle, MapPin, Star, Clock } from 'lucide-react';
import { WireShell } from '../wire/WireShell';
import { WireCard, WireSection, ImgPlaceholder, WireBtn } from '../wire/WireElements';
import { WF } from '../wire/wf';

const VETS = [
  { name: 'Dr. Rodríguez', clinic: 'Clínica Animalitos', rating: '4.9', distance: '0.8 km', open: true },
  { name: 'Dra. Soto', clinic: 'VetCare 24h', rating: '4.7', distance: '1.2 km', open: true },
  { name: 'Dr. Fernández', clinic: 'Hospital Veterinario', rating: '4.6', distance: '3.1 km', open: false },
];

export function A6_VetContact() {
  return (
    <WireShell
      title="Contacto con veterinario"
      screenNum={6}
      persona="angel"
      backPath="/angel/home-guide"
      prevPath="/angel/home-guide"
      nextPath="/angel/care-info"
    >
      {/* Emergency hotline */}
      <div className="mx-4 mt-4 mb-3">
        <button
          className="w-full p-4 rounded-2xl flex items-center gap-3"
          style={{ backgroundColor: WF.angel, color: '#fff' }}
        >
          <Phone size={24} className="text-white" />
          <div className="text-left">
            <p className="font-bold">Línea de emergencias veterinarias</p>
            <p className="text-xs opacity-80">Disponible 24 / 7</p>
          </div>
          <span className="ml-auto text-sm font-bold opacity-80">Llamar</span>
        </button>
      </div>

      {/* Map placeholder */}
      <WireSection label="Clínicas cercanas" />
      <div className="px-4 mb-3">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: WF.border }}>
          <ImgPlaceholder h={120} label="Mapa — clínicas cercanas" />
        </div>
      </div>

      {/* Vet list */}
      <WireSection label="Veterinarios disponibles" />
      {VETS.map((vet) => (
        <WireCard key={vet.name}>
          <div className="p-3 flex items-start gap-3">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-xl flex-shrink-0" style={{ backgroundColor: WF.placeholder }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold" style={{ color: WF.text }}>{vet.name}</p>
                {vet.open ? (
                  <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold" style={{ backgroundColor: WF.okLight, color: WF.ok }}>Abierto</span>
                ) : (
                  <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold" style={{ backgroundColor: WF.bg, color: WF.muted }}>Cerrado</span>
                )}
              </div>
              <p className="text-xs" style={{ color: WF.textSec }}>{vet.clinic}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs flex items-center gap-1" style={{ color: WF.muted }}>
                  <Star size={11} fill={WF.warn} style={{ color: WF.warn }} />
                  {vet.rating}
                </span>
                <span className="text-xs flex items-center gap-1" style={{ color: WF.muted }}>
                  <MapPin size={11} />
                  {vet.distance}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <button className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: WF.angel }}>
                <Phone size={15} className="text-white" />
              </button>
              <button className="w-9 h-9 rounded-xl flex items-center justify-center border" style={{ borderColor: WF.border }}>
                <MessageCircle size={15} style={{ color: WF.textSec }} />
              </button>
            </div>
          </div>
        </WireCard>
      ))}
    </WireShell>
  );
}
