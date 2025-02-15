import { useState } from 'react';
import { EventsContainer } from './events-container';
import { EVENTS, EVENTS_TEST } from '../mocks/data';

export const EventsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

  return (
    <div className="flex flex-col gap-8 h-full justify-center">

      <div className="flex gap-8 h-14">
        <button
          className={`w-40 border border-gray-700 px-4 py-2 text-lg ${
            activeTab === 'day1' 
              ? 'bg-gray-800 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setActiveTab('day1')}
        >
          Día 1
        </button>
        <button
          className={`w-40 border border-gray-700 px-4 py-2 text-lg ${
            activeTab === 'day2' 
              ? 'bg-gray-800 text-white border-b-2 border-blue-500' 
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setActiveTab('day2')}
        >
          Día 2
        </button>
      </div>

      <div className="flex-grow">
        <EventsContainer events={activeTab === 'day1' ? EVENTS : EVENTS_TEST} />
      </div>
    </div>
  );
};