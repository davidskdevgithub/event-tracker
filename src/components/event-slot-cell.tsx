import { Event } from '../types';

import { START_TIME, COLUMN_DURATION, TOTAL_MINUTES } from '../utils/config';
import { timeToMinutes } from '../utils/time';


interface EventSlotCellProps {
  event: Event;
  nextEvent: Event;
}

export const EventSlotCell: React.FC<EventSlotCellProps> = ({ event, nextEvent }) => {

  const startMinutes = timeToMinutes(event.start) - START_TIME;

  let endMinutes: number;
  if (event.end) {
    endMinutes = timeToMinutes(event.end) - START_TIME;
  } else if (nextEvent) {
    endMinutes = timeToMinutes(nextEvent.start) - START_TIME;
  } else {
    endMinutes = TOTAL_MINUTES; // Hasta el final del día si no hay siguiente evento
  }

  const startColumn = Math.floor(startMinutes / COLUMN_DURATION) + 1;
  const endColumn = Math.floor(endMinutes / COLUMN_DURATION) + 1;

  return (
    <div
      className="bg-blue-600 text-white p-1 overflow-hidden text-xs rounded"
      style={{
        gridColumn: `${startColumn} / ${endColumn}`,
        gridRow: '1',
      }}
    >
      <div className="font-bold">{event.banda}</div>
      <div>{event.start}</div>
    </div>
  );
};