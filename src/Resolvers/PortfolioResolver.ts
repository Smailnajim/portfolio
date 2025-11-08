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
        }
    },
    Mutation: {
        
    }
};
export default PortfolioResolver;