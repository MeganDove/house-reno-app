import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./Styles/App.scss";

import { pageStateActions } from "./store/pageState.js";

import Menu from "./Components/menu/Menu.jsx";
import Header from "./Components/menu/Header.jsx";

import TasksPage from "./Components/pages/TasksPage.jsx";
import RoomsPage from "./Components/pages/RoomsPage.jsx";
import FundsPage from "./Components/pages/FundsPage.jsx";

function App() {
  const pageState = useSelector(state => state.pageState.currentPage);

  return (
    <>
      <Menu/>
      <Header />
      <div id="main-contents">
        {pageState === "tasks" && <TasksPage />}
        {pageState === "rooms" && <RoomsPage />}
        {pageState === "funds" && <FundsPage />}
      </div>
    </>
  );
}

export default App;
