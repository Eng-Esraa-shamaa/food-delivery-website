import userModel from "../models/userModel.js";

//add items to user cart
export const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId }); // we will get it from auth middleware .. we send the token and the middleware convert this token into usrId
        let cartData = await userData.cartData;
        //when user add to cart , he will send the token and by using that we send the food id
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData }); // the cartData will be updated in the user model in the database
        res.json({ success: true, message: "Item added to cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//remove from user cart
export const removeFromCart = async (req, res) => {
   try {
    let userData = await userModel.findById(req.body.userId); //get user data
    let cartData = await userData.cartData; // get cartdata in user data in database
    if(cartData[req.body.itemId] > 0) {
        cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, {cartData}); //update the cart data in the database
    res.json({ success: true, message: "Item removed from cart" });
   } catch (error) {
         console.log(error);
         res.json({ success: false, message: error.message });
   }
}

//fetch user cart data
export const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId); //get user data
        let cartData = await userData.cartData; //get cart data in user data in database
        res.json({ success: true, cartData }); //return the cart data
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}