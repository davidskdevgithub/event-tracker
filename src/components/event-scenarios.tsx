import { SCENARIOS } from '../mocks/data';

import { ROW_HEIGHT } from '../utils/config';

interface EventScenariosProps {
  onTimeClick: () => void;
}

export const EventScenarios: React.FC<EventScenariosProps> = ({ onTimeClick }) => {
  return (
    <div className="flex-none w-30">
      <div onClick={onTimeClick} className={`${ROW_HEIGHT} flex items-center justify-center bg-gray-800 border border-gray-700`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      {SCENARIOS.map(scenario => (
        <div key={scenario.id} className={`${ROW_HEIGHT} flex items-center space-x-2 p-2 bg-gray-800 border border-gray-700`}>
          <span className="font-bold">{scenario.logo}</span>
          <span className="text-sm">{scenario.name}</span>
        </div>
      ))}
    </div>
  );
};