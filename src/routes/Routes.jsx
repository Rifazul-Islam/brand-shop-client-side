import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Products from "../components/Products/Products";

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
     },
     {
       path:"/products/:id",
       element:<Products></Products>,
       loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
     }
    ]
 }
])


export default router ;