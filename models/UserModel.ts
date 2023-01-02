export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
}

export const userEmpty: UserModel = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};
