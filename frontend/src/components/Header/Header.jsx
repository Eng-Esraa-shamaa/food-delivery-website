import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order Your Favourite Meal from Here</h2>
            <p>
                Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
            </p>
            <Link to='/menu'><button>View Menu</button></Link>
        </div>
    </div>
  )
}

export default Header