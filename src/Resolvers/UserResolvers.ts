import UserService from './../Services/UserService.js';
const UserResolvers = {
    Query: {
        getUser: async (_: unknown, userId: string): User => {
            return UserService.getUserById(userId);
        }
    },
    Mutation: {
    }
};

export default UserResolvers;