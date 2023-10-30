import React from 'react'
import './Header.css'
import cat from "../assets/image.png"

const Header = () => {
  return (
    <nav className='nav'>
      <img src={cat} />
    </nav>
  )
}

export default Header