import { apiUrl } from "../models/AppConfig";
import {
  MyProjectNominateResponse,
  Nominate,
  NominateName,
  ProjectNominate,
  RegisterNominateEntries,
} from "../models/NominateModel";
import { get, post, put } from "./http";

export async function fetchFeePerEntry(token: string): Promise<number> {
  const url = `${apiUrl}/nominate/feePerEntry`;
  const { feePerEntry } = await get<{ feePerEntry: number }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return feePerEntry;
}

export async function getAllNominate(token: string): Promise<Nominate[]> {
  const url = `${apiUrl}/nominate`;
  const resp = await get<{ data: Nominate[] }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}
export async function getAllNominateJudgement(
  token: string
): Promise<NominateName[]> {
  const url = `${apiUrl}/admin/entry`;
  const resp = await get<{ data: NominateName[] }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}

export async function registerNominateEntries(
  entries: string[],
  token: string
): Promise<RegisterNominateEntries> {
  const url = `${apiUrl}/nominate/register`;
  return post<RegisterNominateEntries>(
    url,
    { entries },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function getNominateEntriesRegistered(
  token: string
): Promise<RegisterNominateEntries> {
  const url = `${apiUrl}/nominate/registered`;
  return get<RegisterNominateEntries>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function confirmPaymentNominateEntries(
  data: any,
  token: string
): Promise<any> {
  const url = `${apiUrl}/payment/nominate`;
  return post<any>(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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

export async function confirmSubmitProject(
  project: ProjectNominate,
  token: string
): Promise<ProjectNominate> {
  const url = `${apiUrl}/nominate/projects/${project.id}/submit`;
  return post<ProjectNominate>(url, project, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
