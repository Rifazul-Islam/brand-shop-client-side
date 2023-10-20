import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Products from "../components/Products/Products";
import Details from "../components/Details/Details";
import MyCart from "../components/MyCart/MyCart";
import Update from "../components/Update/Update";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
 {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("https://automotive-sever-side.vercel.app/categories")
     },
     {
       path:"/addProduct",
       element:<PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
     },
     {
       path:"/products/:id",
       element:<Products></Products>,
       loader:({params})=>fetch(`https://automotive-sever-side.vercel.app/categories/${params.id}`)
     },
     {
      path:"/details/:id",
      element: <PrivateRoute> <Details></Details></PrivateRoute>,
      loader:({params})=>fetch(`https://automotive-sever-side.vercel.app/allCategories/${params.id}`)
     },
     {
       path:"/myCart",
       element: <PrivateRoute> <MyCart></MyCart> </PrivateRoute>,
     },
      {
       path:"/update/:id",
       element:<PrivateRoute> <Update></Update></PrivateRoute>  ,
       loader:({params})=>fetch(`https://automotive-sever-side.vercel.app/allCategories/${params.id}`)
     },
     {
      path:"/register",
      element:<Register></Register>
     },
     {
      path:"/login",
      element:<Login></Login>
     }

    ]
 }
])


export default router ;