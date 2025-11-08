import User from "./../Models/User.js";
import {Types} from "mongoose";

async function getUserById(userId: string) {
    try {
        console.log('Searching for user with ID:', userId);
        
        // Check if any users exist
        const userCount = await User.countDocuments();
        console.log('Total users in database:', userCount);
        
        // Get all users to see what IDs exist
        const allUsers = await User.find({}, '_id firstName lastName');
        console.log('All users:', allUsers);
        
        const user = await User.findById(userId);
        console.log('Found user:', user);
        
        if (!user) {
            return null;
        }
        return user;
    } catch (error) {
        console.error('Error in getUserById:', error);
        throw new Error(`Error fetching user: ${error.message}`);
    }
}

export default  {
    getUserById
};