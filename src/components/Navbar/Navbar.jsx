
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { toast } from 'react-toastify';

const Navbar = () => {
const links = <>
   <li> <NavLink to="/"
    className={({isActive})=>
    isActive ? "bg-blue-200 p-2 rounded-md" : " "
  }
   > Home </NavLink> </li>

   <li> <NavLink to="/addProduct"
   className={({isActive})=>
   isActive ? "bg-blue-200 p-2 rounded-md" : " "}
   
   > Add Product </NavLink> </li>

   <li> <NavLink to="/myCart"
   
   className={({isActive})=>
   isActive ? "bg-blue-200 p-2 rounded-md" : " "}

   > My Cart</NavLink> </li>
</>


const {user,loginOut} = useContext(AuthContext)

const handlerLogOut =()=>{
  loginOut()
  .then(()=>{
    toast.success("User SignOut Successfully")
  })
}

return (
  <div>  

<div className="navbar bg-base-100 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" space-y-2  text-center space-x-1 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
     <div className=''> <img className=' w-20 md:w-28' src="/logo1.png" alt="" /></div>
    <a className="btn btn-ghost normal-case text-xl">Automotive</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-4 menu-horizontal px-1">
      
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user &&
      user ? <> <span className='pr-4'> {user?.displayName} </span>  <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" /> <span onClick={handlerLogOut} className='btn capitalize'> SignOut </span>  </>  : <Link to="/login" className='btn capitalize'> Login </Link>
    }
    
  </div>
</div>

</div>
);
}; 
export default Navbar;