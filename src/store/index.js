import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasks.js";
import usersReducer from "./users.js"
import pageStateReducer from "./pageState.js";

const store = configureStore({
	reducer: {
		pageState: pageStateReducer,
		tasks: tasksReducer,
		users: usersReducer
	}
});

export default store;

