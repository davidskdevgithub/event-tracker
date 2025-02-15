export interface Scenario {
  id: 'norte' | 'sur' | 'montana' | 'boomerang' | 'paraguay' | 'casitablues';
  name: string;
  logo: string;
}

export interface Event {
  start: string;
  end: string;
  banda: string;
}

export type EventsType = {
  [K in Scenario['id']]: Event[];
};