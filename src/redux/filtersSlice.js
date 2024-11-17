import { createSlice } from "@reduxjs/toolkit";
import Torus from "@/data/tours.json";

const initialState = {
	location: "",
	category: [],
	others: false,
	price: null,
	languages: [],
	sort: "A-Z",
	total_tour_on_location: Torus.length,
};

export const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		UpdateFilter: (state, action) => {
			state[action.payload.filterName] = action.payload.value;
		},
	},
});

// Action creators are generated for each case reducer function
export const { UpdateFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
