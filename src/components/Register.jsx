import { useContext, useEffect, useState } from 'react';
import { IoMdPhotos } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AdventureContext } from '../Provider/AdventureProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

  const [showPassword, setShowPassword] = useState(false)
  const { createUser, setUser, updateUserProfile, logInbyGoogle } = useContext(AdventureContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [errorTerms, setErrorTerms] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/auth/register") {
      document.title = 'Register | MountainVista Expeditions';
    }

  }, [location]);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked
    if (!/[A-Z]/.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter.');
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrorMessage('Password must contain at least one lowercase letter.');
      return;
    } else if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    } else {
      setErrorMessage('');
    }

    if (!terms) {
      setErrorTerms('please accept our terms and conditions.');
      return;
    }
    

    createUser(email, password)
      .then(result => {
        setUser(result.user)
        e.target.reset();
        toast.success("You’ve registered successfully!")
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/')

          })
          .catch(err => {
           toast.error(err)
          })
      })
      .catch((error) => {
        toast.error(' Unable to complete registration. Ensure all fields are correct.')
      });

  }


  const handleGoogleSignIn = () => {
    logInbyGoogle()
      .then(result => {
        setUser(result.user);
        toast.success('login successfull!');
        navigate('/');

      })
      .catch((error) => {
        toast.error("Login failed. Please check your credentials!")
      })

  }

  return (
    <div
      className="hero object-cover py-5"
      style={{
        backgroundImage: "url(https://i.ibb.co/F5HtHkt/pexels-philevenphotos-20552401.jpg)",
      }}>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md bg-white">
          <div className='relative'>
            <img className='absolute right-0 top-0' src="https://i.ibb.co/RNFhbqQ/shap-01.png" alt="" />

            <div className='shadow-2xl rounded-lg text-center p-6 md:w-[430px]'>

              <h1 className='text-black font-bold text-2xl'>Create an account</h1>
              <p className='my-5 text-black opacity-60 text-base md:text-xl font-semibold'>Setup a new account in a minute.</p>
              <div >

                <form onSubmit={handleRegister} className='space-y-5'>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 text-primary opacity-60">
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" name='name' className="grow text-primary" placeholder="Username" />
                  </label>

                  <label className="input input-bordered flex items-center gap-2">
                    <IoMdPhotos className='text-primary opacity-60' />
                    <input type="text" name='photo' className="grow text-primary" placeholder="Photo URL" />
                  </label>

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
                    <input type="email" name='email' className="grow text-primary" placeholder="Email" />
                  </label>

                  <label className="input input-bordered relative flex items-center gap-2">
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
                    <input type={showPassword ? 'text' : 'password'} onChange={() => setErrorMessage('')}  name='password' placeholder='Password' className='text-primary' />

                    <button type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-6 text-primary mt-1'>
                      {
                        showPassword ? <FaEyeSlash /> : <FaEye />
                      }
                    </button>
                  </label>
                  {errorMessage &&
                    <p className="text-rose-500 text-sm mt-2">{errorMessage}</p>
                  }
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input type="checkbox" name="terms" className="checkbox checkbox-primary" />
                      <span className="label-text text-lg">Accept Term and condition</span>
                    </label>

                  </div>
                  {errorTerms &&
                    <p className="text-rose-500 text-sm mt-2">{errorTerms}</p>
                  }
                  <div className='w-full'>
                    <button className='btn btn-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white text-xl font-bold'>Register</button>
                  </div>
                </form>
                <div className="divider text-secondary">OR</div>
                <div className='flex justify-center items-center gap-5'>
                  <button><img src="https://i.ibb.co/9VP9JBh/icons8-facebook-48.png" alt="" /></button>
                  <button onClick={handleGoogleSignIn}><img src="https://i.ibb.co/TcB5YZK/icons8-google-48.png" alt="" /></button>
                  <button><img className='w-12' src="https://i.ibb.co/vV2LMGC/icons8-github-30.png" alt="" /></button>
                </div>


                <div>
                  <p className='text-center text-base pt-3 md:text-lg '><span className='text-black opacity-60 ml-8'>Already have an account?</span> <Link to='/auth/login' className='text-blue-500 hover:underline'>Login here</Link></p>
                </div>

              </div>
            </div>

            <img className='absolute -mt-[130px]' src="https://i.ibb.co/j34p5B8/shap-02.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;