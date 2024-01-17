import { Contact, ContactState } from "@/types/contact.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import contactService from "@/services/contact.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { handleAPIErrors } from "@/utils/handleError.util";
import { toast } from "react-toastify";

const initialState: ContactState = {
  loading: false,
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {


    addContact: (state, {payload}:PayloadAction<Omit<Contact, 'id'>>)=>{
        const newContact = {...payload, id : dayjs().valueOf()};
        state.contacts = [newContact, ...state.contacts];
        toast.success("Contact saved successfully")
        
    },

    updateContact: (state, {payload}:PayloadAction<Contact>) => {
      const updatedContact = payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === updatedContact.id
      );
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
    removeContact: (state, {payload}: PayloadAction<number>) => {
      const contactIdToRemove = payload;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== contactIdToRemove
      );
      toast.success("Contact deleted successfully")

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (state, {payload}) => {
        
        state.loading = false;
        /* handle Errors here; */
      });
  },
});

const contactReducer = contactSlice.reducer;
export const {updateContact, removeContact, addContact} = contactSlice.actions;
export default contactReducer;

/* Async Redux Thunks */

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const data = await contactService.getList();
      return data;
    } catch (error) {
      handleAPIErrors( error);
      throw error;
    }
  }
);
