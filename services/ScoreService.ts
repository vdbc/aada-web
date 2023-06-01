import { apiUrl } from "../models/AppConfig";
import { ProjectScore } from "../models/ProjectScoreModel";
import { get, post } from "./http";

export default class ScoreService {
  static async confirmSubmitProject(
    project: ProjectScore,
    token: string
  ): Promise<ProjectScore> {
    const url = `${apiUrl}/project/${project.projectId}/score/submit`;
    const resp = await post<ProjectScore>(url, project, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return resp;
  }
  static async saveProjectScore(projectScore: ProjectScore, token: string) {
    const url = `${apiUrl}/project/${projectScore.projectId}/score`;
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
    const url = `${apiUrl}/project/${projectId}/score`;
    const resp = await get<ProjectScore>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return resp;
  }
}
