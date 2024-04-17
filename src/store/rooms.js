import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { pageStateActions } from "./pageState.js"; 

const initialState = {
  rooms: [],
  changed: false
};

const slice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    replaceRooms: (state, action) => {
      state.rooms = action.payload.rooms || [];
    },
    addRoom(state, action) {
      state.rooms.push({
        id: uuidv4(),
        title: action.payload.title
      });
      state.changed = true;
    },
    deleteRoom(state, action) {
      //TODO
      state.changed = true;
    },
    updateRoomSingleValue(state, action) {
      let {roomId, fieldId, value} = action.payload;
      const roomIndex = state.rooms.findIndex((room) => roomId === room.id);
      state.rooms[roomIndex][fieldId] = value;
      state.changed = true;
    },
  }
});

//Data

export const fetchRoomData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/rooms");
      
      if(!response.ok) {
          throw new Error("Could not fetch room data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const roomData = await fetchData();
      console.log(roomData);
      dispatch(slice.actions.replaceRooms(roomData));
    } catch(error) {
      dispatch(pageStateActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching room data failed"
      }));
    }
  }
};

export const sendRoomData = (rooms) => {
  return async (dispatch) => {
      dispatch(pageStateActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending room data"
      }));

      const sendRequest = async () => {
          const response = await fetch("http://localhost:3000/rooms", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({rooms: rooms})
          });

          if(!response.ok) {
              throw new Error("Sending room data failed");
          }
      }

      try {
          await sendRequest();
          dispatch(pageStateActions.showNotification({
              status: "success",
              title: "Success",
              message: "Sent room data successfully"
          }));
      } catch(error) {
          dispatch(pageStateActions.showNotification({
              status: "error",
              title: "Error",
              message: "Sending room data failed"
          }));
      }
  };
};

export const roomsActions = slice.actions;

export default slice.reducer;