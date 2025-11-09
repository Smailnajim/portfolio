import CompetenceService from "../Services/CompetenceService.js";
import { requireAdmin } from "../utils/auth.js";

const CompetenceResolver = {
    Query: {
        getCompetence: async (_: unknown, {id}: { id: string }) => {
            try {
                return await CompetenceService.getCompetenceById(id);
            } catch (error) {
                throw new Error(`Failed to get competence: ${error.message}`);
            }
        },
        getCompetences: async (_: unknown, {userId}: { userId: string }) => {
            try {
                return await CompetenceService.getAllCompetences(userId);
            } catch (error) {
                throw new Error(`Failed to get competences: ${error.message}`);
            }
        }
    },
    Mutation: {
        createCompetence: async (_: unknown, { input }: { input: any }, { user }: any) => {
            requireAdmin(user);
            return await CompetenceService.createCompetence(input);
        },
        updateCompetence: async (_: unknown, { id, input }: { id: string, input: any }, { user }: any) => {
            requireAdmin(user);
            return await CompetenceService.updateCompetence(id, input);
        },
        deleteCompetence: async (_: unknown, { id }: { id: string }, { user }: any) => {
            requireAdmin(user);
            return await CompetenceService.deleteCompetence(id);
        }
    }
}

export default CompetenceResolver;
