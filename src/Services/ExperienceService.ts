import Experience from "../Models/Experience.js";

async function createExperience(experienceData: any) {
    const newExperience = new Experience(experienceData);
    return await newExperience.save();
}

async function updateExperience(experienceId: string, updateData: any) {
    const updatedExperience = await Experience.findByIdAndUpdate(
        experienceId,
        updateData,
        { new: true, runValidators: true }
    );
    if (!updatedExperience) {
        throw new Error('Experience not found');
    }
    return updatedExperience;
}

async function deleteExperience(experienceId: string) {
    const deletedExperience = await Experience.findByIdAndDelete(experienceId);
    if (!deletedExperience) {
        throw new Error('Experience not found');
    }
    return true;
}

async function getExperienceById(experienceId: string) {
    const experience = await Experience.findById(experienceId);
    if (!experience) {
        throw new Error('Experience not found');
    }
    return experience;
}

async function getAllExperiences(userId: string) {
    return await Experience.find({ userId: { $in: [userId] } });
}

export default {
    createExperience,
    updateExperience,
    deleteExperience,
    getExperienceById,
    getAllExperiences
};
