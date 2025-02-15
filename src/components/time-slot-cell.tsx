import { COLUMN_DURATION } from '../utils/config';

const CELLS = 30 / COLUMN_DURATION; // each 30min

interface TimeSlotCellProps {
  index: number;
  time: string;
}

export const TimeSlotCell: React.FC<TimeSlotCellProps> = ({ index, time }) => {
  const column = Math.floor(index * CELLS) + 1;

  const [hours] = time.split(':').map(Number);
  const formattedTime = hours >= 24 ? `+${hours - 24}:00` : time;

  return (
    <div
      className="flex items-center px-3 bg-gray-800 font-bold text-sm border-x border-gray-700"
      style={{
        gridColumn: `${column} / span ${CELLS}`,
        gridRow: '1',
      }}
    >
      {formattedTime}
    </div>
  );
};