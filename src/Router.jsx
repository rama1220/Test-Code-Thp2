import { createBrowserRouter } from "react-router-dom";
import HalamanUtama from "./Component/HalamanUtama";
import Login from "./Component/Login";
import BarcodePage from "./Component/BarcodePage";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Login },
      { path: "/HalamanUtama", Component: HalamanUtama },
      { path: "/BarcodePage", Component: BarcodePage },
    ],
  },
]);

export default Router;
