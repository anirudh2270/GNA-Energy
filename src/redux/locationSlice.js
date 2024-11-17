import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
};

export const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		UpdateLocation: (state, action) => {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { UpdateLocation } = locationSlice.actions;

export default locationSlice.reducer;
