import { Link } from "react-router-dom";

const ProductCard = ({product,setBrand}) => {
const {name,photo,category,types,price,description,rating, _id} = product
 if(product){
   setBrand(product?.category)
 }else{
   setBrand(" ")
 }
return (
<div className=" mb-6 ">
<div className="card card-compact  bg-base-100 shadow-2xl ">
  <figure><img className="w-full h-[200px]" src={photo} alt="Shoes"/></figure>
  <div className=" px-2 py-4">
    <h2 className="card-title text-orange-500">  Brand Name :{category}  </h2>
    <div className="font-bold">
        <p>Name : {name}  </p>
        <p> Types : {types} </p>
         <p> Rating : {rating} </p>
         <p> price: {price} </p>
    </div>
    <div className="card-actions pt-2 justify-start">
      <Link to={`/update/${_id}`}> <button className="btn btn-secondary capitalize">Update</button> </Link>
      <Link to={`/details/${_id}`} > <button className="btn btn-success capitalize ml-10">Details</button> </Link>
    </div>
  </div>
</div>                                    
</div>
);
};

export default ProductCard;