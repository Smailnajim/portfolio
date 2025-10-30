import {Types, Schema, model} from "mongoose";

const projectSchema = new Schema({
    CompetenceId: {type: Types.ObjectId, ref: 'Competence', required: true},
    title: {type: String, required: true},
    demo: {type: String},
    code: {
        platform: {type: String},
        link: {type: String}
    },
    description: {type: String, required: true}
}, {collection: 'projects', timestamps: true});

const Project = model("Project", projectSchema);
export default Project;