import ExperienceService from "../Services/ExperienceService.js";
import { requireAdmin } from "../utils/auth.js";

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
        createExperience: async (_: unknown, { input }: { input: any }, { user }: any) => {
            requireAdmin(user);
            return await ExperienceService.createExperience(input);
        },
        updateExperience: async (_: unknown, { id, input }: { id: string, input: any }, { user }: any) => {
            requireAdmin(user);
            return await ExperienceService.updateExperience(id, input);
        },
        deleteExperience: async (_: unknown, { id }: { id: string }, { user }: any) => {
            requireAdmin(user);
            return await ExperienceService.deleteExperience(id);
        }
    }
}

export default ExperienceResolver;
