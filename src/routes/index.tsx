import App from "@/App";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
    ],
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);
