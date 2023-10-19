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

const router = createBrowserRouter([
 {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("http://localhost:5000/categories")
     },
     {
       path:"/addProduct",
       element:<AddProduct></AddProduct>
     },
     {
       path:"/products/:id",
       element:<Products></Products>,
       loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
     },
     {
      path:"/details/:id",
      element:<Details></Details>,
      loader:({params})=>fetch(`http://localhost:5000/allCategories/${params.id}`)
     },
     {
       path:"/myCart",
       element:<MyCart></MyCart>,
       loader:()=>fetch("http://localhost:5000/stores")
     },
      {
       path:"/update/:id",
       element:<Update></Update>,
       loader:({params})=>fetch(`http://localhost:5000/allCategories/${params.id}`)
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