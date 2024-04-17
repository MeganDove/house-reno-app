import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { pageStateActions } from "./pageState.js"; 

const initialState = {
  tasks: [],
  changed: false
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    replaceTasks: (state, action) => {
      state.tasks = action.payload.tasks || [];
    },
    addTask(state, action) {
      console.log(action.payload);
      state.tasks.push({
        id: uuidv4(),
        title: action.payload.title,
        status: "Not started",
        actionableBy: "unassigned"
      });
      state.changed = true;
    },
    deleteTask(state, action) {
      //TODO
      state.changed = true;
    },
    updateTaskSingleValue(state, action) {
      let {taskId, fieldId, value} = action.payload;
      const taskIndex = state.tasks.findIndex((task) => taskId === task.id);
      state.tasks[taskIndex][fieldId] = value;
      state.changed = true;
    },
    updateTaskListValue(state, action) {
      let {taskId, fieldId, elementId, elementFieldId, value} = action.payload;
      const taskIndex = state.tasks.findIndex((task) => taskId === task.id);
      const elementIndex = elementId && state.tasks[taskIndex][fieldId].findIndex((el) => elementId === el.id);
      if(elementIndex > -1) {
        state.tasks[taskIndex][fieldId][elementIndex][elementFieldId] = value;
      } else {
        const newIndex = uuidv4();
        if(state.tasks[taskIndex][fieldId]) {
          state.tasks[taskIndex][fieldId].push({...value, id: newIndex});
        } else {
          state.tasks[taskIndex][fieldId] = [{...value, id: newIndex}];
        }
      }
      state.changed = true;
    },
    deleteTaskListItem(state, action) {
      let {taskId, fieldId, elementId} = action.payload;
      const taskIndex = state.tasks.findIndex((task) => taskId === task.id);
      const elementIndex = elementId && state.tasks[taskIndex][fieldId].findIndex((el) => elementId === el.id);
      state.tasks[taskIndex][fieldId].splice(elementIndex, 1);
      state.changed = true;
    }
  }
});

//Data

export const fetchTaskData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/tasks");
      
      if(!response.ok) {
          throw new Error("Could not fetch task data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const taskData = await fetchData();
      dispatch(slice.actions.replaceTasks(taskData));
    } catch(error) {
      dispatch(pageStateActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching task data failed"
      }));
    }
  }
};

export const sendTaskData = (tasks) => {
  return async (dispatch) => {
      dispatch(pageStateActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending task data"
      }));

      const sendRequest = async () => {
          const response = await fetch("http://localhost:3000/tasks", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({tasks: tasks})
          });

          if(!response.ok) {
              throw new Error("Sending task data failed");
          }
      }

      try {
          await sendRequest();
          dispatch(pageStateActions.showNotification({
              status: "success",
              title: "Success",
              message: "Sent task data successfully"
          }));
      } catch(error) {
          dispatch(pageStateActions.showNotification({
              status: "error",
              title: "Error",
              message: "Sending task data failed"
          }));
      }
  };
};

export const tasksActions = slice.actions;

export default slice.reducer;