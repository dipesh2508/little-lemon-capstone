import React from 'react'
import HeroImage from "../assets/restaurantfood.jpg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section>
        <div className='bg-[#495d57] flex flex-col md:flex-row w-full md:items-start items-center h-[775px] md:h-[30rem] justify-between px-12 md:px-4 xl:px-32 2xl:px-80 py-12'>
          <div className='font-semibold text-white'>
            <h1 className='text-6xl text-yellow-400 mb-2'>Little Lemon</h1>
            <h2 className='text-4xl mb-6'>Chicago</h2>
            <p className='text-2xl font-light w-80 md:w-90 mb-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to='/reserve'>
              <button className=' bg-yellow-400 text-black px-6 py-3 font-bold rounded-2xl mb-4'>Reserve Table</button>
            </Link>
          </div>
          <div>
            <img className='h-96 w-auto rounded-3xl' src={HeroImage} alt='Hero Image'></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero