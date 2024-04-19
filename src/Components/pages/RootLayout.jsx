import { Outlet } from "react-router-dom";

import Menu from "../menu/Menu.jsx";
import Header from "../menu/Header.jsx";


import "../../Styles/App.scss";

export default function RootLayout() {
    return (
        <>
          <Menu/>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
    );
}