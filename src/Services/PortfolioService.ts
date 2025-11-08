import User from "../Models/User.js";
import Competence from "../Models/Competence.js";
import Education from "../Models/Eduction.js";
import Experience from "../Models/Experience.js";
import Project from "../Models/Project.js";

async function getPortfolio(userId: string) {

    try {
        
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
            competences: competences, 
            education: educations,   
            experiences: experiences, 
            projects
        };
    } catch (error) {
        throw new Error(error.message);
    }

}
async function getProfil(userId: string) {
    try {
        const user = await User.findById(userId);
        
        console.log('user--------\n', user);
        if (!user) throw new Error(`there is no user has id: ${userId}`);
        return user;
        
    } catch (error) {
        throw new Error(error.message);
    }
}
async function getAllProjects(userId: string) {
    try {
        const competences = await Competence.find({ userId: { $in: [userId] } });
        const competenceIds = competences.map(comp => comp._id.toString());
        const projects = await Project.find({ CompetenceId: { $in: competenceIds } });
        return projects;
    } catch (error) {
        throw new Error(`Error fetching projects: ${error.message}`);
    }
}

async function getAllCompetences(userId: string) {
    try {
        const competences = await Competence.find({ userId: { $in: [userId] } });
        return competences;
    } catch (error) {
        throw new Error(`Error fetching competences: ${error.message}`);
    }
}

export default {
    getPortfolio,
    getProfil,
    getAllProjects,
    getAllCompetences
};