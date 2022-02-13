import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='main'>
      <header className='header_Nav'> 
      <h3 className='logo_font'>Genius</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Furniture</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <span className='Login_button'>Login</span>
      </header>
    </div>
  )
}
