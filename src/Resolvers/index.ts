import UserResolvers  from './UserResolvers.js';
// const userResolvers = require('./UserResolvers');

const resolvers = {
    Query: {
        ...UserResolvers.Query,
        
    },
    Mutation: {
        ...UserResolvers.Mutation,
    }
};

export default resolvers;
// module.exports = resolvers;