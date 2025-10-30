import {Types, Schema, model} from 'mongoose';

const userSchema = new Schema({
    role: {type: String, enum: ['admin', 'user'], default: 'user'},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String},
    bio: {type: String},
    reseauxSociaux: [{
        platform: {type: String},
        link: {type: String}
    }]
}, {collection: 'users', timestamps: true});

const User = model("User", userSchema);
export default User;