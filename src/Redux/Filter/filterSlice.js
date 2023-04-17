import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: { data: '' },

  reducers: {
    filterContacts(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
  },
});
export const { filterContacts } = FilterSlice.actions;
export default FilterSlice.reducer;
