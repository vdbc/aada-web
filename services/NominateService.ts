import { apiUrl } from "../models/AppConfig";
import {
  MyProjectNominateResponse,
  Nominate,
  ProjectNominate,
} from "../models/NominateModel";
import { get, post, put } from "./http";

export async function getAllNominate(token: string): Promise<Nominate[]> {
  const url = `${apiUrl}/nominate`;
  const resp = await get<{ data: Nominate[] }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}

export async function registerNominateEntries(
  entries: string[],
  token: string
): Promise<string> {
  const url = `${apiUrl}/nominate/register`;
  const resp = await post<{ id: string }>(
    url,
    { entries },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { id } = resp || {};
  return id;
}

export async function getNominateEntriesRegistered(
  token: string
): Promise<string> {
  const url = `${apiUrl}/nominate/registered`;
  const resp = await get<{ id: string }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { id } = resp || {};

  return id;
}

export async function confirmPaymentNominateEntries(
  data: any,
  token: string
): Promise<string> {
  const url = `${apiUrl}/payment/nominate`;
  const resp = await post<any>(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { id } = resp.data;
  return id;
}

export async function getProjectRegistered(
  token: string
): Promise<MyProjectNominateResponse> {
  const url = `${apiUrl}/nominate/projects`;
  const resp = await get<MyProjectNominateResponse>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp;
}

export async function saveProject(
  project: ProjectNominate,
  token: string
): Promise<ProjectNominate> {
  const url = `${apiUrl}/nominate/projects/${project.id}`;
  const resp = await put<{ data: ProjectNominate }>(url, project, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}
