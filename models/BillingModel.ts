export interface BillingModel {
  id: string;
  createdByUserId: string;
  name: string;
  country: string;
  city: string;
  zipCode: string;
  address1: string;
  address2?: string;
  email?: string;
  website?: string;
  facebookUrl?: string;
  phone?: string;
  createdAt: string;
}

export const emptyBilling: BillingModel = {
  id: "",
  createdByUserId: "",
  name: "",
  country: "",
  city: "",
  zipCode: "",
  address1: "",
  createdAt: "",
};
