import Competence from "../Models/Competence.js";
import Project from "../Models/Project.js";

async function createProject(projectData: any) {
    try {
        const newProject = new Project(projectData);
        const savedProject = await newProject.save();
        return savedProject;
    } catch (error) {
        throw new Error(`Failed to create project: ${error.message}`);
    }
}

async function updateProject(projectId: string, updateData: any) {
    try {
        console.log('Updating project ID:', projectId);
        console.log('Update data:', updateData);
//         id
// CompetenceId
// title
// description
        // Check if project exists first
        const existingProject = await Project.findById(projectId);
        console.log(existingProject)
        if (!existingProject) {
            throw new Error('Project not found');
        }
        
        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            updateData,
            { new: true, runValidators: true }
        );

        console.log('Updated project:', updatedProject);
        return updatedProject;
    } catch (error) {
        console.error('Update error:', error);
        throw new Error(`Failed to update project: ${error.message}`);
    }
}

async function deleteProject(projectId: string) {
    try {
        const deletedProject = await Project.findByIdAndDelete(projectId);
        
        if (!deletedProject) {
            throw new Error('Project not found');
        }

        return true;
    } catch (error) {
        throw new Error(`Failed to delete project: ${error.message}`);
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

export default {
    createProject,
    updateProject,
    getAllProjects,
    deleteProject
};