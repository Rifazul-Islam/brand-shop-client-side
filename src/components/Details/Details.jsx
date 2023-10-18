import {  useLoaderData } from "react-router-dom";

const Details = () => {
const productDetails = useLoaderData();
const {name,photo,category,types,rating,price,_id,description} = productDetails
return (
<div>

 <div className="card card-side bg-base-100 flex flex-col md:flex-row shadow-xl my-10 border-2">
  <figure><img className="h-[250px] w-[700px]" src={photo} alt="Movie"/></figure>
  <div className=" px-4">
    <h2 className="card-title text-orange-500 text-2xl">{name}!</h2>
    <p className="text-[18px] text-slate-500">{description}</p>
    <div className="font-bold">
        <p> Brand Name : {category} </p>
        <p> Types : {types} </p>
         <p> Rating : {rating} </p>
         <p> price: {price} </p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary capitalize">Add to Cart</button>
    </div>
  </div>
</div> 
</div>
);
};

export default Details;