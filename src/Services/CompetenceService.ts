import Competence from "../Models/Competence.js";

async function createCompetence(competenceData: any) {
    try {
        const newCompetence = new Competence(competenceData);
        const savedCompetence = await newCompetence.save();
        return savedCompetence;
    } catch (error) {
        throw new Error(`Failed to create competence: ${error.message}`);
    }
}

async function updateCompetence(competenceId: string, updateData: any) {
    try {
        const updatedCompetence = await Competence.findByIdAndUpdate(
            competenceId,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedCompetence) {
            throw new Error('Competence not found');
        }

        return updatedCompetence;
    } catch (error) {
        throw new Error(`Failed to update competence: ${error.message}`);
    }
}

async function deleteCompetence(competenceId: string) {
    try {
        const deletedCompetence = await Competence.findByIdAndDelete(competenceId);
        
        if (!deletedCompetence) {
            throw new Error('Competence not found');
        }

        return true;
    } catch (error) {
        throw new Error(`Failed to delete competence: ${error.message}`);
    }
}

async function getCompetenceById(competenceId: string) {
    try {
        const competence = await Competence.findById(competenceId);
        if (!competence) {
            throw new Error('Competence not found');
        }
        return competence;
    } catch (error) {
        throw new Error(`Error fetching competence: ${error.message}`);
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
    createCompetence,
    updateCompetence,
    deleteCompetence,
    getCompetenceById,
    getAllCompetences
};
