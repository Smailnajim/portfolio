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
        getProjets: async (_: unknown, {userId}: { userId: string }) => {
            try {
                return await PortfolioService.getAllProjects(userId);
            } catch (error) {
                throw new Error(`Failed to get projects: ${error.message}`);
            }
        },
        getCompetences: async (_: unknown, {userId}: { userId: string }) => {
            try {
                console.log('eee', userId);
                return await PortfolioService.getAllCompetences(userId);
            } catch (error) {
                throw new Error(`Failed to get competences: ${error.message}`);
            }
        }
    },
    Mutation: {
        
    }
};
export default PortfolioResolver;