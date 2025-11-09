import UserService from '../Services/UserService.js';
import AuthService from '../Services/AuthService.js';

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
        login: async (_: unknown, { input }: { input: { email: string; password: string } }) => {
            try {
                const { email, password } = input;
                return await AuthService.login(email, password);
            } catch (error) {
                throw new Error(`Failed to login: ${error.message}`);
            }
        },
        register: async (_: unknown, { input }: { input: {role: string, firstName: string, lastName: string, email: string, password: string }}) => {
            try {
                return await AuthService.register(input);
            } catch (error) {
                throw new Error(`Failed to register: ${error.message}`);
            }
        }
    }
};

export default UserResolvers;
// module.exports = UserResolvers;