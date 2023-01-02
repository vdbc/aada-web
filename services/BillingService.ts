import axios from "axios";
import { apiUrl } from "../models/AppConfig";

import { BillingModel } from "../models/BillingModel";

export async function requestCreateBillingInfo(
  billing: BillingModel,
  token: string
): Promise<BillingModel> {
  const url = `${apiUrl}/billing`;
  const resp = await axios.post(url, billing, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}
export async function getBillingInfoRegistered(
  token: string
): Promise<BillingModel> {
  const url = `${apiUrl}/billing`;
  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}

export async function updateBillingInfoRegistered(
  billing: BillingModel,
  token: string
): Promise<BillingModel> {
  const url = `${apiUrl}/billing/${billing.id}`;
  const resp = await axios.put(url, billing, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
}
