import {model, Schema, Types} from "mongoose";
// const {Types, model, Schema} = require('mongoose');

const educationSchema = new Schema({
    // userId: {type: Types.ObjectId, ref: 'User', required: true},
    institution: {type: String, required: true},
    degree: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date},
    description: {type: String}
}, {collection: 'educations', timestamps: true});

const Education = model("Education", educationSchema);
export default Education;
// module.exports = Education;