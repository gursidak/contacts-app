/* Place all types related to contact module in this file; */

/* General Types; */
export type Contact = {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: ContactAddress
  phone: string;
  website?: string;
  company?: ContactCompany;
};


export type ContactAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode:string ;
    geo?:ContactGeoPoint
}

export type ContactGeoPoint = {
    lat : string
    lng : string
}

export type ContactCompany = {
    name: string;
    catchPhrase: string;
    bs: string;
  }


  export type ContactDisplayDataType = {
    id : number;
    name : string
    email ?: string
    phone :string
    website ?: string

  }



/* State Related types; */


export type ContactState = {
    loading : boolean
    contacts : Contact[];
}


