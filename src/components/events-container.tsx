import { useRef } from 'react';

import { EventScenarios } from './event-scenarios';
import { EventsGrid } from './events-grid';
import { TimeSlotCell } from './time-slot-cell';
import { EventSlotCell } from './event-slot-cell';
import { CurrentTimeIndicator } from './current-time-indicator';

import { TOTAL_COLUMNS, START_TIME, TOTAL_MINUTES } from '../utils/config';
import { timeToMinutes } from '../utils/time';
import { TIME_SLOTS, SCENARIOS, EVENTS } from '../mocks/data';

export const EventsContainer: React.FC = () => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCurrentTime = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const currentTimePosition = container.scrollWidth * (timeToMinutes("17:27") - START_TIME) / TOTAL_MINUTES;
      container.scrollTo({ left: currentTimePosition - (container.clientWidth / 2), behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      {/* Columna fija de escenarios */}
      <EventScenarios onTimeClick={scrollToCurrentTime} />

      {/* Área desplazable */}
      <div ref={scrollContainerRef} className="flex-grow overflow-x-auto">
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