import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalcartAmount, token, food_list, cartItems,url} = React.useContext(StoreContext)
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''

  })
//save the order details
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };
  
  //place order functionality
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems =[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalcartAmount() + 2,
    }
    let response = await axios.post(url + '/api/order/place', orderData, {headers: {token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url); //send user to this url to complete payment
    }
    else {
      alert("Failed to place order");
      console.log(response.data);
    }
  }

  const navigate = useNavigate();
  React.useEffect(()=> {
    if(!token){
      navigate('/cart');
    } else if(getTotalcartAmount()===0){
      navigate('/cart');
    }
})

  return (
      <form className='place-order' onSubmit={placeOrder}>

        <div className="place-order-left">
          <p className="title">
            Delivery Information
          </p>
          <div className="multi-fields">
            <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' required />
            <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' required/>
          </div>

          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address required'/>
          <input name='street' onChange={onChangeHandler} value={data.street}  type="text" placeholder='Street' required/>

          <div className="multi-fields">
            <input name='city' onChange={onChangeHandler} value={data.city}  type="text" placeholder='City' required />
            <input name='state' onChange={onChangeHandler} value={data.state}  type="text" placeholder='State' required/>
          </div>

          <div className="multi-fields">
            <input name='zipCode' onChange={onChangeHandler} value={data.zipCode}  type="text" placeholder='ZipCode' required />
            <input name='country' onChange={onChangeHandler} value={data.country}  type="text" placeholder='Country' required/>
          </div>
          <input name='phone' onChange={onChangeHandler} value={data.phone}  type="text" placeholder='Phone Number' required/>

        </div>


        <div className="place-order-right">

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
                    <button type='submit' >PROCEED TO PAYMENT</button>
                  </div>

        </div>
      </form>
  
  )
}

export default PlaceOrder