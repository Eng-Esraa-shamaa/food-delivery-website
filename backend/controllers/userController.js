import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await userModel.findOne({ email: email });
        //checking if user exists
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        //comparing password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }
        const token = createToken(user._id);
        res.json({ success: true, token: token, user: { id: user._id, name: user.name, email: user.email } });

    } catch(error){
        console.log(error);
        res.json({success:false, message: error.message });
    }
}



//create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const exist = await userModel.findOne({ email: email });
        //checking if user already exists
        if (exist) {
            return res.json({ success: false, message: "User already exists" });
        }
        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }
        if (password.length < 6) {
            return res.json({ success: false, message: "Password must be at least 6 characters" });
        }
        //if (!validator.isStrongPassword(password)) {
          //  return res.json({ success: false, message: "Please Provide Strong Password" });
       // }

        //hashing password using bcrypt
       // const hashedPassword = await bcrypt.hash(password, 10);

       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);

        //creating new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token: token, user: { id: user._id, name: user.name, email: user.email } });

    }catch (error) {
        console.log(error);
        res.json({success:false, message: error.message });
    }
}

export { loginUser, registerUser };