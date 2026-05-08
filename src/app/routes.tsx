import { createBrowserRouter } from 'react-router';
import { Overview } from './components/Overview';

// Angel flow
import { A1_Dashboard } from './components/angel/A1_Dashboard';
import { A2_SymptomSelector } from './components/angel/A2_SymptomSelector';
import { A3_UrgencyEvaluator } from './components/angel/A3_UrgencyEvaluator';
import { A4_UrgentGuide } from './components/angel/A4_UrgentGuide';
import { A5_HomeGuide } from './components/angel/A5_HomeGuide';
import { A6_VetContact } from './components/angel/A6_VetContact';
import { A7_CareInfo } from './components/angel/A7_CareInfo';
import { A8_SymptomConfirm } from './components/angel/A8_SymptomConfirm';

// Paola flow
import { P1_Dashboard } from './components/paola/P1_Dashboard';
import { P2_PetProfile } from './components/paola/P2_PetProfile';
import { P3_HealthCalendar } from './components/paola/P3_HealthCalendar';
import { P4_PendingAlert } from './components/paola/P4_PendingAlert';
import { P5_SymptomForm } from './components/paola/P5_SymptomForm';
import { P6_SymptomHistory } from './components/paola/P6_SymptomHistory';
import { P7_ReminderConfirm } from './components/paola/P7_ReminderConfirm';
import { P8_NewPet } from './components/paola/P8_NewPet';

// Vet flow (Angélica)
import { V1_PatientHistory } from './components/vet/V1_PatientHistory';
import { V2_Diagnosis } from './components/vet/V2_Diagnosis';
import { V3_Communication } from './components/vet/V3_Communication';
import { V4_OwnerEducation } from './components/vet/V4_OwnerEducation';
import { V5_Prescription } from './components/vet/V5_Prescription';
import { V6_TreatmentGuide } from './components/vet/V6_TreatmentGuide';

export const router = createBrowserRouter([
  { path: '/', Component: Overview },

  // Angel — 8 screens
  { path: '/angel', Component: A1_Dashboard },
  { path: '/angel/symptoms', Component: A2_SymptomSelector },
  { path: '/angel/urgency', Component: A3_UrgencyEvaluator },
  { path: '/angel/urgent-guide', Component: A4_UrgentGuide },
  { path: '/angel/home-guide', Component: A5_HomeGuide },
  { path: '/angel/vet-contact', Component: A6_VetContact },
  { path: '/angel/care-info', Component: A7_CareInfo },
  { path: '/angel/confirmation', Component: A8_SymptomConfirm },

  // Paola — 8 screens
  { path: '/paola', Component: P1_Dashboard },
  { path: '/paola/profile', Component: P2_PetProfile },
  { path: '/paola/calendar', Component: P3_HealthCalendar },
  { path: '/paola/alert', Component: P4_PendingAlert },
  { path: '/paola/symptom-form', Component: P5_SymptomForm },
  { path: '/paola/symptom-history', Component: P6_SymptomHistory },
  { path: '/paola/reminder', Component: P7_ReminderConfirm },
  { path: '/paola/new-pet', Component: P8_NewPet },

  // Vet (Angélica) — 6 screens
  { path: '/vet', Component: V1_PatientHistory },
  { path: '/vet/diagnosis', Component: V2_Diagnosis },
  { path: '/vet/communication', Component: V3_Communication },
  { path: '/vet/education', Component: V4_OwnerEducation },
  { path: '/vet/prescription', Component: V5_Prescription },
  { path: '/vet/treatment', Component: V6_TreatmentGuide },
]);
