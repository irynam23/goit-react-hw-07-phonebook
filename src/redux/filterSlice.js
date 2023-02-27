import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',

  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.trim().toLowerCase();
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;