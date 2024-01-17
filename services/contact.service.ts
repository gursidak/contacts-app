import { Contact } from "@/types/contact.type";
import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const contactService = {
    async getList():Promise<Contact[]>{
        const res = await axios.get(`${BASE_URL}/users`)
        return res.data
    },

    async getContactById(id:number):Promise<Contact[]>{
        const res  =await axios.get(`${BASE_URL}/users/?id=${id}`);
        return res.data;
    }
}

export default contactService;