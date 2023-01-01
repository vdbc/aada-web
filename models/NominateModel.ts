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

enum ProjectNominateStatus {
  DRAFT = "DRAFT",
  SUBMITED = "SUBMITED",
}

export interface ProjectNominate {
  id: number;
  userId: string;
  entryId: string;
  name: string;
  location: string;
  idea: string;
  impact: string;
  differentiation: string;
  function: string;
  innovation: string;
  designer: string;
  manufacturer: string;
  owner: string;
  pictures: string[];
  status: ProjectNominateStatus.DRAFT;
  createdAt: Date;
  deadline: string;
}