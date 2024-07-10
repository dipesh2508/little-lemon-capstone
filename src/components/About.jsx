import React from 'react'

const About = () => {
  return (
    <section className='grid my-8 pt-4 relative'>
      <div className="bg-yellow-400 h-1/4 sm:h-1/2 absolute top-0 left-0 right-0"></div>
      <div>
        <h1 className='flex text-4xl justify-center font-semibold relative z-10'>About Us</h1>
      </div>
      <div className='my-4 flex justify-center relative z-10'>
        <img src='https://pbs.twimg.com/media/F1D68kuWYAEAEf6.jpg:large' width='500px' alt="Little Lemon Restaurant" className='rounded-xl'></img>
      </div>
      <div className='flex my-4 justify-center paragraph flex-col mx-6 md:mx-12 lg:mx-64 xl:mx-96 relative z-10'>
        <div className="text-gray-800 text-lg mb-4">
          Little Lemon was founded in Chicago, Illinois, by siblings Tanner and Oliver Hartman. Inspired by their family's love for lemons, they crafted a unique dining experience, celebrating the fruit's versatile and zesty flavors.
        </div>
        <div className="text-gray-800 text-lg mb-4">
          The restaurant's name, "Little Lemon," evokes a cozy and inviting space adorned with lemon-themed decor and vibrant yellow hues. The menu features a delightful array of lemon-infused dishes, from cocktails to desserts.
        </div>
        <div className="text-gray-800 text-lg mb-4">
          Little Lemon quickly gained popularity in Chicago and beyond, attracting patrons with its exceptional flavors and unique concept. This success allowed Mia and Oliver to expand their lemon-themed culinary empire.
        </div>
      </div>
    </section>
  )
}

export default About