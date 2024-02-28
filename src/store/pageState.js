import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentPage: "tasks",
	notification: null
}

const slice = createSlice({
	name: "pageState",
	initialState: initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		showNotification: (state, action) => {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message
			};
		}
	}
})

export const pageStateActions = slice.actions;

export default slice.reducer;

