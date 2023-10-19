import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Register = () => {

const{createNewUser,userProfileUpdate,setUser} = useContext(AuthContext)

const handlerRegister = (e)=>{
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log(name,photo,email,password);

  if(password.length < 6){
    return Swal.fire({
              title: 'error!',
              text: 'Provide Must six Character',
              icon: 'error',
              confirmButtonText: 'ok'
            })
  }

  if(!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)){
    return   Swal.fire({
              title: 'error!',
              text: 'Please At list one LowerCase and one UpperCase Letter Provide',
              icon: 'error',
              confirmButtonText: 'ok'
            }) 
  }


  createNewUser(email,password)
  .then(result =>{
     const userInfo = result.user;
    
   Swal.fire({
            title: 'success!',
            text: 'User Register Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })

     // user Profile update
     userProfileUpdate(userInfo,{displayName:name,photoURL:photo}) 
     .then(()=>{
        Swal.fire({
            title: 'success!',
            text: 'User Profile Update Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          }) 
          setUser({...userInfo,displayName:name,photoURL:photo})

     })    
     .catch(error =>{
    toast.error(error.message)
     })

  })
  .catch(error =>{
     toast.error(error.message)

  })

}




return (
<div>
<div className="hero">
  <div className="hero-content flex-col w-[500px]">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Register now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2">
      <form onSubmit={handlerRegister} className="card-body pb-0">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>


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
          <button className="btn btn-primary capitalize">Register</button>
        </div>
      </form>
        <p className='font-medium  py-4 text-center'> Already have an Account <Link className='text-indigo-600' to="/login" > Login </Link> </p>
    </div>
  </div>
</div>                                       
</div>
);
};

export default Register;