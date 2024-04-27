import axios from "axios";
import { createContext, useEffect } from "react";
//import { food_list } from "../assets/assets";
import React from 'react';

export const StoreContext = createContext(null);


const StoreContextProvider = ({ children }) => {

    const[cartItems, setCartItems] = React.useState([]);
    const url = "http://localhost:4000"
   // const [token, setToken] = React.useState("");
   const [token, setToken] = React.useState(localStorage.getItem('token') || "");
   const [food_list, setFood_list] = React.useState([]);


    //addtocart functionlity
    const addToCart = async (itemId) => {
        try {
            if (!cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
            } else {
                setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            }
            //in case the user logged in and added items from cart
            if (token) {
                const response = await axios.post(url + '/api/cart/add', { itemId }, { headers: { token } });
                console.log(response.data); // Check response data for any useful information
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };
    
    //removefromcart functionality
    const removeFromCart = async(itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        //incase the user logged in and remov items from cart
        if(token){
            const response = await axios.post(url + '/api/cart/remove', {itemId}, {headers: {token}});
            console.log(response.data);
        }
    };
   
    
    

    const getTotalcartAmount = () => {
        let total = 0;
            
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemPrice = food_list.find((product) => product._id === item)?.price || 0;
                total += itemPrice * cartItems[item];
            }
        }
        return total;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + '/api/food/list');
        setFood_list(response.data.foods);
    }

    //loadCart data using token to be saved in front end
    const loadCartData = async(token)=> {
        const response = await axios.post(url + '/api/cart/get',{}, {headers: {token}});
        setCartItems(response.data.cartData);

    }
    
    React.useEffect(() => {
            async function loadData() {
                await fetchFoodList(); // fetch food list
                if(localStorage.getItem('token')){
                    setToken(localStorage.getItem('token')); // user will remain logged in even he reloads the page
                    loadCartData(localStorage.getItem('token')); // items added by user will remain in cart even he reloads the page
                }
            }
            loadData();
        }, []);
    
    React.useEffect(() => { console.log(cartItems); }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalcartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
        {children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;