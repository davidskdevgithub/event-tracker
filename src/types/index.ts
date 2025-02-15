export interface Scenario {
  id: 'norte' | 'sur' | 'montana' | 'boomerang' | 'casitablues' | 'hangarclub';
  name: string;
  logo: string;
}

export interface Event {
  start: string;
  end: string;
  banda: string;
  isFav?: boolean;
}

export type EventsType = {
  [K in Scenario['id']]: Event[];
};