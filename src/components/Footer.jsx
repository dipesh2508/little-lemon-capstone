import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center border-t-2 mt-4 py-8 px-16 bg-[#495d57] text-white'>
      <div className='grid md:grid-cols-3 gap-8'>
        <div>
          <h1 className='font-semibold text-2xl'>Important Links</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h1 className='font-semibold text-2xl'>Contact</h1>
          <ul>
            <li>Address: 123 Plankton St, Chicago, Illinois</li>
            <li>Phone: 254-123-1234</li>
            <li>Email: contact@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h1 className='font-semibold text-2xl'>Social Media Links</h1>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer