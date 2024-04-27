import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        description: '',
        category: 'Salad',
        price: ''
    });
    //const url ='http://localhost:4000';

    const onChangeHnadler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value});
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('price', Number(data.price));
    
        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                setData({
                    name: '',
                    description: '',
                    category: 'Salad',
                    price: ''
                });
                setImage(false);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Server Error');
        }
    };
    

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-image-upload flex-col">
                <p> Upload Image </p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area}/>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>

            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHnadler} value={data.name} type="text" name='name' placeholder='Type Here' required/>

            </div>

            <div className="add-product-description flex-col">
                <p> Product Description </p>
                <textarea onChange={onChangeHnadler} value={data.description} name='description' placeholder='Write Content Here' rows="6" required/>
            </div>


            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p> Product Category</p>
                    <select onChange={onChangeHnadler} value={data.category} name='category' required>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desert">Desert</option>
                        <option value=" Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noddles">Noddles</option>
                    </select>
                </div>
                <div className="price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHnadler} value={data.price} type="Number" name='price' placeholder='$20' required/>
                </div>
            </div>
            <button type='submit' className='add-button'>Add Product</button>
        </form>

    </div>
  )
}

export default Add