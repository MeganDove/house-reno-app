import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentPage: "tasks"
}

const slice = createSlice({
	name: "pageState",
	initialState: initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		}
	}
})

export const pageStateActions = slice.actions;

export default slice.reducer;

