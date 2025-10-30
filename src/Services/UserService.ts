import User from "./../Models/User.js";

function getUserById(userId: string) {
    const user = User.findById(userId).exec();
    console.log("Fetched User:", user);
}

export default {
    getUserById
};