export interface Scenario {
  id: 'norte' | 'sur' | 'montana' | 'boomerang' | 'casitablues' | 'hangarclub' | 'paraguay';
  name: string;
  logo: string;
}

export interface Event {
  start: string;
  end: string;
  banda: string;
  isFav?: boolean;
}

export type EventsType = Partial<{
  [K in Scenario['id']]: Event[];
}>;