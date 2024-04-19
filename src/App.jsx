import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./Styles/App.scss";

import TasksPage from "./Components/pages/TasksPage.jsx";
import RoomsPage from "./Components/pages/RoomsPage.jsx";
import FundsPage from "./Components/pages/FundsPage.jsx";
import RootLayout from "./Components/pages/RootLayout.jsx";

import { fetchTaskData } from "./store/tasks.js";
import { fetchRoomData } from "./store/rooms.js";

function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    { 
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/tasks", element: <TasksPage />, loader: () => {dispatch(fetchTaskData()); return null;} },
        { path: "/rooms", element: <RoomsPage />, loader: () => {dispatch(fetchRoomData()); return null;} },
        { path: "/funds", element: <FundsPage /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
