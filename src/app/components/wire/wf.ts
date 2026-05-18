// Design tokens - MEDIUM FIDELITY (Health App Theme)
export const WF = {
  // Backgrounds
  bg: '#F5F7FA',
  card: '#FFFFFF',
  border: '#E1E8ED',

  // Text
  text: '#1A202C',
  textSec: '#718096',
  muted: '#A0AEC0',

  // Placeholders
  placeholder: '#E2E8F0',
  placeholderDark: '#CBD5E0',

  // Brand colors for personas
  angel: '#D32F2F',        // Red for emergency
  angelLight: '#FFEBEE',
  angelMid: '#EF5350',

  paola: '#1976D2',        // Blue for organization
  paolaLight: '#E3F2FD',
  paolaM: '#42A5F5',

  vet: '#00897B',          // Teal for professional
  vetLight: '#E0F2F1',
  vetMid: '#26A69A',

  // Urgency levels
  urgencyHigh: '#D32F2F',
  urgencyHighLight: '#FFEBEE',
  urgencyMod: '#F57C00',
  urgencyModLight: '#FFF3E0',
  urgencyLow: '#388E3C',
  urgencyLowLight: '#E8F5E9',

  // Status colors
  ok: '#2E7D32',
  okLight: '#E8F5E9',
  okMid: '#66BB6A',

  warn: '#F57C00',
  warnLight: '#FFF3E0',
  warnMid: '#FF9800',

  // UI elements
  header: '#1A202C',
  accent: '#5E35B1',
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
  { path: '/vet/questionnaire', label: 'Cuestionario guiado', num: 2 },
  { path: '/vet/diagnosis', label: 'Diagnóstico y consulta', num: 3 },
  { path: '/vet/communication', label: 'Comunicación post-consulta', num: 4 },
  { path: '/vet/education', label: 'Educación al dueño', num: 5 },
  { path: '/vet/prescription', label: 'Prescripción digital', num: 6 },
  { path: '/vet/treatment', label: 'Guía de tratamiento', num: 7 },
];
