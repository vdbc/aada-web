import axios from "axios";
import { apiUrl } from "../models/AppConfig";

import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";

export async function requestRegisterUser(user: UserModel): Promise<AuthModel> {
  const url = `${apiUrl}/users/register`;
  const resp = await axios.post(url, user);

  return resp.data;
}

export async function getUserInfo(token: string): Promise<UserModel> {
  const url = `${apiUrl}/me`;
  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}

export async function login(
  username: string,
  password: string
): Promise<AuthModel> {
  const url = `${apiUrl}/auth`;
  const resp = await axios.post(url, { username, password });

  return resp.data;
}
