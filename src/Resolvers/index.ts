import UserResolvers from './UserResolvers.js';
import PortfolioResolver from './PortfolioResolver.js';

const resolvers = {
    Query: {
        ...UserResolvers.Query,
        ...PortfolioResolver.Query
    },
    Mutation: {
        ...UserResolvers.Mutation,
        ...PortfolioResolver.Mutation
    }
};

export default resolvers;
// module.exports = resolvers;