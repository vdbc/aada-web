export interface FieldScore {
  comment: string;
  score?: number;
}

const fieldScoreEmpty: FieldScore = { comment: "" };

export enum ProjectScoreStatus {
  DRAFT = "DRAFT",
  SUBMITED = "SUBMITED",
}

export declare type ProjectScoreField =
  | "idea"
  | "impact"
  | "differentiation"
  | "function"
  | "innovation";
export interface ProjectScore {
  projectId: number;
  status: ProjectScoreStatus;
  idea: FieldScore;
  impact: FieldScore;
  innovation: FieldScore;
  differentiation: FieldScore;
  function: FieldScore;
}

export const projectScopeEmpty: ProjectScore = {
  projectId: 0,
  status: ProjectScoreStatus.DRAFT,
  idea: fieldScoreEmpty,
  impact: fieldScoreEmpty,
  innovation: fieldScoreEmpty,
  differentiation: fieldScoreEmpty,
  function: fieldScoreEmpty,
};
