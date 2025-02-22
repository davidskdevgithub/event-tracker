import { useMemo, useRef } from 'react';

import { EventScenarios } from './event-scenarios';
import { EventsGrid } from './events-grid';
import { TimeSlotCell } from './time-slot-cell';
import { EventSlotCell } from './event-slot-cell';
import { CurrentTimeIndicator } from './current-time-indicator';

import { TOTAL_COLUMNS, START_TIME, TOTAL_MINUTES } from '../utils/config';
import { timeToMinutes, getCurrentArgentinaTime } from '../utils/time';
import { TIME_SLOTS, SCENARIOS } from '../mocks/data';

import { Event, EventsType} from '../types';

interface EventsContainerProps {
  events: EventsType;
}

export const EventsContainer: React.FC<EventsContainerProps> = ({ events }) => {

  const activeScenarios = useMemo(() => 
    SCENARIOS.filter(scenario => {
      const scenarioEvents = events[scenario.id];
      return scenarioEvents !== undefined && scenarioEvents.length > 0;
    })
  , [events]);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCurrentTime = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const currentTimePosition = container.scrollWidth * (timeToMinutes(getCurrentArgentinaTime()) - START_TIME) / TOTAL_MINUTES;
      container.scrollTo({ left: currentTimePosition - (container.clientWidth / 2), behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      {/* Columna fija de escenarios */}
      <EventScenarios 
        scenarios={activeScenarios}
        onTimeClick={scrollToCurrentTime}  
      />

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
          {activeScenarios.map(scenario => {
            const scenarioEvents = events[scenario.id];
            if (!scenarioEvents) return null;
            
            return (
              <EventsGrid key={`grid-${scenario.id}`} columns={TOTAL_COLUMNS}>
                {scenarioEvents.map((event: Event, index: number) => (
                  <EventSlotCell
                    key={`${scenario.id}-${event.banda}`}
                    event={event}
                    nextEvent={scenarioEvents[index + 1]}
                  />
                ))}
              </EventsGrid>
            );
          })}
        </div>
      </div>
    </div>
  );
};