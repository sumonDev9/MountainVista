import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Adventure from '../components/Adventure';
import Service from '../components/Service';
import Review from '../components/Review';
import Footer from '../components/Footer';

import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = 'MountainVista || MountainVista Expeditions';
    }

  }, [location]);




  return (
    <div>
      {/* header nav */}
      <nav className='bg-slate-100'>
        <Navbar></Navbar>
      </nav>
      {/* bannar */}
      <bannar>
        <Banner></Banner>
      </bannar>

      <main className='py-10 md:py-20 bg-slate-100'>
        {/* adventure */}
        <section className='w-11/12 mx-auto'>
          <Adventure></Adventure>
        </section >
        {/* service */}
        <section className='w-11/12 mx-auto pt-10 md:pt-20'>
          <Service></Service>
        </section>
        {/* review */}
        <section className='w-11/12 mx-auto pt-10 md:pt-20'>
          <Review></Review>
        </section>
      </main>
      {/* footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;