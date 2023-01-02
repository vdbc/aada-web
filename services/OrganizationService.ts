import axios from "axios";
import { apiUrl } from "../models/AppConfig";

import { Organization } from "../models/Organization";

export async function registerOrganization(
  organization: Organization,
  token: string
): Promise<Organization> {
  const url = `${apiUrl}/organization`;
  const resp = await axios.post(url, organization, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}
export async function getOrganizationRegistered(
  token: string
): Promise<Organization> {
  const url = `${apiUrl}/organization`;
  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}

export async function updateOrganizationRegistered(
  organization: Organization,
  token: string
): Promise<Organization> {
  const url = `${apiUrl}/organization/${organization.id}`;
  const resp = await axios.put(url, organization, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}
