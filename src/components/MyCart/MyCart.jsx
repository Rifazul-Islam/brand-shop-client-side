import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";


const MyCart = () => {
 const LoadProducts = useLoaderData()    
 const [products,setProducts] = useState(LoadProducts)        
return (
 <div>
     <h2 className="text-2xl font-bold text-center text-orange-600 my-8"> Store My Cart </h2> 
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {
                 products &&
                 products?.map(product => <Cart key={product._id} product={product}   
                 products={products} setProducts={setProducts}
                 > </Cart>)
                 
             }
    </div>                        
</div>
);
};

export default MyCart;