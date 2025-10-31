import UserService from './../Services/UserService.js';
// const UserService = require('./../Services/UserService');
// import type User from '../Types/User';
const UserResolvers = {
    Query: {
        getUser: async (_: unknown, id: string) => {
            return UserService.getUserById(id);
        }
    },
    Mutation: {
    }
};

export default UserResolvers;
// module.exports = UserResolvers;