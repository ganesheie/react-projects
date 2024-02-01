import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    addItemsToBag: (state, action) => {
      state.push(action.payload);
    },
    removeItemFromBag(state, action) {
      return state.filter((ItemId) => ItemId != action.payload);
    },
  },
});

export const BagActions = BagSlice.actions;

export default BagSlice;
