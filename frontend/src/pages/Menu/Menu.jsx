import React from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload';

const Menu = () => {
    const[category, setCategory] = React.useState('All');

  return (
    <div>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/> 
        <AppDownload /> 
    </div>
  )
}

export default Menu