import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nam corrupti itaque voluptatum eveniet dolores reprehenderit maxime tempore quae, consequuntur voluptas debitis porro non reiciendis, dolorem nesciunt perferendis quasi culpa!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-226-56356</li>
                    <li>contact@CandleCattering.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            &copy; 2024@ CandleCattering. All rights reserved.
        </p>
    </div>
  )
}

export default Footer