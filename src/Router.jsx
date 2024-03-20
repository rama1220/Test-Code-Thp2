import { createBrowserRouter } from "react-router-dom";
import HalamanUtama from "./Component/HalamanUtama";
import BarcodePage from "./Component/BarcodePage";
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/HalamanUtama", Component: HalamanUtama },
      { path: "/BarcodePage", Component: BarcodePage },
      { path: "/MenuPage", Component: Menu },
      { path: "/", Component: Login },
    ],
  },
]);

export default Router;
