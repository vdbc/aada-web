import axios from "axios";
import { apiUrl } from "../models/AppConfig";
import {
  MyProjectNominateResponse,
  Nominate,
  ProjectNominate,
} from "../models/NominateModel";

export async function getAllNominate(token: string): Promise<Nominate[]> {
  const url = `${apiUrl}/nominate`;
  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data.data;
}

export async function registerNominateEntries(
  entries: string[],
  token: string
): Promise<string> {
  const url = `${apiUrl}/nominate/register`;
  const resp = await axios.post(
    url,
    { entries },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { id } = resp.data || {};
  return id;
}

export async function getNominateEntriesRegistered(
  token: string
): Promise<string> {
  const url = `${apiUrl}/nominate/registered`;
  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { id } = resp.data || {};

  return id;
}

export async function confirmPaymentNominateEntries(
  data: any,
  token: string
): Promise<string> {
  const url = `${apiUrl}/payment/nominate`;
  const resp = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { id } = resp.data.data || {};
  return id;
}

export async function getProjectRegistered(
  token: string
): Promise<MyProjectNominateResponse> {
  const url = `${apiUrl}/nominate/projects`;
  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}

export async function saveProject(
  project: ProjectNominate,
  token: string
): Promise<ProjectNominate> {
  const url = `${apiUrl}/nominate/projects/${project.id}`;
  const resp = await axios.put(url, project, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data.data;
}
