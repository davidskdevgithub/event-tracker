export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  // Add 24 hours (in minutes) if it's past midnight
  const extraDay = hours < 12 ? 24 * 60 : 0;
  return hours * 60 + minutes + extraDay;
};

export const getCurrentArgentinaTime = (): string => {
  return new Date().toLocaleTimeString('es-AR', { 
    timeZone: 'America/Argentina/Buenos_Aires',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};