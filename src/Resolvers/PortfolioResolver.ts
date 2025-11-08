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
                const Portfolio = await PortfolioService.getProfil(userId);
                return {
                    status: true,
                    data: Portfolio
                }
            } catch (error) {
                return {
                    status: false,
                    error: error.message
                }
            }
        },
        getProjets: async () => {
            try {
                const projects = await PortfolioService.getAllProjects();
                return {
                    status: true,
                    data: projects
                }
            } catch (error) {
                return {
                    status: false,
                    error: error.message
                }
            }
        },
        getCompetences: async () => {
            try {
                const competences = await PortfolioService.getAllCompetences();
                return {
                    status: true,
                    data: competences
                }
            } catch (error) {
                return {
                    status: false,
                    error: error.message
                }
            }
        }
    },
    Mutation: {
        
    }
};
export default PortfolioResolver;