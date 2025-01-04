import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { AdventureContext } from '../Provider/AdventureProvider';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';


const Myprofile = () => {

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/myprofile") {
            document.title = 'My Proile || MountainVista Expeditions';
        }

    }, [location]);

    const { user } = useContext(AdventureContext);

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <div className='py-10'>
                <h1 className='text-center text-3xl font-semibold'>Wellcome {user?.displayName}</h1>
            </div>

            <div className='space-y-4 mb-10 max-w-80 rounded-lg mx-auto text-center bg-white shadow-md border-2 p-6 border-[rgba(17, 17, 17, 0.1)]'>
                <img src={user?.photoURL} className='w-24 h-24 rounded-full mx-auto' alt="Profile img" />
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
                <Link to='/profile' className='btn rounded-3xl bg-bgbton'>Update Profile</Link>
            </div>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Myprofile;