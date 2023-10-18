import Swal from "sweetalert2";

const Cart = ({product,setProducts,products}) => {
const {name,photo,category,types,price,description,rating,_id} = product

const handlerDelete = id =>{
  fetch(`http://localhost:5000/stores/${id}`,{
    method:"DELETE"
  })
  .then(res => res.json())
  .then(data =>{
    if(data?.deletedCount > 0){
        Swal.fire({
            title: 'success!',
            text: 'Your Product Delete Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })

     const remaining = products.filter(product => product._id !== id)
     setProducts(remaining)


    }
  })
}



return (
<div>
  <div className="card card-compact  bg-base-100 shadow-2xl border-2">
  <figure><img className="w-full h-[200px]" src={photo} alt="Shoes"/></figure>
  <div className=" px-2 py-4">
    <h2 className="card-title text-orange-500"> Title: {name} </h2>
    <div className="font-bold">
        <p> Brand Name : {category} </p>
        <p> Types : {types} </p>
         <p> Rating : {rating} </p>
         <p> price: {price} </p>
    </div>
    <div className="card-actions pt-2 justify-start">
    <button onClick={()=>handlerDelete(_id)} className="btn btn-secondary capitalize">Delete</button>

    </div>
  </div>
</div>                                         
</div>
);
};

export default Cart;