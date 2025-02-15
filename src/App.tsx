import { EventsContainer } from './components/events-container';
import {
  mostrarFechaLocal,
  mostrarFechaOriginal,
  obtenerNombreZonaHoraria,
  formatearFecha,
  eventoDesdeAPI
} from './utils/test';


function App() {

  // Ejemplos de uso
  console.log('Fecha original del evento:', mostrarFechaOriginal(eventoDesdeAPI));
  console.log('Fecha en tu hora local:', mostrarFechaLocal(eventoDesdeAPI));

  console.log('Zona horaria del evento:', obtenerNombreZonaHoraria(eventoDesdeAPI.zona_horaria));
  console.log('Tu zona horaria:', obtenerNombreZonaHoraria(Intl.DateTimeFormat().resolvedOptions().timeZone));

  // Ejemplo de cómo se vería en diferentes locales
  console.log('Fecha en español:', formatearFecha(eventoDesdeAPI.fecha_inicio, eventoDesdeAPI.zona_horaria, 'es-ES'));
  console.log('Fecha en inglés:', formatearFecha(eventoDesdeAPI.fecha_inicio, eventoDesdeAPI.zona_horaria, 'en-US'));
  console.log('Fecha en francés:', formatearFecha(eventoDesdeAPI.fecha_inicio, eventoDesdeAPI.zona_horaria, 'fr-FR'));

  return (
    <main className="m-auto min-h-screen">
      <EventsContainer />
    </main>
  );
}

export default App;
