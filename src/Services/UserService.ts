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


async function updateProfil(userId: string, updateData: any) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            throw new Error('User not found');
        }

        return updatedUser;
    } catch (error) {
        throw new Error(`Profile update failed: ${error.message}`);
    }
}


export default  {
    getUserById,
    updateProfil
};