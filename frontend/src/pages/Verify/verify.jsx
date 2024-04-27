import React from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = React.useContext(StoreContext);
    const navigate = useNavigate();

    //what happens after verifying payment
    const verifyPayment = async () => {
        const response = await axios.post(url + '/api/order/verify', {success, orderId});
        if (response.data.success= "true") {
            navigate('/myorders'); // when the payment verified the user will be navigated to myorders page
        }
        else {
            navigate('/'); // if payment not verified user will be navigated to home page
        }
    }
    React.useEffect(() => {
        verifyPayment();
    }, []);
  return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}

export default Verify