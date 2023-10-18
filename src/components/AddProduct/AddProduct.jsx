import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
const[error,setError] = useState("")
const handlerAddProduct =(e)=>{
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const category = form.category.value;
  const types = form.types.value;
  const price = form.price.value;
  const description = form.description.value;
  const rating = form.rating.value;
   
  if(category === "Please select brand Name"){
    return setError("Please select Brand name")
  } 
 else if(types === "Please select Type"){
   return setError("Please select Type ")
 }
  
 else(
    setError("")
 )

  const newProduct = {name,photo,category,types,price,description,rating}
  console.log(newProduct);

 fetch("http://localhost:5000/allCategories",{
   method:"POST",
   headers:{
     "Content-type" : "application/json"
   },
   body: JSON.stringify(newProduct)
 })
 .then(res => res.json())
 .then(data =>{
    if(data.insertedId){
    Swal.fire({
  title: 'success!',
  text: 'Your Product Add Successfully',
  icon: 'success',
  confirmButtonText: 'ok'
})
    }
    
   form.reset() 
 })


}


 
 return (
<div className="bg-blue-100 mt-10 p-4 rounded-md">
<h2 className="text-center text-2xl font-bold text-orange-500"> Add Product </h2>
  <p className="text-red-500"> {error} </p>
 <form onSubmit={handlerAddProduct}> 

 <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2 ">
         <label className="label">
           <span className="label-text">Product Name</span>
         </label>
         <label className="input-group">
           <input type="text" name="name"  placeholder="Product Name" className="input input-bordered w-full" required />
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Product Photo</span>
         </label>
         <label className="input-group">
           <input type="text" name="photo" placeholder="Product Photo" className="input input-bordered w-full" required />
         </label>
       </div>
       
 </div>  
 <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2 ">
         <label className="label">
           <span className="label-text">Brand Name</span>
         </label>
         <label className="input-group">

        <select name="category" placeholder="Please Select"  className="select select-bordered w-full " required >
         <option defaultValue={"Please select brand Name"}>Please select brand Name</option>
         <option>Toyota</option>
         <option>Ford</option>
         <option>BMW</option>
         <option>Mercedes-Benz</option>
         <option>Tesla</option>
       </select>

        
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Product Type</span>
         </label>
         <label className="input-group">

     <select name="types" placeholder="Please Select"  className="select select-bordered w-full " required >
       <option defaultValue={"Please select Type"}>Please select Type</option>
       <option>car</option>
      <option>minicar</option>
      <option>minibaz</option>
      <option>other</option>
     </select>
         
         
 </label>
</div>
       
 </div>  
 <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2 ">
         <label className="label">
           <span className="label-text">Product Price</span>
         </label>
         <label className="input-group">
           <input type="text" name="price"  placeholder="Product Price" className="input input-bordered w-full" required />
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Short Description</span>
         </label>
         <label className="input-group">
           <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" required />
         </label>
       </div>
       
 </div>  


 <div className="flex gap-3 pt-5">

       <div className="form-control w-full ">
         <label className="label">
           <span className="label-text">Product Rating</span>
         </label>
         <label className="input-group">
           <input type="text" name="rating"  placeholder="Product Rating" className="input input-bordered w-full" required />
         </label>
       </div>
</div>


<input className="btn  w-full my-7 hover:bg-secondary capitalize" type="submit" value="Add Product" />

</form>  
                                  
</div>
);

};

export default AddProduct;