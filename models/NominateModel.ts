export interface NominateEntry {
  id: string;
  nominateId: string;
  name: string;
  description: string;
}

export interface Nominate {
  id: string;
  name: string;
  description: string;
  entries: NominateEntry[];
}
