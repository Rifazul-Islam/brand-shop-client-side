import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCart = () => {
 const products = useLoaderData()            
return (
 <div>
     <h2 className="text-2xl font-bold text-center text-orange-600 my-8"> Store My Cart </h2> 
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {
                 products &&
                 products?.map(product => <Cart key={product._id} product={product}> </Cart>)
              }
    </div>                        
</div>
);
};

export default MyCart;