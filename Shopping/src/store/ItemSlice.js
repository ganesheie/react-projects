import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const ItemsActions = ItemsSlice.actions;

export default ItemsSlice;
