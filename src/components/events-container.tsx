import { EventScenarios } from './event-scenarios';
import { EventsGrid } from './events-grid';
import { TimeSlotCell } from './time-slot-cell';
import { EventSlotCell } from './event-slot-cell';
import { CurrentTimeIndicator } from './current-time-indicator';

import { TOTAL_COLUMNS } from '../utils/config';
import { TIME_SLOTS, SCENARIOS, EVENTS } from '../mocks/data';

export const EventsContainer: React.FC = () => {
  return (
    <div className="flex">
      {/* Columna fija de escenarios */}
      <EventScenarios />

      {/* Área desplazable */}
      <div className="flex-grow overflow-x-auto">
        <div className="inline-block min-w-full relative">
          {/* Time Indicator */}
          <CurrentTimeIndicator />

          {/* Fila de horarios */}
          <EventsGrid columns={TOTAL_COLUMNS}>
            {TIME_SLOTS.map((slot, index) => (
              <TimeSlotCell key={slot} time={slot} index={index} />
            ))}
          </EventsGrid>

          {/* Filas de eventos */}
          {SCENARIOS.map(scenario => (
            <EventsGrid key={`grid-${scenario.id}`} columns={TOTAL_COLUMNS}>
              {EVENTS[scenario.id].map((event, index) => (
                <EventSlotCell
                  key={`${scenario.id}-${event.banda}`}
                  event={event}
                  nextEvent={EVENTS[scenario.id][index + 1]}
                />
              ))}
            </EventsGrid>
          ))}
        </div>
      </div>
    </div>
  );
};