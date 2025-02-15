import { Event } from '../types';
import { useState, useEffect } from 'react';
import { START_TIME, COLUMN_DURATION, TOTAL_COLUMNS } from '../utils/config';
import { timeToMinutes } from '../utils/time';

interface EventSlotCellProps {
  event: Event;
  nextEvent: Event;
}

export const EventSlotCell: React.FC<EventSlotCellProps> = ({ event, nextEvent }) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  useEffect(() => {
    const favEvents = JSON.parse(localStorage.getItem('favEvents') || '{}');
    setIsFav(!!favEvents[event.banda]);
  }, [event.banda]);

  const handleToggleFav = () => {
    const favEvents = JSON.parse(localStorage.getItem('favEvents') || '{}');
    const newFavEvents = {
      ...favEvents,
      [event.banda]: !favEvents[event.banda]
    };
    localStorage.setItem('favEvents', JSON.stringify(newFavEvents));
    setIsFav(!isFav);
  };

  const startMinutes = timeToMinutes(event.start) - START_TIME;

  let endMinutes: number;
  const maxDuration = startMinutes + 90;
  if (event.end) {
    endMinutes = timeToMinutes(event.end) - START_TIME;
  } else if (nextEvent) {
    const nextEventMinutes = timeToMinutes(nextEvent.start) - START_TIME;
    endMinutes = Math.min(nextEventMinutes, maxDuration);
  } else {
    endMinutes = startMinutes + 90;
  }

  const startColumn = Math.floor(startMinutes / COLUMN_DURATION) + 1;
  const endColumn = Math.floor(endMinutes / COLUMN_DURATION) + 1;

  if (startColumn > TOTAL_COLUMNS) return null;

  return (
    <div
      onClick={handleToggleFav}
      className={`py-2 overflow-hidden cursor-pointer`}
      style={{
        gridColumn: `${startColumn} / ${endColumn}`,
        gridRow: '1',
      }}
    >
      <div
        className={`p-1 h-full text-sm rounded  ${
          isFav 
            ? 'bg-blue-400 text-black' 
            : 'bg-white text-black'
        }`}
      >
        <div className="font-bold">{event.banda}</div>
        <div>{event.start}</div>
      </div>
    </div>
  );
};