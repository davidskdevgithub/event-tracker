import { Event } from '../types';
import { useState, useEffect } from 'react';
import { START_TIME, COLUMN_DURATION, TOTAL_MINUTES } from '../utils/config';
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
      onClick={handleToggleFav}
      className={`p-1 overflow-hidden text-xs rounded cursor-pointer ${
        isFav 
          ? 'bg-blue-400 text-black' 
          : 'bg-white text-black'
      }`}
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