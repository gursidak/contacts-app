import contactReducer from '@/slices/contactSlice';
import { configureStore } from '@reduxjs/toolkit';

// config the store 
const store= configureStore({
   reducer: {
      contact : contactReducer
   }
})

// export default the store 
export default store

