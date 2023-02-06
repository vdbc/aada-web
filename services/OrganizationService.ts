import { apiUrl } from "../models/AppConfig";

import { Organization } from "../models/Organization";
import { get, post, put } from "./http";

export async function registerOrganization(
  organization: Organization,
  token: string
): Promise<Organization> {
  const url = `${apiUrl}/organization`;
  return post<Organization>(url, organization, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function getOrganizationRegistered(
  token: string
): Promise<Organization> {
  const url = `${apiUrl}/organization`;
  return get<Organization>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateOrganizationRegistered(
  organization: Organization,
  token: string
): Promise<Organization> {
  const url = `${apiUrl}/organization/${organization.id}`;
  return put<Organization>(url, organization, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
