import UserService from '../Services/UserService.js';
// const UserService = require('./../Services/UserService');
// import type User from '../Types/User';
const UserResolvers = {
    Query: {
        // getUser: async (_: unknown, { id }: { id: string }) => {
        //     try {
        //         return await UserService.getUserById(id);
        //     } catch (error) {
        //         throw new Error(`Failed to get user: ${error.message}`);
        //     }
        // }
    },
    Mutation: {
        // createUser: async (_: unknown, { input }: { input: any }) => {
        //     throw new Error('createUser not implemented yet');
        // }
    }
};

export default UserResolvers;
// module.exports = UserResolvers;