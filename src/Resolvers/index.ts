import UserResolvers from './UserResolvers.js';
import PortfolioResolver from './PortfolioResolver.js';
import ProjectResolver from './ProjectResolver.js';

const resolvers = {
    Query: {
        ...UserResolvers.Query,
        ...PortfolioResolver.Query,
        ...ProjectResolver.Query
    },
    Mutation: {
        ...UserResolvers.Mutation,
        ...PortfolioResolver.Mutation,
        ...ProjectResolver.Mutation
    }
};

export default resolvers;
// module.exports = resolvers;