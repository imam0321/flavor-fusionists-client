import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Header/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Recipes from "../pages/Recipes/Recipes";
import PrivateRoutes from "./PrivateRoutes";
import ChefDetails from "../pages/Recipes/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs')
      },
      {
        path: '/chefs/chef/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/chef/${params.id}`)
      },
      {
        path: '/chefs/chef/recipes/:id',
        element: <PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/chef/recipes/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('http://localhost:5000/blogs')
      },

    ]
    
  },
]);

export default router;