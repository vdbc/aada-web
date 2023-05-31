import { apiUrl } from "../models/AppConfig";
import { ProjectScore } from "../models/ProjectScoreModel";
import { get, post } from "./http";

export interface ScoreNominate {
  score: number;
  comment: string;
}
export interface ProjectScoreBody {
  idea: ScoreNominate;
  impact: ScoreNominate;
  differentiation: ScoreNominate;
  function: ScoreNominate;
  innovation: ScoreNominate;
}
export interface NominateEntryAdmin {
  id: string;
  nominateId: string;
  name: string;
  description: string;
}
export async function postProjectScore(
  projectId: number,
  body: ProjectScoreBody,
  token: string
): Promise<ProjectScoreBody> {
  const url = `${apiUrl}/score/${projectId}`;
  return post<ProjectScoreBody>(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function getAllNominateAdmin(
  token: string
): Promise<NominateEntryAdmin[]> {
  const url = `${apiUrl}/admin/entry`;
  const resp = await get<{ data: NominateEntryAdmin[] }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}

export default class ScoreService {
  static async saveProjectScore(projectScore: ProjectScore, token: string) {
    const url = `${apiUrl}/score/project/${projectScore.projectId}`;
    const resp = await post<ProjectScore>(url, projectScore, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return resp;
  }
  static async fetchProjectScore(
    projectId: number,
    token: string
  ): Promise<ProjectScore> {
    const url = `${apiUrl}/score/project/${projectId}`;
    const resp = await get<ProjectScore>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return resp;
  }
}
