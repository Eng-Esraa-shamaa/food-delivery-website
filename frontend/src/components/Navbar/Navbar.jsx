import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = React.useState('Home')
    const {getTotalcartAmount, token,setToken} = React.useContext(StoreContext)
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem('token');
      setToken("");
      navigate('/');
    }
/*<a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu ==='Menu'?"active":""}>Menu</a>*/
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='logo' className='logo' /></Link>
        <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu("Home")} className={menu ==='Home'?"active":""}>Home</Link>
                <Link to='/menu' onClick={()=>setMenu("Menu")} className={menu ==='Menu'?"active":""}>Menu</Link>
                
                <a href='#app-download' onClick={()=>setMenu("Mobile App")} className={menu ==='Mobile App'?"active":""}>Mobile App</a>
                <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu ==='Contact Us'?"active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
            
            <div className='navbar-search-icon'>
               <Link to='/cart'><img src={assets.basket_icon}></img></Link> 
                <div className={getTotalcartAmount()? "dot" : ""}></div>
            </div>
            {!token?
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
             :
            <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li onClick={() => {
                  navigate('/myorders');
                }}><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar