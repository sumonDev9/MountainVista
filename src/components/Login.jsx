import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AdventureContext } from "../Provider/AdventureProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {
  const { userLogin, setUser, logInbyGoogle } = useContext(AdventureContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/auth/login") {
      document.title = 'Login | MountainVista Expeditions';
    }

  }, [location]);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then(result => {
        setUser(result.user);
        e.target.reset();
        toast.success('login successfull!');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        toast.error("Login failed. Please check your credentials!")
      })

  }


  const handleGoogleSignIn = () => {
    logInbyGoogle()
      .then(result => {
        setUser(result.user);
        toast.success('login successfull!');
        navigate(location?.state ? location.state : '/');

      })
      .catch((error) => {
        toast.error("Login failed. Please check your credentials!")
      })

  }


  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/HK4WsLw/pexels-photo-290452.jpg)",
        
      }}>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md bg-white">

          <div className='relative shadow-lg'>
            <img className='absolute right-0 top-0' src="https://i.ibb.co/RNFhbqQ/shap-01.png" alt="" />
            <div className='shadow-2xl rounded-lg text-center p-6 md:w-[430px]'>
              <h1 className='text-black font-bold  text-2xl'>Login into account</h1>
              <p className='my-5 text-black opacity-60 mr-3 text-base font-semibold'>Use your credentials to access your account.</p>
              <form onSubmit={handleLogin} className='space-y-5'>

                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 text-primary opacity-60">
                    <path
                      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' className="grow text-primary" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 text-primary opacity-60">
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd" />
                  </svg>
                  <input type={showPassword ? 'text' : 'password'} name='password' className="text-primary" placeholder='Password' />
                  <button type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-10 text-primary mt-1'>
                    {
                      showPassword ? <FaEyeSlash /> : <FaEye />
                    }
                  </button>
                </label>

                <div className='flex justify-between items-center'>
                  <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-2 justify-start">
                      <input type="checkbox" className="checkbox checkbox-primary" />
                      <span className="label-text text-base">Remember me</span>
                    </label>
                  </div>
                  <Link
                    to='/auth/forgetpassword'
                    state={{ email }}
                    className="text-base hover:underline text-blue-500 cursor-pointer">
                    Forgot password?
                  </Link>


                </div>
                <div className='w-full'>
                  <button className='btn btn-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white text-xl font-bold'>Login</button>
                </div>
              </form>
              <div className="divider">OR</div>
              <div className='flex justify-center items-center gap-5'>
                <img className='w-10 cursor-pointer' src="https://i.ibb.co/9VP9JBh/icons8-facebook-48.png" alt="" />
                <button onClick={handleGoogleSignIn}>
                  <img className='w-10 cursor-pointer' src="https://i.ibb.co/TcB5YZK/icons8-google-48.png" alt="" />
                </button>
                <img className='w-10 cursor-pointer' src="https://i.ibb.co/vV2LMGC/icons8-github-30.png" alt="" />
              </div>
              <div>
                <p className='text-center text-base mt-3 md:text-lg ml-8'><span className='text-black opacity-60'>Don't have an account?</span> <Link to='/auth/register' className='text-blue-500 hover:underline'>Register here</Link></p>
              </div>
            </div>
            <img className='absolute left-0 bottom-[0px]' src="https://i.ibb.co/j34p5B8/shap-02.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;