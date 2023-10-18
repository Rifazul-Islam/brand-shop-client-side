import { Link } from "react-router-dom";

const Brand = ({brand}) => {
const{img,category,_id} = brand
 return (
<div>
  <Link to={`/products/${_id}`}>  
<div className="card card-compact  bg-base-100 shadow-2xl cursor-pointer">
  <figure><img className="w-full h-[200px]" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold"> Brand Name  {category} !</h2>
   
  </div>
</div>   
</Link>                                      
</div>
);
};

export default Brand;