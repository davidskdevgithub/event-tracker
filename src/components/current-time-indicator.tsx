import { useState, useEffect } from 'react';
import { START_TIME, TOTAL_MINUTES } from '../utils/config';
import { timeToMinutes, getCurrentArgentinaTime } from '../utils/time';

export const CurrentTimeIndicator: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getCurrentArgentinaTime());
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const currentMinutes = timeToMinutes(currentTime) - START_TIME;
  const position = (currentMinutes / TOTAL_MINUTES) * 100;

  return (
    <div 
      className="absolute top-0 bottom-0 w-0.5 bg-green-700 z-10"
      style={{
        left: `${position}%`,
      }}
    />
  );
};