export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  // Add 24 hours (in minutes) if it's past midnight
  const extraDay = hours < 12 ? 24 * 60 : 0;
  return hours * 60 + minutes + extraDay;
};