import { Contact, ContactState } from "@/types/contact.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import contactService from "@/data/contact.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState: ContactState = {
  loading: false,
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateContact: (state, action:PayloadAction<Contact>) => {
      const updatedContact = action.payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === updatedContact.id
      );
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      const contactIdToRemove = action.payload;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== contactIdToRemove
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        /* handle Errors here; */
      });
  },
});

const contactReducer = contactSlice.reducer;
export const {updateContact, removeContact} = contactSlice.actions;
export default contactReducer;

/* Async Redux Thunks */

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const data = await contactService.getList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
