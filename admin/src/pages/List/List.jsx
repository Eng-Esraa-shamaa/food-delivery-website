import React from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'

const List = ({url}) => {

  const [List, setList] = useState([]);
  //const url = 'http://localhost:4000';

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/List`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.foods);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Server Error');
    }
  };

  const removeFood = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: id  });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Server Error');
    }
  }

  React.useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>ALL Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          List.map((item, index) => (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default List