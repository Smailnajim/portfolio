import {Types, Schema, model} from "mongoose";
// const {Types, model, Schema} = require('mongoose');

const experienceSchema = new Schema({
    competenceId:[{
        type: Types.ObjectId, 
        ref: 'Competence', 
        required: true
    }],
    company: {type: String, required: true},
    position: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date},
    enCoure: {type: Boolean, default: true},
    description: {type: String}
}, {collection: 'experiences', timestamps: true});

const Experience = model("Experience", experienceSchema);
export default Experience;
// module.exports = model("Experience", experienceSchema);