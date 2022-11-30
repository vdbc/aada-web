import axios from "axios";
import { apiUrl } from "../models/AppConfig";

import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";

export async function requestRegisterUser(user: UserModel): Promise<AuthModel> {
  const url = `${apiUrl}/users/register`;
  const resp = await axios.post(url, user);

  return resp.data;
}
