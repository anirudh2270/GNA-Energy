import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import locationReducer from "./locationSlice";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		location: locationReducer,
	},
});
