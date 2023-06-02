import { UserModel } from "./UserModel";

export interface AuthModel {
  user: UserModel;
  token: string;
}

export interface RoleModel {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}
