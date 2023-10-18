
const Brand = ({brand}) => {
const{img,category} = brand
 return (
<div>
<div className="card card-compact  bg-base-100 shadow-2xl cursor-pointer">
  <figure><img className="w-full h-[200px]" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold"> Brand Name  {category} !</h2>
   
  </div>
</div>                                         
</div>
);
};

export default Brand;