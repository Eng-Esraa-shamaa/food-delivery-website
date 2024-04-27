import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = React.useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Enjoy Our Different Dishes</h2>
        <div className='food-display-list'>
            {food_list.map((item, index) => {
                if(category === 'All' || item.category === category) {
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay