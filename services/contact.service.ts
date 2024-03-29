import { Contact } from "@/types/contact.type";
import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'development' ?  'http://localhost:3000/api' : 'https://https://keepcontacts.vercel.app/api';

const contactService = {
  async getList(): Promise<Contact[]> {
    const res = await axios.get(`${BASE_URL}/contact`);
    return res.data;
  },

  async getContactById(id: string, host?: string): Promise<Contact> {
    const path = `${BASE_URL}/contact?id=${id}`
    console.log({path});

    const res = await axios.get(path);
    return res.data;
  },

  async addContact(body: Omit<Contact, "id">) {
    const res = await axios.post(`${BASE_URL}/contact`, body );

    return res.data;
  },
};

export default contactService;
