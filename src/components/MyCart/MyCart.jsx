
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Cart from "./Cart";


const MyCart = () => {
  
 const [products,setProducts] = useState([]) 
 const{user} = useContext(AuthContext)
const email = user?.email
useEffect(()=>{
   fetch(`https://automotive-sever-side.vercel.app/stores/${email}`)
   .then(res => res.json())
   .then(data => setProducts(data))
},[email])



     
return (
   <div>

   <div>
   <h2 className="text-2xl font-bold text-center text-orange-600 my-8"> Store My Cart </h2> 
     {
        products?.length === 0 ? <div> <p className="text-4xl font-bold text-center my-40"> Please Product Add   </p></div> : <>
         <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
               products &&
               products?.map(product => <Cart key={product._id} product={product}   
               products={products} setProducts={setProducts}
               > </Cart>)
            }

    </div>          
        </>
     }              
  </div> 
   </div>

);
};

export default MyCart;