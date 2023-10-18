import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Slider from "./Slider";

const Products = () => {
 const  products = useLoaderData()
 const[brand,setBrand] = useState(null)
return (
<div className="bg-slate-200 ">
   
  <Slider></Slider>


      <h3 className="text-3xl font-bold text-orange-600 text-center pt-16 py-5"> Our Brand Name : {brand} </h3>   
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
       {
            products &&
            products.map(product => <ProductCard key={product._id} setBrand={setBrand} product={product} > </ProductCard> )
       }
      </div>                                 
</div>
);

};

export default Products;