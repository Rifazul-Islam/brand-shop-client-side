import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const Details = () => {
const productDetails = useLoaderData();
const {user} = useContext(AuthContext)
 const email = user?.email
const {name,photo,category,types,rating,price,description} = productDetails;

const handlerProduct = ()=>{
   
    const product = {name,photo,category,types,rating,price,description,email}
    console.log(product);
    
 fetch("https://automotive-sever-side.vercel.app/stores",{
    method:"POST",
    headers:{
      "Content-type" : "application/json"
    },
    body: JSON.stringify(product)
  })
   .then(res => res.json())
   .then(data => {
      if(data.insertedId){
        Swal.fire({
            title: 'success!',
            text: 'Your Product Store Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })
      }
   })
   
}




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
       <button onClick={handlerProduct} className="btn btn-primary capitalize">Add to Cart</button> 
    </div>
  </div>
</div> 
</div>
);
};

export default Details;