import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import Details from "../Pages/Details/Details";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import ProtectedRoutes from "./ProtectedRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/mytoys",
        element: (
          <ProtectedRoutes>
            <MyToys></MyToys>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/addatoys",
        element: (
          <ProtectedRoutes>
            <AddAToy></AddAToy>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/updateToy/:id",
        element: (
          <ProtectedRoutes>
            <UpdateToy></UpdateToy>
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mytoy/${params.id}`),
      },

      {
        path: "/details/:id",
        element: (
          <ProtectedRoutes>
            <Details></Details>
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);

export default router;
