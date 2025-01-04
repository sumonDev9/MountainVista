import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AdventureContext } from '../Provider/AdventureProvider';
import userIcons from '../assets/user.png'
const Navbar = () => {

    const { user, userSignout } = useContext(AdventureContext);

    const link = <>
        <li><NavLink to='/' className='text-base text-primary opacity-75 font-semibold'>Home</NavLink></li>
        {
            user && <>
            <li><NavLink to='/profile' className='text-base text-primary opacity-75 font-semibold'>Update Profile</NavLink></li>
                <li><NavLink to='/myprofile' className='text-base text-primary opacity-75 font-semibold'>My Profile</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar  w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul 
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 z-[9999] shadow">
                        {link}
                    </ul>
                </div>
                <a className="text-lg text-[#111111] font-semibold italic">MountainVista <br /> Expeditions</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-4">

                {
                    user && user?.email ? <div className="tooltip tooltip-bottom z-10" data-tip={user?.displayName}>
                        <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Profile Picture"
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                    </div>

                        :
                        <img src={userIcons} alt="" />
                }
                <div>
                    {
                        user && user?.email ?
                            <button onClick={userSignout} className="px-3 py-2 bg-bgbton text-black font-semibold rounded-md">Logout</button>
                            :
                            <Link to='/auth/login' className="px-3 py-2 bg-bgbton text-black font-semibold rounded-md">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

