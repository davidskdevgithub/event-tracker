import React from 'react';

import { ROW_HEIGHT } from '../utils/config';

interface EventsGridProps {
  children: React.ReactNode;
  columns: number;
}

export const EventsGrid: React.FC<EventsGridProps> = ({ children, columns }) => {
  return (
    <div
      className={`${ROW_HEIGHT} grid gap-1 border-[0.5px] border-gray-700`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(40px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};