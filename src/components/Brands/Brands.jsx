import Brand from "./Brand";

const Brands = ({allBrands}) => {

return (
<div>
<div className='text-center'>  <button className='btn btn-wide text-2xl my-10  capitalize text-orange-600'> Brand Category </button>   </div>                                 

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
     {
        allBrands &&
        allBrands?.map(brand => <Brand  key={brand._id} brand={brand}  ></Brand>)
     }
 </div>
</div>
);

};

export default Brands;