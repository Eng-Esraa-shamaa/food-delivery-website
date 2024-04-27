import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
        const {cartItems, food_list, removeFromCart, getTotalcartAmount, url } = useContext(StoreContext)
        const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
        <br/>
        <hr/>
              <div>
                {food_list.map((item, index) => {
                  if (cartItems[item._id] > 0) {
                    return (
                      <div className="cart-items-title cart-items-item" key={index}>
                        <img src={url +'/images/'+item.image} alt={item.title} />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>${item.price * cartItems[item._id]}</p>
                        <p className="cross" onClick={() => removeFromCart(item._id)}>
                          X
                        </p>
                      </div>
                    );
                  }
                })}
                </div>
                <hr />
                <div className="cart-bottom">
                  <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div className="cart-total-details">
                      <p>Total</p>
                      <p>${getTotalcartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                      <p>Delivery Fees</p>
                      <p>${getTotalcartAmount()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                      <p>total</p>
                      <p>${getTotalcartAmount()===0?0: getTotalcartAmount() + 2}</p>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                  </div>
                 {/*  <div className='cart-promo-code'>
                    <div>
                      <p>If you have a promocode paste it here.</p>
                      <div className='promocode-input'>
                        <input type='text' placeholder='Promo Code'/>
                        <button>Apply</button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
  )};
export default Cart