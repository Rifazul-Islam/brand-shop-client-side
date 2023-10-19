import { useContext } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";
import { AiFillGithub } from "react-icons/ai";
const Login = () => {
  
const{userLogin,gitHubLogin} = useContext(AuthContext)
const navigate = useNavigate()
 const handlerLogin = (e)=>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
   console.log(email,password);
   userLogin(email,password)
   .then(result =>{
     const userInfo = result.user
     console.log(userInfo);
     toast.success("User Login Successfully")
     navigate("/")
   })
   .catch(error =>{
    toast.error(error.message)
   })
}       


const handlerGithubLogin = ()=>{
  gitHubLogin()
  .then(result =>{
     const userInfo = result.user;
     console.log(userInfo);
     toast.success("GitHub Login Successfully")
     navigate("/")
     
  })
  .catch(error => {
   toast.error(error.message)
  })
}


return (
 <div>
   <div className="hero my-11">
  <div className="hero-content flex-col w-[500px]">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2">
      <form onSubmit={handlerLogin} className="card-body pb-0">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder=" Your Password" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary capitalize">Login</button>
        </div>
      </form>

        <p className='font-medium  py-4 text-center'> Do not have an Account <Link className='text-indigo-600' to="/register" > Register </Link> </p>
    
        <div className="px-4"> <button className="btn btn-success border-none hover:bg-slate-300 capitalize mb-4 w-full" onClick={handlerGithubLogin}> <AiFillGithub/> GitHub Login</button> </div>
    
    </div>
  </div>
</div>        
</div>
);
};

export default Login;