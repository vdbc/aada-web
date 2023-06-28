import { apiUrl } from "../models/AppConfig";
import { post } from "./http";

export interface OrderModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  title: string;
  createAt: string;
  attendee: number;
  amount: number;
  }
  export const orderEmpty: OrderModel = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    title: "",
    createAt: "",
    attendee: 0,
    amount: 0,
  };


  export async function createOrder(
    order: OrderModel,
    token: string
  ): Promise<OrderModel> {
    const url = `${apiUrl}/organization`;
    return post<OrderModel>(url, order, {
      
    });
  }