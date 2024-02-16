import { createSlice } from "@reduxjs/toolkit";

let EXAMPLE_USERS = [
	{username: "unassigned", displayName: "Unassigned"},
	{username: "christina.dove", displayName: "Christina"},
	{username: "megan.dove", displayName: "Megan"}
];

const initialState = {
  users: EXAMPLE_USERS
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //TODO
  }
});

export const usersActions = slice.actions;

export default slice.reducer;
