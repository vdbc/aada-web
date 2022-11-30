import axios from "axios";
import { apiUrl } from "../models/AppConfig";

import { Nominate } from "../models/NominateModel";

export async function getAllNominate(token: string): Promise<Nominate[]> {
  const url = `${apiUrl}/nominate`;
  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data.data;
}
