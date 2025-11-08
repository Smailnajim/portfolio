import {Types, model, Schema} from 'mongoose';
// const {Types, model, Schema} = require('mongoose');

const competenceSchema = new Schema({
    userId:[{
        type: Types.ObjectId, 
        ref: 'User', 
        required: true
    }],
    name: {type: String, required: true},
    level: {type: String, enum: ['beginner', 'intermediate', 'advanced', 'expert'], required: true}
}, {collection: 'competences', timestamps: true});

const Competence = model("Competence", competenceSchema);
export default Competence;
// module.exports = Competence;