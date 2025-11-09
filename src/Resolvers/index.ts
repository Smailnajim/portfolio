import UserResolvers from './UserResolvers.js';
import PortfolioResolver from './PortfolioResolver.js';
import ProjectResolver from './ProjectResolver.js';
import CompetenceResolver from './CompetenceResolver.js';

const resolvers = {
    Query: {
        ...UserResolvers.Query,
        ...PortfolioResolver.Query,
        ...ProjectResolver.Query,
        ...CompetenceResolver.Query
    },
    Mutation: {
        ...UserResolvers.Mutation,
        ...PortfolioResolver.Mutation,
        ...ProjectResolver.Mutation,
        ...CompetenceResolver.Mutation
    }
};

export default resolvers;
// module.exports = resolvers;