export interface FieldScore {
  comment: string;
  score?: number;
}

const fieldScoreEmpty: FieldScore = { comment: "" };

export declare type ProjectScoreField =
  | "idea"
  | "impact"
  | "differentiation"
  | "function"
  | "innovation";
export interface ProjectScore {
  projectId: number;
  idea: FieldScore;
  impact: FieldScore;
  innovation: FieldScore;
  differentiation: FieldScore;
  function: FieldScore;
}

export const projectScopeEmpty: ProjectScore = {
  projectId: 0,
  idea: fieldScoreEmpty,
  impact: fieldScoreEmpty,
  innovation: fieldScoreEmpty,
  differentiation: fieldScoreEmpty,
  function: fieldScoreEmpty,
};
