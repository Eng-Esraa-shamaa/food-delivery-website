import { Mongoose } from "mongoose";
import { connect } from "mongoose";

export const connectDb = async () => {
    await connect('mongodb+srv://esraashamaa1:Esra21793@cluster.iqf0vro.mongodb.net/food-delivery-app').then(()=>{
        console.log('MongoDB is connected');
    })
}