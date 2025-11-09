import CompetenceService from "../Services/CompetenceService.js";

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
        createCompetence: async (_: unknown, { input }: { input: any }) => {
            try {
                return await CompetenceService.createCompetence(input);
            } catch (error) {
                throw new Error(`Failed to create competence: ${error.message}`);
            }
        },
        updateCompetence: async (_: unknown, { id, input }: { id: string, input: any }) => {
            try {
                return await CompetenceService.updateCompetence(id, input);
            } catch (error) {
                throw new Error(`Failed to update competence: ${error.message}`);
            }
        },
        deleteCompetence: async (_: unknown, { id }: { id: string }) => {
            try {
                return await CompetenceService.deleteCompetence(id);
            } catch (error) {
                throw new Error(`Failed to delete competence: ${error.message}`);
            }
        }
    }
}

export default CompetenceResolver;
