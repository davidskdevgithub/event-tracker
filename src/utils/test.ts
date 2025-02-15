// Importamos los tipos necesarios de la librería de definiciones de TypeScript
// import { Intl } from '@types/node';

// Definición de tipos
type TimeZone = Intl.DateTimeFormatOptions['timeZone'];
type Locale = Intl.LocalesArgument;

interface Evento {
  id: number;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  zona_horaria: TimeZone;
  descripcion: string;
}

type FormatearFechaOpciones = Partial<Intl.DateTimeFormatOptions>;

// Ejemplo de evento
export const eventoDesdeAPI: Evento = {
  id: 1,
  nombre: 'Evento A',
  fecha_inicio: '2024-02-19T17:00:00.000Z',  // UTC
  fecha_fin: '2024-02-19T19:00:00.000Z',     // UTC
  zona_horaria: 'America/Argentina/Buenos_Aires',
  descripcion: 'Descripción del evento A'
};

const test = 'dsadsa';
const bla = 'dsada' + test;

// Función para formatear la fecha
export function formatearFecha(
  fecha: string | Date,
  zonaHoraria: TimeZone,
  locale: Locale = navigator.language,
  opciones: FormatearFechaOpciones = {}
): string {
  const opcionesPorDefecto: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: zonaHoraria,
    hour12: false
  };

  const opcionesFinales: Intl.DateTimeFormatOptions = { ...opcionesPorDefecto, ...opciones };

  return new Intl.DateTimeFormat(locale, opcionesFinales).format(new Date(fecha));
}

// Función para mostrar la fecha en la zona horaria original del evento
export function mostrarFechaOriginal(evento: Evento): string {
  const fechaFormateada = formatearFecha(evento.fecha_inicio, evento.zona_horaria);
  return `${fechaFormateada} (${evento.zona_horaria})`;
}

// Función para mostrar la fecha en la zona horaria local del usuario
export function mostrarFechaLocal(evento: Evento): string {
  const zonaHorariaLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const fechaFormateada = formatearFecha(evento.fecha_inicio, zonaHorariaLocal);
  return `${fechaFormateada} (${zonaHorariaLocal})`;
}

// Función para obtener el nombre corto de la zona horaria
export function obtenerNombreZonaHoraria(zonaHoraria: TimeZone, locale: Locale = navigator.language): string {
  const opciones: Intl.DateTimeFormatOptions = {
    timeZone: zonaHoraria,
    timeZoneName: 'short'
  };
  return new Intl.DateTimeFormat(locale, opciones).formatToParts(new Date())
    .find(part => part.type === 'timeZoneName')?.value || String(zonaHoraria);
}

// Ejemplos de uso
// console.log('Fecha original del evento:', mostrarFechaOriginal(eventoDesdeAPI));
// console.log('Fecha en tu hora local:', mostrarFechaLocal(eventoDesdeAPI));

// console.log('Zona horaria del evento:', obtenerNombreZonaHoraria(eventoDesdeAPI.zona_horaria));
// console.log('Tu zona horaria:', obtenerNombreZonaHoraria(Intl.DateTimeFormat().resolvedOptions().timeZone));

// Ejemplo de cómo se vería en diferentes locales
// console.log('Fecha en español:', formatearFecha(eventoDesdeAPI.fecha_inicio, eventoDesdeAPI.zona_horaria, 'es-ES'));
// console.log('Fecha en inglés:', formatearFecha(eventoDesdeAPI.fecha_inicio, eventoDesdeAPI.zona_horaria, 'en-US'));
// console.log('Fecha en francés:', formatearFecha(eventoDesdeAPI.fecha_inicio, eventoDesdeAPI.zona_horaria, 'fr-FR'));