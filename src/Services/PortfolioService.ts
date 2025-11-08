import User from "../Models/User.js";
import Competence from "../Models/Competence.js";
import Education from "../Models/Eduction.js";
import Experience from "../Models/Experience.js";
import Project from "../Models/Project.js";

async function getPortfolio(userId: string) {

    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const competences = await Competence.find();
    
    
    const educations = await Education.find();
    
    const experiences = await Experience.find();

    const projects = await Project.find();
    console.log('experiences--------\n', experiences);

    return {
        user,
        competences: competences, // TODO: Add when Competence model is ready
        education: educations,   // TODO: Add when Education model is ready
        experiences: experiences, // TODO: Add when Experience model is ready
        projects     // TODO: Add when Project model is ready
    };

}
async function getProfil(userId: string) {
    const user = await User.findById(userId);
    
    console.log('user--------\n', user);
    if (!user) throw new Error(`there is no user has id: ${userId}`);
    return user;
}
export default {
    getPortfolio,
    getProfil
};