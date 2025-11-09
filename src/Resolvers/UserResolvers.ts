import UserService from '../Services/UserService.js';
import AuthService from '../Services/AuthService.js';
import { requireAdmin } from '../utils/auth.js';

const UserResolvers = {
    Query: {
    },
    Mutation: {
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
        },
        updateProfil: async (_: unknown, { userId, input }: { userId: string, input: any }, { user }: any) => {
            requireAdmin(user);
            return await UserService.updateProfil(userId, input);
        }
    }
};

export default UserResolvers;
// module.exports = UserResolvers;