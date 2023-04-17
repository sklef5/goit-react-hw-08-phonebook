import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContact, removeContact } from './contactsOperation';

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })

      .addCase(getContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })

      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(el => el.id !== payload);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('contacts') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

// export const {
//   getRequest,
//   getSuccess,
//   getError,
//   addRequest,
//   addSuccess,
//   addError,
//   addContacts,
//   removeContacts,
//   filterContacts,
// } = ContactSlice.actions;
export default ContactSlice.reducer;
