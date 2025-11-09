import UserResolvers from './UserResolvers.js';
import PortfolioResolver from './PortfolioResolver.js';
import ProjectResolver from './ProjectResolver.js';
import CompetenceResolver from './CompetenceResolver.js';
import ExperienceResolver from './ExperienceResolver.js';

const resolvers = {
    Query: {
        ...UserResolvers.Query,
        ...PortfolioResolver.Query,
        ...ProjectResolver.Query,
        ...CompetenceResolver.Query,
        ...ExperienceResolver.Query
    },
    Mutation: {
        ...UserResolvers.Mutation,
        ...PortfolioResolver.Mutation,
        ...ProjectResolver.Mutation,
        ...CompetenceResolver.Mutation,
        ...ExperienceResolver.Mutation
    }
};

export default resolvers;
// module.exports = resolvers;