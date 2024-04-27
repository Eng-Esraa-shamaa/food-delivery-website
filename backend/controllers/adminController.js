// adminController.js
import jwt from "jsonwebtoken";

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the provided email matches the admin email
        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ message: "Unauthorized. Invalid admin credentials." });
        }

        // Check if the provided password matches the admin password
        if (password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ message: "Unauthorized. Invalid admin credentials." });
        }

        // Create a token for the admin
        const token = jwt.sign({ email: process.env.ADMIN_EMAIL, role: "admin" }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error." });
    }
};

export { loginAdmin };
