import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import About from '../../components/About/About'
import BestDishes from '../../components/BestDishes/BestDishes'

const Home = () => {
    const[category, setCategory] = React.useState('All');


  return (
    <div>
        <Header />
        <About />
        <BestDishes />
        <AppDownload />
    </div>
  )
}
/*
<ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>*/
export default Home