import { apiUrl } from "../models/AppConfig";

import { BillingModel } from "../models/BillingModel";
import { get, post, put } from "./http";

export async function requestCreateBillingInfo(
  billing: BillingModel,
  token: string
): Promise<BillingModel> {
  const url = `${apiUrl}/billing`;
  return post<BillingModel>(url, billing, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function getBillingInfoRegistered(
  token: string
): Promise<BillingModel> {
  const url = `${apiUrl}/billing`;
  return get<BillingModel>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateBillingInfoRegistered(
  billing: BillingModel,
  token: string
): Promise<BillingModel> {
  const url = `${apiUrl}/billing/${billing.id}`;
  return put<BillingModel>(url, billing, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
