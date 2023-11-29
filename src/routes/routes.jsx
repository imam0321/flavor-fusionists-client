import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Header/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Recipes from "../pages/Recipes/Recipes";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPages from "../components/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
        fetch('https://flavor-fusionists-2-server-oq9u9ezr2-imam-hossains-projects.vercel.app/chefs')
      },
      {
        path: "/chefs/chef/recipes/:id",
        element: (
          <PrivateRoutes>
            <Recipes></Recipes>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://flavor-fusionists-2-server-4mdichyy3-imam-hossains-projects.vercel.app/chefs/chef/recipes/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () =>
          fetch(
            "https://flavor-fusionists-2-server-4mdichyy3-imam-hossains-projects.vercel.app/blogs"
          ),
      },
      {
        path: '/*',
        element: <ErrorPages></ErrorPages>
      }
    ],
  },
]);

export default router;
