import { apiUrl } from "../models/AppConfig";

import { AuthModel } from "../models/AuthModel";
import { RoleModel, UserModel } from "../models/UserModel";
import { get, post, put } from "./http";

export async function requestRegisterUser(user: UserModel): Promise<AuthModel> {
  const url = `${apiUrl}/users/register`;
  return post<AuthModel>(url, user);
}

export async function fetchUserInfo(token: string): Promise<UserModel> {
  const url = `${apiUrl}/me`;
  return get<{ user: UserModel }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.user);
}

export async function login(
  username: string,
  password: string
): Promise<AuthModel> {
  const url = `${apiUrl}/auth`;
  return post<AuthModel>(url, { username, password });
}

export async function requestUpdatePassword(
  currentPassword: string,
  newPassword: string,
  token: string
): Promise<AuthModel> {
  const url = `${apiUrl}/auth/password`;
  return put<AuthModel>(
    url,
    { currentPassword, newPassword },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
export async function getRole(token: string): Promise<RoleModel> {
  const url = `${apiUrl}/api/users/permission`;
  return get<{ user: RoleModel }>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.user);
}
