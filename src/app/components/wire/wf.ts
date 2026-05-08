// Wireframe design tokens - PURE GRAYSCALE
export const WF = {
  bg: '#F4F4F4',
  card: '#FFFFFF',
  border: '#E0E0E0',
  muted: '#A0A0A0',
  text: '#1A1A1A',
  textSec: '#6B6B6B',
  placeholder: '#D4D4D4',
  placeholderDark: '#BDBDBD',
  angel: '#1A1A1A',
  angelLight: '#F4F4F4',
  angelMid: '#D4D4D4',
  paola: '#1A1A1A',
  paolaLight: '#F4F4F4',
  paolaM: '#D4D4D4',
  vet: '#1A1A1A',
  vetLight: '#F4F4F4',
  vetMid: '#D4D4D4',
  ok: '#6B6B6B',
  okLight: '#F4F4F4',
  warn: '#6B6B6B',
  warnLight: '#F4F4F4',
  header: '#1A1A1A',
};

export const ANGEL_SCREENS = [
  { path: '/angel', label: 'Dashboard', num: 1 },
  { path: '/angel/symptoms', label: 'Selector de síntoma', num: 2 },
  { path: '/angel/urgency', label: 'Evaluador de urgencia', num: 3 },
  { path: '/angel/urgent-guide', label: 'Guía paso a paso', num: 4 },
  { path: '/angel/home-guide', label: 'Observación en casa', num: 5 },
  { path: '/angel/vet-contact', label: 'Contacto con veterinario', num: 6 },
  { path: '/angel/care-info', label: 'Cuidados básicos', num: 7 },
  { path: '/angel/confirmation', label: 'Síntoma registrado', num: 8 },
];

export const PAOLA_SCREENS = [
  { path: '/paola', label: 'Dashboard', num: 1 },
  { path: '/paola/profile', label: 'Perfil de mascota', num: 2 },
  { path: '/paola/calendar', label: 'Calendario de salud', num: 3 },
  { path: '/paola/alert', label: 'Alerta de pendiente', num: 4 },
  { path: '/paola/symptom-form', label: 'Formulario de síntoma', num: 5 },
  { path: '/paola/symptom-history', label: 'Historial de síntomas', num: 6 },
  { path: '/paola/reminder', label: 'Confirmación de recordatorio', num: 7 },
  { path: '/paola/new-pet', label: 'Registro de mascota', num: 8 },
];

export const VET_SCREENS = [
  { path: '/vet', label: 'Historial del paciente', num: 1 },
  { path: '/vet/diagnosis', label: 'Diagnóstico y consulta', num: 2 },
  { path: '/vet/communication', label: 'Comunicación post-consulta', num: 3 },
  { path: '/vet/education', label: 'Educación al dueño', num: 4 },
  { path: '/vet/prescription', label: 'Prescripción digital', num: 5 },
  { path: '/vet/treatment', label: 'Guía de tratamiento', num: 6 },
];
