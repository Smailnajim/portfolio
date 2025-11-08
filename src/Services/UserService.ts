import User from "./../Models/User.js";
import {Types} from "mongoose";

async function getUserById(userId: string) {
    try {
        const user = await User.findById(userId);
        
        if (!user) {
            return null;
        }
        return user;
    } catch (error) {
        console.error('Error in getUserById:', error);
        throw new Error(`Error fetching user: ${error.message}`);
    }
}

// async function login(innput: string) {
//     try {
//         const user = await User.findById(userId);
        
//         if (!user) {
//             return null;
//         }
//         return user;
//     } catch (error) {
//         console.error('Error in getUserById:', error);
//         throw new Error(`Error fetching user: ${error.message}`);
//     }
// }

export default  {
    getUserById
};