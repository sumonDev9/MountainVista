import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AdventureContext } from '../Provider/AdventureProvider';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AdventureContext);
  const location = useLocation();
  const email = location.state?.email || "";

  useEffect(() => {
    if (location.pathname === "/auth/forgetpassword") {
      document.title = 'ForgotPassword | MountainVista Expeditions';
    }

  }, [location]);


  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      toast.error('Please provide a valid email.')
      return;
    }
   
    forgetPassword(email)
      .then(() => {
        window.open("https://mail.google.com", "_blank");
        // toast.success('Password reset email send. please check your email.')

      })
      .catch(error => {
        toast.error('Failed to send password reset email. Please try again.!')

      });
  }



  return (
    <div className='max-w-md my-20 mx-auto shadow-lg p-5 bg-white'>
      <h1 className='text-center mb-5 text-3xl text-primary font-bold'>Forgot Password</h1>
      <form onSubmit={handleResetPassword}>
        <div className='space-y-5'>
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
            <input type="email" defaultValue={email} name='email' className="grow text-primary" placeholder="Email" />
          </label>



          <div className='w-full'>
            <button className='btn btn-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white text-xl font-bold'>Reset Password
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;