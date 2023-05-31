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
export interface NominateName {
  id: string;
  name: string;
  description: string;
}

export enum ProjectNominateStatus {
  DRAFT = "DRAFT",
  SUBMITED = "SUBMITED",
}

export interface ProjectNominate {
  id: number;
  userId: string;
  entryId: string;
  name: string;
  country: string;
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
  status: ProjectNominateStatus;
  createdAt: Date;
  deadline: string;
}
// get project by entry id
export interface ProjectNominateEntry {
  id: number;
  userId: string;
  entryId: string;
  name: string;
  country: string;
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
  status: ProjectNominateStatus;
  createdAt: Date;
  deadline: string;
}
export interface IListProject {
  total: number;
  data: ProjectNominateEntry[];
}

export interface MyProjectNominateResponse {
  projects: ProjectNominate[];
  isPaid: boolean;
}

export interface AllProjectsResponse {
  data: ProjectNominate[];
}
export interface RegisterNominateEntries {
  id: string;
  totalFee: number;
}

export const projectNominateResponseEmpty: MyProjectNominateResponse = {
  projects: [],
  isPaid: false,
};
