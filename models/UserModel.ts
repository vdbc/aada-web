export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
}

export const emptyUser: UserModel = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};
