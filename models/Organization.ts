export interface MarketingContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
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
  marketingContact: MarketingContact;
}

export const marketingContactEmpty: MarketingContact = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export const organizationEmpty: Organization = {
  id: "",
  createdByUserId: "",
  name: "",
  country: "",
  city: "",
  zipCode: "",
  address: "",
  createdAt: "",
  marketingContact: marketingContactEmpty,
};
