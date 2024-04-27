import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='food-delivery-about'>
        
        <div className='about-content'>
            <h1>About Us</h1>
            <p>Our mission is to provide the best food delivery service in the world.
                We believe in the power of food to bring people together and in the importance of providing
                an excellent service to our customers. We are committed to delivering the best food to
                your doorstep in the shortest time possible. We are constantly working to improve our 
                service and to provide you with the best food delivery experience possible. We hope
                    you enjoy our service and we look forward to serving you soon!</p>
        </div>
        <div className='about-img'>
            <img src={assets.food_delivery} alt="" />
        </div>
    </div>
  )
}

export default About