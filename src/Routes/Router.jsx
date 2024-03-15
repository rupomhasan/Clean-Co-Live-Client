import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PrivetRotes from "./PrivetRotes";
import Services from "../Pages/Services";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: (
          <PrivetRotes>
            <About />
          </PrivetRotes>
        ),
      },
      {
        path: "services",
        element: (
          <PrivetRotes>
            <Services />
          </PrivetRotes>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {},
]);

export default Router;
