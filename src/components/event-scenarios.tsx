import { SCENARIOS } from '../mocks/data';

import { ROW_HEIGHT } from '../utils/config';

export const EventScenarios: React.FC = () => {
  return (
    <div className="flex-none w-30">
      <div className={`${ROW_HEIGHT} flex items-center justify-center bg-gray-800 border border-gray-700`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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