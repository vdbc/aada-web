import { winnerNightApiUrl } from "../models/AppConfig";
import { post } from "./http";

export interface WinnerNightOrderModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  title: string;
  createAt: string;
  attendees: number;
}
export const orderEmpty: WinnerNightOrderModel = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  company: "",
  title: "",
  createAt: "",
  attendees: 1,
};

interface PaypalLink {
  href: string;
  rel: "self" | "approve" | "update" | "capture";
  method: "GET" | "POST" | "PATCH";
}

interface PaypalResponse {
  id: string;
  status: string;
  links: PaypalLink[];
}

function getPaypalPaymentUrl(resp: PaypalResponse): string {
  const link = resp.links.find((link) => link.rel == "approve");
  return link?.href ?? "";
}

export async function createOrder(
  order: WinnerNightOrderModel,
  returnUrl: string,
  cancelUrl: string
): Promise<string> {
  const url = `${winnerNightApiUrl}/paypal/create-order`;
  const result = await post<PaypalResponse>(
    url,
    {
      ...order,
      returnUrl,
      cancelUrl,
      amount: order.attendees * 350,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return getPaypalPaymentUrl(result);
}

export async function captureOrder(orderId: string) {
  const url = `${winnerNightApiUrl}/paypal/capture`;
  return post(
    url,
    { orderId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
