import bcrypt from 'bcryptjs';
import User from '../Models/User.js';
import {generateToken} from '../utils/jwt.js'

const JWT_SECRET = process.env.JWT_SECRET || 'tttO';

async function login(email: string, password: string) {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid email or password');
        }

        const token = generateToken({
            userId: user._id, 
            email: user.email, 
            role: user.role 
        });

        return { accessToken: token };
    } catch (error) {
        throw new Error(`Login failed: ${error.message}`);
    }
}

async function register(userData:  {role: string, firstName: string, lastName: string, email: string, password: string }) {
    try {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('User already exists with this email');
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        
        const newUser = new User({
            ...userData,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const token = generateToken({
            userId: savedUser._id,
            email: savedUser.email,
            role: savedUser.role
        });
        

        return { accessToken: token };
    } catch (error) {
        throw new Error(`Registration failed: ${error.message}`);
    }
}

export default {
    login,
    register
};