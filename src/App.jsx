
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "./style.css";

import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Navigate to="/signup" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
;
