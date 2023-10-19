import { Link } from "react-router-dom";

const Login = () => {

 const handlerLogin = (e)=>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
   console.log(email,password);
}             

return (
 <div>
   <div className="hero">
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
    </div>
  </div>
</div>        
</div>
);
};

export default Login;