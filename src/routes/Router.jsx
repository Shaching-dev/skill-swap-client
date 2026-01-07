import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Explore from "../pages/Explore";
import Services from "../pages/Services";
import About from "../pages/About";
import Contribution from "../pages/Contribution";
import Member from "../pages/Member";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/explore",
        Component: Explore,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/about",
        Component: About,
      },

      {
        path: "/contribution",
        Component: Contribution,
      },
      {
        path: "/member",
        Component: Member,
      },

      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
