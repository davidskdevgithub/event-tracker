export interface Event {
  banda: string;
  start: string;
  end?: string;
  id: string; // We need this to identify unique events
  isFav?: boolean;
}