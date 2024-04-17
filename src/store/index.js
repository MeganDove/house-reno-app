import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasks.js";
import usersReducer from "./users.js";
import roomsReducer from "./rooms.js";
import pageStateReducer from "./pageState.js";

const store = configureStore({
	reducer: {
		pageState: pageStateReducer,
		tasks: tasksReducer,
		users: usersReducer,
		rooms: roomsReducer
	}
});

export default store;

