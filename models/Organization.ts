export interface Organization {
  id: string;
  createdByUserId: string;
  name: string;
  country: string;
  city: string;
  zipCode: string;
  address: string;
  email?: string;
  website?: string;
  facebookUrl?: string;
  phone?: string;
  createdAt: string;
}

export const emptyOrganization: Organization = {
  id: "",
  createdByUserId: "",
  name: "",
  country: "",
  city: "",
  zipCode: "",
  address: "",
  createdAt: "",
};
