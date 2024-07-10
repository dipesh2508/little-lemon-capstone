import React, { useState } from 'react';
import Logo from "../assets/header-logo.png"
import {FaBars, FaTimes} from 'react-icons/fa'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className='w-full h-[130px] flex justify-between items-center'>
      <div>
        <Link to='/'><img src={Logo} alt='Little lemon logo' style={{minHeight: '100px', height: '100px'}}></img></Link>
      </div>


      <ul className='hidden md:flex gap-4 items-center px-12 text-2xl'>
        <Link to='/'><li className='hover:text-yellow-600 hover:font-semibold'>Home</li></Link>
        <li className='hover:text-yellow-600 hover:font-semibold cursor-pointer'>About</li>
        <li className='hover:text-yellow-600 hover:font-semibold cursor-pointer'>Menu</li>
        <li className='hover:text-yellow-600 hover:font-semibold cursor-pointer'>Order</li>
        <li className='hover:text-yellow-600 hover:font-semibold cursor-pointer'>Contact</li>
      </ul>

      <div onClick={toggleMobileMenu} className='md:hidden text-2xl px-4 z-20'>
        {mobileMenu ? <FaTimes/> : <FaBars/>}
      </div>

      <ul className={mobileMenu ? 'fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen gap-4 text-4xl bg-[#495d57] z-10 text-white font-semibold md:hidden' : 'hidden'}>
        <Link to='/'><li onClick={toggleMobileMenu}>Home</li></Link>
        <li onClick={toggleMobileMenu}>About</li>
        <li onClick={toggleMobileMenu}>Menu</li>
        <li onClick={toggleMobileMenu}>Order</li>
        <li onClick={toggleMobileMenu}>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
