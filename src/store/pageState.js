import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	notification: null
}

const slice = createSlice({
	name: "pageState",
	initialState: initialState,
	reducers: {
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

