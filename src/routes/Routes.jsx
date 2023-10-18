import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";

const router = createBrowserRouter([
 {
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
     {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("http://localhost:5000/categories")
     },
     {
       path:"/addProduct",
       element:<AddProduct></AddProduct>
     }
    ]
 }
])


export default router ;