import ExperienceService from "../Services/ExperienceService.js";

const ExperienceResolver = {
    Query: {
        getExperience: async (_: unknown, {id}: { id: string }) => {
            return await ExperienceService.getExperienceById(id);
        },
        getExperiences: async (_: unknown, {userId}: { userId: string }) => {
            return await ExperienceService.getAllExperiences(userId);
        }
    },
    Mutation: {
        createExperience: async (_: unknown, { input }: { input: any }) => {
            return await ExperienceService.createExperience(input);
        },
        updateExperience: async (_: unknown, { id, input }: { id: string, input: any }) => {
            return await ExperienceService.updateExperience(id, input);
        },
        deleteExperience: async (_: unknown, { id }: { id: string }) => {
            return await ExperienceService.deleteExperience(id);
        }
    }
}

export default ExperienceResolver;
