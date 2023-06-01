import { User } from "next-auth";
import { createContext, useContext, useState } from "react";
import { apiUrl } from "../models/AppConfig";

import { AuthModel } from "../models/AuthModel";
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
export const authService = {
  storeAccessToken(accessToken: string) {
    localStorage.save("accessToken", accessToken);
  },
  getAccessToken(): string | null {
    return localStorage.get("accessToken");
  },
};
