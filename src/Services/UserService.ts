import User from "./../Models/User.js";
import {Types} from "mongoose";

function getUserById(userId: string) {
    const user = User.findById(new Types.ObjectId(userId));
    console.log("Fetched User:", user);
}

export default  {
    getUserById
};
// module.exports = {
//     getUserById
// };