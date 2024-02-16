import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const EXAMPLE_TASKS = [
  {
    id: "31423",
    title: "Plumbing",
    description: "This is a test",
    actionableBy: "megan.dove",
    status: "Waiting for call from plumber",
    todos: [
      {
        id: "90iw3ed",
        text: "Test todo"
      }
    ],
    contacts: [{
      id: "sdfasd",
      name: "Mr Plumber",
      role: "Plumber",
      email: "mr.plumber@test.com",
      phoneNumber: "072497093"
    }]
    // LINK TO FUNDS?
  },
  {
    id: "sdgsg",
    title: "Electrics",
    description: "This is a test",
    actionableBy: "megan.dove",
    status: "Book electrician in",
     todos: [
      {
        id: "90iw3ed",
        text: "Test todo"
      }
    ],
    contacts: [{
      id: "weadsdvc",
      name: "Mr Plumber",
      role: "Plumber",
      email: "mr.plumber@test.com",
      phoneNumber: "072497093"
    }]
    // LINK TO FUNDS?
  },
  {
    id: "31sdfrge423",
    title: "Moving",
    description: "This is a test",
    actionableBy: "megan.dove",
    status: "Choose a removal company",
     todos: [
      {
        id: "90iw3ed",
        text: "Test todo"
      }
    ],
    contacts: [{
      id: "93dsad284",
      name: "Mr Plumber",
      role: "Plumber",
      email: "mr.plumber@test.com",
      phoneNumber: "072497093"
    }]
    // LINK TO FUNDS?
  },
  {
    id: "4r5",
    title: "Walls",
    description: "This is a test",
    actionableBy: "megan.dove",
    status: "Remove wallpaper",
     todos: [
      {
        id: "90iw3ed",
        text: "Test todo"
      }
    ],
    contacts: [{
      id: "93284",
      name: "Mr Plumber",
      role: "Plumber",
      email: "mr.plumber@test.com",
      phoneNumber: "072497093"
    },{
      id: "932asd",
      name: "Mr Plumber",
      role: "Plumber",
      email: "mr.plumber@test.com",
      phoneNumber: "072497093"
    }]
    // LINK TO FUNDS?
  }
];

const initialState = {
  tasks: EXAMPLE_TASKS
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: uuidv4(),
        title: action.payload.title,
        status: "Not started",
        actionableBy: "unassigned"
      });
    },
    deleteTask(state, action) {
      //TODO
    },
    updateTask(state, action) {
      let {taskId, fieldId, value} = action.payload;
      const taskIndex = state.tasks.findIndex((task) => taskId === task.id);
      state.tasks[taskIndex].fieldId = value;
    }
  }
});

export const tasksActions = slice.actions;

export default slice.reducer;