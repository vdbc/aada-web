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
const ROLES = {
  admin: "ADMIN",
  user: "USER",
  judgement: "JUDGEMENT",
};
type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});
export const useAuth = () => useContext(AuthContext);
