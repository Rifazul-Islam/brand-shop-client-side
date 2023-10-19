
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
const products = useLoaderData()

// const[error,setError] = useState("")

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
  const updateProduct = {name,photo,category,types,price,description,rating};
  
   fetch(`https://automotive-sever-side.vercel.app/allCategories/${products?._id}`, {
     method:"PUT",
     headers:{
      "Content-type" : "application/json"
     },
     body: JSON.stringify(updateProduct)
   })
   .then(res => res.json())
   .then(data =>{
      if(data.modifiedCount > 0){
           Swal.fire({
            title: 'success!',
            text: 'Your Product Update Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })
      }
   })

}


return (
<div>
<div className="bg-blue-100 mt-10 p-4 rounded-md">
<h2 className="text-center text-2xl font-bold text-orange-500"> Update Product </h2>

 <form onSubmit={handlerAddProduct}> 

 <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2 ">
         <label className="label">
           <span className="label-text">Product Name</span>
         </label>
         <label className="input-group">
           <input type="text" defaultValue={products?.name} name="name"  placeholder="Product Name" className="input input-bordered w-full" required />
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Product Photo</span>
         </label>
         <label className="input-group">
           <input type="text" defaultValue={products?.photo} name="photo" placeholder="Product Photo" className="input input-bordered w-full" required />
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
         <option defaultValue={products?.name}> {products?.category} </option>
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
       <option defaultValue={products?.types}> {products?.types} </option>
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
           <input type="text" name="price" defaultValue={products?.price}  placeholder="Product Price" className="input input-bordered w-full" required />
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Short Description</span>
         </label>
         <label className="input-group">
           <input type="text" name="description" defaultValue={products?.description} placeholder="Short Description" className="input input-bordered w-full" required />
         </label>
       </div>
       
 </div>  


 <div className="flex gap-3 pt-5">

       <div className="form-control w-full ">
         <label className="label">
           <span className="label-text">Product Rating</span>
         </label>
         <label className="input-group">
           <input type="text" name="rating" defaultValue={products?.rating}  placeholder="Product Rating" className="input input-bordered w-full" required />
         </label>
       </div>
</div>


<input className="btn  w-full my-7 hover:bg-secondary capitalize" type="submit" value="Update Product" />

</form>  
                                  
</div>                                   
</div>
);
};

export default Update;