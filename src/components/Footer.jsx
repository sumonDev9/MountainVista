import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-white p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Contact</a>

      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com" target="_blank" ><img className='w-12' src="https://i.ibb.co/Rb7H2bD/facebook.png" alt="" /></a>
          <a href="https://instagram.com" target="_blank"><img className='w-12' src="https://i.ibb.co/Nnvgq3M/instagram.png" alt="" /></a>
          <a href="https://twitter.com" target="_blank"><img className='w-12' src="https://i.ibb.co/23Fxr25/twitter.png" alt="" /></a>
          <a href="https://www.youtube.com/" target="_blank"><img className='w-12' src="https://i.ibb.co/YWvKKbj/youtube.png" alt="" /></a>
          <a href="https://linkedin.com" target="_blank"><img className='w-12' src="https://i.ibb.co/BN0wwGC/icons8-linkedin-48.png" alt="" /></a>
        </div>
      </nav>
      <aside>
        <p className='animate__animated animate__backInUp animate__delay-2s'>Copyright © {new Date().getFullYear()} - MountainVista Expeditions. All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;