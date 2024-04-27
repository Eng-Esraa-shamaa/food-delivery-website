import React from 'react'
import './Orders.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Orders = ({url}) => {
  const [orders, setOrders] = React.useState([]);

  //fetch all order to admin
  const fetchAllOrders = async () => {
    const response = await axios.get(url+'/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  //update order status handler
  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+'/api/order/status', {orderId, status: event.target.value});
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchAllOrders();
    } else {
      toast.error(response.data.message);
    }
  };

  React.useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length-1) {
                    return item.name + " x" + item.quantity + '.';
                  } else {
                    return item.name + " x" + item.quantity +  ', ';
                  }
                })}
              </p>
              <p className='order-item-name'>
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ', ' }</p> 
                <p> {order.address.city + ', ' + order.address.state + ', ' + order.address.country + ', ' + order.address.zipCode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone }</p>
            </div>
            <p>items : {order.items.length}</p>
            <p> $ {order.amount}</p>
            <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} >
              <option value="Order Processing">Order Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders;
