/* Place all types related to contact module in this file; */

/* General Types; */
export type Contact = {
  id: string;
  firstName: string;
  lastName: string | null;
  gender: string | null;
  email: string | null;
  address: ContactAddress;
  nationality: string | null;
  phone: string;
  website: string | null;
  company: ContactCompany;
  addressId: string | null;
  companyId: string | null;
};

export type PostContact = {
  firstName: string;
  lastName: string ;
  gender: string ;
  email: string;
  address: Omit<ContactAddress, 'id' | 'createdAt'| 'updatedAt'>;
  nationality: string ;
  phone: string;
  website: string;
  company: Omit<ContactCompany, 'id'>;

}

export type ContactAddress = {
  id: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ContactCompany = {
  id: string;
  name: string;
  catchPhrase: string;
  bs: string;
};

export type ContactDisplayDataType = {
  id: string;
  name: string;
  email: string|null;
  phone: string;
  website: string|null;
};

/* State Related types; */

export type ContactState = {
  loading: boolean;
  contacts: Contact[];
};
