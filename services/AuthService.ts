import { apiUrl } from "../models/AppConfig";
import { RoleModel } from "../models/AuthModel";
import { get, post, put } from "./http";

export async function getRole(token: string): Promise<RoleModel> {
  const url = `${apiUrl}/api/me`;
  return get<{ user: RoleModel }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.user);
}
