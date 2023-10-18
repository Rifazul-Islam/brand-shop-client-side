
import { NavLink } from 'react-router-dom';

const Navbar = () => {
const links = <>
   <li> <NavLink to="/"> Home </NavLink> </li>
   <li> <NavLink to="/addProduct"> Add Product </NavLink> </li>
   <li> <NavLink to="/myCart"> My Cart</NavLink> </li>
   <li> <NavLink to="/"> Login</NavLink> </li>
</>

return (
<div className='bg-[#FFF] flex flex-col py-2 gap-3 lg:flex-row justify-between items-center shadow-lg  px-4'>
      <div className='flex items-center justify-center'>
        <img className=' w-20 md:w-28' src="/logo1.png" alt="" />
         
      </div>     

      <div>
        <ul className='flex space-x-5'>
          {links}
        </ul>
      </div>               
</div>
);
}; 
export default Navbar;