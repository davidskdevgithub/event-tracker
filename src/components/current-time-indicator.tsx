import { START_TIME, TOTAL_MINUTES } from '../utils/config';
import { timeToMinutes } from '../utils/time';

export const CurrentTimeIndicator: React.FC = () => {
  const currentTime = "17:17";
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