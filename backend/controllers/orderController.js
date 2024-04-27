import orderModel from "../models/ordeModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";


//stripe payment gateway setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



//place user order for frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5174"; //frontend url
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        }); //create new order

        await newOrder.save(); //save the new order on database when user place order
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} }); //clear the cart data after user place order

        //stripe payment gateway setup
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));
        //add shipping charges
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Shipping",
                },
                unit_amount: 200,
            },
            quantity: 1,
        });
        //create stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });
        //return the session url
        res.json({ success: true, session_url: session.url});
    }
     catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
     }
   
}
//verify user order
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if(success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Order placed successfully"});

        }
        else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Order failed"});
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//user orders for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data:orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//listing orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//update order status for admin panel
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status});
        res.json({ success: true, message: "Order status updated"});
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus};