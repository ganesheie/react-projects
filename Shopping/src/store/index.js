import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import fetchSlice from "./fetchSlice";
import BagSlice from "./Bag";

const AppStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchStatus: fetchSlice.reducer,
    Bag: BagSlice.reducer,
  },
});
export default AppStore;
