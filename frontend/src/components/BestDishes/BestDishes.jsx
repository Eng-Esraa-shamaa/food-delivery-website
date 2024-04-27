import React from 'react'
import './BestDishes.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const BestDishes = () => {
    const {food_list} = React.useContext(StoreContext);

  return (
    <div className='Best-dishes'>
        <h1>Our Best Seller</h1>
        <div className='best-dishes-container'>
            <div className='best-dish'>
                <img src={assets.menu_1} alt="" />
                <p>Vegeterian Salad</p>
                
            </div>
            <div className='best-dish'>
                <img src={assets.menu_2} alt="" />
                <p>Meat Shawerma Rolls</p>

            </div>
            <div className='best-dish'>
                <img src={assets.menu_3} alt="" />
                <p>Blueberry Waffle</p>
            </div>
            <div className='best-dish'>
                <img src={assets.menu_4} alt="" />
                <p>Club Sandwich</p>
            </div>
        </div>
        <div className='view-menu'>
            <Link to='/menu'> View Menu</Link> 
        </div>
    </div>
  )
}

export default BestDishes;