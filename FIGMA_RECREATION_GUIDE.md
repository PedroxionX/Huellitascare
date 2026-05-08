# Huellitas Care - Guía de Recreación en Figma
## 22 Pantallas Wireframe con Prompts Listos para IA

---

## 📋 SISTEMA DE DISEÑO BASE

### Tokens de Color (Escala de Grises)
```
- bg: #F4F4F4 (fondo general)
- card: #FFFFFF (tarjetas)
- border: #E0E0E0 (bordes)
- muted: #A0A0A0 (texto secundario)
- text: #1A1A1A (texto principal)
- textSec: #6B6B6B (texto terciario)
- placeholder: #D4D4D4 (placeholders)
- header: #1A1A1A (header negro)
```

### Componentes Reutilizables
1. **WireCard**: Tarjeta blanca con borde gris claro, rounded corners 16px
2. **WireSection**: Label gris en mayúsculas, peso 600, tamaño 11px
3. **WireRow**: Fila con ícono + texto + badge + flecha, padding 12px
4. **WireStat**: Número grande + label pequeño, centrado
5. **WireBtn**: Botones con 3 variantes (primary/outline/ghost)

### Espaciados Estándar
- Padding contenedor: 16px
- Gap entre secciones: 12px
- Rounded corners cards: 16px
- Rounded corners buttons: 12px
- Gap en listas: 8px

---

## 🎯 PANTALLAS - ÁNGEL (Emergencias)

### A1 - Dashboard

**PROMPT PARA IA:**
```
Crea un wireframe móvil en escala de grises para un dashboard de emergencias veterinarias.

ESTRUCTURA DE ARRIBA A ABAJO:
1. Header negro (#1A1A1A) con botón back circular y título "Inicio / Dashboard" en blanco
2. Franja gris clara con badge negro "Ángel"
3. Saludo: texto gris "Buenas noches," + "Ángel" en negro bold
4. Hero CTA: Rectángulo negro redondeado con:
   - Ícono AlertTriangle blanco en círculo translúcido (izquierda)
   - "¿Tu mascota tiene síntomas?" (blanco bold)
   - "Evalúa ahora · Guía paso a paso" (blanco pequeño)
   - Flecha ChevronRight (derecha)
5. Sección "Mis mascotas": 3 tarjetas en fila
   - Cada una: círculo gris placeholder + nombre debajo (Luna 🐕, Milo 🐈, Rocky 🐶)
6. Sección "Resumen de salud": 3 stats en fila
   - "2 Alertas" | "1 Próxima cita" | "3 Al día"
7. Sección "Acceso rápido": 3 filas dentro de tarjeta blanca
   - Fila 1: Ícono Bell + "Emergencias recientes" + badge "Ver" + flecha
   - Fila 2: Ícono BookOpen + "Cuidados básicos" + badge "Nuevo" + flecha
   - Fila 3: Ícono Syringe + "Vacunas pendientes" + badge "1" + flecha
8. Footer blanco con botones "Anterior" (disabled) y "Siguiente" (negro)

ESTILO: Wireframe minimalista, solo grises y negro, sin colores.
```

**Componentes necesarios:**
- Header (reutilizable)
- Hero CTA Card (grande, negro)
- Pet Avatar Card x3 (horizontal scroll)
- Stat Badge x3
- List Row con ícono x3
- Footer Navigation

**Medidas específicas:**
- Hero CTA: height 80px, padding 16px, gap 12px
- Pet cards: 100px width, gap 8px
- Stats: flex 1, height 60px
- List rows: height 60px, padding vertical 12px

---

### A2 - Selector de Síntoma

**PROMPT PARA IA:**
```
Crea un wireframe móvil de selector de síntomas multi-selección en escala de grises.

ESTRUCTURA:
1. Header negro con back + "Selector de síntoma"
2. Franja con badge "Ángel"
3. Selector de mascota: 3 botones en fila (Luna 🐕, Milo 🐈, Rocky 🐶)
   - Primer botón con fondo negro, texto blanco (seleccionado)
   - Otros con borde gris
4. Barra de búsqueda con ícono Search + placeholder "Buscar síntoma..."
5. Sección "Síntomas comunes": Grid de chips seleccionables (4 columnas x 3 filas)
   - Opciones: Vómito, Diarrea, No come, Letargo, Tos, Estornudos, Cojera, Rascado excesivo, Convulsiones, Dificultad respirar, Sangrado, Hinchazón
   - Algunos chips con fondo negro (seleccionados), otros con borde gris
6. Tarjeta resumen: "2 síntomas seleccionados" con íconos CheckCircle
7. Botón grande negro: "Evaluar síntomas →"
8. Footer con navegación

ESTILO: Chips redondeados (999px), padding 8px 16px, fuente 13px
```

**Componentes:**
- Toggle Button Group (3 items)
- Search Input
- Selectable Chip x12 (wrap grid)
- Summary Card
- Primary Button

**Medidas:**
- Chips: min-width 80px, height 36px
- Grid gap: 8px
- Summary card: padding 16px, gap 8px

---

### A3 - Evaluador de Urgencia

**PROMPT PARA IA:**
```
Wireframe de evaluación de urgencia con medidor visual, escala de grises.

ESTRUCTURA:
1. Header + franja Ángel
2. Sección "Síntomas reportados - Luna 🐕": Chips de solo lectura "Vómito" y "Letargo"
3. Sección "Nivel de urgencia detectado":
   - Barra de 3 segmentos (Leve | Moderado | Urgente) en diferentes tonos de gris
   - Labels debajo: "Leve" "Moderado" "Urgente"
   - Tarjeta resultado con borde gris medio:
     * Círculo con ícono Clock (gris medio)
     * "MODERADO" (bold, grande)
     * "Requiere atención hoy. Observa en casa y prepárate para ir al veterinario."
4. Sección "¿Qué hacer ahora?": 2 tarjetas de decisión
   - Opción 1: Fondo gris claro + ícono AlertTriangle + "Llevar al veterinario ahora" + subtitle
   - Opción 2: Fondo gris claro + ícono CheckCircle + "Observar en casa primero" + subtitle
5. Disclaimer: Caja gris con "⚠️ Esta evaluación es orientativa..."
6. Footer navegación

MEDIDOR: Barra horizontal de 3 segmentos iguales, height 12px, rounded-full
```

**Componentes:**
- Read-only Chips
- Urgency Meter (progress bar de 3 segmentos)
- Result Card (destacada)
- Decision Card x2 (interactivas)
- Disclaimer Box

---

### A4 - Guía Urgente

**PROMPT PARA IA:**
```
Wireframe de guía paso a paso para emergencias, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Banner de alerta: Fondo gris claro con ícono AlertTriangle + "Actúa rápido pero con calma"
3. Sección "Pasos a seguir AHORA": Lista numerada de 6 pasos
   - Cada paso: Número en círculo + texto + checkmark al final
   - Pasos:
     1. Mantén la calma
     2. Coloca a Luna en lugar tranquilo
     3. Observa los síntomas específicos
     4. Llama al veterinario
     5. Prepara su historial médico
     6. Transporta de forma segura
4. Sección "Observa y anota": Checklist de 4 items
   - Hora de inicio
   - Frecuencia (cada cuánto)
   - Color (del vómito/diarrea)
   - Última comida
5. Dos botones grandes:
   - "☎️ Llamar al veterinario ahora" (negro)
   - "📍 Ver clínicas cercanas" (outline)
6. Footer navegación

LISTA: Gap 12px entre items, números en círculos de 24px
```

**Componentes:**
- Alert Banner
- Numbered List Item x6
- Checklist Item x4
- CTA Button x2

---

### A5 - Guía de Observación en Casa

**PROMPT PARA IA:**
```
Wireframe de monitoreo domiciliario, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Banner info: "Observa durante las próximas 4-6 horas"
3. Sección "Qué monitorear": 5 tarjetas con checkbox
   - Hidratación (¿bebe agua?)
   - Apetito (¿quiere comer?)
   - Frecuencia (¿más síntomas?)
   - Temperatura (¿fiebre/frío?)
   - Actitud (¿responde a estímulos?)
4. Sección "Señales de ALARMA - ir al vet INMEDIATO": 3 items con ícono AlertTriangle
   - Más de 3 vómitos en 1 hora
   - Sangre en vómito o diarrea
   - Dificultad para respirar
5. Tarjeta recordatorio: "Revisa a Luna a las 10:30 PM" con botón "Activar"
6. Dos botones:
   - "Registrar síntoma" (negro)
   - "Buscar veterinario" (outline)
7. Footer

TARJETAS MONITOREO: Checkbox izquierda + texto + icono derecha, padding 16px
```

**Componentes:**
- Info Banner
- Monitoring Card x5 (con checkbox)
- Warning List x3
- Reminder Card con toggle
- Button Group

---

### A6 - Contacto Veterinario

**PROMPT PARA IA:**
```
Wireframe de listado de veterinarios cercanos, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Botón emergencia destacado:
   - Fondo negro, texto blanco
   - "🚨 Línea de emergencia 24/7"
   - "01 800 VET URGENTE"
   - "Disponible 24/7"
3. Placeholder de mapa: Rectángulo gris con texto "Mapa (3 clínicas cercanas)", height 120px
4. Sección "Clínicas cerca de ti": 3 tarjetas
   Tarjeta estructura:
   - Avatar circular (placeholder)
   - Nombre veterinario + clínica
   - Rating: ⭐⭐⭐⭐⭐ (5.0)
   - Distancia: "1.2 km"
   - Estado: Badge "Abierto ahora" o "Cerrado"
   - Botones: Ícono teléfono + ícono mensaje
   
   Ejemplo 1: Dr. García - Clínica Animalitos - 5.0 - 1.2km - Abierto
   Ejemplo 2: Dra. López - VetCenter - 4.8 - 2.5km - Abierto
   Ejemplo 3: Dr. Ramírez - Hospital 24h - 4.9 - 3.1km - Cerrado
5. Footer

TARJETAS VET: Padding 16px, gap 12px, iconos teléfono/mensaje tamaño 16px
```

**Componentes:**
- Emergency CTA (destacado)
- Map Placeholder
- Vet Card x3 (con avatar, rating, badges, action buttons)

---

### A7 - Info Cuidados Básicos

**PROMPT PARA IA:**
```
Wireframe de biblioteca de contenido educativo, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Barra de búsqueda con ícono Search
3. Chips de categoría (scroll horizontal):
   - Nutrición, Ejercicio, Higiene, Vacunas, Comportamiento, Primeros auxilios
   - Primer chip con fondo negro (seleccionado), otros outline
4. Sección "Destacado": Tarjeta grande featured
   - Placeholder imagen rectangular (height 100px)
   - Badge "ESENCIAL"
   - Título: "Manual de primeros auxilios para mascotas"
   - "12 min lectura"
5. Sección "Artículos recientes": 3 tarjetas horizontales
   - Thumbnail izquierda (40x40)
   - Título + subtítulo + tiempo lectura
   - Flecha derecha
   
   Ejemplos:
   - "Señales de deshidratación" - Salud - 5 min
   - "Cómo medir temperatura" - Primeros auxilios - 3 min
   - "Plantas tóxicas" - Prevención - 7 min
6. Footer

CHIPS: Padding 8px 16px, gap 8px, scroll horizontal
```

**Componentes:**
- Search Bar
- Category Chip Group (scrollable)
- Featured Card (grande con imagen)
- Article List Item x3 (con thumbnail)

---

### A8 - Confirmación / Síntoma Registrado

**PROMPT PARA IA:**
```
Wireframe de confirmación de registro, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección centrada superior:
   - Círculo grande (80px) con ícono CheckCircle2
   - Título: "Síntoma registrado" (bold, grande)
   - Subtítulo: "Se guardó en el historial médico de Luna"
3. Sección "Resumen del registro": Tarjeta con key-value pairs
   - Mascota: Luna 🐕
   - Síntomas: Vómito · Letargo
   - Urgencia: Moderado (badge gris medio)
   - Fecha: 5 mayo 2026 · 6:32 PM
   - Acción tomada: Observación en casa
   
   Formato: Label izquierda (gris), valor derecha (negro bold)
4. Sección "Próximas acciones": 2 items con ícono ArrowRight
   - "Recordatorio programado: 10:30 PM" (fondo gris claro)
   - "Si empeora, ir a Clínica Animalitos" (texto gris)
5. Dos botones:
   - "Ver historial de síntomas" (negro)
   - "Volver al inicio" (ghost/outline)
6. Footer

CÍRCULO ÉXITO: 80px diámetro, fondo gris muy claro, ícono gris medio
```

**Componentes:**
- Success Icon (circular, centrado)
- Summary Card (key-value table)
- Next Steps Card x2
- Button Group (vertical)

---

## 🎯 PANTALLAS - PAOLA (Gestión de Historial)

### P1 - Dashboard

**PROMPT PARA IA:**
```
Wireframe móvil de dashboard de gestión de salud, escala de grises.

ESTRUCTURA:
1. Header negro + franja con badge "Paola"
2. Saludo: "Buenas noches," + "Paola" (bold)
3. Hero CTA: Rectángulo negro con:
   - Ícono Calendar en círculo translúcido
   - "Calendario de salud"
   - "Ver vacunas y citas pendientes"
   - Flecha derecha
4. Sección "Mis mascotas": 3 avatares circulares en fila
   - Luna 🐕, Milo 🐈, Rocky 🐶
5. Sección "Resumen de salud": 3 stats
   - 2 Alertas | 1 Próxima cita | 3 Al día
6. Sección "Acceso rápido": 3 filas
   - Ícono Syringe + "Vacunas pendientes" + badge "1" + flecha
   - Ícono FileText + "Historial de síntomas" + "Ver registros anteriores" + flecha
   - Ícono FolderHeart + "Registrar nueva mascota" + badge "Nuevo" + flecha
7. Footer navegación

IGUAL ESTRUCTURA QUE A1 pero con diferente CTA principal y acciones rápidas
```

**Componentes:**
- Misma estructura que A1 Dashboard
- Diferentes labels y navegación

---

### P2 - Perfil de Mascota

**PROMPT PARA IA:**
```
Wireframe de perfil detallado de mascota, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Hero card de mascota:
   - Placeholder circular de imagen (80px) centrado arriba
   - Nombre: "Luna" (grande, centrado)
   - Subtitle: "Golden Retriever · 3 años" (gris, centrado)
   - Badge pequeño: "2 alertas" (gris medio)
3. Tabs: 2 opciones
   - "Datos generales" (seleccionado, underline negro)
   - "Historial médico" (gris)
4. Sección "Información básica": Grid de key-values
   - Especie: Perro
   - Raza: Golden Retriever
   - Edad: 3 años
   - Peso: 28 kg
   - Veterinario: Dr. García
   - Alergias: Ninguna conocida
5. Sección "Acciones rápidas": 3 filas con íconos
   - Syringe + "Ver calendario de vacunas"
   - FileText + "Registrar síntoma"
   - Clock + "Ver historial completo"
6. Footer

HERO CARD: Padding 24px, background blanco, border gris, centrado
```

**Componentes:**
- Avatar centrado (grande)
- Tab Switcher
- Info Grid (2 columnas)
- Action List x3

---

### P3 - Calendario de Salud

**PROMPT PARA IA:**
```
Wireframe de calendario de vacunas, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección stats superior: 3 tarjetas en fila
   - "3 Total" | "1 Vencida" | "2 Al día"
3. Alert card: Fondo gris claro con ícono Bell
   - "Tienes 1 vacuna vencida"
   - Botón "Ver alertas"
4. Sección "Vacunas y desparasitación": Lista de 4 registros
   
   Estructura de cada item:
   - Ícono Syringe o Bug (izquierda)
   - Nombre vacuna + mascota
   - Última fecha + Próxima fecha
   - Badge de estado (Vencida/Próxima/Al día)
   
   Ejemplos:
   - Antirrábica (Luna) - Última: 10 ene 2026 - Próxima: 10 abr 2026 - VENCIDA (badge gris oscuro)
   - Desparasitación (Milo) - Última: 5 mar 2026 - Próxima: 5 jun 2026 - PRÓXIMA (badge gris medio)
   - Moquillo (Luna) - Última: 12 feb 2026 - Próxima: 12 may 2026 - AL DÍA (badge gris claro)
   - Bordetella (Rocky) - Última: 20 ene 2026 - Próxima: 20 jul 2026 - AL DÍA
5. Botón outline: "+ Agregar vacuna"
6. Footer

ITEMS LISTA: Height 80px, padding 16px, border-bottom
```

**Componentes:**
- Stat Card x3
- Alert Banner
- Vaccine List Item x4 (con iconos y badges)
- Add Button (outline)

---

### P4 - Alerta / Recordatorio Pendiente

**PROMPT PARA IA:**
```
Wireframe de alertas de vacunas pendientes, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Alert banner destacado:
   - Ícono Bell grande
   - "1 vacuna vencida · 2 próximas a vencer"
   - "Configura recordatorios para no olvidar"
3. Sección "Pendientes": 3 tarjetas verticales
   
   Tarjeta 1 (Vencida):
   - Badge "VENCIDA" (fondo gris oscuro)
   - Nombre: "Antirrábica - Luna 🐕"
   - Última: 10 ene 2026
   - Fecha límite: 10 abr 2026
   - "Vencida hace 28 días" (texto destacado)
   - Botón "Activar recordatorio"
   
   Tarjeta 2 (Próxima):
   - Badge "PRÓXIMA" (fondo gris medio)
   - "Desparasitación - Milo 🐈"
   - Última: 5 mar 2026
   - Fecha límite: 5 jun 2026
   - "Vence en 10 días"
   - Botón "Activar recordatorio"
   
   Tarjeta 3 (Próxima):
   - Badge "PRÓXIMA"
   - "Moquillo - Luna 🐕"
   - Similar estructura
4. Link pequeño: "Agregar vacuna manualmente"
5. Footer

TARJETAS: Padding 16px, border 1px, gap vertical 12px entre tarjetas
```

**Componentes:**
- Alert Banner (grande)
- Status Card x3 (con badges y CTAs)
- Text Link

---

### P5 - Formulario de Síntoma

**PROMPT PARA IA:**
```
Wireframe de formulario de registro de síntomas, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Selector de mascota: 3 botones toggle
   - Luna 🐕 (seleccionado, fondo negro)
   - Milo 🐈 (outline)
   - Rocky 🐶 (outline)
3. Campo "Síntoma principal":
   - Input de texto con placeholder "Ej: Vómito, diarrea, letargo..."
4. Campo "Fecha y hora":
   - Input tipo datetime con placeholder "05/05/2026 18:30"
5. Selector "Severidad": 3 opciones radio
   - Leve (seleccionado, border negro)
   - Moderado (outline gris)
   - Grave (outline gris)
6. Campo "Descripción adicional":
   - Textarea con placeholder "Describe con más detalle..."
   - Height 100px
7. Sección "Foto (opcional)":
   - Rectángulo punteado para upload
   - Ícono Plus + "Subir foto"
8. Dos botones:
   - "Guardar síntoma" (negro)
   - "Cancelar" (outline)
9. Footer

INPUTS: Border 1px gris, padding 12px, rounded 8px
RADIO BUTTONS: Inline, gap 8px
```

**Componentes:**
- Toggle Button Group x3
- Text Input x2
- Radio Group (horizontal)
- Textarea
- File Upload Placeholder
- Button Group

---

### P6 - Historial de Síntomas

**PROMPT PARA IA:**
```
Wireframe de historial con timeline, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Barra de búsqueda con botón filtro:
   - Input con ícono Search + placeholder
   - Botón cuadrado con ícono SlidersHorizontal
3. Chips de filtro (scroll horizontal):
   - "Todos" (seleccionado, fondo negro)
   - "Esta semana" (outline)
   - "Este mes" (outline)
   - "Grave" (outline)
4. Summary: 3 mini-cards en fila
   - "4 registros" | "2 mascotas" | "0 graves"
5. Sección "Registros": Timeline vertical con 4 items
   
   Estructura de cada item:
   - Dot de timeline (izquierda) conectado con línea vertical
   - Fecha pequeña arriba
   - Síntoma en bold
   - Mascota debajo
   - Badge de severidad (derecha)
   
   Ejemplos:
   - 5 mayo 2026 - "Vómito + Letargo" - Luna 🐕 - MODERADO
   - 22 abr 2026 - "No come" - Milo 🐈 - LEVE
   - 10 mar 2026 - "Diarrea" - Luna 🐕 - LEVE
   - 3 ene 2026 - "Cojera leve en pata trasera" - Rocky 🐶 - MODERADO
6. Footer

TIMELINE: Dot 12px, línea 1px, conectores entre items
```

**Componentes:**
- Search Bar + Filter Button
- Filter Chips (horizontal scroll)
- Summary Stats x3
- Timeline Item x4 (con dots y conectores)

---

### P7 - Confirmación de Recordatorio

**PROMPT PARA IA:**
```
Wireframe de confirmación de recordatorio configurado, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección centrada superior:
   - Círculo (80px) con ícono CheckCircle2
   - Título: "Recordatorio configurado"
   - Subtitle: "Te notificaremos antes de que venza la vacuna de Luna"
3. Sección "Resumen del recordatorio": Key-value table
   - Mascota: Luna 🐕
   - Vacuna: Antirrábica
   - Fecha límite: 10 abr 2026
   - Recordatorio: 3 días antes
   - Notificación: Push + correo
4. Sección "Así se verá tu notificación": Mockup de notificación
   - Box con fondo gris muy claro
   - Ícono Bell en cuadro negro (izquierda)
   - "Huellitas Care" (bold)
   - "Recuerda vacunar a Luna contra la Rabia en 3 días (7 abr 2026)"
   - "Hace un momento" (gris pequeño)
5. Dos botones:
   - "Agregar otro recordatorio" (negro, con ícono Plus)
   - "Ir al inicio" (outline)
6. Footer

MOCKUP NOTIFICACIÓN: Padding 16px, border 1px, fondo #F9F9F9
```

**Componentes:**
- Success Icon (circular)
- Summary Table
- Notification Mockup
- Button Group

---

### P8 - Registro Nueva Mascota

**PROMPT PARA IA:**
```
Wireframe de formulario de registro de mascota, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Upload de foto (centrado):
   - Círculo grande (100px) con ícono Plus
   - Label: "Subir foto" (debajo)
3. Campo "Nombre":
   - Input text con placeholder "Nombre de tu mascota"
4. Campo "Apodo (opcional)":
   - Input text
5. Selector "Especie": 4 chips
   - Perro (seleccionado, fondo negro)
   - Gato (outline)
   - Conejo (outline)
   - Ave (outline)
6. Campo "Raza":
   - Input text con placeholder "Ej: Labrador, Persa..."
7. Campos en grid 2 columnas:
   - "Edad" | "Peso"
   - Input number | Input number + "kg"
8. Campo "Fecha de nacimiento":
   - Input date
9. Sección "Información veterinaria":
   - Campo "Veterinario" (input text)
   - Campo "Clínica" (input text)
10. Campo "Alergias conocidas":
    - Textarea, height 60px
11. Dos botones:
    - "Guardar mascota" (negro)
    - "Cancelar" (outline)
12. Footer

PHOTO UPLOAD: Círculo con border punteado, ícono Plus centrado
GRID 2 COL: Gap 12px, inputs flex 1
```

**Componentes:**
- Photo Upload (circular)
- Text Input x7
- Species Chips x4 (radio group)
- Grid Layout (2 columns)
- Textarea
- Button Group

---

## 🎯 PANTALLAS - ANGÉLICA (Veterinaria)

### V1 - Historial Médico del Paciente

**PROMPT PARA IA:**
```
Wireframe de historial médico para veterinarios, escala de grises.

ESTRUCTURA:
1. Header + franja con badge "Angélica"
2. Sección "Datos del paciente": Card destacada
   - Avatar circular (64px)
   - Nombre: "Luna" (bold)
   - "Labrador · 3 años · 28 kg"
   - "Dueño: Ángel Olivas" (gris pequeño)
3. Sección "Consultas anteriores": 3 filas con ícono Calendar
   - "Revisión general" - 28 Mar 2026 - Dr. García - Badge "Normal"
   - "Emergencia digestiva" - 12 Feb 2026 - Dra. López - Badge "Urgencia"
   - "Vacunación anual" - 05 Ene 2026 - Dr. García - Badge "Preventiva"
   Cada fila: flecha derecha
4. Sección "Vacunas registradas": 3 filas con ícono Syringe
   - "Rabia" - Última: 05 Ene 2026 - Badge "Al día"
   - "Parvovirus" - Última: 05 Ene 2026 - Badge "Al día"
   - "Moquillo" - Última: 15 Jul 2025 - Badge "Vence pronto"
5. Sección "Medicamentos previos": 2 filas con ícono Pill
   - "Metronidazol" - Feb 2026 - 7 días - Badge "Completado"
   - "Antiparasitario" - Ene 2026 - Dosis única - Badge "Completado"
6. Botón grande negro: "Iniciar consulta →"
7. Footer

PATIENT CARD: Horizontal layout, avatar izquierda, info derecha
```

**Componentes:**
- Patient Info Card (destacada)
- List Row con ícono + badge x8
- Large CTA Button

---

### V2 - Diagnóstico y Consulta

**PROMPT PARA IA:**
```
Wireframe de entrada de diagnóstico, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección "Síntomas reportados por el dueño": Card con borde izquierdo
   - "Vómito y diarrea" (bold)
   - "Desde hace 2 días · Reportado: 08 May 2026"
   - Cita del dueño: "No quiere comer, ha vomitado 3 veces y tiene diarrea líquida"
3. Sección "Notas de diagnóstico": Textarea
   - Placeholder: "Escribe tus observaciones..."
   - Height 80px
   - Border 1px gris
4. Sección "Tratamiento indicado": Textarea
   - Placeholder: "Indica el tratamiento..."
   - Height 64px
5. Sección "Tipo de consulta": 3 chips radio
   - Urgencia (seleccionado, border negro)
   - Preventiva (outline)
   - Seguimiento (outline)
6. Dos botones en fila:
   - Ícono Pill + "Emitir receta" (outline)
   - Ícono Calendar + "Programar seguimiento" (outline)
7. Footer

REPORTED SYMPTOMS: Background gris muy claro, border-left 3px negro
```

**Componentes:**
- Symptom Report Card (con border accent)
- Textarea x2
- Radio Chips x3 (horizontal)
- Split Button Group

---

### V3 - Canal de Comunicación

**PROMPT PARA IA:**
```
Wireframe de mensajería vet-dueño, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección "Datos del dueño": Card horizontal
   - Avatar circular
   - "Ángel Olivas" (bold)
   - +52 555 123 4567
   - angel.olivas@email.com (gris pequeño)
3. Sección "Mensajes recientes": Thread de chat con 3 mensajes
   
   Mensaje 1 (dueño):
   - Avatar pequeño izquierda
   - Bubble gris claro: "Luna ya no vomitó hoy, ¿debo seguir con la medicación?"
   - "Hace 2 horas" (gris)
   
   Mensaje 2 (vet):
   - Bubble blanco con border-left negro (derecha)
   - "Excelente. Sí, completa el tratamiento de 7 días aunque mejore."
   - "Hace 1 hora"
   
   Mensaje 3 (dueño):
   - "¿Cuándo debo agendar la siguiente revisión?"
   - "Hace 30 min"
4. Sección "Escribir mensaje": Input de texto
   - Placeholder: "Escribe tu mensaje..."
   - Border 1px
5. Toggle de seguimiento:
   - "Seguimiento automático" + toggle switch
   - Ícono Bell
6. Dos botones:
   - "Enviar mensaje" (negro, ícono Send)
   - "Programar recordatorio" (outline, ícono MessageCircle)
7. Footer

CHAT BUBBLES: Max-width 80%, padding 12px, rounded 12px
VET MESSAGES: Border-left 3px negro
```

**Componentes:**
- Contact Card
- Chat Message x3 (owner vs vet styling)
- Message Input
- Toggle Switch
- Button Group

---

### V4 - Educación al Dueño

**PROMPT PARA IA:**
```
Wireframe de contenido educativo, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección "Importancia del tratamiento completo": Info card
   - Fondo gris muy claro, border-left 3px negro
   - Título: "¿Por qué es importante completar los 7 días?" (bold)
   - Párrafo explicativo sobre antibióticos
3. Sección "Puntos clave del tratamiento": 4 items con checkmark
   - Ícono CheckCircle2 (cuadrado negro) + texto
   - "Administrar medicamento cada 12 horas con alimento"
   - "Mantener hidratación constante"
   - "Dieta blanda por 5 días (arroz + pollo)"
   - "Completar los 7 días aunque mejore antes"
4. Sección "Señales de alerta si abandona tratamiento": 3 items con warning
   - Ícono AlertTriangle + texto
   - "Reaparición de vómito o diarrea en 3-5 días"
   - "Infección más severa que requiere tratamiento más fuerte"
   - "Desarrollo de resistencia a antibióticos"
5. Dos botones:
   - "Confirmar comprensión" (outline, ícono CheckCircle2)
   - "Enviar guía" (negro, ícono Send)
6. Footer

CHECKLIST: Gap 8px vertical, padding 8px por item
```

**Componentes:**
- Info Card (explicativa)
- Checklist Item x4 (con checkmarks)
- Warning List x3 (con alerts)
- Button Group

---

### V5 - Prescripción Digital

**PROMPT PARA IA:**
```
Wireframe de receta médica digital, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección "Datos de la receta": Grid 2x2
   - Paciente: Luna (Labrador) | Dueño: Ángel Olivas
   - Veterinario: Dr. García | Fecha: 08 May 2026
3. Sección "Medicamentos recetados": 2 tarjetas de medicamento
   
   Med 1:
   - Ícono Pill + "Metronidazol 250mg"
   - "Antibiótico para infección digestiva" (gris)
   - Grid 3 columnas: Dosis (1 tableta) | Frecuencia (Cada 12h) | Duración (7 días)
   
   Med 2:
   - Ícono Pill + "Probiótico veterinario"
   - "Restaurar flora intestinal"
   - Dosis (1 sobre) | Frecuencia (Cada 24h) | Duración (10 días)
4. Sección "Indicaciones adicionales": Texto en box
   - "Administrar con alimento. Dieta blanda (arroz + pollo hervido) durante 5 días..."
5. Sección "Firma digital": Box con border punteado
   - Ícono FileSignature
   - "Dr. García Martínez"
   - "Cédula: 1234567 · 08 May 2026 14:32"
6. Dos botones:
   - "Enviar al dueño" (negro, ícono Send)
   - "Dueño firma de recibido" (outline, ícono CheckCircle2)
7. Footer

MED CARDS: Border 1px, padding 12px, gap 8px interno
```

**Componentes:**
- Info Grid (2x2)
- Medication Card x2 (con dosage grid)
- Instructions Box
- Signature Area
- Button Group

---

### V6 - Guía de Tratamiento

**PROMPT PARA IA:**
```
Wireframe de guía completa de tratamiento, escala de grises.

ESTRUCTURA:
1. Header + franja
2. Sección "Resumen del tratamiento": Info card
   - Border-left 3px negro
   - "Tratamiento para infección digestiva" (bold)
   - Duración, dieta, fecha de seguimiento
3. Sección "Pasos del tratamiento día a día": 4 items checklist
   - Checkbox + texto
   - "Mañana (8:00 AM)" - Metronidazol + probiótico con alimento
   - "Noche (8:00 PM)" - Metronidazol con alimento
   - "Todo el día" - Agua fresca disponible + dieta blanda
   - "Observar" - Frecuencia de evacuaciones y consistencia
4. Sección "Señales de mejoría (buenas)": 3 items con ícono TrendingUp
   - "No vómito por 24-48 horas"
   - "Evacuaciones más firmes y menos frecuentes"
   - "Recupera el apetito y energía normal"
5. Sección "Señales de alarma (regresar a consulta)": 3 items con ícono AlertCircle
   - "Vómito con sangre o continúa después de 48h"
   - "Diarrea severa o con sangre después de 3 días"
   - "Letargo extremo o no quiere tomar agua"
6. Dos botones:
   - "Enviar guía al dueño" (negro, ícono Send)
   - "Finalizar consulta" (outline, ícono CheckCheck)
7. Footer

CHECKLIST: Checkbox 20x20, gap 12px
```

**Componentes:**
- Treatment Summary Card
- Daily Checklist x4
- Improvement Indicators x3
- Alarm Indicators x3
- Button Group

---

## 📱 COMPONENTE SHELL COMÚN

Todas las pantallas usan este wrapper:

```
HEADER (negro #1A1A1A):
- Botón back circular (8px desde izquierda)
- Título blanco truncado (centro-izquierda)
- Padding: 12px vertical, 16px horizontal

FRANJA PERSONA (gris muy claro):
- Badge negro con nombre de persona
- User story opcional (texto gris secundario)
- Padding: 8px vertical, 16px horizontal

CONTENIDO:
- Background: #F4F4F4
- Padding: 16px
- Scroll vertical

FOOTER (blanco, border-top gris):
- Botón "Anterior" (gris, outline, izquierda)
- HMW text opcional (centro, gris pequeño)
- Botón "Siguiente" (negro o outline, derecha)
- Padding: 12px vertical, 16px horizontal
```

---

## 🎨 INSTRUCCIONES GENERALES PARA IA

Cuando recrees cualquier pantalla en Figma:

1. **Usa solo escala de grises**: blanco, gris claro (#F4F4F4), gris medio (#A0A0A0, #6B6B6B), gris oscuro (#1A1A1A), negro
2. **No uses colores**: rojo, azul, verde, etc. - todo debe ser gris
3. **Tipografía**: Sans-serif system (Inter, SF Pro, Roboto)
   - Títulos: 16-20px, bold (700)
   - Subtítulos: 14px, semibold (600)
   - Cuerpo: 13-14px, regular (400)
   - Labels: 11-12px, semibold (600)
   - Secundario: 11-12px, regular (400), color gris medio
4. **Espaciados**:
   - Padding contenedor: 16px
   - Gap entre secciones: 12-16px
   - Gap en listas: 8-12px
   - Padding interno cards: 12-16px
5. **Bordes y esquinas**:
   - Border radius cards: 12-16px
   - Border radius buttons: 8-12px
   - Border width: 1px
   - Border color: #E0E0E0
6. **Iconos**: Lucide Icons o similar, tamaño 16-20px, color según contexto
7. **Badges**: Padding 4px 12px, rounded-full (999px), fuente 11px semibold
8. **Botones**:
   - Primary: Fondo negro, texto blanco, padding 12px 24px
   - Outline: Border 1px negro, texto negro, fondo transparente
   - Ghost: Solo texto negro, sin border ni fondo
9. **Layout móvil**: Max-width 400px, centrado

---

## 💡 CÓMO USAR ESTE DOCUMENTO

**Para generar con IA (Figma AI, Claude, etc.):**

1. Copia el PROMPT completo de la pantalla que quieres
2. Pégalo en la herramienta de generación de diseño
3. La IA creará el wireframe siguiendo las especificaciones
4. Ajusta manualmente si es necesario

**Para recrear manualmente:**

1. Lee la ESTRUCTURA punto por punto
2. Sigue el orden de arriba a abajo
3. Usa las medidas específicas indicadas
4. Consulta "Componentes necesarios" para reutilizar elementos

**Para batch generation:**

1. Puedes copiar todos los prompts de un flujo completo (Ángel, Paola o Vet)
2. Generarlos en secuencia
3. Crear componentes reutilizables después de las primeras 3-4 pantallas

---

## ✅ VALIDACIÓN

Después de generar cada pantalla, verifica:

- [ ] Solo usa escala de grises (sin colores)
- [ ] Header negro con back button
- [ ] Franja con badge de persona
- [ ] Footer con navegación
- [ ] Espaciados consistentes (16px padding)
- [ ] Tipografía legible (mínimo 11px)
- [ ] Bordes redondeados (12-16px)
- [ ] Íconos tamaño 16-20px
- [ ] Layout móvil (max 400px width)

---

**Total: 22 pantallas listas para recrear**
- Ángel: 8 pantallas (A1-A8)
- Paola: 8 pantallas (P1-P8)
- Angélica: 6 pantallas (V1-V6)

Cada prompt está optimizado para copiar/pegar directamente en herramientas de generación de diseño con IA.
