import { apiUrl } from "../models/AppConfig";
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
): Promise<any> {
  const url = `${apiUrl}/score/${projectId}`;
  return post<any>(url, {
    body: body,
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
