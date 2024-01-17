import { Contact } from "@/types/contact.type";
import axios from "axios";

const BASE_URL = "/api";

const contactService = {
  async getList(): Promise<Contact[]> {
    const res = await axios.get(`${BASE_URL}/contact`);
    return res.data;
  },

  async getContactById(id: string, host?: string): Promise<Contact> {
    const path = `${host ? `http://${host}` : ""}${BASE_URL}/contact?id=${id}`;
    const res = await axios.get(path);
    return res.data;
  },

  async addContact(body: Omit<Contact, "id">) {
    const res = await axios.post(`${BASE_URL}/contact`, body );
    return res.data;
  },
};

export default contactService;
