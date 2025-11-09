import PortfolioService from "../Services/PortfolioService.js";

const PortfolioResolver = {
    Query: {
        getPortfolio: async (_: unknown, { userId }: { userId: string }) => {
            try {
                return await PortfolioService.getPortfolio(userId);
            } catch (error) {
                return {
                    status: false,
                    error: error.message
                }
            }
        },
        getProfil: async(_: unknown, {userId}: { userId: string }) => {
            try {
                console.log('userId\n',userId);
                return await PortfolioService.getProfil(userId);
            } catch (error) {
                throw new Error(`Failed to get profile: ${error.message}`);
            }
        },
        getCompetences: async (_: unknown, {userId}: { userId: string }) => {
            try {
                console.log('eee', userId);
                return await PortfolioService.getAllCompetences(userId);
            } catch (error) {
                throw new Error(`Failed to get competences: ${error.message}`);
            }
        },
        getExperiences: async (_: unknown, {userId}: { userId: string }) => {
            try {
                return await PortfolioService.getAllExperiences(userId);
            } catch (error) {
                throw new Error(`Failed to get experiences: ${error.message}`);
            }
        }
    },
    Mutation: {
        
    }
};
export default PortfolioResolver;